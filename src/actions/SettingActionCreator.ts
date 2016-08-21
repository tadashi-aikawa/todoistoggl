import {createAction, Action} from 'redux-actions';
import ActionType from '../constants/ActionType';
import {SettingState} from '../models/states/SettingState';

const updateSetting: (setting: SettingState) => Action<SettingState> =
    createAction(
        ActionType.UPDATE_SETTING,
        (setting) => setting
    );

export {
    updateSetting
}
