import './index.css';
import AddEmployeeComponent from './component/AddEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='container'> 
        <HeaderComponent/>
          <Routes>
            <Route path='/' element={<ListEmployeeComponent/>}></Route>
            <Route path='/employee' element={<ListEmployeeComponent/>}></Route>
            <Route path='/add-employee' element={<AddEmployeeComponent/>}></Route>
            <Route path='/add-employee/:id' element={<AddEmployeeComponent/>}></Route>
          </Routes>
      </div>
      <FooterComponent/>
    </BrowserRouter>
  );
}

export default App;
