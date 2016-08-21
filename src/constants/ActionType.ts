// 補完とデバッグ時の文字列出力を実現させるためtypeとnamespaceを両方定義する
type ActionType = "FETCH_TASK" |
    "WILL_FETCH_TASK" |
    "UPDATE_SETTING"
namespace ActionType {
    'use strict';
    export const FETCH_TASK: ActionType = 'FETCH_TASK';
    export const WILL_FETCH_TASK: ActionType = 'WILL_FETCH_TASK';
    export const UPDATE_SETTING: ActionType = 'UPDATE_SETTING';
}

export default ActionType;
