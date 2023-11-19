const HANDLE_EDIT = 'HANDLE_EDIT'

export const handleEdit = (boolean) => {
    return {
        type: HANDLE_EDIT,
        payload: boolean,
    }
}
//초기상태값
const initialState = false

//reducer :함수
//input:state, action

//action:setState동작
const modalOpen = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_EDIT:
            return action.payload
        default:
            return state;
    }

}
export default modalOpen