import {set, get} from 'electron-json-storage';
import {SettingState} from '../../models/states/SettingState';

const CONFIG = 'config';

const save = (config: SettingState): Promise<SettingState|any> => {
    return new Promise((resolve, reject) => {
        set(CONFIG, config, (error: any) => error ? reject(error) : resolve(config));
    });
};

const load = (): Promise<SettingState|any> => {
    return new Promise((resolve, reject) => {
        get(CONFIG, (error: any, data: SettingState) => error ? reject(error) : resolve(data));
    });
};

export {
    save,
    load
}
