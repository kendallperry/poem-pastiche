import React from "react";
import { connect } from "react-redux";
import { fetchPoems } from "../store/poems";
import AddLine from "./AddLine";


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
          {poems.length === 0 ? <h2>No Poems Yet!</h2> : null}
          {poems.map((poem) => {
            return (
              <div className="poem" key={poem.id}>
                <strong>
                  <h4>{poem.title}</h4>
                </strong>
                <br />
                <p>{poem.firstLine}</p>
                <p>{poem.lines[0] ? poem.lines[0].line : null}</p>
                <p>{poem.lines[1] ? poem.lines[1].line : null}</p>
                <p>{poem.lines[2] ? poem.lines[2].line : null}</p>
                <p>{poem.lines[3] ? poem.lines[3].line : null}</p>
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
