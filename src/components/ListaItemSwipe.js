import React from 'react';
import styled from 'styled-components/native';

const ListaItemSwipe = styled.TouchableHighlight`
  width:100%;
  height:50px;
  background-color: #6959CD;
  justify-content:center;
`;

const Icon = styled.View`
    width:20px;
    height:20px;
    background-color: #1E90FF;
    margin-left:15px;
`;

export default (props) => {
  return ( 
    <ListaItemSwipe onPress={props.onDelete} underlayColor='#836FFF'>
        <Icon />
    </ListaItemSwipe>
    );
};