import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import useScrollTop from './hooks/useScrollTop'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'

const App = memo(() => {

  //路径发生改变，页面跳转滚动到顶部
  useScrollTop()
  
  return (
    <div className='app'>
      <h2>呵呵哈哈哈</h2>
      <AppHeader />
      <Suspense>
        <div className='page'>
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App
