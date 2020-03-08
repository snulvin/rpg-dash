import Column from "./column";
import generateKey from "../_lib/generateKey";

class Row {
  public key: number = generateKey();
  constructor(public columns: Column[]) {}
}

export default Row;