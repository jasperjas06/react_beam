import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [open,setOpen] = useState(false);
  return (
    // <div className="App">
    //   <NavBar/>
    // </div>
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home setOpen={setOpen} open={open} />} />
        {/* <Route path='/About' element={<About setOpen={setOpen} open={open} />} />
        <Route path='/solutions' element={<Solutions setOpen={setOpen} open={open} />} />
        <Route path='/process' element={<Process setOpen={setOpen} open={open} />} />
        <Route path='/work' element={<Work setOpen={setOpen} open={open} />} />
        <Route path='/contact' element={<Contact setOpen={setOpen} open={open} />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
