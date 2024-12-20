import {Props} from "next/script";
import React from "react";
import {Text_Interface} from "@/app/models/_model";

export default function Title({children, className}: Text_Interface) {
  return (
    <h1 className={`${className} text-mark-text text-Title`}>{children}</h1>
  );
}
