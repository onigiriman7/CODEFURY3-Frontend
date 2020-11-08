import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SkillToWorker from "./components/SkillToWorker";
import { VillageToWorker } from "./components/VillageToWorker";
import { PieChart } from "react-minimal-pie-chart";
function App() {
  const [workers, setWorkers] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [figures, setFigures] = useState({
    constructionNumber: 0,
    securityNumber: 0,
    factoryNumber: 0,
  });
  const countFac = workers.filter((obj) => obj.skills === "factory worker")
    .length;
  const countSec = workers.filter((obj) => obj.skills === "security").length;
  const countConst = workers.filter((obj) => obj.skills === "construction")
    .length;

  useEffect(() => {
    fetch("https://covidxrayapi.herokuapp.com/labourData")
      .then((res) => res.json())
      .then((data) => {
        setWorkers(data.workers);
        console.log(data.workers);
      });
  }, []);
  console.log(workers);
  return (
    <>
      <div>
        <div className="navbar">
          <h2
            style={{
              fontSize: window.innerWidth < 500 ? 30 : 42,
            }}
          >
            Dashboard
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              padding: 10,
            }}
          >
            <input
              type="text"
              placeholder="Search for skills.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                border: "1px solid lightblue",
                width: window.innerWidth > 500 ? "50%" : "30%",
                padding: "10px",
                borderRadius: "5px",
              }}
            />
            <button
              onClick={() => {
                setShowFilter(!showFilter);
              }}
            >
              {showFilter ? (
                "Close"
              ) : (
                <i
                  className="fa fa-search"
                  style={{ fontSize: "20px", padding: "7px" }}
                ></i>
              )}
            </button>
          </div>
        </div>
        <h1 style={{ width: "100%", textAlign: "center", fontWeight: "100" }}>
          Occupation <i className="fa fa-pie-chart"></i>
        </h1>

        <PieChart
          animate={true}
          data={[
            { title: "One", value: countSec, color: "#add8e6" },
            { title: "Two", value: countFac, color: "#FFB6C1" },
            { title: "Three", value: countConst, color: "	#32CD32" },
          ]}
          viewBoxSize={[240, 100]}
          radius={40}
          // label={({ dataEntry }) => dataEntry.value}
          // labelStyle={{ fontSize: "5px" }}
        />
        <div
          style={{
            display: window.innerWidth > 500 ? "block" : "none",
            position: "absolute",

            top: "60%",
            left: "70%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <div>
            {" "}
            <div
              style={{
                width: "20px",
                height: "20px",
                border: "1px solid grey",
                backgroundColor: "lightgreen",
              }}
            ></div>
            <h2
              style={{
                width: "100%",
              }}
            >
              {" "}
              Construction Worker
            </h2>
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                border: "1px solid grey",
                backgroundColor: "lightpink",
              }}
            ></div>{" "}
            <h2> Factory worker</h2>
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            {" "}
            <div
              style={{
                width: "20px",
                height: "20px",
                border: "1px solid grey",
                backgroundColor: "lightblue",
              }}
            ></div>
            <h2> Security Personell</h2>
          </div>
          <br />
        </div>
      </div>
      {showFilter && <SkillToWorker workers={workers} search={search} />}
    </>
  );
}

export default App;