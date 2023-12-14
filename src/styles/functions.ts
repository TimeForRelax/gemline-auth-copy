export const colorFetch =
  (color: string) =>
  ({ theme }: { theme: any }) =>
    theme.colors[color];

export const borderRadiusFetch =
  (radius: string) =>
  ({ theme }: { theme: any }) =>
    theme.borderRadius[radius];
