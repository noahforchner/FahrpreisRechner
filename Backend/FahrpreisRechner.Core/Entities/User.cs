﻿using System.Text.Json.Serialization;

namespace FahrpreisRechner.Core.Entities;

public class User
{
  public Guid Id { get; set; }

  public string FirstName { get; set; }

  public string LastName { get; set; }

  public string Email { get; set; }

  [JsonIgnore]
  public string PasswordHash { get; set; }

  [JsonIgnore]
  public ICollection<Route> Routes { get; } = new List<Route>();
}
