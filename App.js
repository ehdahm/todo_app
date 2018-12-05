import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import Header from './components/header';

export default class App extends React.Component {
  render() {
    return (
      // Container
      <View style={styles.container}>
      <Header textIwant="Welcome" />
     <Avatar
      size='xlarge'
      rounded
      source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
      onPress={() => console.log('Works!')}
      activeOpacity={0.7}
     />
      <Text>Open2 up App.js to start working on your app!</Text>
        <Button 
        title={'hello'} 
        onPress={() => { console.log('happy'); }}
        color="black"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
