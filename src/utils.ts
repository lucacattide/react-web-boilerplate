// Module Start
// Utilities
// API
const apiAuthorizationUrl: string = '';
const apiBaseUrl: string = '';
// TODO: replace with reader client in production
const apiOptions: string = '';
// Testing
// Data fetch mock
const dataFetch: (path: string) => Promise<Response> = async (path) => {
  return fetch(apiBaseUrl + path).then((res) => res.json());
};

// Module export
export { apiAuthorizationUrl, apiBaseUrl, apiOptions, dataFetch };
// Module End
