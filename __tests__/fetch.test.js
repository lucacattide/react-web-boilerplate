// Module Start
'use strict';

// Module Imports
import moment from 'moment';
import {
  dataFetch
} from '../js/utils';
import ARTICLE_QUERY from '../backend/queries/articles';

// Data Fetching Unit Testing
describe('Data fetching test', () => {
  // Startup
  beforeEach(() => {
    fetch.resetMocks();
  });
  // Articles Test
  test('It returns all the articles top chart', () => {
    const onResponse = jest.fn();
    const onError = jest.fn();
    const mocks = {
      data: {
        queryArticleContents: []
      }
    };

    fetch.mockResponseOnce(JSON.stringify(mocks));

    return dataFetch('/graphql', ARTICLE_QUERY.articles.articlesTopChart)
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0]).toEqual(mocks);
      });
  });
  test('It returns the index of the first ten latest articles', () => {
    const lastMonth = moment().subtract(30, 'days').format('YYYY-MM-DDThh:mm:ss')
    +'z';
    const today = moment().format('YYYY-MM-DDT23:59:59') +'z';
    const live = "data/date/iv ge "+ lastMonth +" and data/date/iv le "+ today;
    const onResponse = jest.fn();
    const onError = jest.fn();
    const mocks = {
      data: {
        queryArticleContents: [{
          live: live,
          limit: 10
        }]
      }
    };

    fetch.mockResponseOnce(JSON.stringify(mocks));

    return dataFetch('/graphql', ARTICLE_QUERY.articles.indexArticles)
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0]).toEqual(mocks);
      });
  });
  test('It returns an article', () => {
    const onResponse = jest.fn();
    const onError = jest.fn();
    const mocks = {
      data: {
        queryArticleContents: [{
          slug: 'foo'
        }]
      }
    };

    fetch.mockResponseOnce(JSON.stringify(mocks));

    return dataFetch('/graphql', ARTICLE_QUERY.articles.home)
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0]).toEqual(mocks);
      });
  });
  test('It returns the articles total', () => {
    const onResponse = jest.fn();
    const onError = jest.fn();
    const mocks = {
      data: {
        queryArticleContentsWithTotal: []
      }
    };

    fetch.mockResponseOnce(JSON.stringify(mocks));

    return dataFetch('/graphql', ARTICLE_QUERY.articles.countArticles)
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0]).toEqual(mocks);
      });
  });
  test('It returns the index of the first ten latest articles of a specific category', () => {
    const onResponse = jest.fn();
    const onError = jest.fn();
    const mocks = {
      data: {
        queryArticleContents: [{
          category: 'foo',
          limit: 10
        }]
      }
    };

    fetch.mockResponseOnce(JSON.stringify(mocks));

    return dataFetch('/graphql', ARTICLE_QUERY.articles.indexCategory)
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0]).toEqual(mocks);
      });
  });
  test('It returns the articles total of a specific category', () => {
    const onResponse = jest.fn();
    const onError = jest.fn();
    const mocks = {
      data: {
        queryArticleContentsWithTotal: [{
          category: 'foo'
        }]
      }
    };

    fetch.mockResponseOnce(JSON.stringify(mocks));

    return dataFetch('/graphql', ARTICLE_QUERY.articles.countCategory)
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0]).toEqual(mocks);
      });
  });
  test('It returns the index of the first ten latest articles of a specific year', () => {
    const year = "data/date/iv le 2019-12-31T23:59:59z and data/date/iv ge 2019-01-01T00:00:00z";
    const onResponse = jest.fn();
    const onError = jest.fn();
    const mocks = {
      data: {
        queryArticleContents: [{
          year: year,
          limit: 10
        }]
      }
    };

    fetch.mockResponseOnce(JSON.stringify(mocks));

    return dataFetch('/graphql', ARTICLE_QUERY.articles.indexCategory)
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0]).toEqual(mocks);
      });
  });
  test('It returns the articles total of a specific year', () => {
    const year = "data/date/iv le 2019-12-31T23:59:59z and data/date/iv ge 2019-01-01T00:00:00z";
    const onResponse = jest.fn();
    const onError = jest.fn();
    const mocks = {
      data: {
        queryArticleContentsWithTotal: [{
          year: year
        }]
      }
    };

    fetch.mockResponseOnce(JSON.stringify(mocks));

    return dataFetch('/graphql', ARTICLE_QUERY.articles.countArchive)
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0]).toEqual(mocks);
      });
  });
  test('It returns the index of the first ten latest articles of a specific search', () => {
    const onResponse = jest.fn();
    const onError = jest.fn();
    const mocks = {
      data: {
        queryArticleContents: [{
          terms: 'foo bar',
          limit: 10
        }]
      }
    };

    fetch.mockResponseOnce(JSON.stringify(mocks));

    return dataFetch('/graphql', ARTICLE_QUERY.articles.indexSearch)
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0]).toEqual(mocks);
      });
  });
  test('It returns the articles total of a specific search', () => {
    const onResponse = jest.fn();
    const onError = jest.fn();
    const mocks = {
      data: {
        queryArticleContentsWithTotal: [{
          terms: 'foo bar'
        }]
      }
    };

    fetch.mockResponseOnce(JSON.stringify(mocks));

    return dataFetch('/graphql', ARTICLE_QUERY.articles.countSearch)
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0]).toEqual(mocks);
      });
  });
});
// Module End
