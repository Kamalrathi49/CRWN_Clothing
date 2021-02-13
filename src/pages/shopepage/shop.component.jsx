import React from "react";
import { Route } from "react-router-dom";

import collectionsOverview from "../../component/collections-overview/collections-overview.componenet";
import categoryPage from "../category/category.component";


const ShopPage = ({ match }) =>{ 
  console.log(match);
   return (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={collectionsOverview} />
    <Route path={`${match.path}/:categotyid`} component={categoryPage}/>
  </div>
);
}
export default ShopPage;
