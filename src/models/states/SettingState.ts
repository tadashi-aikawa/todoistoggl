interface SettingState {
    /** 初期読込が完了しているか */
    doneInitLoading: boolean;
    todoist: TodoistSetting;
}

interface TodoistSetting {
    /** 認証Token */
    token: string;
}

export {
    SettingState,
    TodoistSetting
};
