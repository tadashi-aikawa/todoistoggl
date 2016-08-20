import {Action, handleActions} from 'redux-actions';
import * as _ from 'lodash';
import {Dictionary} from 'lodash';

import ActionType from '../constants/ActionType';
import {TaskState, Task} from '../models/states/TaskState';

const INIT_STATE: TaskState = {
    taskByKey: {},
    isLoading: false
};

export default handleActions<TaskState, any>({
        [ActionType.WILL_FETCH_TASK]: (state: TaskState, action: Action<void>): TaskState =>
            Object.assign({}, state, {isLoading: true}),
        [ActionType.FETCH_TASK]: (state: TaskState, action: Action<Dictionary<Task>>): TaskState =>
            Object.assign({}, state, {taskByKey: action.payload, isLoading: false})
    }, INIT_STATE
);
