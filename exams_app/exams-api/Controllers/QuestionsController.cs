using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExamsApi.Data;
using ExamsApi.Models;

namespace ExamsApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase
    {
        private readonly ExamsDbContext _db;
        public QuestionsController(ExamsDbContext db) => _db = db;

        [HttpPost]
        public async Task<IActionResult> Create(Question q)
        {
            _db.Questions.Add(q);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetByExam), new { examId = q.ExamId }, q);
        }

        [HttpGet("{examId}")]
        public async Task<IActionResult> GetByExam(Guid examId)
        {
            var questions = await _db.Questions
                .Where(q => q.ExamId == examId)
                .Include(q => q.Options)
                .ToListAsync();
            return Ok(questions);
        }
    }
}
