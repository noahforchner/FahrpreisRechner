namespace FahrpreisRechner.Core.Dtos;
public class RouteDto
{
  public string Origin { get; set; }

  public string Destination { get; set; }

  public string DistanceText { get; set; }

  public string DurationText { get; set; }

  public int DistanceInMeters { get; set; }

  public int DurationInSeconds { get; set; }
}
