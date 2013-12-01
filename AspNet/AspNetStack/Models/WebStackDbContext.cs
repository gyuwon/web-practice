using System.Data.Entity;

namespace AspNetStack.Models
{
    public class WebStackDbContext : DbContext
    {
        public WebStackDbContext()
            : base("DefaultConnection")
        {
        }

        public WebStackDbContext(string nameOrConnectionString)
            : base(nameOrConnectionString)
        {
        }

        public DbSet<Contact> Contacts { get; set; }
    }
}
