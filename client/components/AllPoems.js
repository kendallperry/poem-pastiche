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
        console.log("PROPS", this.props)
        const { poems } = this.state;
        return (
            <div id="all-poems-container">
                <h1>Poems</h1>
                <ul id="all-poems">
                    {poems.length === 0 ? <h2>No Poems Yet!</h2> : null}
                    {poems.map((poem) => {
                        return (
                            <div key={poem.id}>
                                {poem.title}
                            </div>
                        )
                    })}
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
