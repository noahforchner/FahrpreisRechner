using FahrpreisRechner.Core.Services;
using Microsoft.AspNetCore.Mvc;

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
  public ActionResult Register()
  {
    return Ok();
  }
}
