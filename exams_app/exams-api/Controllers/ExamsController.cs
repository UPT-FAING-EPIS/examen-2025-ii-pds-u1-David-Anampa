using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExamsApi.Data;
using ExamsApi.Models;

namespace ExamsApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExamsController : ControllerBase
    {
        private readonly ExamsDbContext _db;
        public ExamsController(ExamsDbContext db) => _db = db;

        [HttpPost]
        public async Task<IActionResult> Create(Exam exam)
        {
            _db.Exams.Add(exam);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = exam.Id }, exam);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var list = await _db.Exams.Select(e => new { e.Id, e.Title, e.DurationMinutes }).ToListAsync();
            return Ok(list);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var exam = await _db.Exams
                .Include(e => e.Questions)
                    .ThenInclude(q => q.Options)
                .FirstOrDefaultAsync(e => e.Id == id);

            if (exam == null) return NotFound();
            return Ok(exam);
        }
    }
}
