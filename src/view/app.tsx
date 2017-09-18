import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { RouteWithSubRoutes } from '../router/router'
import About from './about';
import noMatch from '../view/noMatch';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const routes = [
  {
    path: '/app/about',
    name: '关于',
    icon: 'flag',
    leaf: true,
    component: About
  }
];

export default class App extends React.Component<{}, {}> {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div className="layout">
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider collapsed={this.state.collapsed} width={200} style={{ background: '#fff' }}>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
              >
                <Menu.Item key="0" style={{ textAlign: 'center' }}>
                  <a href="javascript:;" onClick={this.toggleCollapsed} >{this.state.collapsed ? '展开' : ''}</a>
                  <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Menu.Item>
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span>主页</span>
                  <Link to="/app/home"></Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="desktop" />
                  <span>关于</span>
                  <Link to="/app/about"></Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="inbox" />
                  <span>Option 3</span>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <Switch>
                  {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))}
                  {/* <Route exact path='/app' component={Home} /> */}
                  <Route path='*' component={noMatch} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
