import React from "react";
import Card from "./app/components/Card";

export default function App() {
  return (
    <>
      <Card
        title={"Abdul"}
        subTitle={"Hi :)"}
        image={require("./app/assets/image.jpg")}
      />
      <Card
        title={"Moe"}
        subTitle={"What's up"}
        image={require("./app/assets/image.jpg")}
      />
    </>
  );
}
