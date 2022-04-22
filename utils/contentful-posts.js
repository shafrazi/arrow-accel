const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;
const contentful = require("contentful");

const client = contentful.createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries({
    order: "sys.createdAt",
  });

  if (entries.items) {
    return entries.items;
  }
}

export async function fetchEntry(entryId) {
  const entry = await client.getEntry(entryId);
  return entry;
}

export default { fetchEntries, fetchEntry };
