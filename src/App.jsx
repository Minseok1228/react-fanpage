import { useState } from "react";
import Router from "./shared/router";
import data from "./assets/fakeData.json";
import { StateContext } from "./context/stateContext";
function App() {
  const [fanletters, setFanletters] = useState(data);
  const [nickName, setNickName] = useState("");
  const [comment, setComment] = useState("");
  const [writeToMeat, setWritetoMeat] = useState("새우살");
  const MEATS = ["새우살", "살치살", "부채살", "안심", "채끝", "기타"];
  const [selectedMeat, setSelectedMeat] = useState(MEATS[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [commentChange, setCommentChange] = useState();

  return (
    <StateContext.Provider
      value={{
        fanletters,
        setFanletters,
        nickName,
        setNickName,
        comment,
        setComment,
        writeToMeat,
        setWritetoMeat,
        meats: MEATS,
        selectedMeat,
        setSelectedMeat,
        modalOpen,
        setModalOpen,
        commentChange,
        setCommentChange,
      }}
    >
      <Router />;
    </StateContext.Provider>
  );
}

export default App;
