import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Versions extends Component {
  render() {
    // 1
    if (this.props.feedQuery && this.props.feedQuery.loading) {
      return <div>Loading</div>;
    }

    // 2
    if (this.props.feedQuery && this.props.feedQuery.error) {
      return <div>Error</div>;
    }

    // 3
    const pdVersionsToRender = this.props.feedQuery.pdVersions;
    const lgdVersionsToRender = this.props.feedQuery.lgdVersions;
    console.log(this.props.feedQuery);
    return (
      <div>
        <label>PD</label>
        {pdVersionsToRender.map(version => (
          <React.Fragment>
            <p>{version.versionId}</p>
            <p>{version.modelName}</p>
          </React.Fragment>
        ))}
        <label>LGD</label>
        {lgdVersionsToRender.map(version => (
          <React.Fragment>
            <p>{version.versionId}</p>
            <p>{version.modelName}</p>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

// 1
const FEED_QUERY = gql`
  # 2
  query {
    pdVersions {
      versionId
      modelName
    }
    lgdVersions {
      versionId
      modelName
    }
  }
`;

export default graphql(FEED_QUERY, { name: "feedQuery" })(Versions);
