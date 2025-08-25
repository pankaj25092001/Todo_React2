// src/components/Header.jsx
import useTheme from '../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
    <header className="app-header">
      <h1>Todo App</h1>
    </header>
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
      </button>
    </div>
  </>
  );
};

export default Header;
