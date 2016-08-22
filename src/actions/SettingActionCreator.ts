import {createAction, Action} from 'redux-actions';
import ActionType from '../constants/ActionType';
import {SettingState} from '../models/states/SettingState';
import {load} from '../utils/client/ConfigClient';

const updateSetting: (setting: SettingState) => Action<SettingState> =
    createAction(
        ActionType.UPDATE_SETTING,
        (setting) => setting
    );

const loadSetting: () => Action<SettingState> =
    createAction(
        ActionType.UPDATE_SETTING,
        async() => await load()
    );

export {
    updateSetting,
    loadSetting
}
