
import TaskForm from "./components/TaskForm";
import TasksHeader from "./components/TasksHeader";
import TasksList from "./components/TasksList";

import "./styles/styles.css";

function App() {

  return (
    <div className="container">
      <article>
        <TasksHeader />
        <TasksList />
        <footer>
          <TaskForm />
        </footer>
      </article>
    </div>
  );
}

export default App;
