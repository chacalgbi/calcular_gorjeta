import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableHighlight`
    padding:10px;
    flex-direction:row;
`;

const ItemText = styled.Text`
    font-size: 15px;
    flex:1;
`;

const ItemCheck = styled.View`
    width:20px;
    height:20px;
    border-radius:10px;
    border:5px solid #CCC;
`;

export default (props) => {
    return ( 
        <Item onPress={()=>{}} underlayColor="#6959CD" activeOpacity={0.2}>
            <>
                <ItemText>{props.data.tarefa}</ItemText>
                <ItemCheck></ItemCheck>
            </>
        </Item>
      );
  };