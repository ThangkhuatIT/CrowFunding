import { Button } from "components/button";
import React from "react";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white shadow-1 rounded-xl">
        <img
          src='https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg'
          className="max-h-[232px] object-cover rounded-xl w-full"
          alt=""
        />
        <div className="p-5">
          <span className="block px-3 py-1 mb-5 text-xs font-medium text-white rounded-sm bg-secondary max-w-[80px]">
            Featured
          </span>
          <span className="mb-1 text-xl font-semibold">
            Special One Camera
          </span>
          <div className="flex items-center mb-4 gap-x-3">
            <span className="text-xl font-bold text-text1">$2,724 USD</span>{" "}
            <span className="text-sm font-medium line-through text-error">
              $1,504 USD
            </span>
            <span className="text-sm font-medium text-error">(12% OFF)</span>
          </div>
          <div className="flex flex-col mb-4 gap-y-1">
            <strong>Estimated Shipping</strong>{" "}
            <span className="text-text2">October 2022</span>
          </div>
          <p className="mb-4 text-text2">
            <strong className="text-text1">05</strong> claimed
          </p>
          <p className="text-text2">Ships worldwide</p>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button className="w-full text-white bg-secondary">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
