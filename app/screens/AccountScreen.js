import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import navigationTheme from "../navigation/navigationTheme";

const menuItems = [
  {
    title: "Copy you link 'manual share'",
    icon: {
      name: "content-copy",
      backgroundColor: colors.primary,
    },
    targetScreen: "Conversations",
  },
  {
    title: "Share on facebook",
    icon: {
      name: "facebook",
      backgroundColor: colors.facebookColor,
    },
  },
  {
    title: "Share on instagram",
    icon: {
      name: "instagram",
      backgroundColor: colors.instargamColor,
    },
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Abdul katib"
          subTitle="abdulktib@gmail.com"
          image={require("../assets/image.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => {
                console.log(item);
                //navigation.navigate(item.targetScreen)
              }}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    // backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
