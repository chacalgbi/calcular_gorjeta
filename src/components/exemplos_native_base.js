import React, { Component } from 'react';
import { Container, Header, Content, Button, Card, CardItem, Body, Text, Spinner } from 'native-base';

export default () => {
  return (
    <Container>
    <Header />
    <Content>
      <Button bordered rounded danger>
        <Text>Click Me!</Text>
      </Button>
      <Button block info>
        <Text>Info</Text>
      </Button>
      <Card>
            <CardItem>
              <Body>
                <Text>
                   //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
    </Content>
    <Spinner color='red' />
    <Content padder>
        <Card>
            <CardItem header bordered>
                <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                <Text>
                    NativeBase is a free and open source framework that enable
                    developers to build
                    high-quality mobile apps using React Native iOS and Android
                    apps
                    with a fusion of ES6.
                </Text>
                </Body>
            </CardItem>
            <CardItem footer bordered>
                <Text>GeekyAnts</Text>
            </CardItem>
        </Card>
    </Content>
  </Container>
  );
};