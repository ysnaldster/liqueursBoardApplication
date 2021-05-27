import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch.jsx'
import { Card, Button, Col, Row, Container } from 'react-bootstrap'

const ListarLicores = () => {

    const { loading, data } = useFetch(`https://api-licores.herokuapp.com/licores`);
    const productos = data;
    // console.log(productos);

    const guardarProducto = (e) => {
        e.preventDefault();
        console.log("boton funcionando")
    }
    return (
        <React.Fragment>
            <Container>
                <Row>
                    {
                        !!productos && productos ?
                            productos.map(licor => (
                                <Col xs={4} style={{ marginTop: '10px', marginBottom: '10px' }} key={licor.id}>
                                    <div>
                                        <Card className="text-center" style={{ height: '700px' }}>
                                            <Card.Img variant="top" src={licor.url} width='200px' height='300px' />
                                            <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column ' }}>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text>
                                                    {licor.descripcion}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="text-muted"><Button variant="primary" style={{ width: '350px' }} onClick = {guardarProducto}>Comprar</Button></Card.Footer>
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
