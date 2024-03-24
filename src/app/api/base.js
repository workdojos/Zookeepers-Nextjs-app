import Airtable from 'airtable';

// api keys are confidential
const base = new Airtable({ apiKey: '' }).base(
  'Primary'
);

export default base;
