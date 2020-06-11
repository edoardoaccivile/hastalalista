import React from "react";
import {
  Animated,
  FlatList,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";
import Categoria from "../components/Categoria";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

class Gioco2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avanzamento: 0,
      biscotti: [
        {
          id: 1,
          categoria: "Cose da orchestra",
          scoperta: false,
        },
        {
          id: 2,
          categoria: "Cose da funerale",
          scoperta: false,
        },
        {
          id: 3,
          categoria: "Cose nell'acquario",
          scoperta: false,
        },
        {
          id: 4,
          categoria: "Cose in cemento",
          scoperta: false,
        },
        {
          id: 5,
          categoria: "Cose da settimana bianca",
          scoperta: false,
        },
        {
          id: 6,
          categoria: "Cose da Mike Bongiorno",
          scoperta: false,
        },
      ],
    };
  }

  componentDidUpdate() {
    //console.log(this.state);
  }

  renderCategoria = ({ item }) => {
    const { categoria, scoperta, id } = item;
    return (
      <Categoria
        scoperta={scoperta}
        number={id}
        categoria={categoria}
        onPress={() => this.handleClickedParola(id)}
      />
    );
  };

  handleClickedParola = (index) => {
    let parolaCliccata = this.state.biscotti[index - 1];
    const parolaDaMostrare = {
      ...this.state.biscotti[index - 1],
      scoperta: true,
    };
    this.setState({
      ...this.state,
      avanzamento: this.state.avanzamento + 1,
      biscotti: {
        ...this.state.biscotti,
        [index - 1]: parolaDaMostrare,
      },
    });
    console.log(this.state.biscotti);
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/pattern.png")}
        style={styles.background}
      >
        <Image
          source={require("../assets/logo_esteso.png")}
          style={styles.logo}
        />
        <View style={styles.container}>
          <View style={styles.contGioco2}>
            <FlatList
              style={styles.flatlist}
              data={Object.values(this.state.biscotti)}
              renderItem={this.renderCategoria}
              keyExtractor={(item) => item.id}
            />
          </View>
          {this.state.avanzamento == 6 && (
            <TouchableHighlight
              underlayColor={"#BFC47B"}
              onPress={() => this.props.navigation.navigate("Gioco3")}
              style={styles.buttonPlay}
            >
              <Text style={styles.passaGiocoSeguente}>
                Passa al terzo gioco!
              </Text>
            </TouchableHighlight>
          )}
        </View>
      </ImageBackground>
    );
  }
}

export default Gioco2;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonPlay: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: 100,
    width: "90%",
    marginBottom: 20,
    backgroundColor: "#F8EADF",
    borderColor: "#34005A",
    borderWidth: 3,
    borderRadius: 10,
  },
  logo: {
    position: "relative",
    marginTop: 30,
  },
  container: {
    width: "100%",
    textAlign: "center",
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contGioco2: {
    flexDirection: "column",
    textAlign: "center",
    flex: 1,
    width: "90%",
    position: "relative",
    marginTop: 10,
    alignItems: "flex-start",
  },
  flatlist: {
    width: "100%",
  },
  playText: {
    fontSize: 70,
    fontFamily: "Falling Sky Black",
    textTransform: "uppercase",
    color: "#34005A",
    letterSpacing: -4,
  },
  passaGiocoSeguente: {
    fontSize: 40,
    fontFamily: "Falling Sky Black",
    textTransform: "uppercase",
    color: "#34005A",
    textAlign: "center",
    letterSpacing: -4,
    lineHeight: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  renderBiscotti: {
    fontSize: 40,
    fontFamily: "Falling Sky Black",
    textTransform: "uppercase",
    color: "#34005A",
    letterSpacing: -4,
  },
});
