import React from "react";
import { addLine } from "../store/line";
import { connect } from "react-redux";

class AddLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line: "",
      poemId: this.props.poem.id,
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
    const { line, poemId } = this.state;
    event.preventDefault();
    this.props.addLine({ line, poemId });
  }

  render() {
    return (
      <div id="add-line">
        <form id="add-line-form" onSubmit={this.handleSubmit}>
          <input
            name="line"
            onChange={this.handleChange}
            value={this.state.line}
          />
          <button className="add-line-btn" type="submit">
            +
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch, { history }) => ({
  addLine: (line) => dispatch(addLine(line, history)),
});

export default connect(null, mapDispatch)(AddLine);
