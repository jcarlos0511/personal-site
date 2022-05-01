import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
  sidebar: {
    showRoots: true,
  },
  theme: themes.dark,
  panelPosition: 'right',
})
