using FahrpreisRechner.Core.Dtos;
using FahrpreisRechner.Core.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;

namespace FahrpreisRechner.API.Controllers;


[ApiController]
[Route("api/v1/auth")]
public class AuthController : ControllerBase
{
  private readonly IJwtService _jwtService;
  private readonly IUserService _userService;

  public AuthController(IJwtService jwtService, IUserService userService)
  {
    _jwtService = jwtService;
    _userService = userService;
  }

  [HttpPost("register")]
  public ActionResult Register(RegisterDto registerDto)
  {
    if (registerDto == null)
    {
      throw new ArgumentNullException(nameof(registerDto));
    }
    _userService.Create(registerDto);

    return Ok();
  }

  [HttpPost("login")]
  public ActionResult Login(LoginDto loginDto)
  {
    var user = _userService.GetByEmail(loginDto.Email);

    if (user == null)
    {
      return BadRequest(Constants.INVALID_CREDENTIALS_MESSAGE);
    }

    if (!BCrypt.Net.BCrypt.Verify(loginDto.Password, user.PasswordHash))
    {
      return BadRequest(Constants.INVALID_CREDENTIALS_MESSAGE);
    }

    var token = _jwtService.Generate(user.Id);

    return Ok(token);
  }
}
