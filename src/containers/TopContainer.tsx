import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import {Dictionary} from 'lodash';

import State from '../models/states/AppState';
import {Task} from '../models/states/TaskState';
import {fetchTask, willFetchTask} from '../actions/TodoistActionCreator';
import {SettingState} from '../models/states/SettingState';


interface TopContentProps<T> {
    taskByKey: Dictionary<Task>;
    isLoading: boolean;
    onClick: (callbackPayload: T) => void;
    /** dispatchで必要なstateの値を引き渡す枠 */
    callbackPayload: T;
}

class TopContent<T> extends React.Component<TopContentProps<T>, any> {
    constructor(props: TopContentProps<T>) {
        super(props);
        this.onClickFetchTask = this.onClickFetchTask.bind(this);
    }

    public onClickFetchTask() {
        this.props.onClick(this.props.callbackPayload);
    }

    public render() {
        const buttonText = this.props.isLoading ? 'isLoading' : 'get the tasks!';
        return (
            <div>
                <RaisedButton label={buttonText}
                              primary
                              onClick={this.onClickFetchTask}
                              disabled={this.props.isLoading}/>
                <List>
                    {
                        _(_.values<Task>(this.props.taskByKey))
                            .orderBy(x => x.dueDate)
                            .map(x => (
                                <ListItem
                                    key={x.id}
                                    leftCheckbox={<Checkbox/>}
                                    primaryText={x.content}
                                    secondaryText={x.dueDate ? x.dueDate.toDateString() : ''}
                                />
                            ))
                            .value()
                    }
                </List>
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    taskByKey: state.task.taskByKey,
    isLoading: state.task.isLoading,
    callbackPayload: state.setting
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (callbackPayload: SettingState) => {
        dispatch(willFetchTask());
        dispatch(fetchTask(callbackPayload));
    }
});

const TopContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopContent);

export default TopContainer;
