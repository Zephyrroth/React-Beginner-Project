import React from "react";
import "./CarForm.css";
import { CarContext } from "../CarContext";

function CarForm() {
  const { addNewCar, setOpenModal } = React.useContext(CarContext);

  const [newCarItem, setNewCarItem] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addNewCar(newCarItem);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewCarItem(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Agrega el coche deseado</label>
      <textarea
        placeholder="Ej: Aston Martin DB9"
        value={newCarItem}
        onChange={onChange}
      />

      <div className="CarForm--buttonContainer">
        <button className="CarForm--button CarForm--button--add" type="submit">
          Agregar
        </button>
        <button
          className="CarForm--button CarForm--button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export { CarForm };
