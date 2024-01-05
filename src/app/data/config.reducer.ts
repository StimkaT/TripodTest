export const CONFIG_FEATURE_KEY = 'config';

export interface IUser {id: number, name: string, role: string}
export interface ConfigState {
  userList: IUser[];
}

export interface ConfigPartialState {
  readonly [CONFIG_FEATURE_KEY]: ConfigState;
}

export const initialState: ConfigState = {
  userList:[
    {id: 1, name: 'User1', role: 'admin'},
    {id: 2, name: 'User2', role: 'admin'},
  ],
};

export interface IUsb {
  name: string;
}

