import {CartWidget} from "../CartWidget/CartWidget"
export function NavBar () {

    return (
        <nav>
              <h3 className="logo">ShopSport</h3>

              <div>
                <button>ZAPATILLAS</button>
                <button>BOTINES</button>
                <button>INDUMENTARIA</button>
                <button>ROPA</button>
                <button>ACCESORIOS</button>

              </div>
              <CartWidget />
        </nav>
      
    )
}

