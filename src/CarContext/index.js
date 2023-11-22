import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import propTypes from "prop-types";

const CarContext = React.createContext();

function CarProvider({ children }) {
  const {
    item: cars,
    saveItem: saveCars,
    loading,
    error,
  } = useLocalStorage("Collection_V1", []);
  const [searchCars, setSearchCars] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completed = cars.filter((car) => !!car.completed).length;
  const pending = cars.length;

  const findCars = cars.filter((car) =>
    car.text.toLowerCase().includes(searchCars.toLowerCase()),
  );

  const addNewCar = (text) => {
    const newItem = [...cars];
    newItem.push({
      text,
      completed: false,
    });
    saveCars(newItem);
  };

  const carCollected = (text) => {
    const newItem = [...cars];
    const DatabaseIndex = newItem.findIndex((car) => car.text === text);
    newItem[DatabaseIndex].completed = !newItem[DatabaseIndex].completed;
    saveCars(newItem);
  };

  const carNotCollected = (text) => {
    const newItem = [...cars];
    const DatabaseIndex = newItem.findIndex((car) => car.text === text);
    newItem.splice(DatabaseIndex, 1);
    saveCars(newItem);
  };

  return (
    <CarContext.Provider
      value={{
        loading,
        error,
        pending,
        completed,
        searchCars,
        setSearchCars,
        findCars,
        carCollected,
        carNotCollected,
        openModal,
        setOpenModal,
        addNewCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

CarProvider.propTypes = {
  children: propTypes.node.isRequired,
};
export { CarProvider, CarContext };
