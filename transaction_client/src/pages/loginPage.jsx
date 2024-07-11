import { Col, Container, Row, Stack } from "react-bootstrap"
import { Link } from "react-router-dom";
import LoginForm from "../components/loginForm";

const LoginPage = () => {
  return ( 
    <Container>
      <Row className="d-flex align-items-center justiy-content-center vh-100">
        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <h1>Welcome Back!!</h1>
            <p>Manage yur income and expenses</p>
            <p>Track Your Fincance</p>
          </Stack>
        </Col>

        {/* Login Form */}
        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <h1>Login</h1>

            {/* Login Form */}
            <LoginForm/>

            <p>Don&apos;t have account?</p><Link to="/signup">Sign Up</Link>
          </Stack>
        </Col>
      </Row>
    </Container>
   );
}
 
export default LoginPage;