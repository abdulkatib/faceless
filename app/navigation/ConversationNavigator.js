import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import ListingsScreen from "../screens/ListingsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ChatScreen from "../screens/ChatScreen";

// import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const ConversationNavigator = ({ route }) => {
  console.log(route);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default ConversationNavigator;
