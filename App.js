import React, { useState } from "react";
import Picker from "./app/components/Picker";
import Screen from "./app/components/Screen";

const genders = [
  { sex: "Male", id: 1 },
  { sex: "Female", id: 0 },
];

export default function App() {
  const [selectedGender, setSelectedGender] = useState("");

  return (
    <Screen>
      <Picker
        selectedItem={selectedGender}
        onSelectItem={(item) => setSelectedGender(item.sex)}
        items={genders}
        placeholder="Gender"
        icon="gender-male-female"
      />
    </Screen>
  );
}
