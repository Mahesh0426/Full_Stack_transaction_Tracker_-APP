import { Col, Container, Row, Stack } from "react-bootstrap"
import { Link } from "react-router-dom";
import SignupForm from "../components/signupForm";

const SignupPage = () => {
  return ( 
    <Container>
      <Row className="d-flex align-items-center justiy-content-center vh-100">
        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <h1>Join Our App!!</h1>
            <p>Manage yur income and expenses</p>
            <p>Track Your Fincance</p>
          </Stack>
        </Col>

        {/* SignUp Form */}
        <Col>
          <Stack className="shadow-lg border rounded p-4">
            <h1>Sign Up</h1>

            {/* SignUp Form */}
            <SignupForm />

            <p>Already have account?</p><Link to="/login">Login</Link>
          </Stack>
        </Col>
      </Row>
    </Container>
   );
}
 
export default SignupPage;