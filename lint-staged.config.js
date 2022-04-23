module.exports = {
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // This will lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn lint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
}
