import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

import SECTIONS from "./directory.data";

const Directory = () => (
  <div className="directory-menu">
    {SECTIONS.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default Directory;
