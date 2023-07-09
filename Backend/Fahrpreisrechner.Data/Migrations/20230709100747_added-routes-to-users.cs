using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Fahrpreisrechner.Data.Migrations
{
    /// <inheritdoc />
    public partial class addedroutestousers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Routes_UserId",
                table: "Routes",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Routes_Users_UserId",
                table: "Routes",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Routes_Users_UserId",
                table: "Routes");

            migrationBuilder.DropIndex(
                name: "IX_Routes_UserId",
                table: "Routes");
        }
    }
}
