import {getAll} from "@/src/services/api.services";
import {IUser} from "@/src/models/IUser";
import {IPost} from "@/src/models/IPost";

export const users = await getAll<IUser[]>('/users');

export const posts = await getAll<IPost[]>('/posts')