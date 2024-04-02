import techmindsLogo from "/assets/logo_techminds.svg";
import mui5 from "/assets/mui5.png";
import reactLogo from "/assets/react.svg";
import viteLogo from "/assets/vite.svg";

import { blue, deepPurple, lightBlue, yellow } from "@mui/material/colors";
import { v4 } from "uuid";

interface IImages {
  id: string;
  url: string;
  image: string;
  alt: string;
  color: string;
}

export const logos: IImages[] = [
  {
    id: v4(),
    url: "https://vitejs.dev",
    image: viteLogo,
    alt: "Vite logo",
    color: yellow[500],
  },
  {
    id: v4(),
    url: "https://github.com/TechMinds-Group",
    image: techmindsLogo,
    alt: "TechMinds logo",
    color: deepPurple[500],
  },
  {
    id: v4(),
    url: "https://react.dev",
    image: reactLogo,
    alt: "React logo",
    color: lightBlue[500],
  },
  {
    id: v4(),
    url: "https://mui.com",
    image: mui5,
    alt: "Mui5 logo",
    color: blue[800],
  },
];
