import './App.css';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const handleClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  
  return (
    <div className="App">
      <div className={"button-border " + (theme === "light" ? "light" : "dark")}>
        <button className={(theme === "light" ? "sun" : "moon")} onClick={handleClick}>
          <div className="crater1"></div>
          <div className="crater2"></div>
          <div className="crater3"></div>
        </button>
        <div className={"shine shine1 " + (theme === "light" ? "lightShine" : "darkShine")}>
        </div>
        <div className={"shine shine2 " + (theme === "light" ? "lightShine" : "darkShine")}>
        </div>
        <div className={"shine shine3 " + (theme === "light" ? "lightShine" : "darkShine")}>
        </div>

        <div className={"cloud " + (theme === "light" ? "cloud-active0" : "cloud-disabled0")}>
        </div>
        <div className={"cloud " + (theme === "light" ? "cloud-active1" : "cloud-disabled1")}>
        </div>
        <div className={"cloud " + (theme === "light" ? "cloud-active2" : "cloud-disabled2")}>
        </div>
        <div className={"cloud " + (theme === "light" ? "cloud-active3" : "cloud-disabled3")}>
        </div>
        <div className={"cloud " + (theme === "light" ? "cloud-active4" : "cloud-disabled4")}>
        </div>
        <div className={"cloud " + (theme === "light" ? "cloud-active5" : "cloud-disabled5")}>
        </div>
        <div className={"cloud " + (theme === "light" ? "cloud-active6" : "cloud-disabled6")}>
        </div>
        <div className={"cloud " + (theme === "light" ? "cloud-active7" : "cloud-disabled7")}>
        </div>
        <div className={"cloud " + (theme === "light" ? "cloud-active8" : "cloud-disabled8")}>
        </div>

        <div className={"star " + (theme === "dark" ? "star-active0" : "star-disabled0")}>
        </div>
        <div className={"star " + (theme === "dark" ? "star-active1" : "star-disabled1")}>
        </div>
        <div className={"star " + (theme === "dark" ? "star-active2" : "star-disabled2")}>
        </div>

        <div className={"ministar " + (theme === "dark" ? "ministar-active0" : "ministar-disabled0")}>
        </div>
        <div className={"ministar " + (theme === "dark" ? "ministar-active1" : "ministar-disabled1")}>
        </div>
        <div className={"ministar " + (theme === "dark" ? "ministar-active2" : "ministar-disabled2")}>
        </div>
        <div className={"ministar " + (theme === "dark" ? "ministar-active3" : "ministar-disabled3")}>
        </div>
        <div className={"ministar " + (theme === "dark" ? "ministar-active4" : "ministar-disabled4")}>
        </div>
      </div>
    </div>
  );
}

export default App;
