import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SkillToWorker from "./components/SkillToWorker";
import { VillageToWorker } from "./components/VillageToWorker";
import { PieChart } from 'react-minimal-pie-chart';
function App() {
  const [workers, setWorkers] = useState([]);
  const [showFilter, setShowFilter] =useState(false);
  const [search, setSearch] = useState("");
  const [figures, setFigures] = useState({
    constructionNumber: 0,
    securityNumber: 0,
    factoryNumber: 0,
  });
  const countFac = workers.filter(obj => obj.skills === "factory worker").length
  const countSec = workers.filter(obj => obj.skills === "security").length
  const countConst = workers.filter(obj => obj.skills === "construction").length
 
  useEffect(() => {
    fetch("http://covidxrayapi.herokuapp.com/labourData")
      .then((res) => res.json())
      .then((data) => {
        setWorkers(data.workers);
        console.log(data.workers);
      });
  }, []);
  console.log(workers)
  return (
    <>
      <div>
        <div className="navbar">
          <h2 style={{
            fontSize: (window.innerWidth<500?30:42)
          }}>Dashboard</h2>
          <div style={{
            display:"flex",
            flexWrap:"wrap",
            padding:10
          }}>
          <input
            type="text"
            placeholder="Search for skills.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              border: "1px solid lightblue",
              width: (window.innerWidth>500?"50%":"30%"),
              padding: "10px",
              borderRadius: "5px",
            }}
      />
          <button onClick={()=>{
            setShowFilter(!showFilter)
          }}>{showFilter?"Close" :"Search"}</button> 
          </div>
        </div>
      
    
        <PieChart
         animate={true}
          data={[
            { title: 'One', value: countSec, color: '#add8e6' },
            { title: 'Two', value: countFac, color: '#FFB6C1' },
            { title: 'Three', value: countConst, color: '	#32CD32' }
          ]}
          viewBoxSize = {[300,100]}
          radius={35}
      />
      <div style={{position:"relative",padding:150,width:"50%", display:(window.length>500?"flex":"none"), justifyContent:"center",alignItems:"center", flexWrap:"wrap"}}>
       <div> <h3 style={{
         width:"100%"
       }}>Green : Construction Worker</h3></div>
      <div style={{
         width:"100%", textAlign:"center"
       }}>  <h3>Pink : Factory worker</h3></div>
       <div style={{
         width:"100%", textAlign:"center"
       }}> <h3>Blue : Security Personell</h3></div><br/>
      </div>
      </div>
      { showFilter && <SkillToWorker workers={workers} search={search} />}
        
     
    
      
    </>
  );
}

export default App;
