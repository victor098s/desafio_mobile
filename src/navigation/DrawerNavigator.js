import { createDrawerNavigator } from "@react-navigation/drawer";
import Adress from "../screens/Adress";
import Config from "../screens/Config";
import Payment from "../screens/Payment";
import Suport from "../screens/Suport";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#ECF1FF" },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerTitle: "VliteStore", drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="Formas de pagamento"
        component={Payment}
        options={{ headerTitle: "VliteStore" }}
      />
      <Drawer.Screen name="Endereços" component={Adress} />
      <Drawer.Screen name="Configurações" component={Config} />
      <Drawer.Screen
        name="Suporte"
        component={Suport}
        options={{ headerTitle: "VliteStore" }}
      />
    </Drawer.Navigator>
  );
}
