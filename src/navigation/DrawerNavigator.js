import { createDrawerNavigator } from "@react-navigation/drawer";
import Adress from "../screens/Adress";
import Config from "../screens/Config";
import Payment from "../screens/Payment";
import Suport from "../screens/Suport";
import TabNavigator from "./TabNavigator";
import Login from "../screens/Login";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Login} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Adress" component={Adress} />
      <Drawer.Screen name="Config" component={Config} />
      <Drawer.Screen name="Suport" component={Suport} />
    </Drawer.Navigator>
  );
}
