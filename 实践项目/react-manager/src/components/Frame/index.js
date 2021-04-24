import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Logo from './logo.PNG'
import {adminRoutes} from '../../routes'


const routes = adminRoutes.filter(route => route.isShow)
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Index(props) {
  return (
    <Layout>
    <Header className="header" style={{
      backgroundColor:'white'
    }}>
      <div className="logo" >
        <img src={Logo} alt="logo" style={{width:'130px' ,marginTop:'-30px'}}></img>
      </div>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {routes.map(route => {
            return (<Menu.Item 
              key={route.path} onClick={p => props.history.push(p.key)}>
                {route.icon}
                {route.title}
                </Menu.Item>)
          })}
        </Menu>
      </Sider>
      <Layout style={{ padding: '16px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default withRouter(Index)
