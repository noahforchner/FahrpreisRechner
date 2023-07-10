using FahrpreisRechner.Core.Dtos;
using FahrpreisRechner.Core.Services;
using FahrpreisRechner.Core.Services.Implementations;
using Microsoft.AspNetCore.Mvc;

namespace FahrpreisRechner.API.Controllers;

[ApiController]
[Route("api/v1/users/{userId:guid}/routes")]
public class RoutesController : Controller
{
  private readonly IRouteService _routeService;
  private readonly IUserService _userService;

  public RoutesController(IRouteService routeService, IUserService userService)
  {
    _routeService = routeService;
    _userService = userService;
  }

  [HttpPost]
  public ActionResult<string> Create([FromRoute] Guid userId, [FromBody] RouteDto routeDto)
  {
    if (routeDto == null)
    {
      throw new ArgumentNullException(nameof(routeDto));
    }
    if (_userService.GetById(userId) is null)
    {
      return NotFound();
    }

    _routeService.Create(routeDto, userId);

    return Ok();
  }
}
