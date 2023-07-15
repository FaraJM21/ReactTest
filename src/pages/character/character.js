/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BaseUrl } from "../../server/server";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./style.scss";

function Character() {
  let param = useParams();
  const [character, setChacter] = useState({});

  const getCharacter = async () => {
    await axios
      .get(BaseUrl + `/character/${param.id}`)
      .then((res) => setChacter(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCharacter();
  }, []);
  console.log(character);

  // console.log(character.location.name);
  return (
    <Container maxWidth="lg">
      <div className="wrapper">
        <div className="info">
          <img src={character.image} alt="404" />
        </div>
        {/* <div className="details">
          <h3>
            {" "}
            Name: <span>{character.name}</span>{" "}
          </h3>
          <h3>
            {" "}
            Species: <span>{character.species}</span>
          </h3>
          <h3>
            {" "}
            Location:{" "}
            <span> </span>
          </h3>
        </div> */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Species</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {character.name}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {character.species}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {character.gender}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {character.status}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {character.location && character.location.name}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}

export default Character;
