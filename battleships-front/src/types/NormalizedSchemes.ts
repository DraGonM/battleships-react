import { schema } from 'normalizr';

export interface NormalizedSchemes {
  User: schema.Entity;
  Users: schema.Array;
  Result: schema.Entity;
  Results: schema.Array;
}
