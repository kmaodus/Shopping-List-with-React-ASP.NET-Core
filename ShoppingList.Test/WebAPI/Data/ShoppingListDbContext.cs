using Microsoft.EntityFrameworkCore;
using WebAPI.Configurations;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class ShoppingListDbContext : DbContext
    {
        public ShoppingListDbContext(DbContextOptions<ShoppingListDbContext> options)
            : base(options) { }

        public DbSet<ShoppingList> ShoppingList { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<ShoppingListProduct> ShoppingListProduct { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new ShoppingListConfiguration());
            modelBuilder.ApplyConfiguration(new ShoppingListProductConfiguration());
        }
    }
}
