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


function University ( { platform } ) {
  const [ { index, list } ] = platform;
  const classes = useStyles();
  const [university, setUniversity] = React.useState("DEFAULT");

  const handleUniversity = (event) => {
    setUniversity( event.target.value );
  };

  return (
    <>
    <Card className={classes.card}>
      <CardContent>
      <Alert severity='info'>Select your prefered institution below to continue</Alert>
      <FormControl
        className={classes.form}
        fullWidth
        size='small'
        variant='outlined'
      >
        <InputLabel id='demo'>{index}</InputLabel>
        <Select
          id='University'
          value={university}
          onChange={handleUniversity}
          label='University'
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
        id='outlined-disabled'
        disabled
        label='Selected'
        value={university}
      />
      <Button
        style={{ margin: "4px 10px 0" }}
        size='small'
        disabled={university === "DEFAULT"}
        endIcon={<GraphicEqIcon />}
      >
        Explore
      </Button>
      </CardContent>
     </Card>
    </>
  );
}

export default University;
