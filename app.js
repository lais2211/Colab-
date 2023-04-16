import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet, FlatList } from "react-native";
import api from "./src/Services/api";
import usuario from "./src/Pages/usuario";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: [],
    };
  }

  async componentDidMount() {
    const response = await api.get("");
    this.setState({
      usuario: response.data,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList>
          data=(this.state.usuario) keyExtractor = {(item) => item.gender}
          renderItem={({item}) => <usuario data={item} />}
        </FlatList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
});
