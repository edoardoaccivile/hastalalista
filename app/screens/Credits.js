import React from "react";
import {
  ImageBackground,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

class Credits extends React.Component {
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

        <View style={styles.contRegolamento}>
          <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
            <Text style={styles.titolo}>Credits</Text>
            <View style={styles.singleRule}>
              <Text style={styles.testoRegola}>Un gioco di</Text>
              <Text style={styles.titoloRegola}>Francesco Lancia</Text>
            </View>
            <View style={styles.singleRule}>
              <Text style={styles.testoRegola}>Sviluppo App e testi</Text>
              <Text style={styles.titoloRegola}>Edoardo Accivile</Text>
            </View>
            <View style={styles.singleRule}>
              <Text style={styles.testoRegola}>Collaborazione ai testi</Text>
              <Text style={styles.titoloRegola}>Vittorio Di Resta</Text>
            </View>
            <View style={styles.singleRule}>
              <Text style={styles.testoRegola}>Logo realizzato da</Text>
              <Text style={styles.titoloRegola}>Marco Lombardo</Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default Credits;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    position: "relative",
    marginTop: 30,
  },
  contRegolamento: {
    flexDirection: "column",
    textAlign: "center",
    width: "95%",
    position: "relative",
    backgroundColor: "white",
    borderColor: "#34005A",
    borderRadius: 10,
    borderWidth: 4,
    alignItems: "center",
    marginTop: 12,
    paddingTop: 10,
    paddingBottom: 10,
  },
  singleRule: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  titolo: {
    fontFamily: "Falling Sky Black",
    fontSize: 35,
    color: "#34005A",
    textTransform: "uppercase",
    letterSpacing: -1,
    width: "100%",
    textAlign: "center",
    marginBottom: 10,
  },
  testoRegola: {
    fontFamily: "Falling Sky Light",
    fontSize: 20,
    color: "#111",
    letterSpacing: -0.7,
    textAlign: "left",
    lineHeight: 25,
    marginBottom: 10,
    width: "100%",
    textAlign: "center",
  },
  titoloRegola: {
    backgroundColor: "#34005A",
    borderWidth: 0,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderColor: "#D3D985",
    borderRadius: 10,
    width: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    fontFamily: "Falling Sky Black",
    fontSize: 28,
    textTransform: "uppercase",
    letterSpacing: 0,
    marginBottom: 5,
  },
});
