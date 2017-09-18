import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../view/app';
import Login from '../view/login';
import noMatch from '../view/noMatch';
import Home from '../view/home';
import ArticleDetail from '../view/article-detail';

const routes = [
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/app',
    name: '分析系统',
    icon: 'flag',
    component: App,
  },
  {
    path: '/home',
    name: '舆情概况',
    icon: 'flag',
    leaf: true,
    component: Home
  },
  {
    path: '/detail',
    name: '文章详情',
    icon: 'flag',
    leaf: true,
    component: ArticleDetail
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export const RouteWithSubRoutes = (route: any) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes} />
  )} />
)

const RouteConfig: any = (
  <div>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <Route exact path='/' component={Home} />
      <Route path='*' component={noMatch} />
    </Switch>
  </div>
);

export default RouteConfig
