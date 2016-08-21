import * as React from 'react';
import {connect} from 'react-redux';
import {AppBar, IconButton} from 'material-ui';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import {Dialog} from 'material-ui';
import {FlatButton} from 'material-ui';
import SettingDialogContainer from './SettingDialogContainer';

interface AppContentsProps {
    open: boolean;
    children: any;
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

const mapStateToProps = () => ({});

const AppContainer = connect(
    mapStateToProps
)(AppContents);

export default AppContainer;
