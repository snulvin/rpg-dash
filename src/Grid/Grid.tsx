import * as React from 'react';
import "./grid.scss";
import {IGrid, IMatrixCol} from "./types/grid";
import HexIcon from "./components/HexIcon";

interface IProps {
  grid: IGrid;
  setSelectedCol: (col: IMatrixCol | null) => void;
}

function Grid({setSelectedCol, grid}: IProps) {

  const handleSelectCol = (col: IMatrixCol) => () => {
    setSelectedCol(col);
  };

  return (
    <div className="c-grid">
      {grid.rows.map(row => (
        <div className="c-grid__row">
          {row.columns.map(col => (
            <div className="c-grid__col" onClick={handleSelectCol(col)}>
              <div className="c-grid__hex">
                <div className="c-grid__content">
                  <HexIcon col={col} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
