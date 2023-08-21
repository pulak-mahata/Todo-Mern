
import './App.css';
import Footer from './components/Footer';

// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
      <Footer/>
    </div>
  );
}

export default App;
