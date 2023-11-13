import React from "react";
import PrintLetter from "./PrintLetter";

function Filter({ meat, fanletters, setFanletters }) {
  return fanletters
    .filter((letter) => {
      return letter.writedto === meat;
    })
    .map((letter) => {
      return (
        <PrintLetter
          key={letter.id}
          letter={letter}
          fanletters={fanletters}
          setFanletters={setFanletters}
        />
      );
    });
}

export default Filter;
