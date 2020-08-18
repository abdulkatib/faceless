import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import navigationTheme from "../navigation/navigationTheme";

const initialMessages = [
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

function MessagesScreen({ navigation }) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => {
              console.log("Message selected", item);
              navigation.navigate("Chat", item);
            }}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            ...initialMessages,
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

export default MessagesScreen;
