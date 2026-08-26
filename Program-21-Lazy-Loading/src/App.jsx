import { lazy, Suspense } from "react";

const Product = lazy(() => import("./components/Product"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));

function App() {
    return (
        <div>
            <h1>Lazy Loading Example</h1>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Product />
                <ProductDetails />
            </Suspense>
        </div>
    );
}

export default App;