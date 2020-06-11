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
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

class Gioco3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avanzamento: 0,
      biscotti: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://www.accedodigitalagency.com/hastalalista/estrai18categorie.php`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          biscotti: response.gioco3,
        });
      });
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
          <View style={styles.contGioco3}>
            <FlatList
              style={styles.flatlist}
              data={Object.values(this.state.biscotti)}
              renderItem={this.renderCategoria}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          {!this.state.giocoInCorso && (
            <TouchableHighlight
              underlayColor={"#BFC47B"}
              onPress={() =>
                this.setState({
                  giocoInCorso: true,
                  giocoFinito: false,
                })
              }
              style={styles.buttonPlay}
            >
              <Text style={styles.playText}>Gioca!</Text>
            </TouchableHighlight>
          )}
          {this.state.giocoInCorso && !this.state.giocoFinito && (
            <View style={styles.countdownSec}>
              <CountdownCircleTimer
                isPlaying
                duration={60}
                size={74}
                strokeWidth={10}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                onComplete={() =>
                  this.setState({
                    giocoFinito: true,
                  })
                }
              >
                {({ remainingTime, animatedColor }) => (
                  <Animated.Text
                    style={{ ...styles.remainingTime, color: animatedColor }}
                  >
                    {remainingTime}
                  </Animated.Text>
                )}
              </CountdownCircleTimer>
            </View>
          )}
          {this.state.giocoFinito && (
            <TouchableHighlight
              underlayColor={"#BFC47B"}
              onPress={() => this.props.navigation.navigate("WelcomeScreen")}
              style={styles.buttonPlay}
            >
              <Text style={styles.passaGiocoSeguente}>Torna alla Home!</Text>
            </TouchableHighlight>
          )}
        </View>
      </ImageBackground>
    );
  }
}

export default Gioco3;

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
  countdownSec: {
    position: "relative",
    marginBottom: 20,
    minHeight: 100,
    backgroundColor: "#F8EADF",
    width: "90%",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#34005A",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
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
  contGioco3: {
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
    fontSize: 40,
    fontFamily: "Falling Sky Black",
    textTransform: "uppercase",
    color: "#34005A",
    letterSpacing: -4,
  },
  scopriParoleText: {
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
  remainingTime: {
    fontSize: 35,
    fontFamily: "Falling Sky Black",
    letterSpacing: -2,
  },
});
