import React, { useState } from "react";
import Picker from "./app/components/Picker";
import Screen from "./app/components/Screen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const genders = [
  { sex: "Male", id: 1 },
  { sex: "Female", id: 0 },
];

export default function App() {
  const [selectedGender, setSelectedGender] = useState("");

  return <WelcomeScreen />;
}
