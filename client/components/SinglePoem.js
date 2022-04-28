import React from "react";
import { connect } from "react-redux";
import { fetchSinglePoem } from "../store/singlePoem";

class SinglePoem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadSinglePoem(this.props.match.params.poemId);
    }

    render() {
        console.log("PROPS FOR SINGLE POEM", this.props.singlePoem);
        return (
            <div id="single-poem">
                hello!
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        singlePoem: state.singlePoem,
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadSinglePoem: (poemId) => dispatch(fetchSinglePoem(poemId)),
    }
}

export default connect(mapState, mapDispatch)(SinglePoem);
