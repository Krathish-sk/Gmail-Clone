import React from "react";
import { Vortex } from "react-loader-spinner";

export default function Loading() {
  return (
    <Vortex
      colors={["blue", "orange", "red", "orange", "yellow", "green"]}
      className="loading"
    />
  );
}
