const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;
const contentful = require("contentful");

const client = contentful.createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries();

  if (entries.items) {
    return entries.items;
  }
}

export default { fetchEntries };
