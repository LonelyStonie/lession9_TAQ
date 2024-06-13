
import './App.css';
import Taqsinhvienlist from './components/Taqsinhvienlist';
import axios from "axios";
import { useState, useEffect } from 'react';
function App() {
  // su dung ham use state cua hook
  const [Taqsinhvienlist, setTaqsinhvienlist]=useState;
  // get data from api
  const taqGetStudent = async () => {
    try {
      const response = await axios.get("https://666a5f437013419182cf071d.mockapi.io/api/taq1/taqSinhVien");
      setTaqsinhvienlist(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    taqGetStudent();
  }, []);
  return (
    <div className="App">
      <h1 className='text-center my-3'>xu ly chuc nang crud - hook -api</h1>
      <hr/>

      <Taqsinhvienlist renderTaqsinhvienlist = {Taqsinhvienlist} />

    </div>
  );
}

export default App;
