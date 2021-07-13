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
    const stateCopy = {...state, postsData: [...state.postsData]};


    switch (action.type) {
        case ADD_POST:

            const newPost: PostPropsType = {
                id: v1(),
                postContent: state.messageForNewPost,
                postLikes: 0
            };
            stateCopy.postsData.unshift(newPost);
            stateCopy.messageForNewPost = '';
            return stateCopy;

        case CHANGE_POST_TEXT:
            stateCopy.messageForNewPost = action.newText;
            return stateCopy;

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