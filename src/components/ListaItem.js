import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableHighlight`
    flex-direction:row;
    height:50px;
    align-items:center;
    padding-left:20px;
    padding-right:20px;
    background-color:#DCDCDC;
`;

const ItemText = styled.Text`
    font-size: 15px;
    flex:1;
`;

const ItemCheck = styled.View`
    width:20px;
    height:20px;
    border-radius:5px;
    border:3px solid #CCC;
    background-color:${props=>props.estado_done?'#32CD32':'transparent'};
`;

export default (props) => {
    return ( 
        <Item onPress={props.aoPressionar} underlayColor="#A9A9A9" activeOpacity={1}>
            <>
                <ItemText>{props.data.id} - {props.data.tarefa}</ItemText>
                <ItemCheck estado_done={props.data.done}></ItemCheck>
            </>
        </Item>
      );
  };