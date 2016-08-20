import * as React from 'react';
import {connect} from 'react-redux';

interface AppContentsProps {
    children: any;
}

/**
 * アプリケーションのルートコンポーネント
 */
class AppContents extends React.Component<AppContentsProps, any> {

    public render() {
        return (
            <div>
                TodoisToggl
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = () => ({
});

const AppContainer = connect(
    mapStateToProps
)(AppContents);

export default AppContainer;
