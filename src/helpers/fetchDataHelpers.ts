import {getAll} from "@/src/services/api.services";
import {IUser} from "@/src/models/IUser";
import {IPost} from "@/src/models/IPost";
import {IComment} from "@/src/models/IComment";

export const users = await getAll<IUser[]>('/users');

export const posts = await getAll<IPost[]>('/posts');

export const comments = await getAll<IComment[]>('/comments');

