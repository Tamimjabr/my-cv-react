import ReactDOM from 'react-dom';
import './index.css';
import 'aos/dist/aos.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from './themes/material-ui-theme'
import { ThemeProvider } from '@mui/material/styles';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
