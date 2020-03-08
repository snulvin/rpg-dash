import * as React from 'react';
import Column from "../../types/column";

interface IProps {
  col: Column;
}

function ColumnDisplay({col}: IProps) {
  return (
    <div>
      <h1>{col.type}</h1>
      <div><b>Level:</b>{col.level}</div>
    </div>
  );
}

export default ColumnDisplay;
