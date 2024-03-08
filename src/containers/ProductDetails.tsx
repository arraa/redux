import { useDispatch, useSelector } from "react-redux";
import { Product, removeSelectedProducts, selectedProducts } from "../redux/actions/producActions";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export interface ProductState {
    product: Product; 
}
const ProductDetails = () => {
    const product = useSelector((state: ProductState) => state.product);
    const { productId } = useParams();
    const { image, title, price, category, description } = product;
    console.log(productId);
    const dispacth = useDispatch();
    const fetchProduct = async () => {
        try {
            const response = await axios.get(
                `https://fakestoreapi.com/products/${productId}`
                );
                dispacth(selectedProducts(response.data));
            } catch (error) {
                console.error("API request error", error);
            }
        };
        
        useEffect(() => {
            if(productId && productId !== ''){
                fetchProduct();
            }
            return () => {
                dispacth(removeSelectedProducts())
            };
        }, [productId]);
        
        console.log(product.image)
    return (
        <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex={0}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    );
};

export default ProductDetails;
