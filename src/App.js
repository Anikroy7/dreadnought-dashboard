
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Componets/Dashboard/Dashboard';
import Header from './Componets/Dashboard/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard>
        </Dashboard>}>
          <Route index element={<Header></Header>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
