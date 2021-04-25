import './Layout.css'

import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

function Layout({ children }) {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h3">
            Visualizer
          </Typography>
          <div className="flex-grow" />
          <div className="x4">
            <Link to="/read" className="mr-2 Layout-link">
              <Button color="inherit">
                Read
              </Button>
            </Link>
            <Link to="/write" className="mr-2 Layout-link">
              <Button color="inherit">
                Write
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className="pt-2 pb-6">
        {children}
      </Container>
    </>
  )
}

export default Layout
