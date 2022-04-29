import React from "react";
import { connect } from "react-redux";
import { fetchSinglePoem } from "../store/singlePoem";
import { Link } from "react-router-dom";
import { fetchPoems } from "../store/poems";

class SinglePoem extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadAllPoems();
    // try {
      
    //   const poemId = parseInt(this.props.match.params.poemId);
    //   //console.log("poem id", poemId)
    //   this.props.loadSinglePoem(poemId);
    // } catch (err) {
    //   console.error(err);
    // }
  }



  render() {
    let poemId = parseInt(this.props.match.params.poemId);
    let poems = this.props.poems; 

    console.log("PROPS FOR SINGLE POEM", this.props, poemId);
    return (
      <div id="single-poem">
        <div>
            {poems.map((poem) => {
                if (poem.id === poemId) {
                    return (
                        <ul key={poem.id}>
                           <strong><p>{poem.title}</p></strong>
                           <li>{poem.firstLine}</li>
                           <>{poem.lines.map((line) => {
                               return (
                                  <li key={line.id}>{line.line}</li>
                               )
                           })}</>
                        </ul>
                    )
                }
            })}
        </div>
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
    poems: state.poems,
    singlePoem: state.singlePoem,
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadSinglePoem: (poemId) => dispatch(fetchSinglePoem(poemId)),
    loadAllPoems: () => dispatch(fetchPoems()),
  };
};

export default connect(mapState, mapDispatch)(SinglePoem);
