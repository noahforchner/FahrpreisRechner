using FahrpreisRechner.Core.Dtos;

namespace FahrpreisRechner.Core.Services.Implementations;
public class PriceService : IPriceService
{
  const decimal PRICE_PER_MINUTE = 0.19M;
  public string CalculatePrice(PriceDto priceDto)
  {
    var durationInMinutes = priceDto.Duration / 60m;
    return String.Format("{0:0.00}", durationInMinutes * PRICE_PER_MINUTE + 1);
  }
}
