import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SkillToWorker from "./components/SkillToWorker";
import { VillageToWorker } from "./components/VillageToWorker";
import { Buttons } from "./components/Buttons";
function App() {
  const [workers, setWorkers] = useState([]);
  const [figures, setFigures] = useState({
    constructionNumber: 0,
    securityNumber: 0,
    factoryNumber: 0,
  });

  useEffect(() => {
    fetch("http://covidxrayapi.herokuapp.com/labourData")
      .then((res) => res.json())
      .then((data) => {
        setWorkers(data.workers);
        console.log(data.workers);
      });
  }, []);

  // if (workers.length !== 0) {
  //   for (var i = 0; i <= workers.length; i++) {
  //     switch (workers[i].skills) {
  //       case "construction":
  //         setFigures(figures.constructionNumber++);
  //         break;
  //       case "factory worker":
  //         setFigures(figures.factoryNumber++);
  //         break;
  //       case "security":
  //         setFigures(figures.securityNumber++);
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }
  return (
    <Router>
      <div>
        <div className="navbar">
          <h2>Dashboard</h2>
          {/* {figures.constructionNumber}
          {figures.factoryNumber}
          {figures.securityNumber} */}
        </div>
        <div className="container">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>

        <Switch>
          <Route path="/wskills">
            <SkillToWorker workers={workers} />
          </Route>
          <Route path="/vskills">
            <VillageToWorker />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
