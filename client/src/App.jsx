import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import AboutMe from './pages/AboutMe'
import Post from './pages/Post'
import Contact from './pages/Contact'
import AdminPanel from './pages/AdminPanel'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Registration from './pages/Registration'
import NotFound from './pages/NotFound' 

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'

import { setContext } from '@apollo/client/link/context';
let apiUrl = import.meta.env.VITE_REACT_APP_NODE_ENV === "production" 
  ? "https://www.lamur.us/graphql" 
  : "http://localhost:3000/graphql"; 

// let apiUrl = "http://localhost:3000/graphql";

const httpLink = createHttpLink({
  uri: apiUrl,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


import { Route, Routes, useNavigate} from 'react-router-dom'
function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="about" element={<AboutMe/>} />
        <Route path="posts/:postId" element={<Post />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="admin" element={<AdminPanel/>} />
        <Route path="troubleshooting-hub" element={<Dashboard/>} />
        <Route path="login" element={<Login/>} />
        <Route path="registration" element={<Registration/>} />
        <Route path="forgotpassword" element={<ForgotPassword/>} />
        <Route path="resetPassword/:passwordResetToken" element={<ResetPassword/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </ApolloProvider>
      </HelmetProvider>
  )
}

export default App