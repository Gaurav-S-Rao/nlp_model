import { useState } from "react";
import axios from "axios";
import { Form, FloatingLabel, Button } from "react-bootstrap";

function TextInput() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: "http://localhost:3000",
        method: "post",
        data: {
          text: input,
        },
      });
      console.log(response.data);
      setOutput(response.data?.topic);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form>
        <FloatingLabel className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Please enter the Abstract"
            style={{ height: "200px", width: "500px" }}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </FloatingLabel>
        <div className="btn-block">
          <Button type="submit" variant="outline-info" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </Form>
      <h2 className="my-5">Topic : {output}</h2>
    </div>
  );
}

export default TextInput;
