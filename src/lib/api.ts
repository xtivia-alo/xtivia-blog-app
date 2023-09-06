import { Entry, EntrySkeletonType, ContentfulClientApi } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

let client: ContentfulClientApi<undefined> | undefined;
let previewClient: ContentfulClientApi<undefined> | undefined;

if (accessToken) {
  client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
  });
}

if (previewToken) {
  client = require('contentful').createClient({
    space: space,
    accessToken: previewToken,
    host: 'preview.contentful.com',
  });
}

async function fetchEntries(
  client: ContentfulClientApi<undefined> | undefined,
  contentType: string,
  slug: string
) {
  if (accessToken) {
    const entries = await client?.getEntries({
      content_type: contentType,
      'fields.slug': slug,
      include: 5,
    });
    if (entries?.items) return entries.items;
    console.log(`Error getting Entries for ${contentType}.`);
  }
  console.log(`Access Token is undefined`);
}

async function fetchPreviewEntries(
  client: ContentfulClientApi<undefined> | undefined,
  contentType: string,
  slug: string
) {
  if (accessToken) {
    const entries = await client?.getEntries({
      content_type: contentType,
      'fields.slug': slug,
      include: 5,
    });
    if (entries?.items) return entries.items;
    console.log(`Error getting Entries for ${contentType}.`);
  }
  console.log(`Access Token is undefined`);
}

export async function fetchLandingEntriesBySlug(
  preview: boolean,
  slug: string = 'home'
) {
  if (preview) {
    console.log('Fetching Previews');
    return fetchPreviewEntries(previewClient, 'pageLanding', slug);
  }
  console.log('Fetching Published');
  return await fetchEntries(client, 'pageLanding', slug);
}

export async function getFieldsforEntry(
  entry: Entry<EntrySkeletonType, undefined, string> | undefined
) {
  if (entry) {
    return entry.fields;
  }
}
