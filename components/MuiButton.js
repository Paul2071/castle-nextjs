import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup({texta, textb, textc, textd, onClicka, onClickb, onClickc, onClickd}) {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" >
      <Button onClick={onClicka}>{texta}</Button>
      <Button onClick={onClickb}>{textb}</Button>
      <Button onClick={onClickc}>{textc}</Button>
      <Button onClick={onClickd}>{textd}</Button>
    </ButtonGroup>
  );
}