import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadPosts = async (uid = '') => {

    if ( !uid ) throw new Error ('El UID del usuario no existe');

    const collectionRef = collection (FirebaseDB, `${ uid }/findy/posts`);
    const docs = await getDocs (collectionRef);

    const userPosts = [];
    docs.forEach ( doc => {
        userPosts.push({ id: doc.id, ...doc.data()})
    });
    
    return userPosts;
}