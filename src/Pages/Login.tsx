import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import  Card  from "react-bootstrap/Card";
import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import  Spinner  from "react-bootstrap/Spinner";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { loginUser } from "../Services/UserService";
import { useAuthDispatch, useAuthState } from "../context/authContext";

const Login = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [sendingData, setSendingData] = useState(false);

    const authDispatch = useAuthDispatch();


    const login = async (e: React.SyntheticEvent)=>{
        e.preventDefault();
        try {
            setSendingData(true);
            setError("");
            const res= await loginUser(email, password);
            const token =res.data.token;

            authDispatch({
                type:'login',
                token
            })
        } catch (errors:any) {
            if (errors.response) {
                errors.response.status === 403 && setError("Não pode iniciar a sessão com essas credenciais!!");
            }
            
            setSendingData(false);
        }
        
    }

    return(
        <Container>
            <Row>
                <Col lg="5" md='10' sm='10' className="mx-auto">
                    <Card className="mt-5">
                        <Card.Body>
                            <h4>Iniciar Sessão</h4><hr />
                            <Form onSubmit={login}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control 
                                        value={email}
                                        onChange={ e => setEmail(e.target.value)}
                                        type="email" placeholder="Informe o seu e-mail"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control 
                                        value={password}
                                        onChange={ e => setPassword(e.target.value)}
                                        type="password" placeholder="Informe o Senha"></Form.Control>
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
                                        <span>Iniciando sessão......</span>
                                    </>: <>Iniciar Sessão</>}
                                </Button>

                           </Form>
                           <Alert className="mt-4" show={!!error} variant="danger">{error}</Alert>
                            
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login