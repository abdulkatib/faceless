import React from "react";
import Picker from "./app/components/Picker";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <Picker placeholder="Gender" icon="gender-male-female" />
    </Screen>
  );
}
