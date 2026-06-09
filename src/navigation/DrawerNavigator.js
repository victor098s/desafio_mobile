import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import Adress from "../screens/Adress";
import Config from "../screens/Config";
import Payment from "../screens/Payment";
import Suport from "../screens/Suport";
import Home from "../screens/Home";
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
        name="tabRoot"
        component={TabNavigator}
        options={{ headerTitle: "VliteStore", drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="Formas de pagamento"
        component={Payment}
        options={{ headerTitle: "VliteStore" }}
      />
      <Drawer.Screen
        name="Endereços"
        component={Adress}
        listeners={({ navigation }) => ({
          drawerItemPress: (e) => {
            e.preventDefault();
            navigation.navigate("tabRoot", {
              screen: "Home",
              params: { screen: "Adress" },
            });
          },
        })}
      />
      <Drawer.Screen name="Configurações" component={Config} />
      <Drawer.Screen
        name="Suporte"
        component={Suport}
        listeners={({ navigation }) => ({
          drawerItemPress: (e) => {
            e.preventDefault();
            navigation.navigate("tabRoot", {
              screen: "Home",
              params: { screen: "Suport" },
            });
          },
        })}
        options={{ headerTitle: "VliteStore" }}
      />
    </Drawer.Navigator>
  );
}
