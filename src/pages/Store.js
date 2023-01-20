import {Row, Col} from 'react-bootstrap';
import {productsArray} from '../productStore'
import ProductCard from '../components/ProductCard';

function Store(){
    return(
        <>
            <h4>Welcome to the right place to buy Disposable Tableware items.</h4>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product,idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
    
            </Row>
        </>
    )
}

export default Store;