import * as Axios from 'axios';
import {stringify} from 'query-string';
import Sync from '../../models/api/todoist/Sync';

// Proxyを経由するため開発中はURLが異なる
// デバッグでelectron-dev-serverを使う際にCORSに引っかかるため
const baseURL = process.env.NODE_ENV === 'development' ?
    'http://localhost:8080/API/v7/' : 'https://todoist.com/API/v7/';

const fetchSync = async(): Promise<Sync> => await Axios.post(
    '/sync',
    stringify({
        token: 'xxx',
        sync_token: '*',
        resource_types: '["items"]'
    }),
    {baseURL}
).then(r => <Sync>(r.data));

export {
    fetchSync
}
