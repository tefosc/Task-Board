import { useContext, useState } from "react";
import { BoardContext } from "../context/BoardContext";
import { images } from "../utils/images";

export function CardModal() {
  const { currentColumnId, data, addTask, setToggleOpenModal } =
    useContext(BoardContext);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(images[0].imgUrl);
  const [priority, setPriority] = useState("High");

  // Encontrar la columna actual a través de currentColumnId
  const column = Object.values(data).find(
    (column) => column.id === currentColumnId
  );
  const columnTitle = column ? column.title : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      title: task,
      image: image,
      description: description,
      priority,
      date: new Date(),
      columnId: currentColumnId,
    };
    addTask(newTask);
  };

  const handleCancel = () => {
    setToggleOpenModal(false);
  };

  return (
    <div className="z-50 inset-0 fixed bg-black bg-opacity-50 flex justify-center items-center">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-[400px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">{columnTitle}</h2>

        <label className="block text-sm mb-1">Title:</label>
        <input
          placeholder="Update Website Homepage"
          required
          type="text"
          className="bg-slate-200 w-full p-2 rounded-md mb-3 font-semibold text-sm"
          onChange={(e) => setTask(e.target.value)}
        />
        <label className="block text-sm mb-1">Description:</label>
        <textarea
          placeholder="Revise the content and layout of the homepage to highlight new features and improve user engagement"
          className="bg-slate-200 w-full p-2 rounded-md text-xs text-gray-600 text-justify mb-3"
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="block text-sm mb-1">Priority:</label>
        <select
          className="text-black bg-slate-200 border-none w-full p-2 rounded-md mb-3"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <label className="block text-sm mb-1">Select Image:</label>
        <select
          className="text-black bg-slate-200 border-none w-full p-2 rounded-md mb-4"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        >
          <option value={""}>Selecciona una opcion</option>
          <option value={images[0].imgUrl}>Image 1</option>
          <option value={images[1].imgUrl}>Image 2</option>
          <option value={images[2].imgUrl}>Image 3</option>
          <option value={images[3].imgUrl}>Image 4</option>
        </select>
        <div className="mb-4">
          <h3 className="text-sm mb-1">Preview:</h3>
          {image && (
            <img
              src={image}
              alt="Vista previa"
              className="w-full h-32 object-cover rounded-md"
            />
          )}
        </div>

        <div className="flex flex-row gap-2 ">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
          >
            Add Task
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-500 text-white p-2 rounded-md w-full hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
