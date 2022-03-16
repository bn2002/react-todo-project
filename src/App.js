
import './Base.css';
import './App.css';
import Header from './todo/Header';
import TodoList from './todo/TodoList';
import Footer from './todo/Footer';
import { useStore } from './store'
function App() {
  const [state] = useStore();

  return (
    <section className="todoapp">
        <Header />
        { state.todos.length > 0 &&  <TodoList /> }
        { state.todos.length > 0 &&  <Footer /> }
    </section>
  );
}

export default App;
