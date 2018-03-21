import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Input from './src/Components/Input/Input';
import PlaceList from './src/Components/PlaceList/PlaceList';
import placeImage from './src/assets/beautiful-place.jpg';
import PlaceDetail from './src/Components/PlaceDetail/PlaceDetail';

export default class App extends Component {
  state = {
    placesArray: [],
    selectedPlace: null,
  }

  addPlaceHandler = (placename) => {
    this.setState(prevState => {
      return {
        placesArray: prevState.placesArray.concat({
          key: Math.random(),
          name: placename,
          image: {
            uri: "https://ci.phncdn.com/pics/albums/016/565/102/198935812/(m=e-yaaGqaa)(mh=YPZtNS1sdyniwwU6)original_198935812.jpg"
          }
        })
      };
    });
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        placesArray: prevState.placesArray.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null,
      };
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.placesArray.find(place => {
          return place.key === key;
        })
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <Input placeAdded={this.addPlaceHandler} />
        <PlaceList
          places={this.state.placesArray}
          onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
});
