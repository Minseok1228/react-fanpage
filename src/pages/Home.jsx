import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default Home;

// const [lettersState, setLettersState] = useState({
//   [MEATS[0]]: true,
//   [MEATS[1]]: false,
//   [MEATS[2]]: false,
//   [MEATS[3]]: false,
// });

// const meatFanLetter = (meatName) => {
//   const newArr = MEATS.map((meat) => {
//     console.log(meat);
//     return meat === meatName ? (meat = true) : (meat = false);
//   });
//   const newObj = MEATS.reduce((a, c, idx) => {
//     a[c] = newArr[idx];
//     return a;
//   }, {});

//   //   return { ...a, [c]: newArr[idx] };
//   // }, {});
//   setLettersState(newObj);
// };

// const selectedMeat = function (object) {
//   return Object.keys(object).find((key) => object[key] === true);
// };
