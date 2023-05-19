import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import SecondPage from './components/SecondPage';
import FirstPage from './components/FirstPage';


const App = () => {
  const userDetails = localStorage.getItem('userDetails');

  return (
    <Router>
      <Routes>
        <Route path="/" element={userDetails ? <Navigate to="/second-page" /> : <FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;
