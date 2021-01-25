import React from "react";
import { TabItem, TabNavigation } from "../common/TabNavigation";

const MegaMenu: React.FC = () => {
  return (
    <TabNavigation className="mega-menu">
      <TabItem label="newIn" tabTitle="New In"></TabItem>
      <TabItem label="clothing" tabTitle="Clothing">
        <div className="tab-item__content"></div>
      </TabItem>
      <TabItem label="shoes" tabTitle="Shoes"></TabItem>
      <TabItem label="accessories" tabTitle="Accessories"></TabItem>
      <TabItem label="gifts" tabTitle="Gifts"></TabItem>
      <TabItem label="activeWear" tabTitle="Activewear"></TabItem>
      <TabItem label="cosmetics" tabTitle="Cosmetics"></TabItem>
      <TabItem label="brands" tabTitle="Brands"></TabItem>
      <TabItem label="collections" tabTitle="Collections"></TabItem>
    </TabNavigation>
  );
};

export default MegaMenu;
