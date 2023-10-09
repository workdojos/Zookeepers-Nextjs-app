import Airtable from 'airtable';

// api keys are confidential
const base = new Airtable({ apiKey: 'pat3EZwRNaBA5XnC9.391f73ce2b4b3d1793506cd30e7162ebeed69d259e5ebf006df06cee19f92c07' }).base(
  'Primary'
);

export default base;