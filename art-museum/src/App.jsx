import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import harvardArt from './data/harvardArt';
import GalleryNav from './components/GalleryNav';
import GalleryView from './components/GalleryView/GalleryView';

const router = createBrowserRouter([
  {
    element: <Layout />,
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
        path:'galleries/:galleryId',
        element: <GalleryView galleries={harvardArt.records} />
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

export default App;
