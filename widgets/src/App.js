import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="ui button"
      >
        Toggle Dropdown
      </button>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};
