import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../components/loginForm";

const LoginPage = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center vh-100"
    >
      <Row className="w-100">
        {/* Welcome Section */}
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center mb-4 mb-md-0"
        >
          <Stack className="shadow-lg border rounded p-4 text-center">
            <h1>Welcome Back!!</h1>
            <p>Manage your income and expenses</p>
            <p>Track Your Finance</p>
          </Stack>
        </Col>

        {/* Login Form Section */}
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Stack className="shadow-lg border rounded p-4">
            <h1 className="text-center">Login</h1>
            <LoginForm />
            <div className="text-center mt-3">
              <p>Don&apos;t have an account?</p>
              <Link to="/signup">Sign Up</Link>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
