import React, { useEffect, useState } from "react";

export default function SkillToWorker({ workers }) {
  const [search, setSearch] = useState("");
  const [filteredSkills, setFilteredSkills] = useState([]);
  useEffect(() => {
    setFilteredSkills(
      workers.filter((worker) => {
        return worker.skills.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, workers]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        style={{
          border: "1px solid lightblue",
          width: "30%",
          padding: "10px",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%,-50%)",
          borderRadius: "5px",
        }}
      />
      {filteredSkills.map((worker) => (
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",

            paddingTop: "30px",
          }}
        >
          <div
            className="crad"
            style={{
              width: "30%",
              boxShadow: "0px 0px 20px 3px rgb(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <h3>Worker Name : {worker.name}</h3>
            <h4>Aadhar number : {worker.aadhar_id}</h4>
            <h4>Village : {worker.village}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
