import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import  Card  from "react-bootstrap/Card";
import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import  Spinner  from "react-bootstrap/Spinner";
import React, { useState } from "react";
import { registerUser } from "../Services/UserService";

const Login = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});
    const [sendingData, setSendingData] = useState(false);

    const register = async (e: React.SyntheticEvent)=>{
        e.preventDefault();
        try {
            setSendingData(true);
            await registerUser(name, email, password);      
            setSendingData(false);
        } catch (errors:any) {
            setErrors(errors.response.data.errors);            
            setSendingData(false);
        }
        
    }

    return(
        <Container>
            <Row>
                <Col lg="5" md='10' sm='10' className="mx-auto">
                    <Card className="mt-5">
                        <Card.Body>
                            <h4>Criar conta</h4><hr />
                            <Form onSubmit={register}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control 
                                        isInvalid={!!errors.name}
                                        value={name}
                                        onChange={ e => setName(e.target.value)}
                                        type="text" placeholder="Informe o Nome"></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors?.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control 
                                        isInvalid={!!errors.email}
                                        value={email}
                                        onChange={ e => setEmail(e.target.value)}
                                        type="email" placeholder="Informe o seu e-mail"></Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            {errors?.email}
                                        </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control 
                                        isInvalid={!!errors.password}
                                        value={password}
                                        onChange={ e => setPassword(e.target.value)}
                                        type="password" placeholder="Informe o Senha"></Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            {errors?.password}
                                        </Form.Control.Feedback>
                                </Form.Group>
                                <Button type="submit">
                                    {sendingData?<>
                                        <Spinner
                                            animation="border"
                                            as="span"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        ></Spinner>&nbsp;
                                        <span>Criando conta......</span>
                                    </>: <>Criar conta</>}
                                </Button>

                           </Form>
                            
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login