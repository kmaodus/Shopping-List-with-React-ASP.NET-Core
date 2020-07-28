using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class ShoppingListDbContext : DbContext
    {
        public ShoppingListDbContext(DbContextOptions<ShoppingListDbContext> options)
            : base(options) { }

        public DbSet<ShoppingList> ShoppingList { get; set; }
        public DbSet<Product> Product { get; set; }
    }
}
