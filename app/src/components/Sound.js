import React from "react";
import { Card, CardContent } from "@material-ui/core";

const Sound = props => {
  return (
    <Card>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default Sound;
