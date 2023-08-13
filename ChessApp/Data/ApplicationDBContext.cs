using ChessApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ChessApp.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {

        }

        public DbSet<ChessLibrary> ChessLibrary { get; set; }
    }
}
