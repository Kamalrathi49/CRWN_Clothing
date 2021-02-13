import React from "react";
import { connect } from "react-redux";

import collectionItem from "../../component/collection-item/collection-item";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.style.scss";

const collectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="category">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionid)(state),
});

export default connect(mapStateToProps)(collectionPage);
