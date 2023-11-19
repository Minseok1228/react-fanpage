const ADD_COMMENT = "ADD_COMMENT"

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}
//초기상태값
const initialState = ""

//reducer :함수
//input:state, action

//action:setState동작
const comment = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return action.payload
        default:
            return state;
    }

}
export default comment