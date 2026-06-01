import Login from "../screens/Login";
import Home from "../screens/Home";
import Profille from "../screens/Profille";
import Search from "../screens/Search";
import Shopping from "../screens/Shopping";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.getParent().openDrawer()}
            style={{ marginLeft: 15 }}
          >
            <Ionicons name="menu" size={28} color="#000"></Ionicons>
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Shopping" component={Shopping} />
      <Tab.Screen name="Profille" component={Profille} />
    </Tab.Navigator>
  );
}
