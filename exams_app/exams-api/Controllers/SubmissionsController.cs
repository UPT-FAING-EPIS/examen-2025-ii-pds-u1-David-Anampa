using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExamsApi.Data;
using ExamsApi.Models;

namespace ExamsApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubmissionsController : ControllerBase
    {
        private readonly ExamsDbContext _db;
        public SubmissionsController(ExamsDbContext db) => _db = db;

        public class AnswerDto
        {
            public Guid QuestionId { get; set; }
            public Guid? SelectedOptionId { get; set; }
            public string GivenAnswer { get; set; }
        }

        public class SubmissionDto
        {
            public Guid ExamId { get; set; }
            public string UserId { get; set; }
            public List<AnswerDto> Answers { get; set; }
        }

        [HttpPost]
        public async Task<IActionResult> Submit(SubmissionDto dto)
        {
            var exam = await _db.Exams.Include(e => e.Questions).ThenInclude(q => q.Options)
                        .FirstOrDefaultAsync(e => e.Id == dto.ExamId);
            if (exam == null) return BadRequest("Exam not found");

            var submission = new Submission { ExamId = dto.ExamId, UserId = dto.UserId };
            _db.Submissions.Add(submission);
            await _db.SaveChangesAsync(); // necesario para obtener submission.Id

            int correct = 0;
            int autoGradable = 0;

            foreach (var a in dto.Answers)
            {
                var ans = new Answer { SubmissionId = submission.Id, QuestionId = a.QuestionId, SelectedOptionId = a.SelectedOptionId, GivenAnswer = a.GivenAnswer };
                _db.Answers.Add(ans);

                var q = exam.Questions.FirstOrDefault(x => x.Id == a.QuestionId);
                if (q != null && (q.Type == QuestionType.MultipleChoice || q.Type == QuestionType.TrueFalse))
                {
                    autoGradable++;
                    if (a.SelectedOptionId != null)
                    {
                        var opt = q.Options.FirstOrDefault(o => o.Id == a.SelectedOptionId);
                        if (opt != null && opt.IsCorrect) correct++;
                    }
                }
            }

            if (autoGradable > 0)
            {
                submission.Score = Math.Round((decimal)correct / autoGradable * 100m, 2);
            }
            else submission.Score = null;

            await _db.SaveChangesAsync();
            return Ok(new { submissionId = submission.Id, score = submission.Score });
        }
    }
}
