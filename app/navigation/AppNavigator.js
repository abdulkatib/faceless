import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import ConversationNavigator from "./ConversationNavigator";
// import FeedNavigator from "./FeedNavigator";
import ConversationsScreen from "../screens/ConversationsScreen";
import ChatScreen from "../screens/ChatScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Conversations"
      component={ConversationNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="GhostMood"
      component={ConversationNavigator}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.Conversations_SCREEN)}
          />
        ),
        // tabBarIcon: ({ color, size }) => (
        //   <MaterialCommunityIcons name="ghost" color={color} size={size} />
        // ),
      })}
    />
  </Tab.Navigator>
);

export default AppNavigator;
