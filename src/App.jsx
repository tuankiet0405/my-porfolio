import { ThemeProvider } from './context/ThemeContext';
import Book from './components/Book/Book';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggle />
        <Book />
      </div>
    </ThemeProvider>
  );
}

export default App;
