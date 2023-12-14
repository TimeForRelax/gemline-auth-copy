import { SizesType } from '@enums/SizesType';
import { Sizes, Media } from './types';
import { css } from '@emotion/react';

export const sizes: Sizes = {
  monitor: 1440,
  tablet: 768,
  phone: 430,
};

const comparatorArray = Object.keys(sizes).sort((first: string, second: string) => {
  if (sizes[first as SizesType] < sizes[second as SizesType]) {
    return -1;
  } else if (sizes[first as SizesType] > sizes[second as SizesType]) {
    return 1;
  } else {
    return 0;
  }
});

export const comparatorFunction = (first: Media, second: Media): boolean => {
  let equals = false;
  for (let i = 0; i < comparatorArray.length; i++) {
    const currentIndex = comparatorArray[i] as SizesType;
    if (first[currentIndex] && second[currentIndex]) {
      equals = true;
      break;
    } else if (first[currentIndex] !== second[currentIndex]) {
      break;
    }
  }
  return equals;
};

export const media = Object.keys(sizes as Sizes).reduce((acc: any, label: string) => {
  acc[label] = `@media (max-width: ${(sizes as Sizes)[label as SizesType]}px)`;

  return acc;
}, {});

// export const inlineMedia =
//   (breakpoint: number) =>
//   (...styles: any[]) => {
//     return css`
//       @media (min-width: ${breakpoint / 16}em) {
//         ${(css as any)(...styles)};
//       }
//     `;
//   };

export const mediaType: Media = Object.keys(sizes as Sizes).reduce((acc: any, label: string) => {
  acc[label] = window.matchMedia(`(max-width: ${(sizes as Sizes)[label as SizesType]}px)`).matches;
  return acc;
}, {});

export const getMediaType = (): Media => {
  return Object.keys(sizes as Sizes).reduce((acc: any, label: string) => {
    acc[label] = window.matchMedia(`(max-width: ${(sizes as Sizes)[label as SizesType]}px)`).matches;
    return acc;
  }, {});
};
