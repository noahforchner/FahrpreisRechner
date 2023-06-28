using FahrpreisRechner.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Fahrpreisrechner.Data;
public class UserContext : DbContext
{
  public DbSet<User> Users { get; set; }

  public UserContext(DbContextOptions options) : base(options)
  {
  }

  protected override void OnModelCreating(ModelBuilder modelBuilder) 
  {
    modelBuilder.Entity<User>(user => user.HasIndex(user => user.Email).IsUnique());
  }
}
