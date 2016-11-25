import React from "react";

export default class AppRoot extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
};
