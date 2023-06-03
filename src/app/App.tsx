import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { Leaderboard, Login } from '../pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Leaderboard />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
