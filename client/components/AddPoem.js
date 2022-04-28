import React from "react";
import { addPoem } from "../store/poems";
import { connect } from "react-redux";

class AddPoem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      firstLine: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { title, firstLine } = this.state;
    event.preventDefault();
    this.props.addPoem({ title, firstLine });
  }

  render() {
     // console.log("PROPS", this.props);
    return (
      <div id="add-poem">
        <h2>start a new poem!</h2>
        <form id="add-poem-form" onSubmit={this.handleSubmit}>
          <label htmlFor="title">name your poem:</label>
          <input
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          /><br />

          <label htmlFor="firstLine">first line:</label>
          <input
            name="firstLine"
            onChange={this.handleChange}
            value={this.state.firstLine}
          /><br /> 

            <button className="add-poem-btn" type="submit">
              add poem
            </button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch, { history }) => ({
  addPoem: (poem) => dispatch(addPoem(poem, history)),
});

export default connect(null, mapDispatch)(AddPoem);
