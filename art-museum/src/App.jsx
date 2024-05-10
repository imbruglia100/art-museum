import { createBrowserRouter, RouterProvider, Outlet, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import harvardArt from './data/harvardArt';
import GalleryNav from './components/GalleryNav';
import GalleryView from './components/GalleryView';
import ArtDescription from './components/ArtDescription';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <PageMissing />,
    children: [
      {
        path: "/",
        element:
          <>
            <h2>Harvard Art Museum</h2>
            <p>
              Look, but Don&apos;t Touch. Please select a Gallery in the
              navigation bar.
            </p>
          </>
      },
      {
        path:"galleries/:galleryId/art/:artId",
        element: <ArtDescription galleries={harvardArt.records} />,
        errorElement: <PageMissing />
      },
      {
        path:'galleries/:galleryId',
        element: <GalleryView galleries={harvardArt.records} />,
        errorElement: <PageMissing />
      },
      {
        path: "*",
        element: <h2>Page Not Found</h2>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNav galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function PageMissing() {
  const error = useRouteError();
  if (isRouteErrorResponse(error))
    console.log(`${error.status} ${error.statusText} ${error.data}`);
  return <h2>Page Not Found</h2>;
}

export default App;
