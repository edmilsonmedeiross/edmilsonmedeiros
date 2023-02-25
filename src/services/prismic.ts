import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

const { PRISMIC_ACESS_TOKEN = '', PRISMIC_API_ENDPOINT = '' } = process.env;

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(PRISMIC_API_ENDPOINT, {
    req,
    accessToken: PRISMIC_ACESS_TOKEN,
  });

  return prismic;
}
