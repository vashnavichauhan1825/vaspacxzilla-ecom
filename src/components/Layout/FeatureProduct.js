import React, { Fragment } from "react";
import { SpecialProduct } from "../../UI";
import FeatureTwo from "./FeatureItem/FeatureTwo";
import FourFeatOne from "./FeatureItem/FourFeatOne";
import SpecialCountdown from "./FeatureItem/SpecialCountdown";

export const FeatureProduct = () => {
  return (
    <Fragment>
      <h2 className="heading-product">Featured Products</h2>

      <SpecialProduct>
        <FourFeatOne />
        <SpecialCountdown />
        <FeatureTwo />
      </SpecialProduct>
    </Fragment>
  );
};
