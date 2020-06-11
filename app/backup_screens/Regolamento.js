import React, { Component } from "react";
import {
  ImageBackground,
  Image,
  FlatList,
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import TitoloCat from "../components/TitoloCat";

class Regolamento extends React.Component {
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
            <Text style={styles.titolo}>Regolamento</Text>
            <View style={styles.singleRule}>
              <Text style={styles.titoloRegola}>Primo Gioco</Text>
              <Text style={styles.testoRegola}>
                Si gioca su 6 categorie, 3 per ognuna squadra. Appariranno le
                categorie che 'nasconderanno' il vero argomento della lista. Al
                proprio turno si sceglie quale dei due giocatori deve indovinare
                e quale deve far indovinare. Una volta scelto, il giocatore che
                deve far indovinare prende in mano il telefono e seleziona una
                delle categorie. Il primo dovrà far indovinare utilizzando il
                linguaggio della parola senza poter utilizzare parole o termini
                con la stessa radice della parola da far indovinare. Ogni parola
                indovinata vale 1 punto.
              </Text>
            </View>
            <View style={styles.singleRule}>
              <Text style={styles.titoloRegola}>Secondo Gioco</Text>
              <Text style={styles.testoRegola}>
                Nel secondo gioco si scopre la categoria e ogni giocatore,
                seguendo il giro in senso orario, ha 5 secondi per dire un
                elemento appartenente a quella categoria, il primo giocatore che
                dice un elemento che non ha legami con la categoria, o ripete
                qualcosa di già detto, regala 3 punti alla squadra avversaria e
                si procede all'estrazione della nuova categoria. Si gioca su 6
                categorie.
              </Text>
            </View>
            <View style={styles.singleRule}>
              <Text style={styles.titoloRegola}>Terzo Gioco</Text>
              <Text style={styles.testoRegola}>
                Nel terzo gioco è la categoria a dover essere indovinata. La
                coppia sceglie chi fa indovinare e chi deve indovinare, il
                deputato a fare indovinare può solamente dire elementi di una
                categoria (es. se la categoria da far indovinare è "Cose da
                frutteria", si potrà iniziare a dire: pesca, pera, fragole,
                mele...). 60 secondi per indovinare 6 categorie, comincia la
                squadra in svantaggio nel punteggio. Si ottengono: 5 punti per 4
                categorie indovinate, 10 per 5 categorie indovinate e 15 punti
                per tutte e 6 le categorie indovinate.
              </Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default Regolamento;

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
    borderWidth: 3,
    alignItems: "center",
    padding: 10,
    paddingBottom: 30,
    marginTop: 12,
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
  },
  titoloRegola: {
    backgroundColor: "#34005A",
    borderWidth: 0,
    paddingVertical: 0,
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
    marginBottom: 10,
  },
});
