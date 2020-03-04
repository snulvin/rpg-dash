export const COLUMN_TYPE_CITY = 'COLUMN_TYPE_CITY';
export type COLUMN_TYPE_CITY = typeof COLUMN_TYPE_CITY;

export const COLUMN_TYPE_LIGHT_FOREST = 'COLUMN_TYPE_LIGHT_FOREST';
export type COLUMN_TYPE_LIGHT_FOREST = typeof COLUMN_TYPE_LIGHT_FOREST;

export const COLUMN_TYPE_DUNGEON = 'COLUMN_TYPE_DUNGEON';
export type COLUMN_TYPE_DUNGEON = typeof COLUMN_TYPE_DUNGEON;

export type COLUMN_TYPE =
  | COLUMN_TYPE_CITY
  | COLUMN_TYPE_LIGHT_FOREST
  | COLUMN_TYPE_DUNGEON;

export interface IMatrixCol {
  type: COLUMN_TYPE;
  revealed: boolean;
  level: number;
}

export interface IMatrixRow {
  columns: IMatrixCol[];
}

export interface IGrid {
  rows: IMatrixRow[];
}