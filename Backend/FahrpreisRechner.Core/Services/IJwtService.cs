using System.IdentityModel.Tokens.Jwt;

namespace FahrpreisRechner.Core.Services;
public interface IJwtService
{
  string Generate(Guid id);

  JwtSecurityToken Verify(string jwt);
}
