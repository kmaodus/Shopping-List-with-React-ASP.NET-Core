using System.Collections.Generic;

namespace WebAPI.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; } = 1;
        public bool AddedToCart { get; set; } = false;
        public ICollection<ShoppingListProduct> ShoppingListProducts { get; set; }
    }
}
