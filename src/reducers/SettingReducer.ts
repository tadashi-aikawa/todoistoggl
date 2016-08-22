import {Action, handleActions} from 'redux-actions';
import ActionType from '../constants/ActionType';
import {SettingState} from '../models/states/SettingState';
import {save} from '../utils/client/ConfigClient';

const INIT_STATE: SettingState = {
    doneInitLoading: false,
    todoist: {
        token: ''
    }
};

export default handleActions<SettingState, any>({
        [ActionType.UPDATE_SETTING]: (state: SettingState, action: Action<SettingState>): SettingState => {
            save(action.payload);
            return Object.assign({}, state, action.payload, {doneInitLoading: true});
        }
    }, INIT_STATE
);
