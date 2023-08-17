import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable() {
  const [universities, setUniversties] = useState([]);
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

  const columns = [
    { field: "universityName", headerName: "University Name", flex: 1 },
    { field: "webPages", headerName: "Web Pages", flex: 1 },
    { field: "country", headerName: "Country", flex: 1 },
  ];

  const rows = universities.map((university, index) => ({
    id: index,
    universityName: university.name,
    webPages: university.web_pages,
    country: university.country,
  }));

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      )}
    </>
  );
}
