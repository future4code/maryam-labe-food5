import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export const BotaoSelecao = () => {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Dinheiro" control={<Radio />} label="Dinheiro" />
        <FormControlLabel value="Cartão de crédito" control={<Radio />} label="Crédito de crédito" />
      </RadioGroup>
    </FormControl>
  );
}