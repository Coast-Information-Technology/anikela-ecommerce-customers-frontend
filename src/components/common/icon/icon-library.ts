/*
Library containing path definitions for all Icons
used 

path definitions follow 
<icon name> : <path> convention

add definitions for new icons here
*/

interface IconData {
  [key: string]: string;
}

export default <IconData>{
  info:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
  warning: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
};
