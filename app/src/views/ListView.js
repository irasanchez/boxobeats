import React from "react";
import SearchBar from "../components/SearchBar";
import Sounds from "../components/Sounds";
import { Container } from "@material-ui/core";
const ListView = () => {
  return (
    <>
      <SearchBar />
      <Container>
        <Sounds />
      </Container>
    </>
  );
};

export default ListView;
