import { ThemeProvider } from 'styled-components';
import Routes from './routes/Routes';
import theme from './theme/theme';
import './i18n/i18n';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
