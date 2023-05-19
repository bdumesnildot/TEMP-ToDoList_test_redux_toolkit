import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = () => {
  const tasks = useSelector(state => state.todo)

  return (
    <>
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} />
      ))}
    </>
  );
};

export default TasksList;
