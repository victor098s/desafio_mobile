import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Home from "../screens/Home";
import Profille from "../screens/Profille";
import Search from "../screens/Search";
import Shopping from "../screens/Shopping";
import Suport from "../screens/Suport";
import JacksonDetails from "../screens/JacksonDetails";
import FenderDetails from "../screens/FenderDetails";
import PrsDetails from "../screens/PrsDetails";
import SeiziDetails from "../screens/SeiziDetails";
import PaymentSucess from "../screens/PaymentSucess";
import DrawerNavigator from "./DrawerNavigator";
import AdressVerif from "../screens/AdressVerif";
import Adress from "../screens/Adress";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabIcons = {
  Home: {
    focused: "home",
    unfocused: "home-outline",
  },
  Search: {
    focused: "search",
    unfocused: "search-outline",
  },
  Shopping: {
    focused: "cart",
    unfocused: "cart-outline",
  },
  Profille: {
    focused: "person",
    unfocused: "person-outline",
  },
};

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="homeScreen" component={Home} />
      <Stack.Screen name="JacksonDetails" component={JacksonDetails} />
      <Stack.Screen name="FenderDetails" component={FenderDetails} />
      <Stack.Screen name="PrsDetails" component={PrsDetails} />
      <Stack.Screen name="SeiziDetails" component={SeiziDetails} />
      <Stack.Screen name="PaymentSucess" component={PaymentSucess} />
      <Stack.Screen name="Suport" component={Suport} />
      <Stack.Screen name="AdressVerif" component={AdressVerif} />
      <Stack.Screen name="Adress" component={Adress} />
    </Stack.Navigator>
  );
}

export default function TabNavigator({ route }) {
  const initialRouteName = route?.name === "Suporte" ? "Suporte" : "Home";

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.getParent().openDrawer()}
            style={{ marginLeft: 15 }}
          >
            <Ionicons name="menu" size={28} color="#000"></Ionicons>
          </TouchableOpacity>
        ),

        tabBarIcon: ({ focused, color, size }) => {
          const icon = tabIcons[route.name];
          const iconName = focused ? icon.focused : icon.unfocused;

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#B3BFF0",
        tabBarInactiveTintColor: "black",

        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: "#ECF1FF",
        },
        tabBarIconStyle: {
          width: 40,
          height: 40,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Shopping" component={Shopping} />
      <Tab.Screen name="Profille" component={Profille} />
    </Tab.Navigator>
  );
}
