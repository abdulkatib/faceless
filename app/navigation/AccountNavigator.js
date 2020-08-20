import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import ConversationsScreen from "../screens/ConversationsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Conversations" component={ConversationsScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
