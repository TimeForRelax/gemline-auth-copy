import { usePrevious } from '@utils/index';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { comparatorFunction, getMediaType } from './media';
import { theme } from './theme';
import { StyleContextProviderType, StyleState } from './types';

const defaultMediaType = getMediaType();

const DEFAULT_STYLE = {
  mediaType: defaultMediaType,
} as StyleState;

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export const useMediaType = () => {
  const [mediaType, setMediaType] = useState(defaultMediaType);
  const [width] = useWindowSize();
  const prevWidth = usePrevious(width);
  useEffect(() => {
    if (width !== prevWidth) {
      const currentMediaType = getMediaType();
      if (!comparatorFunction(currentMediaType, mediaType)) {
        setMediaType(currentMediaType);
      }
    }
  }, [width, prevWidth, setMediaType, mediaType]);
  return mediaType;
};

const StyleContext = createContext([DEFAULT_STYLE, null as any] as StyleContextProviderType);

const useStyleContextCreator = (): StyleContextProviderType => {
  const [style, setStyle] = useState(DEFAULT_STYLE);
  return [style, setStyle];
};

export const StyleContextProvider = ({ children }: { children: ReactNode }) => {
  const provider = useStyleContextCreator();
  const [width] = useWindowSize();
  const prevWidth = usePrevious(width);
  const [{ mediaType }, setStyle] = provider;

  useEffect(() => {
    if (width !== prevWidth) {
      const currentMediaType = getMediaType();
      if (!comparatorFunction(currentMediaType, mediaType)) {
        setStyle({ mediaType: currentMediaType });
      }
    }
  }, [width, prevWidth, setStyle, mediaType]);

  return (
    <StyleContext.Provider value={provider}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyleContext.Provider>
  );
};

export const useStyleContext = () => {
  const service = useContext(StyleContext);

  if (!service) {
    throw new Error('Tooltip Context is unavailable');
  }

  return service;
};

export const withStyleContext = (Component: any) => {
  return function WithStyleContext(props: any) {
    const service = useStyleContext();

    return <Component {...props} styleContext={service} />;
  };
};
