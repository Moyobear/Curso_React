import { AppProvider } from "./AppProvider";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    return (
        <AppProvider>
            <div className="container mt-3">
                <TaskForm />
                <hr />
                <TaskList />
            </div>
        </AppProvider>
    );
}

export default App;
