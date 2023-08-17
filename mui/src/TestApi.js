import React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TestApi() {
  const [universities, setUniversties] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://universities.hipolabs.com/search?country=Belgium&limit=10")
      .then((response) => response.json())
      .then((json) => setUniversties(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/* <caption>A basic table example with a caption</caption> */}
              <TableHead>
                <TableRow>
                  <TableCell align="left">University Name</TableCell>
                  <TableCell align="right">Web Pages</TableCell>
                  <TableCell align="right">Country</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {universities.map((university,index)=>(
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{university.name}</TableCell>
                    <TableCell align="right"><a href={university.web_pages}>{university.web_pages}</a></TableCell>
                    <TableCell align="right">{university.country}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}

