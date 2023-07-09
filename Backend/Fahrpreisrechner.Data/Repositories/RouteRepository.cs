using FahrpreisRechner.Core.Entities;
using FahrpreisRechner.Core.Exceptions;
using FahrpreisRechner.Core.Repositories;

namespace Fahrpreisrechner.Data.Repositories;

public class RouteRepository : IRouteRepository
{
  private readonly UserContext _context;

  public RouteRepository(UserContext context)
  {
    _context = context;
  }

  public Route Get(Guid id)
  {
    var route = _context.Routes.Find(id);

    if (route is null)
    {
      throw new RouteNotFoundException();
    }
    return route;
  }

  public IEnumerable<Route> GetAll()
  {
    return _context.Routes;
  }

  public void Create(Route route)
  {
    _context.Routes.Add(route);
  }

  public void Delete(Guid id)
  {
    var route = _context.Routes.Find(id);
    if (route is not null)
    {
      _context.Routes.Remove(route);
    }
  }
}