import React from "react";

import { useState } from "react";

import Header from "../components/Header";
import Main from "../components/Main";

function Home({ fanletters, setFanletters }) {
  const MEATS = ["새우살", "살치살", "부채살", "안심", "채끝", "기타"]; //상수는 대문자 스네이크
  const [selectedMeat, setSelectedMeat] = useState(MEATS[0]);

  //F2로 함수명 한번에 교체 가능./

  // const [lettersState, setLettersState] = useState({
  //   [MEATS[0]]: true,
  //   [MEATS[1]]: false,
  //   [MEATS[2]]: false,
  //   [MEATS[3]]: false,
  // });

  // // 계산된 속성명 computed property

  // const meatFanLetter = (meatName) => {
  //   //최초객체를 넣었어도 이놈이 array를 set을해서 밑에서 index가 반환됨
  //   const newArr = MEATS.map((meat) => {
  //     console.log(meat);
  //     return meat === meatName ? (meat = true) : (meat = false);
  //   });
  //   const newObj = MEATS.reduce((a, c, idx) => {
  //     //a=이전값,c=현재값
  //     console.log(idx);
  //     console.log("a : ", a);
  //     console.log("c :", c);
  //     console.log("-----------------------");
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
