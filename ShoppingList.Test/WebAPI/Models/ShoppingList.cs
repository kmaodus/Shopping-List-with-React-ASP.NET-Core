using System.Collections.Generic;

namespace WebAPI.Models
{
    public class ShoppingList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<ShoppingListProduct> ShoppingListProducts { get; set; }
    }
}
