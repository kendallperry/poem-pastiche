import React from "react";
import { connect } from "react-redux";
import { fetchPoems } from "../store/poems";

class AllPoems extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
        this.props.displayPoems();
    }

    render() {
        console.log("lines", this.props)
        const { poems } = this.props;
        return (
            <div id="all-poems-container">
                {/* <h1 className="title"></h1> */}
                <ul id="all-poems">
                    {poems.length === 0 ? <h2>No Poems Yet!</h2> : null}
                    {poems.map((poem) => {
                        return (
                            <div className="poem" key={poem.id}>
                                <strong>{poem.title}</strong>
                                <p>{poem.lines.length ? poem.lines[0].line : null}</p>
                                <p>{poem.lines[1] ? poem.lines[1].line : null}</p>
                                <p>{poem.lines[2] ? poem.lines[2].line : null}</p>
                                <p>{poem.lines[3] ? poem.lines[3].line : null}</p>
                            </div>
                        )
                    })}
                    {/* {poems.lines.map((line) => {
                                    <div key={line.id}>
                                        {line.line}
                                    </div>
                                })} */}
                </ul>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        poems: state.poems,
    }
}

const mapDispatch = (dispatch) => {
    return {
        displayPoems: () => dispatch(fetchPoems()),
    }
}

export default connect(mapState, mapDispatch)(AllPoems);
