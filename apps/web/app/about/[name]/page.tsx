import { Repos } from "@/src/components/Repos";
import React from "react";

const CustomNamePage = (props) => {
  const { params } = props;
  const { name } = params;
  console.log(props);
  console.log("______________");
  console.log(params);
  return (
    <div>
      <h2>custom name page</h2>
      <h3>param: {name}</h3>
      <Repos />
    </div>
  );
};

export default CustomNamePage;
