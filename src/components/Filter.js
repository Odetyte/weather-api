import React from "react";

const Filter = ({
  value,
  onChange
}) => {
  return ( <
    >
    <
    i > Check weather
    for: < /i> <
    input type = "text"
    id = "countries-search"
    placeholder = "type any country"
    value = {
      value
    }
    onChange = {
      onChange
    }
    /> < / >
  );
};

export default Filter;