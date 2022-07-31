import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Popup } from "./components/Home/PopUp/Popup";
import { useState } from "react";

function App() {
  const [openpopup, setOpenpopup] = useState(false);
  function handlePopup(event: boolean) {
    setOpenpopup(event);
  }

  const [city, setCity] = useState("Novosibirsk");

  function changeCity(event: string) {
    setCity(event);
  }

  return (
    <div className="globalcontainer">
      {openpopup ? <Popup handlePopup={handlePopup} /> : ""}
      <div className="container">
        <Header changeCity={changeCity} />
        <Home city={city} handlePopup={handlePopup} />
      </div>
    </div>
  );
}

export default App;
