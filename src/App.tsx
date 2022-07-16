import { Header } from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/month-statistics" element={<MonthStatistics />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
