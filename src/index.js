import './index.css';
import reportWebVitals from './reportWebVitals';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './store/store';

import Home from './pages/home/Home';
import MyNotes from './pages/myNotes/MyNotes';
import Layout from './layout/Layout';
import SharedNotes from './pages/sharedNotes/SharedNotes';
import Categories from './pages/categories/Categories';
import RecentActivity from './pages/recentActivity/RecentActivity';
import NoteEditor from './components/noteEditor/NoteEditor';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/mynotes",
        element: <MyNotes/>,
      },
      {
        path: "/sharednotes",
        element: <SharedNotes/>,
      },
      {
        path: "/categories",
        element: <Categories/>,
      },
      {
        path: "/recentactivity",
        element: <RecentActivity/>,
      },
      {
        path: "/note-editor",
        element: <NoteEditor/>,
      }
    ],
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
