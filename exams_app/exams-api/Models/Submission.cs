using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExamsApi.Models
{
    public class Submission
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public Guid ExamId { get; set; }
        [ForeignKey("ExamId")]
        public Exam Exam { get; set; }
        [Required]
        public string UserId { get; set; }
        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
        public decimal? Score { get; set; }
        public List<Answer> Answers { get; set; } = new();
    }
}
