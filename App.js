import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { color } from 'react-native-reanimated';

const GotScreen = require("./screens/GotScreen");
const Home = require("./screens/Home");
const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator

      screenOptions={{
        headerTintColor: '#fff',
        headerStyle:{
          backgroundColor : '#060625',
        },
        drawerStyle: {
          backgroundColor: '#060625',
          width: 240
        },
        drawerLabelStyle: {
          color : '#fff'
        }}}>
        <Menu.Screen name="Home" component={Home} />
        <Menu.Screen name="Frase" component={GotScreen} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}


