import {Action, handleActions} from 'redux-actions';
import ActionType from '../constants/ActionType';
import {SettingState, TodoistSetting} from '../models/states/SettingState';

const INIT_STATE: SettingState = {
    todoist: {
        token: ''
    }
};

export default handleActions<SettingState, any>({
        [ActionType.UPDATE_SETTING]: (state: SettingState, action: Action<SettingState>): SettingState =>
            Object.assign({}, state, action.payload)
    }, INIT_STATE
);
