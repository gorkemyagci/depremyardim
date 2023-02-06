import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './pages/Home/HomeLayout';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeLayout/>}>
          <Route index={true} element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
