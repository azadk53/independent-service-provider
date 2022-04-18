import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, name, price, description } = service;
    return (
        <div className='mx-4 my-4'>
            <Card style={{
                width: '26rem',

            }}>
                <Card.Img className='mx-auto' style={{
                    width: '25rem',
                    height: '20rem'
                }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Link to='/checkout'>
                        <Button variant="primary">checkout</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;