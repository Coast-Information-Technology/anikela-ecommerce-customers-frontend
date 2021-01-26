import React from "react";
import { TabItem, TabNavigation } from "../common/TabNavigation";

const MegaMenu: React.FC = () => {
  return (
    <TabNavigation className="mega-menu">
      <TabItem label="newIn" tabTitle="New In">
        New In
      </TabItem>
      <TabItem label="clothing" tabTitle="Clothing">
        <div className="tab-item__content">Clothing</div>
      </TabItem>
      <TabItem label="shoes" tabTitle="Shoes">
        Shoes
      </TabItem>
      <TabItem label="accessories" tabTitle="Accessories">
        Accesories
      </TabItem>
      <TabItem label="gifts" tabTitle="Gifts">
        Gifts
      </TabItem>
      <TabItem label="activeWear" tabTitle="Activewear">
        Active wear
      </TabItem>
      <TabItem label="cosmetics" tabTitle="Cosmetics">
        Cosmetics
      </TabItem>
      <TabItem label="brands" tabTitle="Brands">
        Brands
      </TabItem>
      <TabItem label="collections" tabTitle="Collections">
        Collections
      </TabItem>
    </TabNavigation>
  );
};

export default MegaMenu;
