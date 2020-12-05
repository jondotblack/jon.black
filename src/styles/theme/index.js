import { mapMedia } from './utils';

import { colorsTheme } from './colors.theme';
import gridTheme from './grid.theme';
import { spaceTheme } from './space.theme';

export const media = mapMedia(gridTheme.breakpoints);

export const theme = {
  ...colorsTheme,
  ...gridTheme,
  ...spaceTheme,
};
