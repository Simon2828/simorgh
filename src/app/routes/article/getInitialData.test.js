import getInitialData from './getInitialData';
import articleJson from '../../../../data/pidgin/articles/cwl08rd38l6o.json';

fetch.mockResponse(JSON.stringify(articleJson));

it('should fetch page data, process the data and return it', async () => {
  const { pageData } = await getInitialData('mock-article-path');
  const isProcessedPageData = pageData !== articleJson;

  expect(isProcessedPageData).toBeTruthy();
});

it('should return essential data for a page to render', async () => {
  const { pageData } = await getInitialData('mock-article-path');

  expect(pageData.metadata.id).toEqual('urn:bbc:ares::article:cwl08rd38l6o');
  expect(pageData.promo.headlines.seoHeadline).toEqual(
    'This is the SEO headline of this test article',
  );
  expect(pageData.metadata.passport.language).toEqual('pcm');
  expect(pageData.content.model.blocks.length).toBeTruthy();
});
