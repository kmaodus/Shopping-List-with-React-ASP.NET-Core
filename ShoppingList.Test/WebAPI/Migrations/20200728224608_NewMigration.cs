using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class NewMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 100, nullable: true),
                    Quantity = table.Column<int>(nullable: false),
                    AddedToCart = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ShoppingList",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShoppingList", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ShoppingListProduct",
                columns: table => new
                {
                    ShoppingListId = table.Column<int>(nullable: false),
                    ProductId = table.Column<int>(nullable: false),
                    //ShoppingListId1 = table.Column<int>(nullable: true),
                    //ProductId1 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShoppingListProduct", x => new { x.ShoppingListId, x.ProductId });
                    table.ForeignKey(
                        name: "FK_ShoppingListProduct_ShoppingList_ShoppingListId",
                        column: x => x.ShoppingListId,
                        principalTable: "ShoppingList",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ShoppingListProduct_Product_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Product",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    //table.ForeignKey(
                    //    name: "FK_ShoppingListProduct_Product_ProductId1",
                    //    column: x => x.ProductId1,
                    //    principalTable: "Product",
                    //    principalColumn: "Id",
                    //    onDelete: ReferentialAction.Restrict);
                    
                    //table.ForeignKey(
                    //    name: "FK_ShoppingListProduct_ShoppingList_ShoppingListId1",
                    //    column: x => x.ShoppingListId1,
                    //    principalTable: "ShoppingList",
                    //    principalColumn: "Id",
                    //    onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ShoppingListProduct_ProductId",
                table: "ShoppingListProduct",
                column: "ProductId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_ShoppingListProduct_ProductId1",
            //    table: "ShoppingListProduct",
            //    column: "ProductId1");

            migrationBuilder.CreateIndex(
                name: "IX_ShoppingListProduct_ShoppingListId",
                table: "ShoppingListProduct",
                column: "ShoppingListId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ShoppingListProduct");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropTable(
                name: "ShoppingList");
        }
    }
}
