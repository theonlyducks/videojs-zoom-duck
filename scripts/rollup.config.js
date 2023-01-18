import copy from 'rollup-plugin-copy';
import generate from 'videojs-generate-rollup-config';

const options = {
  plugins(defaults) {
    return {
      browser: defaults.browser.concat([
        'copy',
      ]),
      module: defaults.module.concat([
        'copy'
      ]),
      test: defaults.test.concat([
        'copy'
      ])
    }
  },
  primedPlugins(defaults) {
    return Object.assign(defaults, {
      copy: copy({
        targets: [
          { src: 'src/assets/material-icons.woff', dest: 'dist/assets' },
          { src: 'src/assets/material-icons.woff2', dest: 'dist/assets' }
        ]
      })
    });
  }
};

const config = generate(options);

export default Object.values(config.builds);
