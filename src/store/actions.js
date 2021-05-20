import axios from 'axios'

let postsURL = "https://my-json-server.typicode.com/Span415/bit-t/posts"
let commentsURL = "https://my-json-server.typicode.com/Span415/bit-t/comments"

const postPromise = axios.get(postsURL);
const commentsPromise = axios.get(commentsURL);

export const fetchPostsAndComments = () => (dispatch) => {
    Promise.all([postPromise, commentsPromise]).then((values) => {
        dispatch(setPostsAndComments(values))
    });
}

export const setPostsAndComments = (data) => ({ type: 'COMBINE_DATA', payload: data })