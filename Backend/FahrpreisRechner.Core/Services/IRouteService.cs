using FahrpreisRechner.Core.Dtos;
using FahrpreisRechner.Core.Entities;

namespace FahrpreisRechner.Core.Services;
public interface IRouteService
{
  Route Get(Guid id, Guid userId);

  IEnumerable<Route> GetAll(Guid id, Guid userId);

  void Create(RouteDto routeDto, Guid userId);

  void Delete(Guid id, Guid userId);
}
