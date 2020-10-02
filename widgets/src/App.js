import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

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
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Route path={"/"}>
        <Accordion items={items} />
      </Route>
      <Route path={"/list"}>
        <Search />
      </Route>
      <Route path={"/dropdown"}>
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path={"/translate"}>
        <Translate />
      </Route>
    </div>
  );
};
