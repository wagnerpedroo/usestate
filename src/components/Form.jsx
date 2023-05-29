import { container, input, label } from "./Form.module.css";

import { useState } from "react";

function Form() {

  const [text, setText] = useState("I have typescript");

  return (
    <div className={container}>
      <h1>{text}</h1>
      <label htmlFor="text" className={label}>
        Type your text down bellow
      </label>
      <input
        type="text"
        id="text"
        value={text}
        className={input}
        onChange={ e => setText(e.target.value)}
      />
    </div>
  );
}

export default Form;
