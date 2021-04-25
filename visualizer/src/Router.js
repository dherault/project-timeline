import { BrowserRouter, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Read from './scenes/Read'
import Write from './scenes/Write'

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Route expact path="/read">
          <Read />
        </Route>
        <Route expact path="/write">
          <Write />
        </Route>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
