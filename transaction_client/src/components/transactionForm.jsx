import React, { useState } from "react";
import { Button, Card, Col, Form, Row, Container } from "react-bootstrap";
import CustomInput from "./customInput";
import { useDispatch } from "react-redux";
import { createTransactionAction } from "../redux/transaction/transactionActions";

const initialFormData = {
  title: "",
  type: "expense",
  date: null,
  amount: 0,
};

const TransactionForm = ({ userId }) => {
  const [formData, setFormData] = useState({ ...initialFormData, userId });
  const { title, type, date, amount } = formData;
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createTransactionAction(formData));
    setFormData({ ...initialFormData, userId });
  };

  return (
    <Card className="my-3">
      <Card.Body>
        <Form onSubmit={handleOnSubmit}>
          <Container fluid>
            <Row className="mb-3">
              <Col xs={12} md={6} className="mb-3 mb-md-0">
                <CustomInput
                  label="Title"
                  handleOnChange={handleOnChange}
                  inputAttributes={{
                    type: "text",
                    name: "title",
                    value: title,
                    placeholder: "Enter transaction title",
                    required: true,
                  }}
                />
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Type</Form.Label>
                  <Form.Select
                    name="type"
                    value={type}
                    onChange={handleOnChange}
                  >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col xs={12} md={6} className="mb-3 mb-md-0">
                <CustomInput
                  label="Date"
                  handleOnChange={handleOnChange}
                  inputAttributes={{
                    type: "date",
                    name: "date",
                    value: date,
                    required: true,
                  }}
                />
              </Col>
              <Col xs={12} md={6}>
                <CustomInput
                  label="Amount"
                  handleOnChange={handleOnChange}
                  inputAttributes={{
                    type: "number",
                    name: "amount",
                    value: amount,
                    required: true,
                  }}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="primary" type="submit" className="w-100">
                  Add Transaction
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TransactionForm;
