import { Tabs } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";

export default function TabsLayout() {
      return <Tabs screenOptions={{tabBarActiveTintColor: "black", tabBarShowLabel: false}}>
    <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color, size }) => <Octicons name="home" size={size} color={color} /> }}/>
    <Tabs.Screen name="search" options={{ title: "Search", tabBarIcon: ({ color, size }) => <Octicons name="search" size={size} color={color} /> }}/>
    <Tabs.Screen name="notifications" options={{ title: "Notifications", tabBarIcon: ({ color, size }) => <Octicons name="heart" size={size} color={color} /> }}/>
    <Tabs.Screen name="profil" options={{ title: "Profil", tabBarIcon: ({ color, size }) => <Octicons name="person" size={size} color={color} /> }}/>
  </Tabs>;
}
