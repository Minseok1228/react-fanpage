
//액션벨류
const CHANGED_COMMENT = 'CHANGED_COMMENT'
//액션크리
export const changedComment = (comment) => {
    return {
        type: CHANGED_COMMENT,
        payload: comment
    }
}
//초기상태값
const initialState = ''

//reducer :함수
//input:state, action

//action:setState동작
const commentChange = (state = initialState, action) => {
    switch (action.type) {
        case CHANGED_COMMENT:
            return action.payload
        default:
            return state;
    }

}
export default commentChange