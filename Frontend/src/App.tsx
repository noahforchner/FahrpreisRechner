import LoginMaske from './components/LoginMaske';
import LandingPage from './components/LandingPage';
import RegistrationMaske from './components/RegistrationMaske';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import CalculatorPage from './components/CalculatorPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginMaske />} />
        <Route path="/registrierung" element={<RegistrationMaske />} />
        <Route path="/calculator" element={<CalculatorPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}
