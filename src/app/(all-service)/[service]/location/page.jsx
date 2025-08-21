import React from "react";
import LocationElements from "@/components/locationElement/locationElements";
const Location = async ({ params }) => {
  console.log(params, "service");
   
  const service = params.service;
  return <LocationElements service={service}></LocationElements>;
};

export default Location;
