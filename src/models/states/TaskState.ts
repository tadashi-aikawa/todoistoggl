import {Dictionary} from 'lodash';

interface TaskState {
    taskByKey: Dictionary<Task>;
    isLoading: boolean;
}

interface Task {
    /** タスクのID */
    id: number;
    /** タスクオーナーのID */
    ownerId: number;
    /** タスクの文字列 */
    content: string;
    /** 期日 */
    dueDate: Date;
}

export {
    TaskState,
    Task
};
