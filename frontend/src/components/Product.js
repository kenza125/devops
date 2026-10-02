import { Card, CardText } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating';

const Product = ( {product} ) => {
    return (
        <Card className='my-3 p-3 rounded'>

            <Link to={`/product/${product._id}`}>
                <div className="ratio ratio-1x1">
                    <Card.Img 
                        src={product.image} 
                        variant='top'
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </Link>

            {/* <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link> */}

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title className='product-title' as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <CardText as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </CardText>
                <Card.Text as='h3'>${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product