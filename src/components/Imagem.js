import React, {useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

export default () => {
  const [status, setStatus] = useState('');
  return (
    <View style={estilo.viewPrincipal}>
      <Image
        //source={require('../img/logo.png')} // Img Local
        source={{uri:'https://www.google.com.br/google.jpg'}} // Img link
        style={estilo.img}
        resizeMode="center"
        defaultSource={require('../img/padrao.jpg')}
        onLoadStart={()=>setStatus('Carregando...')}
        onLoad={()=>setStatus('Carregou!')}
        onError={(e)=>setStatus(e.nativeEvent.error)}
      />
      <Text>{status}</Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  viewPrincipal:{
    marginTop: 10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'#4169E1',
    width:200,
    height:200,
    borderRadius: 30,
  },
  img:{
    width: 150,
    height: 100,
    backgroundColor:'#ADD8E6',
  },
  });
