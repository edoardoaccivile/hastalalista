import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";

class Categoria extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableHighlight
        underlayColor={"#BFC47B"}
        onPress={this.props.onPress}
        style={styles.biscotto}
      >
        <View style={styles.boxCat}>
          <View style={styles.number}>
            <Text style={styles.numberText}>{this.props.number}</Text>
          </View>
          {this.props.scoperta ? (
            <View style={styles.catIndizioLeft}>
              <Text style={styles.catIndizioTextPurple}>
                {this.props.categoria}
              </Text>
            </View>
          ) : (
            <Image
              resizeMode="contain"
              source={require("../assets/logo_transp.png")}
              style={styles.logo}
            />
          )}
        </View>
      </TouchableHighlight>
    );
  }
}

export default Categoria;

const styles = StyleSheet.create({
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
    lineHeight: 26,
    textAlign: "left",
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
  logo: {
    width: "60%",
  },
});
