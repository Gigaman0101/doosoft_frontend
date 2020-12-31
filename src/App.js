import logo from './logo.svg';
import './App.css';
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';
import Navbar from './components/Navbar/Navbar';
import UserContext from './context/UserContext';
import { useState } from 'react';
import LocalStorageService from './services/LocalStorageService';

function App() {

  const [role, setRole] = useState(LocalStorageService.getRole());

  console.log('role: ', role);

  return (
    <div className="App">
      <UserContext.Provider value={{ role, setRole }}>
        <Navbar />
        <PrivateRoutes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
