interface SettingState {
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
