import { CellType, FieldColumnType, FieldType, ShipSettings } from '../types';

export const defaultCell: CellType = {
  shot: false
};

export const DefaultFieldKeys = Array.from({ length: 10 }, (x, i) => i);

const column: FieldColumnType = DefaultFieldKeys.reduce(
  (acc: FieldColumnType, cur: number) => {
    acc[cur] = { ...defaultCell };

    return acc;
  },
  {}
);

export const DefaultField: FieldType = DefaultFieldKeys.reduce(
  (acc: FieldType, cur: number) => {
    acc[cur] = column;

    return acc;
  },
  {}
);

export const DefaultShips: ShipSettings[] = [
  { name: 'Submarine', size: 1, count: 4 },
  { name: 'Destroyer', size: 2, count: 3 },
  { name: 'Cruiser', size: 3, count: 2 },
  { name: 'Battleship', size: 4, count: 1 }
];

console.log('StartShipsCount:', DefaultShips);
