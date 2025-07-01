
import {  Tabs } from 'expo-router';
import{Ionicons}from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs>
      
      <Tabs.Screen name="Home" options={{
        headerTitle:"Home",
        headerTitleAlign: "center",
        tabBarIcon: ({color }) => <Ionicons name="home" size={24} color={color} />,
      }} />
      <Tabs.Screen name="Profile" options={{
        headerTitle: "Profile",
        headerTitleAlign: "center",
        tabBarIcon: ({color }) => <Ionicons name="person-add" size={24} color={color} />,
      }}/>
      <Tabs.Screen name="Blood" options={{
        headerTitle: "Blood",
        headerTitleAlign: "center",
        tabBarIcon: ({color }) => <Ionicons name="balloon" size={24} color={color} />,
      }}/>
      <Tabs.Screen name="logout" options={{
        headerTitle: "Logout",
        headerTitleAlign: "center",
        tabBarIcon: ({color }) => <Ionicons name="log-out-outline" size={24} color={color} />,
      }}/>
    
       <Tabs.Screen name="+not-found" options={{
        headerShown:false,

      }} />
    </Tabs>
  );
}
