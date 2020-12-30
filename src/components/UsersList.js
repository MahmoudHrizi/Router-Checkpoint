import React from "react";
import "./UsersList.css";
//import { Container, Row } from 'reactstrap'
import { TableRow } from '@material-ui/core';
import { ListsMovies } from "./ListsMovies";
import MovieCard from "./MovieCard";

function UsersList() {
    return (
        //<Container>
        <TableRow>
            {ListsMovies.map(movie => <MovieCard movie={movie} />)}
        </TableRow>
        //</Container>
    )
}
export default UsersList;
