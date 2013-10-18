using System.ComponentModel.DataAnnotations;

namespace AspNetStack.Models
{
    public class Contact
    {
        public int ContactId { get; set; }
        [Required, StringLength(50)]
        public string FirstName { get; set; }
        [Required, StringLength(50)]
        public string LastName { get; set; }
        [Required, StringLength(50)]
        public string Email { get; set; }
    }
}