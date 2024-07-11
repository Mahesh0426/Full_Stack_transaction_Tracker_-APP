/* eslint-disable react/prop-types */
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import CustomInput from "./customInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTransactionAction } from "../redux/transaction/transactionActions";

const intitalFormData = {
  title: "",
  type: "expense",
  date: null,
  amount: 0,
};

const TransactionForm = (props) => {
  const { userId } = props;

  const [formData, setFormData] = useState({ ...intitalFormData, userId });
  const { title, type, date, amount } = formData;

  const dispatch = useDispatch();
  // Handle on change
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle on submit
  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(createTransactionAction(formData));
    //reset transaction
    setFormData({ ...intitalFormData, userId });
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleOnSubmit}>
          <Row>
            <Col>
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

            <Col>
              <Form.Group>
                <Form.Label className="fw-bold">Type</Form.Label>
                <Form.Select name="type" value={type} onChange={handleOnChange}>
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
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

            <Col>
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

          <Button variant="primary" type="submit">
            Add Transaction
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TransactionForm;
