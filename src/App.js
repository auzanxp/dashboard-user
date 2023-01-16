import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/dashboard/Layout';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ListTableData from './pages/ListTableData';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Navbar>
              <Home />
            </Navbar>
          }
        />
        <Route
          path='/dashboard'
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }

        />
        <Route
          path='/list'
          element={
            <Layout>
              <ListTableData />
            </Layout>
          }

        />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
