import {IUser} from "@/src/models/IUser";

export const searchParamsHelper = (data: string | string[] | undefined): IUser | null => {

    if(!data || Array.isArray(data)) {
        return null;
    }
    try {
        return JSON.parse(data) as IUser;
    } catch (error) {
        console.error("searchParams parsing error:", error);
        return null;
    }
}

