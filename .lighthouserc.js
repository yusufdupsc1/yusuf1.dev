/**
 * LHCI configuration used by GitHub Actions.
 * - Runs against `http://127.0.0.1:8080` (we serve `dist` in CI)
 * - Adjust `minScore` values if you want stricter/looser checks.
 */
module.exports = {
  ci: {
    collect: {
      url: ['http://127.0.0.1:8080'],
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.90}],
        'categories:accessibility': ['error', {minScore: 1}],
        'categories:best-practices': ['error', {minScore: 1}],
        'categories:seo': ['error', {minScore: 1}],
        'categories:pwa': ['warning', {minScore: 1}]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
