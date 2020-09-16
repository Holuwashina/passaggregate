import React from 'react';
import {Radio, RadioGroup, FormControlLabel} from '@material-ui/core';
import University from "../components/University";
import { universityData, polytechnicData } from "../listData/selectSchoolData";

function RadioBtn() {
    const [radio, setRadio] = React.useState("university");

    const handleRadio = (event) => {
        setRadio(event.target.value);
      };

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
          <RadioGroup
          row
          aria-label='School'
          value={radio}
          onChange={handleRadio}
          >
              <FormControlLabel 
              label='University'
              value='university'
              control={<Radio />}
              />

            <FormControlLabel 
              label='Polytechnic'
              value='polytechnic'
              control={<Radio />}
              />
              
              </RadioGroup> 

              {
                radio === 'university' && <University platform={universityData} />
              } 
              {
                radio === 'polytechnic' && <University platform={polytechnicData} />
              } 
        </div>
    )
}

export default RadioBtn
