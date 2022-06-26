import React from "react";
import { ToggleButton } from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  root: {
    width: "100%",
    justifyContent: "space-between",
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: ".8rem",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)": {
      borderRadius: "10px",
    },
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)": {
      borderRadius: "10px",
      border: "1px solid rgba(0, 0, 0, 0.12)",
    },
    "&.Mui-selected": {
      borderRadius: "10px",
      background: "#000",
      color: "#fff",
    },
    "&.MuiToggleButton-root": {
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
  },
});

const FilterListToggle = ({ options, value, selectToggle }) => {
  const classes = useStyles();
  return (
    <div>
      <ToggleButtonGroup value={value} exclusive onChange={selectToggle} className={classes.root}>
        {options.map(({ label, id, value }) => {
          return <ToggleButton value={value} id={id} className={classes.toggle}>
            {label}
          </ToggleButton>;
        })}
      </ToggleButtonGroup>
    </div>
  );
};

export default FilterListToggle;
