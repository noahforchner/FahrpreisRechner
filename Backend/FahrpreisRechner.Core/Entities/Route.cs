namespace FahrpreisRechner.Core.Entities;
public class Route
{
  public Guid Id { get; set; }

  public Guid UserId { get; set; }

  public string Origin { get; set; }

  public string Destination { get; set; }

  public string DistanceText { get; set; }

  public string DurationText { get; set; }

  public int DistanceInMeters { get; set; }

  public int DurationInSeconds { get; set; }
}
