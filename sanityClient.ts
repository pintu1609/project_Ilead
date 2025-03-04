import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'nikhwmll', // Replace with your actual Sanity project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});

export default client;
