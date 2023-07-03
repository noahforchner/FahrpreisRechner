using System.IdentityModel.Tokens.Jwt;

namespace FahrpreisRechner.Core.Services;
public interface IJwtService
{
  public string Generate(Guid id);

  public JwtSecurityToken Verify(string jwt);
}
