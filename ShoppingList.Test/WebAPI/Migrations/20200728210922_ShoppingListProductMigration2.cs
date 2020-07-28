using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class ShoppingListProductMigration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "ShoppingList",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Product",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

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
                    table.ForeignKey(
                        name: "FK_ShoppingListProduct_ShoppingList_ShoppingListId",
                        column: x => x.ShoppingListId,
                        principalTable: "ShoppingList",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
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

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "ShoppingList",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 100);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Product",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 100);
        }
    }
}
