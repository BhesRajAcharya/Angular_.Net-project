using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace Backend.Data
{
    public class FullstackDbContext:DbContext
    {
        public FullstackDbContext(DbContextOptions<FullstackDbContext> options) : base(options) { }

        public DbSet<Employee> employee{ get; set; }
    }
}
