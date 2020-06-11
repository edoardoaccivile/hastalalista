import React from "react";
import {
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";
import BgAudio from "react-native-background-audio";

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/pattern.png")}
        style={styles.background}
      >
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <View style={styles.contButton}>
          <TouchableHighlight
            underlayColor={"#66457E"}
            style={styles.buttonPurple}
            onPress={() => this.props.navigation.navigate("Gioco1")}
          >
            <Text style={styles.text1}>Gioca</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={"#BFC47B"}
            onPress={() => this.props.navigation.navigate("Regolamento")}
            style={styles.buttonGreen}
          >
            <Text style={styles.text2}>Regolamento</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={"#BFC47B"}
            onPress={() => this.props.navigation.navigate("Credits")}
            style={styles.buttonGreen}
          >
            <Text style={styles.text2}>Credits</Text>
          </TouchableHighlight>

          {/* <TouchableHighlight
          underlayColor={"#BFC47B"}
          onPress={() => console.log("click on ESTRAI")}
          style={styles.buttonGreen}
        >
          <Text style={styles.text2}>Estrai una carta</Text>
        </TouchableHighlight> */}
        </View>
      </ImageBackground>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    position: "relative",
    marginTop: 30,
  },
  contButton: {
    flexDirection: "column",
    textAlign: "center",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
  buttonPurple: {
    backgroundColor: "#34005A",
    borderWidth: 3,
    borderColor: "#D3D985",
    borderRadius: 10,
    width: "85%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonGreen: {
    backgroundColor: "#D3D985",
    borderWidth: 3,
    borderColor: "#34005A",
    borderRadius: 10,
    width: "85%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  text1: {
    fontFamily: "Falling Sky Black",
    fontSize: 45,
    color: "#D3D985",
    textTransform: "uppercase",
    letterSpacing: -2,
  },
  text2: {
    fontFamily: "Falling Sky Black",
    fontSize: 25,
    color: "#34005A",
    textTransform: "uppercase",
  },
});
