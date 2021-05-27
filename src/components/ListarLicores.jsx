import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch.jsx'
import { Card, Button, Col, Row, Container } from 'react-bootstrap'

const ListarLicores = () => {

    const { loading, data } = useFetch(`https://api-licores.herokuapp.com/licores`);
    const productos = data;
    // console.log(productos);

    const datosCarrito = [];
    const guardarProducto = (e) => {
        e.preventDefault();
        console.log("boton funcionando")
        console.log(e);
    }

    const getElementProducts = document.querySelectorAll('.text-center')
    getElementProducts.forEach((eventos => {
        eventos.addEventListener("click", obtencionPrincipal)
    }))

    const obtencionPrincipal = (e) => {
        const botones = e.target;
        const cards = botones.closest('.item');
        const cardTitle = cards.querySelector('.card-title').textContent;
        const cardDescription = cards.querySelector('.card-description').textContent;
        const cardPrecio = cards.querySelector('.card-precio').textContent;
        const cardImg = cards.querySelector('.card-img').src;
        elementosCarrito(cardTitle, cardDescription, cardPrecio, cardImg)
    }

    const elementosCarrito = (cardTitle, cardDescription, cardPrecio, cardImg) => {

    }

    return (
        <React.Fragment>
            <Container>
                <Row>
                    {
                        !!productos && productos ?
                            productos.map((licor, index) => (
                                <Col xs={4} style={{ marginTop: '10px', marginBottom: '10px' }} key= {index}>
                                    <div className = 'item'>
                                        <Card className="text-center" style={{ height: '800px' }}>
                                            <Card.Img variant="top" src={licor.url} width='150px !important' height='200px !importan'  className = 'card-img'/>
                                            <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column ' }}>
                                                <Card.Title className = 'card-title'>{licor.nombre}</Card.Title>
                                                <Card.Text className = 'card-description'>
                                                    {licor.descripcion}
                                                </Card.Text>                          
                                                <Card.Text className = 'card-precio'>
                                                    {licor.precio} $
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="text-muted"><Button variant="primary" style={{ width: '300px' }} onClick = {() => {
                                                    datosCarrito.push()
                                            }} id = {licor.id}>Comprar</Button></Card.Footer>
                                        </Card>
                                    </div>
                                </Col>
                            )
                            ) :
                            <h1>No hay datos</h1>
                    }
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ListarLicores
