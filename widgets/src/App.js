import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React",
    content: "Front end javascript library",
  },
  {
    title: "Why use React?",
    content: "Its very helpful",
  },
  {
    title: "How to use React",
    content: "we use React by creating components",
  },
];

const options = [
  {
    label: "A color of Red",
    value: "red",
  },
  {
    label: "A color of Green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
