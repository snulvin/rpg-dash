import * as React from 'react';
import Column, {
  COLUMN_TYPE_CITY,
  COLUMN_TYPE_DUNGEON,
  COLUMN_TYPE_LIGHT_FOREST,
  COLUMN_TYPE_MOUNTAIN, COLUMN_TYPE_WETLANDS,
} from "../types/column";

interface IProps {
  col: Column;
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
  if (col.type === COLUMN_TYPE_WETLANDS) {
    return <i className="fas fa-water"/>
  }
  if (col.type === COLUMN_TYPE_MOUNTAIN) {
    return <i className="fas fa-mountain"/>
  }
  return (
    <div />
  );
}

export default HexIcon;
