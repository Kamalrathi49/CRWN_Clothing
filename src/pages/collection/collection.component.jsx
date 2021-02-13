import React from "react";

import { collectionItem } from "../../component/collection-item/collection-item";

import "./collection.style.scss";

const collectionPage = ({ match }) => {
  console.log(match.params.collectionid);
  return (
    <div className="category">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

export default collectionPage;
