import { createReducer } from 'helpers';
import {
    POSTS,
} from 'configs/types';

export const posts = createReducer(POSTS, 'id');
