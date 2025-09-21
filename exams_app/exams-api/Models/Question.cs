using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ExamsApi.Models
{
    public enum QuestionType { MultipleChoice = 0, TrueFalse = 1, Open = 2 }

    public class Question
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public Guid ExamId { get; set; }
        [ForeignKey("ExamId")]
        public Exam Exam { get; set; }
        [Required]
        public string Text { get; set; }
        public QuestionType Type { get; set; }
        public List<Option> Options { get; set; } = new();
    }
}
