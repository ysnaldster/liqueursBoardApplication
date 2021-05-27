import React from 'react'
import { useFetch } from '../hooks/useFetch.jsx'
import { Card, Button, Col, Row, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { combineReducers } from 'redux'

const StyledCard = styled(Card)`
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`

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
                                        <StyledCard className="text-center" >
                                            <Card.Img variant="top" src={licor.url} width='150px !important'  className = 'card-img' style = {{width: '300px', height: '250px'}} />
                                            <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column ' }}>
                                                <Card.Title className = 'card-title'>{licor.nombre}</Card.Title>
                                                <Card.Text className = 'card-description'>
                                                    {licor.descripcion}
                                                </Card.Text>                          
                                            </Card.Body>
                                            <Card.Footer style = {{width: '100%'}}>
                                            {licor.precio} $
                                            </Card.Footer>
                                        </StyledCard>
                                    </div>
                                </Col>
                            )
                            ) :
                         <h1>No se han podido cargar los productos</h1>
                    }
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ListarLicores
