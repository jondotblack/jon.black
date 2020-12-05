import { theme } from 'styles/theme';
import { generateProps, toPercent } from '../Grid.utils';

test('toPercent takes a number and returns a percentage', () => {
  expect(toPercent(1)).toMatch('100%');
  expect(toPercent(3 / 4)).toMatch('75%');
});

test('calculate the proper flex width based on span value', () => {
  const value = { span: 3 };
  const values = { span: { _: 12, md: 6 } };

  expect(generateProps(value)).toEqual(
    expect.objectContaining({
      maxWidth: toPercent(value.span / theme.grid.columns),
      flex: `1 0 ${toPercent(value.span / theme.grid.columns)}`,
    }),
  );

  expect(generateProps(values)).toEqual(
    expect.objectContaining({
      maxWidth: {
        _: toPercent(values.span._ / theme.grid.columns),
        md: toPercent(values.span.md / theme.grid.columns),
      },
      flex: {
        _: `1 0 ${toPercent(values.span._ / theme.grid.columns)}`,
        md: `1 0 ${toPercent(values.span.md / theme.grid.columns)}`,
      },
    }),
  );
});
