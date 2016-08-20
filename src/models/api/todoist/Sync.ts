import Item from './Item';

/**
 * Todoist の取得情報全体の型
 * {@link https://developer.todoist.com/?shell#api-overview}
 */
interface Sync {
    /** タスク一覧 */
    items: Item[];
}

export default Sync;
