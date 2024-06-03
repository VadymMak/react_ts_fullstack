import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

import Place from "../places/pages/place/Place";
import Error from "../shared/pages/error/Error";
import NewPlace from "../places/pages/new-place/NewPlace";
import User from "../user/pages/user/User";
import UserPlaces from "../places/pages/user-places/UserPlaces";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<User />} />
      <Route path="place" element={<Place />} />
      <Route path="/:userId/places" element={<UserPlaces />} />
      <Route path="place/new" element={<NewPlace />} />
    </Route>
  )
);
