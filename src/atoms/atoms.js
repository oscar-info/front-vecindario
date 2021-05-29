import { atom } from "recoil";


export const currentUserState = atom({
    key: 'currentUserState',
    default: {},
});

export const projectsListState = atom({
    key: 'projectsState',
    default: [],
});