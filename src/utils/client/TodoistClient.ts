import * as Axios from 'axios';
import * as _ from 'lodash';
import {stringify} from 'query-string';
import Sync from '../../models/api/todoist/Sync';

const baseURL: string = 'https://todoist.com/API/v7';

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
