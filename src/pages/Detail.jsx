import { useLocation, useNavigate, useParams } from "react-router-dom";
import PrintLetter from "../components/PrintLetter";
import DetailBtn from "../components/DetailBtn";
import Modal from "../components/Modal";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { handleEdit } from "../redux/modules/modalOpen";
import { deleteFanletter } from "../redux/modules/fanletters";

function Detail() {
  const edit = useSelector((state) => {
    return state.modalOpen;
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const letter = location.state;
  const param = useParams();
  const deleteLetterBtn = (id) => {
    if (window.confirm("정말 삭제하시겠습니까")) {
      dispatch(deleteFanletter(id));
      navigate("/");
    }
  };

  const changeCommentBtn = () => {
    dispatch(handleEdit(true));
  };
  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <DetailBtn detailBtnFunc={goHome} btnCss={"toHome"}>
        Home
      </DetailBtn>
      <Container>
        {edit ? (
          <Modal letter={letter} />
        ) : (
          <>
            <PrintLetter letter={letter} size={"detail"} />
            <StBtnBox>
              <DetailBtn detailBtnFunc={deleteLetterBtn} id={param.id}>
                삭제
              </DetailBtn>
              <DetailBtn detailBtnFunc={changeCommentBtn} id={param.id}>
                수정
              </DetailBtn>
            </StBtnBox>
          </>
        )}
      </Container>
    </>
  );
}

export default Detail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StBtnBox = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;
