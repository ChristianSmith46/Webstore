import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './pages/Account';
import CreateAccount from './pages/CreateAccount';
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='account'
          element={<Account />}
        />
        <Route
          path='create-account'
          element={<CreateAccount />}
        />
        <Route
          path='*'
          element={<Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;
