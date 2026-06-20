import {baseUrl} from "@/src/helpers/url";

export const getAll = async <T, > (endpoint: string): Promise<T> => {
    return fetch(`${baseUrl}${endpoint}`).then(res => res.json())
}

export const getById = async <T, > (endpoint: string, id: number|string): Promise<T> => {
    return fetch(`${baseUrl}${endpoint}${id}`).then(res => res.json())
}