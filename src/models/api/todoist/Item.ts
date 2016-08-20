/**
 * Todoist タスクアイテムの型
 * {@link https://developer.todoist.com/?shell#items}
 */
interface Item {
    /** タスクのID */
    id: number;
    /** タスクオーナーのID */
    user_id: number;
    /** タスクのプロジェクトID */
    project_id: number;
    /** タスクの文字列 */
    content: string;
    /** 入力されたテキスト形式の日付情報 */
    date_string: string;
    /** date_stringの言語 */
    date_lang: string;
    /** 期日 (Mon 07 Aug 2006 12:34:56 +0000) */
    due_date_utc: string;
    /** タスクのインデント (1～4。1がtop) */
    indent: number;
    /** 優先度 (min 1,2,3,4 max) */
    priority: number;
    /** プロジェクト内でのタスク順序 (小さいほど上) */
    item_order: number;
    /** ｢本日｣または｢7日間｣内でのタスク順序 (小さいほど上) */
    day_order: number;
    /** サブタスクが展開されているか (1:true / 0:false) */
    collapsed: number;
    /** ラベル */
    labels: number[];
    /** アサインしたユーザID */
    assigned_by_uid: number;
    /** 責任者のユーザID (プロジェクト共有していなければnull) */
    responsible_uid: number;
    /** タスクが完了したか (1:true / 0:false) */
    checked: number;
    /** タスクが履歴に移動したか (1:true / 0:false) */
    in_history: number;
    /** タスクが削除されたか (1:true / 0:false) */
    is_deleted: number;
    /** タスクがアーカイブされたか (1:true / 0:false) */
    is_archived: number;
    /** 内部で使用する特殊なID */
    sync_id: number;
    /** タスクが作成された日時 (Mon 07 Aug 2006 12:34:56 +0000) */
    date_added: string;
}

export default Item;
