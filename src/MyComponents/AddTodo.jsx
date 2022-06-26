import React, { useState } from "react";

export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    //console.log(title, desc);
    if (!title && !desc) {
      alert("please fill all the input");
    } else {
      props.add(title, desc);
      //console.log(props);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container-fluid p-3 bg-warning">
      <div className="container">
        <div className="row">
          <form className="col-12" onSubmit={submit}>
            <fieldset>
              <legend>
                <strong>Add Todo's:</strong>
              </legend>
              <div className="mb-3">
                <input
                  type="text"
                  id="todoTitle"
                  className="form-control"
                  placeholder="Enter your Todos Title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="desc"
                  id="todoDesc"
                  className="form-control"
                  placeholder="Enter the description here"
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                  value={desc}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
