import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Todo = () => {
  const [input, setinput] = useState([]);
  const [value, setvalue] = useState("");
  const handlesubmit = (event) => {
    event.preventDefault();
    setinput([...input, { task: value, id: uuidv4(), isDone: false }]);
    setvalue("");
  };

  const reset = () => {
    setinput([]);
  };

  const handlechange = (event) => {
    setvalue(event.target.value);
  };

  const deletetask = (id) => {
    setinput(input.filter((a) => a.id != id));
  };
  let markAsDone = (id) => {
    let arr = input.map((ele) => {
      if (ele.id == id) {
        return { ...ele, isDone: true };
      } else {
        return ele;
      }
    });

    setinput(arr);

    // setinput((todo) => {
    //   todo.map((e) => {
    //     if (e.id == id) {

    //       return {
    //         ...e,
    //         isDone:true,

    //       };
    //     }else{
    //       console.log(e)
    //       return e;
    //     }
    //   });
    // });
  };

  return (
    <div>
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            placeholder="Write your List here"
            type="text"
            value={value}
            name="list"
            onChange={handlechange}
          />
        </Form.Group>
      </Form>
      {/* <form action="" onSubmit={handlesubmit}>
        <input
          placeholder="Write your List here"
          type="text"
          value={value}
          name="list"
          onChange={handlechange}
        />
        <br />
        <br />
      </form> */}
      <Button variant="dark" onClick={handlesubmit}>
        Add Lists
      </Button>{" "}
      <Button variant="danger" onClick={reset}>
        Reset
      </Button>{" "}
      <br />
      <br />
      {/* <button onClick={handlesubmit}>Add Lists</button>
      <button onClick={reset}>Reset</button>
      <br />
      <br /> */}
      <h4>Tasks to do</h4>
      {/* <ul>
        {input.map((item) => (
          <li key={item.id}>
            {item.task}{" "}
            <button onClick={() => deletetask(item.id)}>Delete</button>
            <hr></hr>
          </li>
        ))}
      </ul> */}
      <ListGroup as="ul" numbered>
        {input?.map((item) => (
          <div key={item.id}>
            <ListGroup.Item as="li" variant="light">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span
                  style={
                    item.isDone ? { textDecorationLine: "line-through" } : {}
                  }
                >
                  {item.task}
                </span>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    variant="success"
                    onClick={() => markAsDone(item.id)}
                    style={{ marginRight: "10px" }}
                  >
                    Mark as Done
                  </Button>{" "}
                  <Button variant="danger" onClick={() => deletetask(item.id)}>
                    Delete
                  </Button>{" "}
                </div>
              </div>
            </ListGroup.Item>
          </div>
        ))}
      </ListGroup>
    </div>
  );
};
export default Todo;
