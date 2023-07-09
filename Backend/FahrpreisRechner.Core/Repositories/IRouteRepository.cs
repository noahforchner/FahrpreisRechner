using FahrpreisRechner.Core.Entities;

namespace FahrpreisRechner.Core.Repositories;
public interface IRouteRepository
{
  Route Get(Guid id);

  IEnumerable<Route> GetAll();

  void Create(Route route);

  void Delete(Guid id);
}
