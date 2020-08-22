import React from "react";
import { Link, IconButton } from "@material-ui/core";

function WigetIcon({icon}) {
  return (
    <Link href={icon.link}>
      <IconButton>{icon.name}</IconButton>
    </Link>
  );
}

export default WigetIcon;
