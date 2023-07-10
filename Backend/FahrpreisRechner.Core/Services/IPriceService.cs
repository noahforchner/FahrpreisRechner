using FahrpreisRechner.Core.Dtos;

namespace FahrpreisRechner.Core.Services;
public interface IPriceService
{
  string CalculatePrice(PriceDto priceDto);
}
