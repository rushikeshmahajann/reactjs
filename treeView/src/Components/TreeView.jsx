import MenuList from "./menu-list";
import React from "react";



function TreeView({menus = []}) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}

export default TreeView;
