import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import LEVEL1 from "../game/LEVEL1";
import LEVEL2 from "../game/LEVEL2";
import LEVEL3 from "../game/LEVEL3";
import LEVEL4 from "../game/LEVEL4";
import LEVEL5 from "../game/LEVEL5";
import HomeMain from "../main/HomeMain";
import GameMain from "../game/GameMain";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        { path: "", element: <HomeMain /> },
        {
          path: "game",
          element: <GameMain />,
          children: [
            // { path: "", element: <GameMain /> },
            { path: "LEVEL1", element: <LEVEL1 /> },
            { path: "LEVEL2", element: <LEVEL2 /> },
            { path: "LEVEL3", element: <LEVEL3 /> },
            { path: "LEVEL4", element: <LEVEL4 /> },
            { path: "LEVEL5", element: <LEVEL5 /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default MainRouter;
