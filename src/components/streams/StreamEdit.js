import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

/// access to id from props by React Router Dom
/// props.match.params.id
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    // console.log(this.props);
    if (!this.props.stream) return <div>Loading...</div>;
    return (
      <div>
        <h3>Edit stream</h3>
        <StreamForm
          // initialValues={{
          //   title: this.props.stream.title,
          //   description: this.props.stream.description,
          // }}
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

/// Ghi nho la ownProps co the access props ben tren nhe
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  fetchStream,
  editStream,
})(StreamEdit);
