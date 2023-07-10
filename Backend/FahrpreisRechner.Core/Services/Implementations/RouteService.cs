using FahrpreisRechner.Core.Dtos;
using FahrpreisRechner.Core.Entities;
using FahrpreisRechner.Core.Exceptions;
using FahrpreisRechner.Core.Repositories;

namespace FahrpreisRechner.Core.Services.Implementations;

public class RouteService : IRouteService
{
  private readonly IRouteRepository _routeRepository;
  private readonly IUserRepository _userRepository;

  public RouteService(IRouteRepository routeRepository, IUserRepository userRepository)
  {
    _routeRepository = routeRepository;
    _userRepository = userRepository;
  }

  public Route Get(Guid id, Guid userId)
  {
    if (_userRepository.GetById(userId) == null)
    {
      throw new UserNotFoundException();
    }
    var route = _routeRepository.Get(id);
    if (route == null)
    {
      throw new RouteNotFoundException();
    }
    return route;
  }

  public IEnumerable<Route> GetAll(Guid id, Guid userId)
  {
    return _routeRepository.GetAll().Where(r => r.UserId == userId);
  }

  public void Create(RouteDto routeDto, Guid userId)
  {
    if (routeDto is null)
    {
      throw new ArgumentNullException(nameof(routeDto));
    }

    if (_userRepository.GetById(userId) == null)
    {
      throw new UserNotFoundException();
    }

    var guid = Guid.NewGuid();
    var route = new Route()
    {
      Id = guid,
      UserId = userId,
      Origin = routeDto.Origin,
      Destination = routeDto.Destination,
      DistanceText = routeDto.DistanceText,
      DurationText = routeDto.DurationText,
      DistanceInMeters = routeDto.DistanceInMeters,
      DurationInSeconds = routeDto.DurationInSeconds,
    };

    _routeRepository.Create(route);
  }

  public void Delete(Guid id, Guid userId)
  {
    var route = _routeRepository.Get(id);

    if (route == null)
    {
      throw new RouteNotFoundException();
    }
    if (_userRepository.GetById(userId) == null)
    {
      throw new UserNotFoundException();
    }

    _routeRepository.Delete(id);
  }
}