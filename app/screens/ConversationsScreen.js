import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import Screen from "../components/Screen";
import Text from "../components/Text";
import Button from "../components/Button";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import routes from "../navigation/routes";

import useApi from "../hooks/useApi";

import navigationTheme from "../navigation/navigationTheme";
import ActivityIndicator from "../components/ActivityIndicator";

const initialConversations = [
  {
    id: 1,
    title: "Abdul Katib",
    description: "Hey, what's up?",
    image: require("../assets/image.jpg"),
  },
  {
    id: 2,
    title: "Moe Katib",
    description: "Some random mesage here!!!!!",
    image: require("../assets/image.jpg"),
  },
];

function ConversationsScreen({ navigation }) {
  const [Conversations, setConversations] = useState(initialConversations);
  const [refreshing, setRefreshing] = useState(false);

  // const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    // getListingsApi.request();
  }, []);
  const handleDelete = (message) => {
    // Delete the message from Conversations
    setConversations(Conversations.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      {/* {getListingsApi.error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <Button title="Retry" />
        </>
      )} */}
      {/* <ActivityIndicator visible={true} /> */}
      <FlatList
        data={Conversations} // getListingsApi.data ===> user Conversations gose here ""
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => {
              console.log("Message selected", item);
              navigation.navigate(routes.CHAT_SCREEN, item);
            }}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setConversations([
            ...initialConversations,
            {
              id: 3,
              title: "Mike",
              description: ":)",
              image: require("../assets/image.jpg"),
            },
            {
              id: 4,
              title: "Jone",
              description: "hey man",
              image: require("../assets/image.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ConversationsScreen;
