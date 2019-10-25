import { FieldPoint } from '.';
import { Directions } from '../enums';

export interface ShipType {
  id: number;
  destroyed: boolean;
  size: number;
  points?: FieldPoint[];
  direction: Directions;
}
