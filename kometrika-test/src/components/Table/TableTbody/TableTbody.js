import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import TableTr from "components/Table/TableTr/TableTr";
import TableTd from "components/Table/TableTd/TableTd";

const tableTbody = ({ config, tbodyProps = [] }) => {
  const tableData = [];
  const defaultConfigElem = config[0];

  for (let configKey in defaultConfigElem) {
    const trData = [];

    // if we have a list of table body properties and data item is not in the list - it's not rendered
    if (tbodyProps && tbodyProps.indexOf(configKey) < 0) {
      continue;
    }

    // rendering row title criteria
    trData.push(
      <TableTd key={uuid()} isCriteria>
        {configKey.split("_").join(" ")}
      </TableTd>
    );

    // rendering table cells with data
    config.forEach(configElem => {
      trData.push(<TableTd key={uuid()}>{configElem[configKey]}</TableTd>);
    });

    // rendering single table row
    tableData.push(<TableTr key={uuid()}>{trData}</TableTr>);
  }

  return <tbody>{tableData}</tbody>;
};

tableTbody.propTypes = {
  tbodyProps: PropTypes.array,
  config: PropTypes.array.isRequired
};

export default tableTbody;
