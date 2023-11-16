import React from "react";

import { useState } from "react";

import Header from "../components/Header";
import Main from "../components/Main";

function Home({ fanletters, setFanletters }) {
  const MEATS = ["새우살", "살치살", "부채살", "안심", "채끝", "기타"];
  const [selectedMeat, setSelectedMeat] = useState(MEATS[0]);

  return (
    <>
      <Header
        selectedMeat={selectedMeat}
        setSelectedMeat={setSelectedMeat}
        meats={MEATS}
      />
      <Main
        meats={MEATS}
        fanletters={fanletters}
        setFanletters={setFanletters}
        selectedMeat={selectedMeat}
      />
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
