using FahrpreisRechner.Core.Dtos;
using FahrpreisRechner.Core.Entities;

namespace FahrpreisRechner.Core.Services;
public interface IUserService
{
  public void Create(RegisterDto registerDto);

  public User GetById(Guid id);

  public User GetByEmail(string email);
}
