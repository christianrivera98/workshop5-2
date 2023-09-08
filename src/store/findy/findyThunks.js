import { collection, collectionGroup, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyPost, savingNewPost, setActivePost, setPosts, setSaving, updatePost } from "./findySlice";
import { getPosts } from "../../helpers/getPosts";
import { loadPosts } from "../../helpers/loadPosts";
import { NewPost } from "../../findy/components/newPost/NewPost";

export const startNewPost = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewPost());

        const { uid } = getState().auth;

        const newPost = {
            addImage : [],
            imageURL: "",
            description: "",
        }
        
        const newDoc = doc ( collection (FirebaseDB, `${ uid }/findy/posts`));
         await setDoc( newDoc, newPost);

        newPost.id = newDoc.id;

        dispatch(addNewEmptyPost( newPost));
        dispatch(setActivePost( newPost));
        

    }
}

export const startLoadingPosts = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error ('El UID del usuario no existe');

        const posts = await loadPosts ( uid );
        dispatch ( setPosts(posts));
    }
}

export const startSavePost = () => {
    return async ( dispatch, getState) => {

        dispatch (setSaving());

        const { uid } = getState().auth;
        const {activePost:post} = getState().findy;

        const postToFireStore = { ...post };
        delete postToFireStore.id;

        const docRef = doc (FirebaseDB, `${ uid }/findy/posts/${post.id}`);
        await setDoc (docRef, postToFireStore, {merge: true} );

        dispatch ( updatePost(post) );
    }
}