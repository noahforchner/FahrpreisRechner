using FahrpreisRechner.Core.Dtos;

namespace FahrpreisRechner.Core.Services;
public interface IPriceService
{
  public string CalculatePrice(PriceDto priceDto);
}
