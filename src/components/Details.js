import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Buttons';

class Details extends Component {
    state = {}
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (<div className='container py-5'>
                        {/* title */}
                        <div className='row'>
                            <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* product info */}
                        <div className='row'>
                            {/* image */}
                            <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                <img src={img} className='img-fluid' alt='product' />
                            </div>
                            {/* details */}
                            <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                <h1>Model :  {title}</h1>
                                <h4 className='text-title text-uppercase text-muted mt-3 mb-2'> made by : <span className='text-uppercase'>{company}</span></h4>
                                <h4 className='text-blue'><strong>price : <span>$</span>{price}</strong></h4>
                                <p className='text-capitalize font-weight-bold mt-3 mb-0'>Some info about product:</p>
                                <p className='text-muted lead'>{info}</p>
                                {/* buttons */}
                                <Link to='/'><ButtonContainer>Back to products</ButtonContainer></Link>
                                {/* cart in the attribute is stlye refernce   */}
                                <ButtonContainer cart disabled={inCart ? true : false} onClick={() => { value.addToCart(id); value.openModal(id); }}>
                                    {inCart ? "in Cart" : "add to cart"}
                                </ButtonContainer>
                            </div>
                        </div>
                    </div>
                    )
                }
                }
            </ProductConsumer>
        );
    }
}

export default Details;