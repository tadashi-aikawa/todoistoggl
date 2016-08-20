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


interface TopContentProps {
    taskByKey: Dictionary<Task>;
    isLoading: boolean;
    onClick: () => void;
}

class TopContent extends React.Component<TopContentProps, any> {
    public render() {
        const buttonText = this.props.isLoading ? 'isLoading' : 'get the tasks!';
        return (
            <div>
                <RaisedButton label={buttonText} primary onClick={this.props.onClick} disabled={this.props.isLoading}/>
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
    isLoading: state.task.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => {
        dispatch(willFetchTask());
        dispatch(fetchTask());
    }
});

const TopContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopContent);

export default TopContainer;
