import React, {useMemo, useState} from 'react';
import "../fontawesome/sass/fontawesome.scss";
import "../fontawesome/sass/solid.scss";
import "../sass/index.scss";
import Column from "./types/column";
import GridComponent from "./components/GridComponent";
import Grid from "./types/grid";
import ColumnDisplay from "./components/ColumnDisplay/ColumnDisplay";

function App() {
  const grid = useMemo(() => Grid.SEED(20, 20), []);
  const [selectedCol, setSelectedCol] = useState<Column | null>(null);


  fetch('https://api.npoint.io/89f1fb9df1143fab92af')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  return (
    <div className="o-flex">
      <div className="o-size-x__50">
        <GridComponent setSelectedCol={setSelectedCol} grid={grid}/>
      </div>
      <div className="o-size-x__50">
        {selectedCol && <ColumnDisplay col={selectedCol}/>}
      </div>
    </div>
  );
}

export default App;
