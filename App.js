import React from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Credits from "./app/screens/Credits";
import Gioco1 from "./app/screens/Gioco1";
import Gioco2 from "./app/screens/Gioco2";
import Gioco3 from "./app/screens/Gioco3";
import Regolamento from "./app/screens/Regolamento";

const Stack = createStackNavigator();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Falling Sky Black": require("./app/assets/fonts/FallingSkyBlk.otf"),
      "Falling Sky Light": require("./app/assets/fonts/FallingSkyLight.otf"),
    });
    this.setState({
      fontLoaded: true,
    });
  }

  render() {
    return (
      this.state.fontLoaded && (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="WelcomeScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="Gioco1" component={Gioco1} />
            <Stack.Screen name="Gioco2" component={Gioco2} />
            <Stack.Screen name="Gioco3" component={Gioco3} />
            <Stack.Screen name="Regolamento" component={Regolamento} />
            <Stack.Screen name="Credits" component={Credits} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    );
  }
}
