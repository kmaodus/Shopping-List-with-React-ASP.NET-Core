using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingListProductController : ControllerBase
    {
        private readonly ShoppingListDbContext _context;

        public ShoppingListProductController(ShoppingListDbContext context)
        {
            _context = context;
        }

        // GET: api/ShoppingListProduct
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShoppingListProduct>>> GetShoppingListProduct()
        {
            return await _context.ShoppingListProduct.ToListAsync();
        }

        // GET: api/ShoppingListProduct/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ShoppingListProduct>> GetShoppingListProduct(int id)
        {
            var shoppingListProduct = await _context.ShoppingListProduct.FindAsync(id);

            if (shoppingListProduct == null)
            {
                return NotFound();
            }

            return shoppingListProduct;
        }

        // PUT: api/ShoppingListProduct/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShoppingListProduct(int id, ShoppingListProduct shoppingListProduct)
        {
            if (id != shoppingListProduct.ShoppingListId)
            {
                return BadRequest();
            }

            _context.Entry(shoppingListProduct).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShoppingListProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ShoppingListProduct
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ShoppingListProduct>> PostShoppingListProduct(ShoppingListProduct shoppingListProduct)
        {
            _context.ShoppingListProduct.Add(shoppingListProduct);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ShoppingListProductExists(shoppingListProduct.ShoppingListId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetShoppingListProduct", new { id = shoppingListProduct.ShoppingListId }, shoppingListProduct);
        }

        // DELETE: api/ShoppingListProduct/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ShoppingListProduct>> DeleteShoppingListProduct(int id)
        {
            var shoppingListProduct = await _context.ShoppingListProduct.FindAsync(id);
            if (shoppingListProduct == null)
            {
                return NotFound();
            }

            _context.ShoppingListProduct.Remove(shoppingListProduct);
            await _context.SaveChangesAsync();

            return shoppingListProduct;
        }

        private bool ShoppingListProductExists(int id)
        {
            return _context.ShoppingListProduct.Any(e => e.ShoppingListId == id);
        }
    }
}
