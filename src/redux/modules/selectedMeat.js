//액션벨류
export const SELECTED_MEAT = "SELECTED_MEAT"
//액션 생성자 함수
export const selectMeat = (meat) => {
    return {
        type: SELECTED_MEAT,
        payload: meat,
    }
}

//초기상태값
const initialState = '새우살'

//reducer :함수
//input:state, action

//action:setState동작
const selectedMeat = (state = initialState, action) => {

    switch (action.type) {
        case SELECTED_MEAT:
            return action.payload
        default:
            return state;
    }

}
export default selectedMeat