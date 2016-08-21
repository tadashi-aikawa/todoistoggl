// XXX: reducerと処理が重複するので何とかならないか...
import {TaskState} from './TaskState';
import {SettingState} from './SettingState';

interface State {
    task: TaskState;
    setting: SettingState;
}

export default State;
