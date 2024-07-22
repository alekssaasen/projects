import { useParams } from "react-router-dom";


function ProductPage () {
    
    const { id } = useParams();

    return(
        <p>{ id }</p>
    );

}

export default ProductPage;