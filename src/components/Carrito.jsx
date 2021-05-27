import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select
} from "@chakra-ui/react"
import {useForm} from '../hooks/useForm.jsx'


const Carrito = () => {
    const [ formValue, handleInputChange, reset] = useForm({
        producto: ''
    })
    
    const {producto} = formValue;

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs={6}>
                        <FormControl id="country" >
                            <FormLabel>Country</FormLabel>
                            <Select placeholder="Select country">
                                <option>United Arab Emirates</option>
                                <option>Nigeria</option>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col xs={6}>
                        <div className="card mt-5">
                            <div className="card-body">
                                <h2 >Carrito de Compras</h2>
                                <div className="lista-citas">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Hora</th>
                                                <th scope="col">Fractura</th>
                                                <th scope="col">Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody>
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

export default Carrito
