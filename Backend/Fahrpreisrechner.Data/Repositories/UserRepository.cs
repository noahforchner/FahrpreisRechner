using FahrpreisRechner.Core.Entities;
using FahrpreisRechner.Core.Exceptions;
using FahrpreisRechner.Core.Repositories;

namespace Fahrpreisrechner.Data.Repositories;
public class UserRepository : IUserRepository
{
  private readonly UserContext _context;

  public UserRepository(UserContext context)
  {
    _context = context;
  }

  public void Create(User user)
  {
    _context.Users.Add(user);
    _context.SaveChanges();
  }

  public User GetByEmail(string email)
  {
    var user = _context.Users.SingleOrDefault(u => u.Email == email);
    if (user == null)
    {
      throw new UserNotFoundException(); 
    }
    return user;
  }

  public User GetById(Guid id)
  {
    var user = _context.Users.Find(id);
    if (user == null)
    {
      throw new UserNotFoundException();
    }
    return user;
  }
}
