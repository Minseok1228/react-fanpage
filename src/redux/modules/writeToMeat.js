//초기상태값
const initialState = "새우살"
//액션벨류
const WRITE_TO_MEAT = 'WRITE_TO_MEAT'

//액션크리에엍
export const writeTo = (meat) => {
    return {
        type: WRITE_TO_MEAT,
        payload: meat
    }
}
//reducer :함수
//input:state, action

//action:setState동작
const writeToMeat = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_TO_MEAT:
            return action.payload
        default:
            return state;
    }

}
export default writeToMeat