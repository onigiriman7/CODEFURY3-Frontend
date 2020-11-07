import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export const Buttons = () => {
  return (
    <Router>
      <Link to="/wskills">Work Skills</Link>
      <Link to="/vskills">Village Skills</Link>
    </Router>
  );
};

// <div className="buttons">
//           <button className="wSkill">
//             <Link to="/workerSkills">Worker with Skills </Link>
//           </button>{" "}
//           <button className="vSkill">
//             <Link to="/villageSkills">Villages by Skills</Link>
//           </button>
{
  /* <SkillToWorker workers={workers} /> */
}
// </div>
