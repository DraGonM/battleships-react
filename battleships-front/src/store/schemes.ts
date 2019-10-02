import { schema } from 'normalizr';
import { NormalizedSchemes } from '../types';

const userSchema = new schema.Entity('users');
const resultsSchema = new schema.Entity('results');

resultsSchema.define({
  user: userSchema
});

export const Schemes: NormalizedSchemes = {
  User: userSchema,
  Users: new schema.Array(userSchema),
  Result: resultsSchema,
  Results: new schema.Array(resultsSchema)
};

export default Schemes;
