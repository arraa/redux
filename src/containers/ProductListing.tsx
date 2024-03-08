import { useDispatch, useSelector } from "react-redux";
import { Product, setProducts } from "../redux/actions/producActions";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import axios from "axios";

const ProductListing = () => {
    const products = useSelector((state: Product) => state);
    const dispacth = useDispatch();
    
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response)
        dispacth(setProducts(response.data));
      } catch (error) {
        console.error('API request error', error);
      }
    }
    console.log(products)
    useEffect(() => {
        fetchProduct();
    }, [])
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
};

export default ProductListing;
