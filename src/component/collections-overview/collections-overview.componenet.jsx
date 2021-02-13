import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors";
import PreviewCollection  from "../preview-collection/preview-collection.component";

import "./collections-overview.style.scss";

const collectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
  });

export default connect(mapStateToProps)(collectionsOverview)
