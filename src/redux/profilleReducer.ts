import {
    ActionTypes,
    PostPropsType,
    ProfilePageDataType
} from "./PropsType";
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

const profileReducer = (state: ProfilePageDataType = initialState,
                        action: ActionTypes) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostPropsType = {
                id: v1(),
                postContent: state.messageForNewPost,
                postLikes: 0
            };
            return{
                ...state,
                postsData: [newPost, ...state.postsData],
                messageForNewPost: ''
            }

        case CHANGE_POST_TEXT:
            return {
                ...state,
                messageForNewPost: action.newText
            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)

export const changePostTextActionCreator = (newText: string) => ({
        type: CHANGE_POST_TEXT,
        newText: newText
    } as const
)

export default profileReducer