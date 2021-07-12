import {ActionType, PostPropsType, ProfilePageDataType} from "./PropsType";
import {v1} from "uuid";


const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

let initialState = {
    messageForNewPost: '',
    postsData: [
        {
            id: v1(),
            postContent: "Hello World !!!",
            postLikes: 15
        },
        {
            id: v1(),
            postContent: "It's my first post!!",
            postLikes: 28
        }
    ]
}

const profileReducer = (state: ProfilePageDataType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostPropsType = {
                id: v1(),
                postContent: state.messageForNewPost,
                postLikes: 0
            };
            state.postsData.unshift(newPost);
            state.messageForNewPost = '';
            return state;
        case CHANGE_POST_TEXT:
            state.messageForNewPost = action.newText;
            return state;
        default:
            return state;
    }
}

export const changePostTextActionCreator = (text: string) =>({
        type: CHANGE_POST_TEXT,
        newText: text
    }
)
export const addPostActionCreator = () =>({type: ADD_POST})

export default profileReducer