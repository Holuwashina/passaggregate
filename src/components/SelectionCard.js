import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Card,
  CardContent,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "15px 0",
    minWidth: "250px",
  },

  card: {
    maxWidth: "400px",
    [theme.breakpoints.only("xs")]: {
      minWidth: "300px",
    },
  },
}));


function SelectionCard ( {platform, message} ) {
  const [ {index, list} ] = platform;
  const classes = useStyles();
  const [select, setSelect] = React.useState("DEFAULT");

  const handleSelect = (event) => {
    setSelect( event.target.value );
  };

  return (
    <>
    <Card className={classes.card}>
      <CardContent>
      <Alert severity='info'>{message}</Alert>
      <FormControl
        className={classes.form}
        fullWidth
        size='small'
        variant='outlined'
      >
        <InputLabel>{index}</InputLabel>
        <Select
          value={select}
          onChange={handleSelect}
          label={index}
        >
          <MenuItem value='DEFAULT'>DEFAULT</MenuItem>
          {list.map((school) => (
            <MenuItem key={school} value={school}>
              {school}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        size='small'
        variant='outlined'
        disabled
        label='Selected'
        value={select}
      />
      <Button
        style={{ margin: "4px 10px 0" }}
        size='small'
        disabled={select === "DEFAULT"}
        endIcon={<GraphicEqIcon />}
      >
        Explore
      </Button>
      </CardContent>
     </Card>
    </>
  );
}

export default SelectionCard;
