import React, { useState } from 'react'
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap'
import { useForm } from '../hooks/useForm.jsx'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { actionLicor } from '../actions/ActionCarrito.js'
import { borrarProducto } from '../actions/ActionCarrito'
import uuid from 'react-uuid'
import styled from 'styled-components'

const StyledTitulo = styled.h1`
    text-align: center;
    font-size: 34px;
    margin-top: 100px;

`

const StyledFormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

function FormularioPromociones() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formValue, handleInputChange, reset] = useForm({
        nombre: '',
        producto: '',
    })

    const dispatch = useDispatch();
    const AgregarProducto = (producto) => {
        dispatch(actionLicor(producto))
    }

    const { nombre, producto } = formValue;

    const handleSubmit = (e) => {
        e.preventDefault();
        reset();

        AgregarProducto({
            id: uuid(),
            nombre,
            producto,
        })
    }
    return (
        <>
            <div>
                <StyledTitulo>Registrate para Recibir Nuestras Promociones</StyledTitulo>
            </div>
            <StyledFormContainer>
                <Button variant="primary" onClick={handleShow}>
                    ¡Conseguir mi Promoción!
                 </Button>
            </StyledFormContainer>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Rellena tus datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ingrese su Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" name='nombre' value={nombre} onChange={handleInputChange} />
                            <Form.Text className="text-muted">
                                ¿Cual es tu nombre?
                                </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Ingrese su Direccion</Form.Label>
                            <Form.Control type="text" placeholder="Direccion de domicilio" name='producto' value={producto} onChange={handleInputChange} />
                            <Form.Text className="text-muted">
                                ¿En donde vives?
                                </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                            </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

const AgregarProducto = () => {
    const dispatch = useDispatch();
    const pedidos = useSelector((state) => state.productos);
    return (
        <React.Fragment>
            <div>
                <FormularioPromociones />
            </div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="card mt-5">
                            <div className="card-body">
                                <h2 >Registro de Usuarios Promocionados</h2>
                                <div className="lista-citas">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Nombre del Cliente</th>
                                                <th scope="col">Direccion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                pedidos.licores.map((product) => (
                                                    <tr key={product.id}>
                                                        <td>
                                                            {product.nombre}
                                                        </td>
                                                        <td>
                                                            {product.producto}
                                                        </td>
                                                        <td>
                                                            <button onClick={() => dispatch(borrarProducto(product.id))}>Borrar</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div >
                        </div >
                    </Col>
                </Row>
            </Container>
        </React.Fragment>

    )
}

export default AgregarProducto
