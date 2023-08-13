using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChessApp.Migrations
{
    /// <inheritdoc />
    public partial class addChessLibraryTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ChessLibrary",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    name = table.Column<string>(type: "text", nullable: false),
                    lastuser = table.Column<Guid>(type: "uuid", nullable: true),
                    lastusername = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    createdtime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    modifiedtime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    inuse = table.Column<decimal>(type: "numeric", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChessLibrary", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChessLibrary");
        }
    }
}
