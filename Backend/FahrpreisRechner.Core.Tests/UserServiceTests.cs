using FahrpreisRechner.Core.Dtos;
using FahrpreisRechner.Core.Entities;
using FahrpreisRechner.Core.Exceptions;
using FahrpreisRechner.Core.Repositories;
using FahrpreisRechner.Core.Services.Implementations;
using Moq;

namespace FahrpreisRechner.Core.Tests;

[TestClass]
public class UserServiceTests
{
  private Mock<IUserRepository> _userRepositoryMock;
  private UserService _userService;

  [TestInitialize]
  public void TestInitialize()
  {
    _userRepositoryMock = new Mock<IUserRepository>();
    _userService = new UserService(_userRepositoryMock.Object);
  }

  [TestMethod]
  public void Create_ValidRegisterDto_CallsUserRepositoryCreate()
  {
    // Arrange
    var registerDto = new RegisterDto
    {
      FirstName = "Max",
      LastName = "Mustermann",
      Email = "maxmustermann@test.com",
      Password = "password"
    };

    // Act
    _userService.Create(registerDto);

    // Assert
    _userRepositoryMock.Verify(repo => repo.Create(It.IsAny<User>()), Times.Once);
  }

  [TestMethod]
  public void GetByEmail_ExistingEmail_ReturnsUser()
  {
    // Arrange
    var email = "maxmustermann@test.com";
    var expectedUser = new User { Id = Guid.NewGuid(), Email = email };
    _userRepositoryMock.Setup(repo => repo.GetByEmail(email)).Returns(expectedUser);

    // Act
    var result = _userService.GetByEmail(email);

    // Assert
    Assert.AreEqual(expectedUser, result);
  }

  [TestMethod]
  public void GetByEmail_NonExistingEmail_ThrowsUserNotFoundException()
  {
    // Arrange
    var email = "nonexisting@test.com";
    _userRepositoryMock.Setup(repo => repo.GetByEmail(email)).Returns((User)null);

    // Act & Assert
    Assert.ThrowsException<UserNotFoundException>(() => _userService.GetByEmail(email));
  }

  [TestMethod]
  public void GetById_ExistingId_ReturnsUser()
  {
    // Arrange
    var id = Guid.NewGuid();
    var expectedUser = new User { Id = id };
    _userRepositoryMock.Setup(repo => repo.GetById(id)).Returns(expectedUser);

    // Act
    var result = _userService.GetById(id);

    // Assert
    Assert.AreEqual(expectedUser, result);
  }

  [TestMethod]
  public void GetById_NonExistingId_ThrowsUserNotFoundException()
  {
    // Arrange
    var id = Guid.NewGuid();
    _userRepositoryMock.Setup(repo => repo.GetById(id)).Returns((User)null);

    // Act & Assert
    Assert.ThrowsException<UserNotFoundException>(() => _userService.GetById(id));
  }
}