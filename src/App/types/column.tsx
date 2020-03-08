import random from "../_lib/random";
import generateKey from "../_lib/generateKey";

export const COLUMN_TYPE_CITY = 'City';
export type COLUMN_TYPE_CITY = typeof COLUMN_TYPE_CITY;
export const COLUMN_TYPE_LIGHT_FOREST = 'Light Forest';
export type COLUMN_TYPE_LIGHT_FOREST = typeof COLUMN_TYPE_LIGHT_FOREST;
export const COLUMN_TYPE_MOUNTAIN = 'Mountain';
export type COLUMN_TYPE_MOUNTAIN = typeof COLUMN_TYPE_MOUNTAIN;
export const COLUMN_TYPE_WETLANDS = 'Wetlands';
export type COLUMN_TYPE_WETLANDS = typeof COLUMN_TYPE_WETLANDS;
export const COLUMN_TYPE_PLAINS = 'Plains';
export type COLUMN_TYPE_PLAINS = typeof COLUMN_TYPE_PLAINS;
export const COLUMN_TYPE_DUNGEON = 'Dungeon';
export type COLUMN_TYPE_DUNGEON = typeof COLUMN_TYPE_DUNGEON;

export type COLUMN_TYPE =
  | COLUMN_TYPE_CITY
  | COLUMN_TYPE_LIGHT_FOREST
  | COLUMN_TYPE_MOUNTAIN
  | COLUMN_TYPE_WETLANDS
  | COLUMN_TYPE_PLAINS
  | COLUMN_TYPE_DUNGEON;

const availableRandomColumnTypes: COLUMN_TYPE[] = [
  COLUMN_TYPE_LIGHT_FOREST,
  COLUMN_TYPE_LIGHT_FOREST,
  COLUMN_TYPE_LIGHT_FOREST,
  COLUMN_TYPE_MOUNTAIN,
  COLUMN_TYPE_WETLANDS,
  COLUMN_TYPE_PLAINS,
  COLUMN_TYPE_PLAINS,
  COLUMN_TYPE_PLAINS,
];

class Column {
  public key: number = generateKey();

  public static SEED(northColumn: Column | undefined, westColumn: Column | undefined): Column {
    const seed1 = random();
    const seed2 = random();
    const seed3 = random();

    const level = Column.seedLevel(seed1,seed2,seed3, northColumn, westColumn);
    const type = Column.seedType(seed1,seed2,seed3);
    const revealed = true;

    return new Column(type, level, revealed);
  }



  constructor(public type: COLUMN_TYPE, public level: number, public revealed: boolean) {}


  private static seedType(seed1: number,seed2: number,seed3: number, northColumn?: Column, westColumn?: Column): COLUMN_TYPE {
    const seedTypes: COLUMN_TYPE[] = [
      ...availableRandomColumnTypes,
    ];

    if (northColumn) {
      seedTypes.push(northColumn.type);
      seedTypes.push(northColumn.type);
    }

    if (westColumn) {
      seedTypes.push(westColumn.type);
      seedTypes.push(westColumn.type);
    }

    return seedTypes[Math.floor(((1+seed1)*(2+seed2)*(3+seed3))%seedTypes.length)];
  }

  private static seedLevel(seed1: number,seed2: number,seed3: number, northColumn?: Column, westColumn?: Column): number {
    const northLevel = northColumn ? northColumn.level : 1;
    const westLevel = westColumn ? westColumn.level : 1;
    const weights = [];
    if (northLevel === westLevel) {
      weights.push(northLevel);
      weights.push(westLevel);
      weights.push(northLevel+1);
    }
    if (northLevel > westLevel) {
      weights.push(northLevel);
      weights.push(westLevel);
      weights.push(northLevel);
    }

    if (northLevel < westLevel) {
      weights.push(northLevel);
      weights.push(westLevel);
      weights.push(westLevel);
    }

    return weights[Math.floor(((1+seed1)*(2+seed2)*(3+seed3))%weights.length)];
  }
}

export default Column;