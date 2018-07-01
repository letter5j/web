import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Layout, Menu, Icon } from 'antd';

import HomeLayout from './HomeLayout';
import ChartLayout from './ChartLayout';



const { Header, Sider } = Layout;
// const SubMenu = Menu.SubMenu;

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <HomeLayout />
  },
  {
    path: "/chart",
    sidebar: () => <span>Chart</span>,
    main: () => <ChartLayout />
  }
];


class MainLayout extends Component {
    state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Router>

        <Layout style={{ minHeight: '100vh' }}>
          <Header className="show-md" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                  <Icon type="desktop" />
                  <Link to='/'>Home</Link>                
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="pie-chart" />
                  <Link to="/chart">Chart</Link>
                </Menu.Item>
            </Menu>
          </Header>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            className="hide-md"
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="desktop" />
                <Link to='/'>Home</Link>                
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="pie-chart" />
                <Link to="/chart">Chart</Link>
              </Menu.Item>

              {/* <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>User</span></span>}
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>Team</span></span>}
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item> */}

            </Menu>
          </Sider>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
          {/* <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout> */}
        </Layout>
      </Router>
    );
  }
}

export default MainLayout;

