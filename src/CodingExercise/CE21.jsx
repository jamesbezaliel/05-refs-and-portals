// import React from 'react';

// function App() {
//     let openUploadFile = React.useRef();

//     function handleClickButton() {
//         - supposedly use openUploadFile.current.click();
//         click();
//     }
//   return (
//     <div id="app">
//       <p>Please select an image</p>
//       <p>                            - don't use onClick in input file
//         <input ref={openUploadFile} onClick={handleClickButton} data-testid="file-picker" type="file" accept="image/*" />
//         <button onClick={handleClickButton}>Pick Image</button>
//       </p>
//     </div>
//   );
// }

// export default App;

// kunci jawaban:
import React from "react";

function App() {
  let openUploadFile = React.useRef();

  function handleClickButton() {
    openUploadFile.current.click();
  }
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          ref={openUploadFile}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />
        <button onClick={handleClickButton}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
