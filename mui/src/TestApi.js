import React from "react";
import { useEffect, useState } from "react";

export default function TestApi() {
  const [universities,setUniversties] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://universities.hipolabs.com/search?country=Belgium")
      .then((response) => response.json())
      .then((json) => setUniversties(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(universities);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
            {universities.map((university,index)=>(
                <div key={index} className="university-container">
                    <div>Name : {university.name}</div>
                    <div>Web Page : {university.web_pages}</div>
                    <div>On sait que c'est en Belgique mais en le mets juste pour le sport : {university.country}</div>
                </div>
            ))}
        </>
      )}
    </>
  );
}
