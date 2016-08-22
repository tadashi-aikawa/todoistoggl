import * as React from 'react';
import {connect} from 'react-redux';
import {AppBar, IconButton, CircularProgress} from 'material-ui';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import SettingDialogContainer from './SettingDialogContainer';
import {loadSetting} from '../actions/SettingActionCreator';
import AppState from '../models/states/AppState';


interface AppContentsProps {
    doneInitLoading: boolean;
    children: any;
    onCunstructor: () => void;
}

interface AppContentsState {
    isSettingsOpen: boolean;
}

/**
 * アプリケーションのルートコンポーネント
 */
class AppContents extends React.Component<AppContentsProps, AppContentsState> {

    constructor(props: AppContentsProps) {
        super(props);
        this.state = {
            isSettingsOpen: false
        };
        this.onCloseSettingsDialog = this.onCloseSettingsDialog.bind(this);
        this.onClickSettings = this.onClickSettings.bind(this);
        this.props.onCunstructor();
    }

    public onClickSettings() {
        this.setState({
            isSettingsOpen: true
        });
    }

    public onCloseSettingsDialog() {
        this.setState({
            isSettingsOpen: false
        });
    }

    public render() {
        if (!this.props.doneInitLoading) {
            return <CircularProgress size={5} />;
        }

        return (
            <div>
                <AppBar
                    title="TodoisToggl"
                    iconElementRight={<IconButton onTouchTap={this.onClickSettings}><SettingsIcon /></IconButton>}
                />
                {this.props.children}
                <SettingDialogContainer
                    open={this.state.isSettingsOpen}
                    onOk={this.onCloseSettingsDialog}
                    onCancel={this.onCloseSettingsDialog}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    doneInitLoading: state.setting.doneInitLoading
});

const mapDispatchToProps = (dispatch) => ({
    onCunstructor: () => {
        dispatch(loadSetting());
    }
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContents);

export default AppContainer;
