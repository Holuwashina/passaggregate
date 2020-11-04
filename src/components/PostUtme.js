import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import SelectionCard from './SelectionCard';
import { universityData, polytechnicData } from '../listData/platformData';

function PostUtme() {
  const [radioBtn, setRadioBtn] = React.useState('university');

  const handleRadioBtn = (event) => {
    setRadioBtn(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <RadioGroup
        row
        aria-label='School'
        value={radioBtn}
        onChange={handleRadioBtn}
        style={{
          justifyContent: 'center',
        }}
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

      {radioBtn === 'university' && (
        <SelectionCard
          platform={universityData}
          message='Select your prefered university to practice post-utme past questions related to the university choosen'
        />
      )}
      {radioBtn === 'polytechnic' && (
        <SelectionCard
          platform={polytechnicData}
          message='Select your prefered polytechnic to practice post-utme past questions related to the polytechnic choosen'
        />
      )}
    </div>
  );
}

export default PostUtme;
