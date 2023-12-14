import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


// PAGES
import ErrorPage from "./pages/ErrorPage";
import Homepage from './pages/Homepage';

// COMPONENTS


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage />} />

      {/* ***  ERROR ROUTE  *** */}
      <Route path="*" element={<ErrorPage />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
