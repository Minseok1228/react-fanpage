//액션 벨류
export const ADD_NICKNAME = "ADD_NICKNAME"

//액션 생성자 함수
export const addNickName = (nickName) => {
    return {
        type: ADD_NICKNAME,
        payload: nickName
    }
}

//초기상태값
const initialState = ''

//reducer :함수
//input:state, action
//리듀서
const nickName = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NICKNAME:
            return action.payload
        default:
            return state;
    }

}
export default nickName