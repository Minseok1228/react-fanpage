const CHANGED_COMMENT = 'CHANGED_COMMENT'
export const changedComment = (comment) => {
    console.log(comment)
    return {
        type: CHANGED_COMMENT,
        payload: comment
    }
}
const initialState = ''

const commentChange = (state = initialState, action) => {
    switch (action.type) {
        case CHANGED_COMMENT:
            return action.payload
        default:
            return state;
    }

}
export default commentChange