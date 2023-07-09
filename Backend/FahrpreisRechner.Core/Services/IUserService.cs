using FahrpreisRechner.Core.Dtos;
using FahrpreisRechner.Core.Entities;

namespace FahrpreisRechner.Core.Services;
public interface IUserService
{
  void Create(RegisterDto registerDto);

  User GetById(Guid id);

  User GetByEmail(string email);
}
