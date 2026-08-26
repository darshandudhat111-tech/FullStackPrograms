import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Product = lazy(() => import("./components/Product"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/product">Product</Link>
                {" | "}
                <Link to="/product/101">Product 101</Link>
                {" | "}
                <Link to="/product/202">Product 202</Link>
            </nav>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;