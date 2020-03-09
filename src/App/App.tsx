import React, {useEffect, useState} from 'react';
import "../fontawesome/sass/fontawesome.scss";
import "../fontawesome/sass/solid.scss";
import "../sass/index.scss";
import Column from "./types/column";
import GridComponent from "./components/GridComponent";
import Grid from "./types/grid";
import ColumnDisplay from "./components/ColumnDisplay/ColumnDisplay";
import {setSeed} from "./_lib/random";

interface IReturnData {
  seed: number;
  visible: number[][];
}

function App() {
  const [grid, setGrid] = useState<Grid | null>(null);
  const [selectedCol, setSelectedCol] = useState<Column | null>(null);

  useEffect(() => {
    fetch('https://api.npoint.io/89f1fb9df1143fab92af')
      .then((response) => {
        return response.json();
      })
      .then((data: IReturnData) => {
        setSeed(data.seed);
        setGrid(
          Grid
            .SEED(data.visible.length, data.visible[0].length)
            .setVisibility(data.visible)
        );
      });
  }, []);


  return (
    <div className="o-flex">
      <div className="o-size-x__50">
        { !!grid && <GridComponent setSelectedCol={setSelectedCol} grid={grid}/>}

      </div>
      <div className="o-size-x__50">
        {selectedCol && <ColumnDisplay col={selectedCol}/>}
      </div>
    </div>
  );
}

export default App;
