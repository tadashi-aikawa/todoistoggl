import {createAction, Action} from 'redux-actions';
import ActionType from '../constants/ActionType';
import Sync from '../models/api/todoist/Sync';
import Item from '../models/api/todoist/Item';
import {Task} from '../models/states/TaskState';
import * as TodoistClient from '../utils/client/TodoistClient';
import * as _ from 'lodash';
import {Dictionary} from 'lodash';
import {SettingState} from '../models/states/SettingState';

const toTaskByKey = (items: Item[]): Dictionary<Task> => {
    return _(items)
        .map<Task>(x => ({
            id: x.id,
            ownerId: x.user_id,
            content: x.content,
            dueDate: x.due_date_utc ? new Date(x.due_date_utc) : undefined
        }))
        .keyBy(x => x.id)
        .value();
};

const willFetchTask: () => Action<void> =
    createAction(
        ActionType.WILL_FETCH_TASK
    );

const fetchTask: (setting: SettingState) => Action<Promise<Sync>> =
    createAction(
        ActionType.FETCH_TASK,
        async (setting: SettingState) => {
            const sync = await TodoistClient.fetchSync(setting.todoist.token);
            return toTaskByKey(sync.items);
        }
    );

export {
    willFetchTask,
    fetchTask
}
