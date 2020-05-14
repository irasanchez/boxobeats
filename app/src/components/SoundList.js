import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSounds, addToPractice } from "../actions/actions";

const SoundList = (props) => {
  useEffect(props.getSounds, []);

  return (
    <Grid container spacing={24} style={{ width: "100%" }}>
      <List style={{ width: "100%" }}>
        {props.sounds.map((sound) => {
          return (
            <React.Fragment key={sound.id}>
              <ListItem
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  to={`/progress/${sound.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemText
                    style={{
                      textTransform: "uppercase",
                    }}
                    primary={sound.name}
                  ></ListItemText>
                </Link>
                <ListItemIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => props.addToPractice(sound)}
                >
                  <TiPlus />
                </ListItemIcon>
              </ListItem>

              {
                //if this is not the last one in the list, show a divider after
                props.sounds[props.sounds.length - 1] !== sound ? (
                  <Divider />
                ) : null
              }
            </React.Fragment>
          );
        })}
      </List>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    sounds: state.filtered,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getSounds, addToPractice })(
  SoundList
);
