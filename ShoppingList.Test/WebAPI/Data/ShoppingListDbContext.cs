using Microsoft.EntityFrameworkCore;

namespace WebAPI.Data
{
    public class ShoppingListDbContext : DbContext
    {
        public ShoppingListDbContext(DbContextOptions<ShoppingListDbContext> options)
            : base(options) { }


    }
}
