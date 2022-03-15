
import './Base.css';
import './App.css';
import Header from './todo/Header';
import TodoList from './todo/TodoList';
function App() {
  return (
    <section class="todoapp">
        <Header />
        <TodoList />
    </section>
  );
}

export default App;
