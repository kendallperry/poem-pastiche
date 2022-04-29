import React from "react";
import { connect } from "react-redux";
import { fetchSinglePoem } from "../store/singlePoem";
import { Link } from "react-router-dom";

class SinglePoem extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // this.props.loadSinglePoem(this.props.match.params.poemId);
    try {
      const poemId = parseInt(this.props.match.params.poemId);
      //console.log("poem id", poemId)
      this.props.loadSinglePoem(poemId);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    console.log("PROPS FOR SINGLE POEM", this.props);
    return (
      <div id="single-poem">
        page under construction!
        <br /> <br />
        <Link to="/poems">
          <button>go back</button>
        </Link>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    singlePoem: state.singlePoem,
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadSinglePoem: (poemId) => dispatch(fetchSinglePoem(poemId)),
  };
};

export default connect(mapState, mapDispatch)(SinglePoem);
