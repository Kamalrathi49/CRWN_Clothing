import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.style.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ title, id, imageUrl, size, linkUrl }) => (
      <MenuItem
        key={id}
        title={title}
        imageurl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </div>
);

const mapStateToProrps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProrps)(Directory);
