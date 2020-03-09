import Column, {COLUMN_TYPE_CITY} from "./column";
import _ from "lodash";
import generateKey from "../_lib/generateKey";
import Row from "./row";

class Grid {
  public key: number = generateKey();
  public static SEED(maxY: number, maxX: number): Grid {
    const absY = Math.abs(Math.floor(maxY));
    const absX = Math.abs(Math.floor(maxX));

    let grid: Grid = new Grid([
      new Row([
        new Column(COLUMN_TYPE_CITY, 1, true)
      ]),
    ]);

    for (let y = 0; y < absY-1; y++) {
      if (grid.rows[0].columns.length < absX) {
        grid = Grid.addToExistingRows(grid);
      }

      grid = Grid.addNewRow(grid);
    }

    return grid;
  }

  constructor(public rows: Row[]) {}

  private static addToExistingRows(grid: Grid): Grid {
    const length = grid.rows.length;

    for (let y = 0; y < length; y++) {
      const lastRow = _.get(grid.rows, y-1, new Row([]));
      const thisRow = _.get(grid.rows, y, new Row([]));
      const northColumn = _.last(lastRow.columns);
      const westColumn =_.last(thisRow.columns);

      thisRow.columns.push(Column.SEED(northColumn, westColumn));
      grid.rows[y] = thisRow;
    }

    return grid;
  }

  private static addNewRow(grid: Grid): Grid {
    const lastRow = _.get(grid.rows, grid.rows.length-1, new Row([]));

    const newRow = new Row([]);
    for (let x = 0; x < lastRow.columns.length; x++) {
      const northColumn = _.get(lastRow.columns, x);
      const westColumn =_.get(newRow.columns, x-1);

      newRow.columns.push(Column.SEED(northColumn, westColumn));
    }
    grid.rows.push(newRow);

    return grid;
  }

  public setVisibility(visible: number[][]) {
    for (let y = 0; y < visible.length; y++) {
      for (let x = 0; x < visible[y].length; x++) {
        this.rows[y].columns[x].revealed = visible[y][x] !== 0;
      }
    }
    return this;
  }
}

export default Grid;