import { useSelector } from "react-redux";
import { productsReducer } from "../redux/reducers/productReducer";
import { combineReducers } from "redux";
import { Link } from "react-router-dom";

export const rootReducer = combineReducers({
    allProducts: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const ProductComponent = () => {
    const products = useSelector(
        (state: RootState) => state.allProducts.products
    );
    const renderList = products.map((product) => {
        const { id, image, title, price, category } = product;
        return (
            <div key={id} className="four wide column" style={{ marginTop: "30px" }}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt="" />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    return renderList;
};

export default ProductComponent;
