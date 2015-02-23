using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace BASTAWorkshopLive
{
    public class ProductsController : ApiController
    {
        public List<ProductDto> GetProducts()
        {
            return new List<ProductDto>(){new ProductDto
            {
                Id = 42,
                Title = "Hitchhiker..."
            }};
        }
    }
}
