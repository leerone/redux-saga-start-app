import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import PureRenderMixin from "react-addons-pure-render-mixin";
import Box from "../components/box";
import * as actionCreators from "../actions/index";

class App extends Component {
        constructor(props) {
                super(props);
                this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
                this.state = {
                        initDone: true
                };
        }

        componentDidMount() {

        }
        render() {
                return (
                    <div>
                        <div>加载中...</div>
                        <Box handleClick={this.props.loadData}></Box>
                    </div>
                );
        }
}

const mapStateToProps = (state) => {
        return state;
};

const mapDispatchToProps = (dispatch) => {
        //return {
                // authTokenActions: bindActionCreators(authTokenActionFromOtherFile, dispatch),
                // studentInfoActions: bindActionCreators(studentInfoActionFromOtherFile, dispatch)
        //}
        return actionCreators;
};
export default withRouter(connect(
      mapStateToProps,
      mapDispatchToProps
)(App));
