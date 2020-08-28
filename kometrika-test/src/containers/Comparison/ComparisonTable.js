import React, { Component } from "react";

import Section from "components/Section/Section";

import { sectionConfig } from "./config";

class ComparisonTable extends Component {
  render() {
    return <Section sectionConfig={sectionConfig}></Section>;
  }
}

export default ComparisonTable;
