import * as React from 'react';
import "../grid.scss";
import HexIcon from "./HexIcon";
import Grid from "../types/grid";
import Column from "../types/column";

interface IProps {
  grid: Grid;
  setSelectedCol: (col: Column | null) => void;
}

function GridComponent({setSelectedCol, grid}: IProps) {

  const handleSelectCol = (col: Column) => () => {
    setSelectedCol(col);
  };

  return (
    <div className="c-grid">
      {grid.rows.map(row => (
        <div className="c-grid__row">
          {row.columns.map(col => (
            <div className="c-grid__col" onClick={handleSelectCol(col)}>
              <div className={`c-grid__hex c-grid__hex--level-${col.level}`}>
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

export default GridComponent;
