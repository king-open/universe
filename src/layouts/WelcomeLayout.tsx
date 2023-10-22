import {animated, useTransition} from '@react-spring/web';
import type {ReactNode} from 'react';
import React from 'react';
import {useRef} from 'react';
import logo from '../assets/images/logo.svg'
import {Link,useLocation, useOutlet} from 'react-router-dom';

const linkMap = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/xxx',
}

// @ts-ignore
export const WelcomeLayout:React.FC=()=>{
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  map.current[location.pathname] = useOutlet()
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)': 'translateX(100%)' },

    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 3000 }
  })
  return (
    <div>
      <header>
        <img src={logo} />
        <h1>山竹记账</h1>
      </header>
      <main>
        {transitions((style, pathname) =>
          <animated.div key={pathname} style={style}>
            {map.current[pathname]}
          </animated.div>
        )}
      </main>
      <footer>
        <Link to={linkMap[location.pathname]}>下一页</Link>
        <Link to="/welcome/xxx">跳过</Link>
      </footer>
    </div>
  )
}
