using Microsoft.EntityFrameworkCore;
using ExamsApi.Models;

namespace ExamsApi.Data
{
    public class ExamsDbContext : DbContext
    {
        public ExamsDbContext(DbContextOptions<ExamsDbContext> options) : base(options) { }

        public DbSet<Exam> Exams { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Option> Options { get; set; }
        public DbSet<Submission> Submissions { get; set; }
        public DbSet<Answer> Answers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Exam>().HasMany(e => e.Questions).WithOne(q => q.Exam).HasForeignKey(q => q.ExamId);
            modelBuilder.Entity<Question>().HasMany(q => q.Options).WithOne(o => o.Question).HasForeignKey(o => o.QuestionId);
            modelBuilder.Entity<Submission>().HasMany(s => s.Answers).WithOne(a => a.Submission).HasForeignKey(a => a.SubmissionId);
        }
    }
}
