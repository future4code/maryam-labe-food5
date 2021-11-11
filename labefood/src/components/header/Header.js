import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import {StyledToolbar } from './styled';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router';

export function Header(props) {
    const history = useHistory()


  return (
    
      <AppBar color={''} position="static">
        <StyledToolbar 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }} 
            color={'black'}>
              {props.title}
          <IconButton
            color="default"
            sx={{ mr: 2 }}
          >
            <ArrowBackIosIcon onClick={() => history.goBack()}/>
          </IconButton>
          </StyledToolbar>
      </AppBar>
  );
}