import React from 'react'
import { useFetch } from '../hooks/useFetch.jsx'
import { Card, Button, Col, Row, Container } from 'react-bootstrap'



const ListarLicores = () => {

    const { loading, data } = useFetch(`https://api-licores.herokuapp.com/licores`);
    const productos = data;
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
                                            <Card.Footer className="text-muted"><Button variant="primary" style={{ width: '300px' }} >Comprar</Button></Card.Footer>
                                        </Card>
                                    </div>
                                </Col>
                            )
                            ) :
                         <h1>Bienvenido a nuestro Registro de Promociones en Licores</h1>
                    }
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ListarLicores
