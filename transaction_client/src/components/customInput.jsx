/* eslint-disable react/prop-types */

import { FloatingLabel, Form } from "react-bootstrap";

const CustomInput = (props) => {
  const { label, handleOnChange, inputAttributes } = props;

  return (
    <Form.Group className="mb-3">
      <FloatingLabel className="fw-bold" label={label}>
        {/* <Form.Label className="fw-bold">{label}</Form.Label> */}

        <Form.Control onChange={handleOnChange} {...inputAttributes} />
      </FloatingLabel>
    </Form.Group>
  );
};

export default CustomInput;
