import React from 'react';
import SelectionCard from './SelectionCard';
import { utmeData } from '../listData/platformData';

function Utme() {
  return (
    <SelectionCard
      platform={utmeData}
      message='Select a subject and practice utme past questions with real time solution from our experts'
    />
  );
}

export default Utme;
