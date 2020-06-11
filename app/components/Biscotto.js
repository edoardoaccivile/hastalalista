import React from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";

class Biscotto extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        {!this.props.usato ? (
          !this.props.active ? (
            <TouchableHighlight
              underlayColor={"#BFC47B"}
              onPress={this.props.onPress}
              style={styles.biscotto}
            >
              <View style={styles.boxCat}>
                <View style={styles.number}>
                  <Text style={styles.numberText}>{this.props.number}</Text>
                </View>

                <View style={styles.catIndizioLeft}>
                  <Text style={styles.catIndizioTextPurple}>
                    {this.props.indizio}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              underlayColor={"#D3D985"}
              onPress={this.props.onPress}
              style={styles.biscottoAttivo}
            >
              <View style={styles.boxCat}>
                <View style={styles.catIndizioCenter}>
                  <Text style={styles.catIndizioTextGreen}>
                    {this.props.categoria}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          )
        ) : (
          <View style={styles.biscottoUsato}>
            <View style={styles.boxCat}>
              <View style={styles.catIndizioCenter}>
                <Text style={styles.catIndizioTextTransparent}>
                  {this.props.categoria}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default Biscotto;

const styles = StyleSheet.create({
  biscottoAttivo: {
    position: "relative",
    minHeight: 67,
    width: "100%",
    marginBottom: 8,
    backgroundColor: "#34005A",
    borderColor: "#D3D985",
    borderWidth: 3,
    borderRadius: 10,
  },
  biscotto: {
    position: "relative",
    minHeight: 67,
    width: "100%",
    marginBottom: 8,
    backgroundColor: "#D3D985",
    borderColor: "#34005A",
    borderWidth: 3,
    borderRadius: 10,
  },
  biscottoUsato: {
    position: "relative",
    minHeight: 67,
    width: "100%",
    marginBottom: 8,
    backgroundColor: "#34005A",
    borderColor: "#66457E",
    borderWidth: 3,
    borderRadius: 10,
  },
  boxCat: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "flex-start",
    flex: 1,
  },
  number: {
    textAlign: "center",
    backgroundColor: "#BFC47B",
    width: 30,
    height: 30,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
    marginRight: 10,
  },
  numberText: {
    fontFamily: "Falling Sky Black",
    fontSize: 25,
    color: "#34005A",
  },
  catIndizioTextPurple: {
    fontFamily: "Falling Sky Black",
    fontSize: 20,
    color: "#34005A",
    letterSpacing: -0.5,
    textTransform: "uppercase",
    lineHeight: 22,
    textAlign: "left",
    paddingRight: 15,
  },
  catIndizioTextTransparent: {
    fontFamily: "Falling Sky Black",
    fontSize: 20,
    color: "#66457E",
    letterSpacing: -0.5,
    textTransform: "uppercase",
    lineHeight: 26,
    textAlign: "center",
  },
  catIndizioTextGreen: {
    fontFamily: "Falling Sky Black",
    fontSize: 20,
    color: "#BFC47B",
    letterSpacing: -0.5,
    textTransform: "uppercase",
    lineHeight: 26,
    textAlign: "center",
  },
  catIndizioLeft: {
    fontSize: 20,
    color: "#34005A",
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    paddingRight: 30,
  },
  catIndizioCenter: {
    fontFamily: "Falling Sky Black",
    fontSize: 20,
    color: "#BFC47B",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
