import React from "react";
import { Text, StyleSheet, View } from "react-native";

class TitoloCat extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.biscotto}>
        <View style={styles.boxCat}>
          <View style={styles.catIndizioCenter}>
            <Text style={styles.catIndizioTextGreen}>
              {this.props.categoria}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default TitoloCat;

const styles = StyleSheet.create({
  biscotto: {
    position: "relative",
    minHeight: 62,
    width: "100%",
    marginBottom: 8,
    backgroundColor: "#34005A",
    borderColor: "#D3D985",
    borderWidth: 3,
    borderRadius: 10,
  },
  boxCat: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "flex-start",
    flex: 1,
  },
  catIndizioTextGreen: {
    fontFamily: "Falling Sky Black",
    fontSize: 20,
    color: "#D3D985",
    letterSpacing: -1,
    textTransform: "uppercase",
    lineHeight: 26,
    textAlign: "center",
  },
  catIndizioCenter: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
