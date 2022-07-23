import React from 'react'
import styles from './SideMenu.module.css'
import { Menu } from 'antd'
import { sideMenuList } from './mockup'
import { GifOutlined } from '@ant-design/icons'

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {sideMenuList.map((m, index) => {
        return (
          <Menu.SubMenu
            key={`side-menu-${index}`}
            title={
              <span>
                <GifOutlined />
                &nbsp;
                {m.title}
              </span>
            }>
            {m.subMenu.map((sm, smindex) => {
              return (
                <Menu.SubMenu
                  key={`sub-menu-${smindex}`}
                  title={
                    <span>
                      <GifOutlined />
                      &nbsp;
                      {sm.title}
                    </span>
                  }>
                  {sm.subMenu.map((sms, smsindex) => (
                    <Menu.Item key={`sub-sub-menu-${smsindex}`}>
                      <span>
                        <GifOutlined />
                        &nbsp;
                        {sms}
                      </span>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              )
            })}
          </Menu.SubMenu>
        )
      })}
    </Menu>
  )
}
