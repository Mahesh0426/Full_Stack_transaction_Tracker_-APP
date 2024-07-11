import { Button, Form, Spinner } from "react-bootstrap";
import CustomInput from "./customInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";

const intitalFormData = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formData, setFormData] = useState(intitalFormData);

  const { email, password } = formData;

  // Handle on change
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Navigating
  const navigate = useNavigate();

  // dispatch
  const dispatch = useDispatch();

  // Form Submit
  const handleOnSumbit = async (e) => {
    e.preventDefault();

    dispatch(loginUserAction(formData));
  };

  // Logic For redirecting after login
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/transactions");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Form onSubmit={handleOnSumbit}>
      <CustomInput
        label="Email"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "email",
          name: "email",
          placeholder: "Enter your email",
          value: email,
          required: true,
        }}
      />

      <CustomInput
        label="Password"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "password",
          name: "password",
          placeholder: "Enter your password",
          value: password,
          required: true,
        }}
      />

      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          "Login"
        )}
      </Button>
    </Form>
  );
};

export default LoginForm;
