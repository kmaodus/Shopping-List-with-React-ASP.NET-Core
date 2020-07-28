namespace WebAPI.Models
{
    public class ShoppingListProduct
    {
        public int ShoppingListId { get; set; }
        public ShoppingList ShoppingList { get; set; }


        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}
