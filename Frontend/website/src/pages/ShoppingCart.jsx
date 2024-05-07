import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../components/Navigation/Navigation";
import ProductTable from '../components/ProductTable/ProductTable';

function ShoppingCart() {
    return (
        <div className="ShoppingCart">
            <Navigation />
            <div className="product-table">
                <ProductTable />
            </div>
        </div>
    )
}

export default ShoppingCart;