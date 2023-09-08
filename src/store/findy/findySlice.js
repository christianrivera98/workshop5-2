import { createSlice } from '@reduxjs/toolkit';
export const findySlice = createSlice({
   name: 'findy',
   initialState: {
       isSaving: false,
       messageSaved: '',
       newPost: [],
       activePost: null,
   },
   reducers: {

        savingNewPost: (state) => {
            state.isSaving = true;
        },

       addNewEmptyPost: (state, action) => {
            state.newPost.push( action.payload);
            state.isSaving = false;
       },

       setActivePost : (state, action) => {
            state.activePost = action.payload;
       },

       setPosts : (state, action) => {
            state.newPost = action.payload;
       },

       setSaving: (state) => {
            state.isSaving = true;
       },
       updatePost: (state, action) => {
            state.isSaving = false;
            state.newPost = state.newPost.map( post => {

                if (post.id === action.payload.id) {

                    return action.payload;

                }

                return post;
            });
            // state.messageSaved = `${ action.payload.ti}`
       },
       deletePost: (state, action) => {

       },
   }
});
// Action creators are generated for each case reducer function
export const { 
    increment,
    savingNewPost,
    addNewEmptyPost,
    setActivePost,
    setPosts,
    setSaving,
    updatePost,
    deletePost,
 } = findySlice.actions;