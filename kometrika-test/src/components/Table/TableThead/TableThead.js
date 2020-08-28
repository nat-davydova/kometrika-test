import React from "react";

import TableTr from "components/Table/TableTr/TableTr";
import TableTh from "components/Table/TableTh/TableTh";
import Spaceship from "components/Spaceship/Spaceship";

import StarDestroyerImg from "assets/img/starships/star-destroyer.png";
import FalconImg from "assets/img/starships/falcon.png";

const tableThead = props => (
  <thead>
    <TableTr>
      <TableTh></TableTh>
      <TableTh>
        <Spaceship
          name="Star Destroyer"
          model="Imperial I-class Star Destroyer"
        />
        <img src={StarDestroyerImg} />
        <p>(Star Destroyer)</p>
        <p>Kuat Drive Yards</p>
      </TableTh>
      <TableTh>
        <Spaceship name="Millennium Falcon" model="YT-1300 light freighter" />
        <img src={FalconImg} />
        <p>(Light freighter)</p>
        <p>Corellian Engineering Corporation</p>
      </TableTh>
    </TableTr>
  </thead>
);

export default tableThead;
