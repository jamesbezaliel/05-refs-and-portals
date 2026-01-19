// import Input from './Input';
// import React from 'react';

// export const userData = {
//   name: '',
//   email: '',
// };

// export function App() {
//   let inputEmail = React.useRef();
//   let inputName = React.useRef();
  
//   function handleSaveData() {
//     userData.name = inputName.current.value;
//     userData.email = inputEmail.current.value;
//   }

//   return (
//     <div id="app">
//       <Input type="text" label="Your Name" ref={inputName} />
//       <Input type="email" label="Your E-Mail" ref={inputEmail}/>
//       <p id="actions">
//         <button onClick={handleSaveData}>Save Data</button>
//       </p>
//     </div>
//   );
// }

// import React from 'react';

// const Input = React.forwardRef(function Input({label, ...props}, ref) {
//   // Todo: Accept forwarded ref and "connect" it to the <input> element
//   return (
//     <p className="control">
//       <label>{label}</label>
//       {/* Todo: "Forward" remaining props to <input> element */}
//       <input {...props} ref={ref} />
//     </p>
//   );
// })

// export default Input;
