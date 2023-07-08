using FahrpreisRechner.Core.Dtos;
using FahrpreisRechner.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace FahrpreisRechner.API.Controllers;

[ApiController]
[Route("api/v1/price")]
public class PriceController : Controller
{
  private readonly IPriceService _priceService;

  public PriceController(IPriceService priceService)
  {
    _priceService = priceService;
  }

  [HttpPost]
  public ActionResult<string> CalculatePrice(PriceDto priceDto)
  {
    if (priceDto == null)
    {
      throw new ArgumentNullException(nameof(priceDto));
    }
    var price = _priceService.CalculatePrice(priceDto);

    return Ok(price);
  }
}
