import { useState } from "react";
import Router from "./shared/router";
import dummy from "./assets/fakeData.json";
import { StateContext } from "./context/stateContext";
import { useSelector } from "react-redux";
function App() {
  const [fanletters, setFanletters] = useState(dummy);
  const [nickName, setNickName] = useState("");
  const [comment, setComment] = useState("");
  const MEATS = ["새우살", "살치살", "부채살", "안심", "채끝", "기타"];
  const [modalOpen, setModalOpen] = useState(false);
  const [commentChange, setCommentChange] = useState("");

  return (
    <StateContext.Provider
      value={{
        fanletters,
        setFanletters,
        nickName,
        setNickName,
        comment,
        setComment,
        meats: MEATS,
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
