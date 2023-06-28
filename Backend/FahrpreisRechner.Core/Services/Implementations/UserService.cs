using FahrpreisRechner.Core.Dtos;
using FahrpreisRechner.Core.Entities;
using FahrpreisRechner.Core.Exceptions;
using FahrpreisRechner.Core.Repositories;

namespace FahrpreisRechner.Core.Services.Implementations;
public class UserService : IUserService
{
  private readonly IUserRepository _userRepository;

  public UserService(IUserRepository userRepository)
  {
    _userRepository = userRepository;
  }

  public void Create(RegisterDto registerDto)
  {
    var user = new User()
    {
      Id = Guid.NewGuid(),
      FirstName = registerDto.FirstName,
      LastName = registerDto.LastName,
      Email = registerDto.Email,
    };
    _userRepository.Create(user);
  }

  public User GetByEmail(string email)
  {
    var user = _userRepository.GetByEmail(email);
    if (user is null)
    {
      throw new UserNotFoundException();
    }
    return user;
  }

  public User GetById(Guid id)
  {
    var user = _userRepository.GetById(id);
    if (user is null)
    {
      throw new UserNotFoundException();
    }
    return user;
  }
}
