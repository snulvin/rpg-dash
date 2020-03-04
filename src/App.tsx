import React, {useState} from 'react';
import Grid from "./Grid/Grid";
import "./fontawesome/sass/fontawesome.scss";
import "./fontawesome/sass/solid.scss";
import "./sass/index.scss";
import {IGrid, IMatrixCol} from "./Grid/types/grid";

function App() {
  const [grid, setGrid] = useState<IGrid | null>(null);
  const [selectedCol, setSelectedCol] = useState<IMatrixCol | null>(null);

  fetch('https://api.npoint.io/89f1fb9df1143fab92af')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setGrid((data as IGrid));
    });
  return (
    <div className="o-flex">
      <div className="o-size-x__80">
        {!!grid && (
          <Grid setSelectedCol={setSelectedCol} grid={grid}/>
        )}
      </div>
      <div className="o-size-x__20">
        {JSON.stringify(selectedCol)}
      </div>
    </div>
  );
}

export default App;
