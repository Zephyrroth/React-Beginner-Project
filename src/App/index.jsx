import { AppUI } from "./AppUI";
import { CarProvider } from "../CarContext";
import React from "react";
function App() {
  return (
    <>
      <CarProvider>
        <AppUI />
      </CarProvider>
    </>
  );
}

export default App;
