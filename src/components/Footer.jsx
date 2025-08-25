// src/components/Footer.jsx
import useTheme from '../hooks/useTheme';

const Footer = () => {
  const { theme } = useTheme();
  console.log("theme in footer",theme)
  let styles;

  if (theme === 'dark') {
    styles = {
      backgroundColor: '#000',
      color: '#fff'
    };
  } else {
    styles = {
      backgroundColor: '#17c52bff',
      color: '#000'
    };
  }

  return (
    <footer className="footers">
      <p style={styles}>© {new Date().getFullYear()} Todo App</p>
    </footer>
  );
};

export default Footer;
