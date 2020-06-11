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
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Biscotto from "../components/Biscotto";
import Parola from "../components/Parola";
import TitoloCat from "../components/TitoloCat";

class Gioco1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriaScelta: {
        biscotto: "",
      },
      giocoInCorso: false,
      mostraParole: false,
      avanzamento: 0,
      biscotti: [
        {
          id: 1,
          indizio: "Acqua azzurra, acqua chiara",
          categoria: "Cose da orchestra",
          usato: false,
          active: false,
          parole: [
            { parola: "COGITO ERGO SUM", id: 1, scoperta: false },
            { parola: "PIASTRELLE BAGNATE", id: 2, scoperta: false },
            { parola: "POLEMICA", id: 3, scoperta: false },
            { parola: "MINA", id: 4, scoperta: false },
            { parola: "CALDAIA", id: 5, scoperta: false },
            { parola: "SCANDALO", id: 6, scoperta: false },
          ],
        },
        {
          id: 2,
          indizio: "Acqua azzurra, acqua chiara",
          categoria: "Cose da funerale",
          usato: false,
          active: false,
          parole: [
            { parola: "BOMBA", id: 1, scoperta: false },
            { parola: "VULCANO", id: 2, scoperta: false },
            { parola: "POLEMICA", id: 3, scoperta: false },
            { parola: "MINA", id: 4, scoperta: false },
            { parola: "CALDAIA", id: 5, scoperta: false },
            { parola: "SCANDALO", id: 6, scoperta: false },
          ],
        },
        {
          id: 3,
          indizio: "Acqua azzurra, acqua chiara",
          categoria: "Cose nell'acquario",
          usato: false,
          active: false,
          parole: [
            { parola: "BOMBA", id: 1, scoperta: false },
            { parola: "VULCANO", id: 2, scoperta: false },
            { parola: "POLEMICA", id: 3, scoperta: false },
            { parola: "MINA", id: 4, scoperta: false },
            { parola: "CALDAIA", id: 5, scoperta: false },
            { parola: "SCANDALO", id: 6, scoperta: false },
          ],
        },
        {
          id: 4,
          indizio: "Acqua azzurra, acqua chiara",
          categoria: "Cose in cemento",
          usato: false,
          active: false,
          parole: [
            { parola: "BOMBA", id: 1, scoperta: false },
            { parola: "VULCANO", id: 2, scoperta: false },
            { parola: "POLEMICA", id: 3, scoperta: false },
            { parola: "MINA", id: 4, scoperta: false },
            { parola: "CALDAIA", id: 5, scoperta: false },
            { parola: "SCANDALO", id: 6, scoperta: false },
          ],
        },
        {
          id: 5,
          indizio: "Acqua azzurra, acqua chiara",
          categoria: "Cose da settimana bianca",
          usato: false,
          active: false,
          parole: [
            { parola: "BOMBA", id: 1, scoperta: false },
            { parola: "VULCANO", id: 2, scoperta: false },
            { parola: "POLEMICA", id: 3, scoperta: false },
            { parola: "MINA", id: 4, scoperta: false },
            { parola: "CALDAIA", id: 5, scoperta: false },
            { parola: "SCANDALO", id: 6, scoperta: false },
          ],
        },
        {
          id: 6,
          indizio: "Acqua azzurra, acqua chiara",
          categoria: "Cose da Mike Bongiorno",
          usato: false,
          active: false,
          parole: [
            { parola: "BOMBA", id: 1, scoperta: false },
            { parola: "VULCANO", id: 2, scoperta: false },
            { parola: "POLEMICA", id: 3, scoperta: false },
            { parola: "MINA", id: 4, scoperta: false },
            { parola: "CALDAIA", id: 5, scoperta: false },
            { parola: "SCANDALO", id: 6, scoperta: false },
          ],
        },
      ],
    };
  }

  componentDidUpdate() {
    //console.log(this.state);
  }

  renderBiscotti = ({ item }) => {
    const { id, indizio, categoria, active, usato } = item;
    return (
      <Biscotto
        number={id}
        indizio={indizio}
        categoria={categoria}
        active={active}
        usato={usato}
        onPress={() => this.handleActiveBiscotto(id)}
      />
    );
  };

  renderParole = ({ item }) => {
    const { parola, scoperta, id } = item;
    return (
      <Parola
        scoperta={scoperta}
        number={id}
        categoria={parola}
        onPress={() => this.handleClickedParola(id)}
      />
    );
  };

  handleClickedParola = (index) => {
    let parolaCliccata = this.state.categoriaScelta.biscotto.parole[index - 1];
    const parolaDaMostrare = {
      ...this.state.categoriaScelta.biscotto.parole[index - 1],
      scoperta: true,
    };
    this.setState({
      ...this.state,
      categoriaScelta: {
        ...this.state.categoriaScelta,
        biscotto: {
          ...this.state.categoriaScelta.biscotto,
          parole: {
            ...this.state.categoriaScelta.biscotto.parole,
            [index - 1]: parolaDaMostrare,
          },
        },
      },
    });
  };

  handleActiveBiscotto = (index) => {
    let biscottoCliccato = this.state.biscotti[index - 1];
    const biscottoScelto = {
      ...this.state.biscotti[index - 1],
      active: !biscottoCliccato.active,
      paroleScoperte: 0,
    };
    this.setState({
      categoriaScelta: {
        ...this.state.categoriaScelta,
        biscotto: biscottoScelto,
      },
      biscotti: {
        ...this.state.biscotti,
        [index - 1]: biscottoScelto,
      },
      mostraParole: false,
    });
  };

  handleUsedBiscotto = (index) => {
    let biscottoUsato = this.state.categoriaScelta.biscotto;
    const updatedBiscotto = {
      ...this.state.biscotti[index - 1],
      usato: !biscottoUsato.usato,
    };
    this.setState({
      categoriaScelta: {
        ...this.state.categoriaScelta,
        biscotto: "",
      },
      giocoInCorso: false,
      mostraParole: false,
      avanzamento: this.state.avanzamento + 1,
      biscotti: {
        ...this.state.biscotti,
        [index - 1]: updatedBiscotto,
      },
    });
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
        {!this.state.mostraParole ? (
          <View style={styles.container}>
            <View style={styles.contGioco1}>
              <FlatList
                style={styles.flatlist}
                data={Object.values(this.state.biscotti)}
                renderItem={this.renderBiscotti}
                keyExtractor={(item) => item.id}
              />
            </View>
            {this.state.avanzamento == 6 && (
              <TouchableHighlight
                underlayColor={"#BFC47B"}
                onPress={() => this.props.navigation.navigate("Gioco2")}
                style={styles.buttonPlay}
              >
                <Text style={styles.passaGiocoSeguente}>
                  Passa al secondo gioco!
                </Text>
              </TouchableHighlight>
            )}
            {this.state.categoriaScelta.biscotto != "" &&
              !this.state.mostraParole && (
                <TouchableHighlight
                  underlayColor={"#BFC47B"}
                  onPress={() =>
                    this.setState({
                      mostraParole: true,
                    })
                  }
                  style={styles.buttonPlay}
                >
                  <Text style={styles.scopriParoleText}>Scopri le Parole!</Text>
                </TouchableHighlight>
              )}
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.contGioco1}>
              {this.state.categoriaScelta.biscotto.categoria != "" && (
                <TitoloCat
                  categoria={this.state.categoriaScelta.biscotto.categoria}
                />
              )}
              <FlatList
                style={styles.flatlist}
                data={Object.values(this.state.categoriaScelta.biscotto.parole)}
                renderItem={this.renderParole}
                keyExtractor={(item) => item.id}
              />
            </View>
            {this.state.mostraParole && !this.state.giocoInCorso && (
              <TouchableHighlight
                underlayColor={"#BFC47B"}
                onPress={() =>
                  this.setState({
                    giocoInCorso: true,
                  })
                }
                style={styles.buttonPlay}
              >
                <Text style={styles.playText}>Gioca!</Text>
              </TouchableHighlight>
            )}
            {this.state.giocoInCorso && (
              <View style={styles.countdownSec}>
                <CountdownCircleTimer
                  isPlaying
                  duration={1}
                  size={74}
                  strokeWidth={10}
                  colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                  onComplete={() =>
                    this.handleUsedBiscotto(
                      this.state.categoriaScelta.biscotto.id
                    )
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
          </View>
        )}
      </ImageBackground>
    );
  }
}

export default Gioco1;

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
  contGioco1: {
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
