import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Input from './src/Components/Input/Input';
import PlaceList from './src/Components/PlaceList/PlaceList';

export default class App extends Component {
  state = {
    placesArray: [],
  }

  addPlaceHandler = (placename) => {
    this.setState(prevState => {
      return {
        placesArray: prevState.placesArray.concat(placename)
      };
    })
  }

  placeDeletedHandler = index => {
    this.setState(prevState => {
      return {
        placesArray: prevState.placesArray.filter((place, i) => {
          return i !== index;
        })
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Input placeAdded={this.addPlaceHandler} />
        <PlaceList
          places={this.state.placesArray}
          onItemDeleted={this.placeDeletedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
