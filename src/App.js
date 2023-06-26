import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import ExploreTopic from './components/ExploreTopic/ExploreTopic';
import Blogs from './components/Blogs/Blogs';
import DynamicBlog from './components/DynamicBlog/DynamicBlog';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home />
        },
        {
          path: "topic/:id",
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <ExploreTopic />
        },
        {
          path: "/stats",
          loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics />
        },
        {
          path: "/blogs",
          loader: async () => fetch("/blogs.json"),
          element: <Blogs />
        },
        {
          path: "blog/:id",
          loader: async ({ params }) => {
            return params.id;
          },
          element: <DynamicBlog />
        }
      ]
    }
  ])


  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
