import uniStudent from "../images/uni-student.svg";
import polyStudent from "../images/Studying-bro.svg";
import secStudent from "../images/Exams-bro.svg";

export const selectSchoolData = [
  {
    index: 0,
    img: uniStudent,
    platform: "University",
    schoolLists: {
      default: "DEFAULT",
      one: "TASUED",
      two: "LAUTECH",
      three: "OAU",
    },
  },

  {
    index: 1,
    img: polyStudent,
    platform: "Polytechnic",
    schoolLists: {
      default: "DEFAULT",
      one: "POLY IBADAN",
      two: "LASPOTECH",
      three: "IRE POLY",
    },
  },

  {
    index: 2,
    img: secStudent,
    platform: "Secondary School",
    schoolLists: {
      default: "DEFAULT",
      one: "JSS",
      two: "SSS",
    },
  },
];

