import { atom } from "recoil";


export const currentUserState = atom({
    key: 'currentUserState',
    default: null,
});

export const projectsListState = atom({
    key: 'projectsState',
    default: [],
});