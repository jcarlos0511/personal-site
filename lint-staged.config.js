module.exports = {
  // This will lint and format TypeScript and JavaScript files
  '**/*.{js,jsx,ts,tsx}': () => [
    `yarn tsc --noEmit`,
    `yarn prettier`,
    `yarn lint --max-warnings 0`,
  ],

  // this will Format MarkDown and JSON
  '**/*.{md,json}': () => `yarn prettier`,
}
