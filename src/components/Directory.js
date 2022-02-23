import React from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const Directory = () => {
  const sections = useSelector((state) => state.directory.sections);

  return (
    <div className="flex flex-wrap w-full">
      {sections.map((item) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Directory;
