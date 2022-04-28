// import InputValues from "../pages/InputValues";
// import Result from '../pages/Result'
import { RouteLinks } from "./RouteLinks";
import AddProperty from './../pages/AddProperty';
import ViewProperty from "./../pages/ViewProperty";
import SingleProperty from "./../pages/SingleProperty";



export const PublicRoute = [
  {
    component: <AddProperty/>,
    path: RouteLinks.addproperty,
    exact: true,
  },
  {
    component: <ViewProperty />,
    path: RouteLinks.viewproperty,
  },
  {
    component: <SingleProperty/>,
    path: RouteLinks.singleproperty,
  },
];
