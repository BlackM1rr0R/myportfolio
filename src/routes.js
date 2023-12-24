import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import ViewProjects from "./pages/viewprojects";
const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home),
  about: routeItem(2, 'about', "/about", About),
  notFound: routeItem(3, 'notFound', "*", NotFound),
  viewprojects:routeItem(4,'viewprojects',"allprojects",ViewProjects)
};

const routeArr = Object.values(routes);

export { routes, routeArr };
