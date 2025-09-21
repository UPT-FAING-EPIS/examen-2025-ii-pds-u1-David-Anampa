using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ExamsApi.Models
{
    public class Exam
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        [Required]
        public string Title { get; set; }
        public int DurationMinutes { get; set; } // tiempo en minutos
        public List<Question> Questions { get; set; } = new();
    }
}
