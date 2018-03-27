import { CreateActionCreator } from 'helpers';
import { POSTS } from 'configs/types';

export const fetchPosts = _ => CreateActionCreator.read({
    path: '/posts',
    type: POSTS,
});

export const fetchSinglePost = ID => CreateActionCreator.read({
    path: `/posts/${ID}`,
    type: POSTS,
});

export const createPost = _ => CreateActionCreator.create({
    path: '/posts',
    type: POSTS,
});

export const updatePost = post => CreateActionCreator.update({
    path: `/posts/${post.id}`,
    type: POSTS,
    body: post,
});

export const deletePost = ID => CreateActionCreator.delete({
    path: `/posts/${ID}`,
    type: POSTS,
});
