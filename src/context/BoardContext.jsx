import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { initialData } from "../utils/initalData";

const BoardContext = createContext();

function BoardProvider({ children }) {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("boardData");
    return storedData ? JSON.parse(storedData) : initialData;
  });
  const [toggleOpenModal, setToggleOpenModal] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState(null);

  const updateLocalStorage = (newData) => {
    localStorage.setItem("boardData", JSON.stringify(newData));
  };

  const stylesPrioritys = (priority) => {
    switch (priority.toLocaleLowerCase()) {
      case "high":
        return "bg-pink-600 p-1 rounded-md";

      case "medium":
        return "bg-green-600 p-1 rounded-md";

      case "low":
        return "bg-sky-600 p-1 rounded-md";
      default:
        return;
    }
  };

  const showModalTask = (id) => {
    setToggleOpenModal(!toggleOpenModal);
    setCurrentColumnId(id);
  };

  const addTask = (task) => {
    // Hacer una copia profunda del estado actual de las columnas
    const updatedData = { ...data };

    // Buscar la columna correcta por su ID
    const currentColumn = Object.values(updatedData).find(
      (column) => column.id === currentColumnId
    );

    // Añadir la nueva tarea a la lista de tareas de la columna seleccionada
    currentColumn.tasks = [...currentColumn.tasks, task];

    // Actualizar el estado con la nueva columna que tiene la nueva tarea
    setData(updatedData);
    updateLocalStorage(updatedData);
    setToggleOpenModal(false);
  };

  const deleteTask = (columnId, taskId) => {
    const newData = { ...data }; // Hacer una copia del estado actual de los datos

    // Buscar la columna correcta por su ID
    const currentColumn = Object.values(newData).find(
      (column) => column.id === columnId
    );

    // Si se encuentra la columna, filtrar las tareas
    if (currentColumn) {
      // Filtrar las tareas de la columna actual, eliminando solo la que coincide con taskId
      currentColumn.tasks = currentColumn.tasks.filter(
        (task) => task.id !== taskId
      );
    }

    setData(newData); // Actualizar el estado con las columnas filtradas
    updateLocalStorage(newData);
  };

  return (
    <BoardContext.Provider
      value={{
        data,
        showModalTask,
        toggleOpenModal,
        currentColumnId,
        setToggleOpenModal,
        addTask,
        deleteTask,
        stylesPrioritys,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export { BoardContext, BoardProvider };

BoardProvider.propTypes = {
  children: PropTypes.any,
};
