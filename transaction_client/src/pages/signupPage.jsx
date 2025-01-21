import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignupForm from "../components/signupForm";

const SignupPage = () => {
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
            <h1>Join Our App!!</h1>
            <p>Manage your income and expenses</p>
            <p>Track Your Finance</p>
          </Stack>
        </Col>

        {/* Signup Form Section */}
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Stack className="shadow-lg border rounded p-4">
            <h1 className="text-center">Sign Up</h1>
            <SignupForm />
            <div className="text-center mt-3">
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
