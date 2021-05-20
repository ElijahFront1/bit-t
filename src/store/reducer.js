const COMBINE_DATA = "COMBINE_DATA"

const defaultState = {
    data: [],
}

export default function reducers(state = defaultState, action) {
    switch (action.type) {
        case COMBINE_DATA:
            const combinePostsAndComments = action.payload[0].data.map((item, row) => {
                const found = action.payload[1].data.find((element) => item.id == element.postId);
                return { ...item, ...found };
            });
            return { ...state, data: combinePostsAndComments } //postsData: newData
        default:
            return state
    }
}