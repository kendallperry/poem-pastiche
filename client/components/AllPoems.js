import React from "react";
import { connect } from "react-redux";
import { fetchPoems } from "../store/poems";
import SearchBar from "./SearchBar";

class AllPoems extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
        this.props.displayPoems();
    }

    render() {
        const { filteredPoems, poems } = this.props;
        // poems = poems.filter((poem) =>
        //   filteredPoems.includes(poem)
        // );
        console.log("lines", this.props)
        return (
            <div id="all-poems-container">
                {/* <SearchBar /> */}
                {/* <h1 className="title"></h1> */}
                <ul id="all-poems">
                    {poems.length === 0 ? <h2>No Poems Yet!</h2> : null}
                    {poems.map((poem) => {
                        return (
                            <div className="poem" key={poem.id}>
                                <strong><h4>{poem.title}</h4></strong><br />
                                <p>{poem.firstLine}</p>
                                <p>{poem.lines[0] ? poem.lines[0].line : null}</p>
                                <p>{poem.lines[1] ? poem.lines[1].line : null}</p>
                                <p>{poem.lines[2] ? poem.lines[2].line : null}</p>
                                <p>{poem.lines[3] ? poem.lines[3].line : null}</p>
                                <br /><br /><br />
                                {poem.user ? <i><p>started by: {poem.user.username}</p></i> : null}

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

const searchPoems = (state, searchTerm) => {
    if (searchTerm === "") {
      return state.poems;
    }
    return state.poems.filter((poem) =>
      poem.title.includes(searchTerm)
    );
  };


const mapState = (state) => {
    return {
        poems: state.poems,
        filteredPoems: searchPoems(state, state.searchTerm),
    }
}

const mapDispatch = (dispatch) => {
    return {
        displayPoems: () => dispatch(fetchPoems()),
    }
}

export default connect(mapState, mapDispatch)(AllPoems);
