// Since it's easy to mistake prod & debug version, we will default to prod
// Debugging version (nanospace + mock jsatorb functionnalities) will require a --debug flag when building

export const environment = {
  production: true,
  debugMode: false,
  enableNanospace: false,
  luplinkEndpoint: 'http://51.178.2.55:8001',
};
