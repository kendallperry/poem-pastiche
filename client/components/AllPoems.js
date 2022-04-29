import React from "react";
import { connect } from "react-redux";
import { fetchPoems } from "../store/poems";
import AddLine from "./AddLine";
import { Link } from "react-router-dom";


class AllPoems extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.displayPoems();
  }

  //   componentDidUpdate() {
  //       if (this.props.poems.lines.length !== this.props.poems.lines.length) {
  //         this.props.displayPoems();
  //       }
  //   }

  render() {
    const { poems } = this.props;
    return (
      <div id="all-poems-container">
        <ul id="all-poems">
          {poems.length === 0 ? <p>loading poems...</p> : null}
          {poems.map((poem) => {
            return (
              <div className="poem" key={poem.id}>
                <>
                <Link to={`/poems/${poem.id}`} key={poem.id}>
                <strong>
                  <h4>{poem.title}</h4>
                </strong>
                </Link>
                </>
                <br /> 
                
                <p>{poem.firstLine}</p>
                <p>{poem.lines[poem.lines.length-4] ? poem.lines[poem.lines.length-4].line : null}</p>
                <p>{poem.lines[poem.lines.length-3] ? poem.lines[poem.lines.length-3].line : null}</p>
                <p>{poem.lines[poem.lines.length-2] ? poem.lines[poem.lines.length-2].line : null}</p>
                <p>{poem.lines[poem.lines.length-1] ? poem.lines[poem.lines.length-1].line : null}</p>
                <br />
                <br />
                <br />
                <AddLine poem={poem} />
                {poem.user ? (
                  <i>
                    <p>started by: {poem.user.username}</p>
                  </i>
                ) : null}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    poems: state.poems,
  };
};

const mapDispatch = (dispatch) => {
  return {
    displayPoems: () => dispatch(fetchPoems()),
  };
};

export default connect(mapState, mapDispatch)(AllPoems);
