import React, { Suspense, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/common/Loader';

const Layout = React.lazy(() => import('./layouts/Layout'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/SignUp'));
const Home = React.lazy(() => import('./pages/Home'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='sign-in' element={
            <Suspense
              fallback={<Loader />}>
              <Login />
            </Suspense>
          }
          />
          <Route path='sign-up' element={
            <Suspense
              fallback={<Loader />}>
              <Signup />
            </Suspense>
          }
          />
          <Route path="/" element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
          >
            <Route index element={
              <Suspense
                fallback={<Loader />}>
                <Home />
              </Suspense>
            }
            />
            <Route path='*' element={
              <Suspense fallback={<Loader />}>
                <PageNotFound />
              </Suspense>
            }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
