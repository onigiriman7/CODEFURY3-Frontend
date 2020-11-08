import React, { useEffect, useState } from "react";

export default function SkillToWorker({ workers, search }) {
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
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          paddingTop: "30px",
        }}
      >
        {filteredSkills.map((worker) => (
          <div
            className="crad"
            style={{
              width: window.innerWidth > 500 ? "30%" : "90%",
              boxShadow: "0px 0px 20px 3px rgb(0,0,0,0.1)",
              border: "1px solid black",
              backgroundColor: "white",
              padding: "50px",
              margin: 10,
            }}
          >
            <h3 style={{ textTransform: "capitalize" }}>{worker.name}</h3>
            <hr />
            <h4>Aadhar number : {worker.aadhar_id}</h4>
            <h4>Occupation : {worker.skills}</h4>
            <h4>Village : {worker.village}</h4>
            <button
              style={{
                padding: "7px 20px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "lightgreen",
              }}
            >
              Hire
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}