import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { matchSnapshotAsync } from '@bbc/psammead-test-helpers';
import FrontPageMain from '.';

// 'index-light' is a lighter version of front page data that improves the
// speed of this suite by reducing the amount of pre-processing required.
import frontPageDataPidgin from '#data/pidgin/frontpage/index-light';
import { RequestContextProvider } from '#contexts/RequestContext';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { ToggleContextProvider } from '#contexts/ToggleContext';
import getInitialData from '#app/routes/home/getInitialData';

fetch.mockResponse(JSON.stringify(frontPageDataPidgin));

jest.mock('uuid', () =>
  (() => {
    let x = 1;
    return () => {
      x += 1;
      return `mockid-${x}`;
    };
  })(),
);

jest.mock('../ChartbeatAnalytics', () => {
  const ChartbeatAnalytics = () => <div>chartbeat</div>;
  return ChartbeatAnalytics;
});

const requestContextData = {
  isAmp: false,
  service: 'igbo',
  statusCode: 200,
  pageType: 'frontPage',
  pathname: '/pathname',
};

const FrontPageMainWithContext = props => (
  <ToggleContextProvider>
    <RequestContextProvider {...requestContextData}>
      <ServiceContextProvider service="igbo">
        <FrontPageMain {...props} />
      </ServiceContextProvider>
    </RequestContextProvider>
  </ToggleContextProvider>
);

describe('FrontPageMain', () => {
  describe('snapshots', () => {
    it('should render a pidgin frontpage correctly', async () => {
      const { pageData: frontPageData } = await getInitialData(
        'some-front-page-path',
      );

      await matchSnapshotAsync(
        <FrontPageMainWithContext frontPageData={frontPageData} />,
      );
    });
  });

  describe('assertions', () => {
    afterEach(cleanup);

    it('should render visually hidden text as h1', async () => {
      const { pageData: frontPageData } = await getInitialData(
        'some-front-page-path',
      );

      const { container } = render(
        <FrontPageMainWithContext frontPageData={frontPageData} />,
      );
      const h1 = container.querySelector('h1');
      const content = h1.getAttribute('id');
      const tabIndex = h1.getAttribute('tabIndex');

      expect(content).toEqual('content');
      expect(tabIndex).toBe('-1');

      const span = h1.querySelector('span');
      expect(span.getAttribute('role')).toEqual('text');
      expect(span.textContent).toEqual('BBC News, Ìgbò - Akụkọ');

      const langSpan = span.querySelector('span');
      expect(langSpan.getAttribute('lang')).toEqual('en-GB');
      expect(langSpan.textContent).toEqual('BBC News');
    });

    it('should render front page sections', async () => {
      const { pageData: frontPageData } = await getInitialData(
        'some-front-page-path',
      );

      const { container } = render(
        <FrontPageMainWithContext frontPageData={frontPageData} />,
      );
      const sections = container.querySelectorAll('section');

      expect(sections).toHaveLength(2);
      sections.forEach(section => {
        expect(section.getAttribute('role')).toEqual('region');
      });
    });
  });
});
