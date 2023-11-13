import { useState } from "react";
import Form from "../components/Form";
import SelectBtn from "../components/SelectBtn";
import styled from "styled-components";
import Filter from "../components/Filter";

const Stheader = styled.header`
  background-color: green;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;
const StrH1 = styled.h1`
  font-size: 3rem;
`;
const StSelectBox = styled.div``;
const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
const StUl = styled.ul`
  background-color: red;
  display: flex;
  flex-direction: column;
  width: 500px;
`;

function Home({ fanletters, setFanletters }) {
  //상태관리해야 할것
  //닉네임 ,내용,팬레터=부위별 키값을 지정,
  const MEATS = ["새우살", "살치살", "부채살", "채끝"]; //상수는 대문자 스네이크
  const [ribCapLetter, setRibCapLetter] = useState(true);
  const [chuckFlapTailLetter, setChuckFlapTailLetter] = useState(false);
  const [oysterBladeLetter, setOysterBladeLetter] = useState(false);
  const [striploinLetter, setStriploinLetter] = useState(false);
  //조건부 렌더링!
  const MeatFanLetter = (a, b, c, d) => {
    setRibCapLetter(a);
    setChuckFlapTailLetter(b);
    setOysterBladeLetter(c);
    setStriploinLetter(d);
  };
  //MeatFanLetter(ribCapLetter,true,false,false,false)

  return (
    <>
      <Stheader>
        <StrH1>고기고기</StrH1>
        {/* <button onClick={() => MeatFanLetter(true, false, false, false)}>
          새우
        </button>
        <button onClick={() => MeatFanLetter(false, true, false, false)}>
          살치
        </button>
        <button onClick={() => MeatFanLetter(false, false, true, false)}>
          부채
        </button>
        <button onClick={() => MeatFanLetter(false, false, false, true)}>
          채끝
        </button> */}

        <StSelectBox>
          <SelectBtn meatFunc={() => MeatFanLetter(true, false, false, false)}>
            새우살
          </SelectBtn>
          <SelectBtn meatFunc={() => MeatFanLetter(false, true, false, false)}>
            살치살
          </SelectBtn>
          <SelectBtn meatFunc={() => MeatFanLetter(false, false, true, false)}>
            부채살
          </SelectBtn>
          <SelectBtn meatFunc={() => MeatFanLetter(false, false, false, true)}>
            채끝
          </SelectBtn>
        </StSelectBox>

        {/* <SelectBtn
          meats={MEATS}
          fanletters={fanletters}
          showLetter={MeatFanLetter}
        /> */}
      </Stheader>
      <StMain>
        <Form
          meats={MEATS}
          fanletters={fanletters}
          setFanletters={setFanletters}
        />
        <StUl>
          {ribCapLetter ? (
            <Filter
              meat={"새우살"}
              fanletters={fanletters}
              setFanletters={setFanletters}
            />
          ) : (
            ""
          )}
          {chuckFlapTailLetter ? (
            <Filter
              meat={"살치살"}
              fanletters={fanletters}
              setFanletters={setFanletters}
            />
          ) : (
            ""
          )}
          {oysterBladeLetter ? (
            <Filter
              meat={"부채살"}
              fanletters={fanletters}
              setFanletters={setFanletters}
            />
          ) : (
            ""
          )}
          {striploinLetter ? (
            <Filter
              meat={"채끝"}
              fanletters={fanletters}
              setFanletters={setFanletters}
            />
          ) : (
            ""
          )}
        </StUl>
      </StMain>
      {/* <footer>발이시려워</footer> */}
    </>
  );
}
export default Home;
