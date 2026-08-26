import { useParams } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();

    return (
        <div>
            <h2>Product Information</h2>
            <h2>Product ID: {id}</h2>
            <p>This is detail page for product {id}</p>
        </div>
    );
}

export default ProductDetails;