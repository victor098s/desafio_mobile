import Home from "../screens/Home";
import Profille from "../screens/Profille";
import Search from "../screens/Search";
import Shopping from "../screens/Shopping";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import JacksonDetails from "../screens/JacksonDetails";
import FenderDetails from "../screens/FenderDetails";
import PrsDetails from "../screens/PrsDetails";
import SeiziDetails from "../screens/SeiziDetails";
import PaymentSucess from "../screens/PaymentSucess";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="homeScreen" component={Home} />
      <Stack.Screen name="JacksonDetails" component={JacksonDetails} />
      <Stack.Screen name="FenderDetails" component={FenderDetails} />
      <Stack.Screen name="PrsDetails" component={PrsDetails} />
      <Stack.Screen name="SeiziDetails" component={SeiziDetails} />
      <Stack.Screen name="PaymentSucess" component={PaymentSucess} />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
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
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Shopping") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Profille") {
            iconName = focused ? "person" : "person-outline";
          }

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
