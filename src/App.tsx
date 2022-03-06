import { ThemeProvider } from 'styled-components';
import PublicRoutes from './routes/Routes';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PublicRoutes />
    </ThemeProvider>
  );
}

export default App;
