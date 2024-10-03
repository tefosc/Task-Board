import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import { Card } from "./Card";
import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";

export function Column({ title, tasks, id }) {
  const { showModalTask } = useContext(BoardContext);

  const handShowModal = () => {
    showModalTask(id);
  };
  return (
    <div className="py-4 w-full md:w-1/4">
      <div className="flex justify-between md:justify-start gap-4 items-center mb-4">
        <h2 className="font-semibold text-xl">{title}</h2>
        <button
          type="button"
          className="text-gray-500 p-2"
          onClick={handShowModal}
        >
          <FaPlus />
        </button>
      </div>
      {tasks.map((task) => (
        <Card
          key={task.id}
          id={task.id}
          priority={task.priority}
          date={task.date}
          title={task.title}
          image={task.image}
          description={task.description}
          columnId={id}
        />
      ))}
    </div>
  );
}

Column.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};
