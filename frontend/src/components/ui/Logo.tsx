import {
  Image
} from "@chakra-ui/react";
import * as React from "react";

const Logo = () => (
  <Image
    boxSize="50px"
    objectFit="cover"
    src="http://127.0.0.1:8000/static/logo512.png"
    alt="Canistel logo"
  />
)

export default Logo;