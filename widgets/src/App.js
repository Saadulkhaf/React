import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
