import { Route, Routes } from 'react-router-dom';

const generateRoute = (data: any, parentPathLength: number, i: number) => {
  const { render, routes, component, path } = data;

  const slicedPath = path.slice(parentPathLength);

  return (
    <Route
      path={render ? slicedPath + '/*' : slicedPath}
      element={render ? render({ routes, parentPathLength: parentPathLength + slicedPath.length + 1 }) : component}
      key={i}
    >
      {render
        ? routes?.map((child: any, index: number) =>
            generateRoute(child, parentPathLength + slicedPath.length + 1, index),
          ) || null
        : null}
    </Route>
  );
};

export const renderRoutes = (routes: any, parentPathLength: number = 0) => {
  return <Routes>{routes.map((route: any, index: number) => generateRoute(route, parentPathLength, index))}</Routes>;
};
