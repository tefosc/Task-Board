import { BoardContext } from "../context/BoardContext";
import { CardModal } from "./CardModal";
import { Column } from "./Column";
import { useContext } from "react";
export function Board() {
  const { data, toggleOpenModal } = useContext(BoardContext);
  return (
    <main>
      {toggleOpenModal && <CardModal />}
      <h1 className="text-3xl font-bold mb-6"> Boards</h1>
      <div className="flex gap-4 flex-col md:flex-row ">
        <Column
          id={data.todo.id}
          title={data.todo.title}
          tasks={data.todo.tasks}
        />
        <Column
          id={data.inProgress.id}
          title={data.inProgress.title}
          tasks={data.inProgress.tasks}
        />
        <Column
          id={data.underReview.id}
          title={data.underReview.title}
          tasks={data.underReview.tasks}
        />
        <Column
          id={data.done.id}
          title={data.done.title}
          tasks={data.done.tasks}
        />
      </div>
    </main>
  );
}
