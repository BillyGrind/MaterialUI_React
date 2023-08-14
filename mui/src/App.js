import { useState,useEffect } from "react";
import EnhancedTable from "./Table";
import TestAPi from "./TestApi";

function App() {
  return (
    <>
    {/* <EnhancedTable /> */}
    <TestAPi />
    </>
  );
}

export default App;



// ex API
// http://universities.hipolabs.com/search?country=Belgium
// https://www.boredapi.com/api/activity