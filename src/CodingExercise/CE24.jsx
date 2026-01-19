// app component:

import React from 'react';
import Form from './Form';

// Don't change the name of the 'App' 
// function and keep it a named export

export function App() {
    const form = React.useRef();
  function handleRestart() {
      form.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={form} />
    </div>
  );
}

// form.jsx

import React from 'react';
const Form = React.forwardRef(function Form(props, ref) {
  const formRef = React.useRef();

  React.useImperativeHandle(ref, () => {
    return {
      clear() {
        formRef.current.reset();
      },
    };
  });
  return (
    <form ref={formRef}>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>
  );
});

export default Form;
