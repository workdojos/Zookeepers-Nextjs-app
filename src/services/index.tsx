import getJobs from "@/services";
import Link from "next/link";

const base = new Airtable({apiKey: process.env.AIRTABLE_PAT}).base('appFHwLhgqPvMbxCr');
let jobs: null | Records<FieldSet> = null;

export default async function getJobs(): Promise<Records<FieldSet>> {
  return new Promise((resolve, reject) => {
    base('Table 1').select({
      // Selecting the first 3 records in Grid view:
      view: "Grid view"
    }).all(function page(err, records) {
      if (err) reject(err);

      if (!records) {
        reject("No records found");

        return;
      }

      jobs = records;

      resolve(records);
    });
  });
}

export async function getJob(id: string) {
  if (!jobs) {
    await getJobs();
  }

  const job = jobs?.find((job: JobData) => job.id === id);

  return job;
}