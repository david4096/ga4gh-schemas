var development = {
  namespace: 'ga4gh',
  schema_path: './src/main/proto'
};

var production = {
  namespace: 'ga4gh',
  schema_path: './src/main/proto',
};

if (process.env.NODE_ENV == 'production') {
  module.exports = production;
} else {
  module.exports = development;
}
