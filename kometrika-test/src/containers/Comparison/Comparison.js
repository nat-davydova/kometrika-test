import React, { Component } from "react";
import { connect } from "react-redux";

import Section from "components/Section/Section";
import ComparisonTable from "components/ComparisonTable/ComparisonTable";
import ErrorTxt from "components/UI/ErrorTxt/ErrorTxt";

import { sectionConfig } from "./config";
import { grabbingStarship } from "store/actions/actions";

class Comparison extends Component {
  async componentDidMount() {
    const arr = [3, 10, 11, 12, 15, 17, 21, 22, 23];

    for (const elem of arr) {
      await this.props.onGrabbingStarship(elem);
    }
  }

  render() {
    const tbodyProps = [
      "cost_in_credits",
      "length",
      "max_atmosphering_speed",
      "crew",
      "passengers",
      "cargo_capacity",
      "consumables",
      "hyperdrive_rating",
      "MGLT"
    ];

    return (
      <Section sectionConfig={sectionConfig}>
        {this.props.isError && <ErrorTxt errorTxt={this.props.errorTxt} />}

        {!this.props.isError && (
          <ComparisonTable
            tbodyProps={tbodyProps}
            config={this.props.starships}
          />
        )}
      </Section>
    );
  }
}

const mapStateToProps = state => {
  return {
    starships: state.starships,
    isError: state.isError,
    errorTxt: state.errorTxt
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGrabbingStarship: elem => dispatch(grabbingStarship(elem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comparison);
