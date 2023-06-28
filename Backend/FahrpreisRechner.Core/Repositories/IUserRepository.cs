using FahrpreisRechner.Core.Entities;

namespace FahrpreisRechner.Core.Repositories;
public interface IUserRepository
{
  public void Create(User user);

  public User GetById(Guid id);
  
  public User GetByEmail(string email);
}
