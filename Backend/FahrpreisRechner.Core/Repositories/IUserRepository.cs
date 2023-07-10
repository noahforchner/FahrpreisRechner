using FahrpreisRechner.Core.Entities;

namespace FahrpreisRechner.Core.Repositories;
public interface IUserRepository
{
  void Create(User user);

  User GetById(Guid id);
  
  User GetByEmail(string email);
}
