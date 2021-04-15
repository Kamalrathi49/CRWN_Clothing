import React from "react";
import { Route } from "react-router-dom";

import collectionsOverview from "../../component/collections-overview/collections-overview.componenet";
import collectionPage from "../collection/collection.component";



const ShopPage = ({ match }) =>{ 
  console.log(match);
   return (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={collectionsOverview} />
    <Route path={`${match.path}/:collectionid`} component={collectionPage}/>
  </div>
);
}
export default ShopPage;
