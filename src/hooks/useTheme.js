
import { useThemeContext } from '../context/ThemeContext';  

const useTheme = () => {
  const { theme, toggleTheme } = useThemeContext();

  return { theme, toggleTheme };
};

export default useTheme;
