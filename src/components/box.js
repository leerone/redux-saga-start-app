import React from "react";
import "./box.less";

class Box extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="box">
                    <button onClick={() => {this.props.handleClick()}}>调用</button>
                </div>
            </div>
        )
    }
}

export default Box;