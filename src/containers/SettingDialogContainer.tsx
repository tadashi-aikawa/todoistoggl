import * as React from 'react';
import {connect} from 'react-redux';
import {Dialog, FlatButton} from 'material-ui';
import {SettingState} from '../models/states/SettingState';
import {TextField} from 'material-ui';
import AppState from '../models/states/AppState';
import * as _ from 'lodash';
import {updateSetting} from '../actions/SettingActionCreator';

interface SettingDialogState {
    setting: SettingState;
}

interface SettingDialogProps {
    setting: SettingState;
    open: boolean;
    onOk: (setting: SettingState) => void;
    onCancel: () => void;
}

class SettingDialog extends React.Component<SettingDialogProps, SettingDialogState> {

    constructor(props: SettingDialogProps) {
        super(props);
        this.state = {
            setting: this.props.setting
        };
        this.onOk = this.onOk.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.handleTodoistTokenChange = this.handleTodoistTokenChange.bind(this);
    }

    public onOk() {
        this.props.onOk(this.state.setting);
    }

    public onCancel() {
        // 設定ダイアログの状態を編集前に戻す
        this.setState({setting: this.props.setting});
        this.props.onCancel();
    }

    public handleTodoistTokenChange(event: any) {
        this.setState(
            _.merge({}, this.state, {
                setting: {
                    todoist: {
                        token: event.target.value
                    }
                }
            })
        );
    };

    public render() {
        const actions = [
            <FlatButton
                label="OK"
                primary={true}
                onTouchTap={this.onOk}
            />,
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.onCancel}
            />
        ];

        return (
            <Dialog
                title="Setting"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.onCancel}
            >
                <TextField
                    hintText="Authentication token"
                    type="password"
                    value={this.state.setting.todoist.token}
                    onChange={this.handleTodoistTokenChange}
                />
            </Dialog>
        );
    }
}

interface SettingDialogContainerProps {
    open: boolean;
    onOk: () => void;
    onCancel: () => void;
}

const mapStateToProps = (state: AppState, ownProps: SettingDialogContainerProps) => ({
    setting: state.setting,
    open: ownProps.open
});

const mapDispatchToProps = (dispatch, ownProps: SettingDialogContainerProps) => ({
    onOk: (setting: SettingState) => {
        dispatch(updateSetting(setting));
        ownProps.onOk();
    },
    onCancel: () => {
        ownProps.onCancel();
    }
});

const SettingDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingDialog);

export default SettingDialogContainer;
