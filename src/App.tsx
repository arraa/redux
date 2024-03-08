import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import "./index.css";
function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                {/* versi react-router 6 itu udh ga gaada switch lg jdi pake nya routes */}
                <Routes>
                    <Route path="/" Component={ProductListing} />
                    <Route
                        path="/product/:productId"
                        Component={ProductDetails}
                    />
                    <Route>Route not Found</Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
