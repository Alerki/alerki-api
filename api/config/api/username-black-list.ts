import * as UsernameBlackList from './json/username-black-list.json';

export const usernameBlackListRaw = UsernameBlackList;
export const usernameBlackListSet = new Set(usernameBlackListRaw);
