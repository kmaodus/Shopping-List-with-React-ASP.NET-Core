using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebAPI.Models;

namespace WebAPI.Configurations
{
    public class ShoppingListProductConfiguration : IEntityTypeConfiguration<ShoppingListProduct>
    {
        public void Configure(EntityTypeBuilder<ShoppingListProduct> builder)
        {
            builder.ToTable(nameof(ShoppingListProduct));

            builder.HasKey(k => new { k.ShoppingListId, k.ProductId });

            builder.HasOne<ShoppingList>()
                .WithMany(s => s.ShoppingListProducts)
                .HasForeignKey(sp => sp.ShoppingListId);

            builder.HasOne<Product>()
                .WithMany(p => p.ShoppingListProducts)
                .HasForeignKey(sp => sp.ProductId);

        }
    }
}
