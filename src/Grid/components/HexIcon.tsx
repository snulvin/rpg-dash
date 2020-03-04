import * as React from 'react';
import {COLUMN_TYPE_CITY, COLUMN_TYPE_DUNGEON, COLUMN_TYPE_LIGHT_FOREST, IMatrixCol} from "../types/grid";

interface IProps {
  col: IMatrixCol;
}

function HexIcon({col}: IProps) {
  if (!col.revealed) {
    return <i className="fas fa-question"/>
  }
  if (col.type === COLUMN_TYPE_CITY) {
    return <i className="fas fa-city"/>
  }
  if (col.type === COLUMN_TYPE_LIGHT_FOREST) {
    return <i className="fas fa-leaf"/>
  }
  if (col.type === COLUMN_TYPE_DUNGEON) {
    return <i className="fas fa-dungeon"/>
  }
  return (
    <div />
  );
}

export default HexIcon;
