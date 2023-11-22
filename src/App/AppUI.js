import { CarCounter } from "../CarCounter";
import { CarSearcher } from "../CarSearcher";
import { CarList } from "../CarList";
import { CarItem } from "../CarItem";
import { CreateCar } from "../CreateCar";
import { ListLoading } from "../ListLoading";
import { ListError } from "../ListError";
import { ListEmpty } from "../ListEmpty";
import React from "react";
import { CarContext } from "../CarContext";
import { Modal } from "../Modal";
import { CarForm } from "../CarForm";

function AppUI() {
  const {
    loading,
    error,
    findCars,
    carCollected,
    carNotCollected,
    openModal,
    setOpenModal,
  } = React.useContext(CarContext);
  return (
    <>
      <CarCounter />
      <CarSearcher />

      <CarList>
        {loading && (
          <>
            <ListLoading />
            <ListLoading />
            <ListLoading />
          </>
        )}
        {error && <ListError />}
        {!loading && findCars.length === 0 && <ListEmpty />}

        {findCars.map((car) => (
          <CarItem
            key={car.text}
            text={car.text}
            completed={car.completed}
            onComplete={() => carCollected(car.text)}
            onDelete={() => carNotCollected(car.text)}
          />
        ))}
      </CarList>

      <CreateCar setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <CarForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
