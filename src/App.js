
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Componets/Dashboard/Dashboard';
import FAQ from './Componets/Dashboard/FAQ';
import Learnings from './Componets/Dashboard/Learnings';
import Main from './Componets/Dashboard/Main';
import Payment from './Componets/Dashboard/Payment';
import Settings from './Componets/Dashboard/Settings';
import Users from './Componets/Dashboard/Users';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard>
        </Dashboard>}>
          <Route index element={<Main></Main>}></Route>
          <Route path='users' element={<Main></Main>}></Route>
          <Route path='payment' element={<Main></Main>}></Route>
          <Route path='learning' element={<Main></Main>}></Route>
          <Route path='faqs' element={<Main></Main>}></Route>
          <Route path='settings' element={<Main></Main>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
