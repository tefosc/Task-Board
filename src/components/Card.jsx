import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";
import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";

export function Card({
  id,
  title,
  description,
  priority,
  date,
  columnId,
  image,
}) {
  const { deleteTask, stylesPrioritys } = useContext(BoardContext);

  const stylePriority = stylesPrioritys(priority);

  return (
    <div className="bg-slate-100 rounded-xl shadow-md mb-4 p-3 relative">
      <div className="flex  items-center justify-between text-sm mb-2">
        <span className={`${stylePriority} text-xs text-white rounded-lg`}>
          {priority.toLocaleUpperCase()}
        </span>
        <time className="mt-1 md:mt-0">
          {new Date(date).toLocaleDateString("en-PE")}
        </time>
      </div>
      <h3 className="font-semibold text-sm"> {title}</h3>
      {image && (
        <img
          className="w-full  h-32 object-cover my-2 rounded-lg"
          src={image}
        />
      )}

      <p className="text-xs text-gray-600 pb-5">{description}</p>
      <button
        type="button"
        onClick={() => deleteTask(columnId, id)}
        className={`${stylePriority} absolute right-2 -translate-y-1`}
      >
        <FaTrash className="text-white" />
      </button>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.any,
  date: PropTypes.any,
  id: PropTypes.string.isRequired,
  deleteTask: PropTypes.func,
  columnId: PropTypes.string.isRequired,
  image: PropTypes.any,
};
