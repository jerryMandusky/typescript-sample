import { combineReducers } from "redux";
import { MemberEntity, MemberErrors, RepositoryEntity } from "../model";
import { membersReducer } from "./members";
import { memberReducer } from "./member";
import { memberErrorReducer } from "./memberErrors";
import { repositoriesReducer } from "./repositories";

export interface State {
  members: MemberEntity[];
  member: MemberEntity;
  memberErrors: MemberErrors;
  repositories: RepositoryEntity[];
}

export const state = combineReducers<State>({
  members: membersReducer,
  member: memberReducer,
  memberErrors: memberErrorReducer,
  repositories: repositoriesReducer
});
