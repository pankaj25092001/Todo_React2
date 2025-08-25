// src/App.jsx

import Header from './components/Header';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import PendingTodos from './components/PendingTodos';
import CompletedTodos from './components/CompletedTodos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TodoProvider } from './context/TodoContext';
import { ThemeProvider } from './context/ThemeContext';
import useTheme from './hooks/useTheme';

function MainContent() {
  const { theme } = useTheme();

  return (
    <main className="page-container">
      <AddTodo />
      <PendingTodos />
      <CompletedTodos />
    </main>
  );
}


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <TodoProvider>
          <Routes>
            <Route path="/" element={
              <div className="app">
                <Header />
                <MainContent />
                <Footer />
              </div>
            } />

            {/* <Route path="/about" element={<Footer />} />
          <Route path="/contact" element={<MainContent />} /> */}
          </Routes>
        </TodoProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
