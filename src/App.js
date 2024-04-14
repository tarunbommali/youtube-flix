import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./redux/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";


const appRouter = createBrowserRouter([
    {path: "/" , 
    element : <Home />,
    children: [
      {
        path: "/" , 
        element: <MainContainer />
      }, 
      {
        path : "watch" , 
        element  : <WatchVideo/>
      }, 
      Error 
    ]
  }
])

const App = () => {
  return (
    <Provider store={store}>
    <div className="text-lg">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
};

export default App;
