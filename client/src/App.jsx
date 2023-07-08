import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Registration from './pages/Registration'
import NotFound from './pages/NotFound'


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  // uri: 'http://localhost:3000/graphql',
  uri: 'https://secure-crag-53984.herokuapp.com/graphql',
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
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="posts/:postId" element={<Post />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="login" element={<Login/>} />
        <Route path="registration" element={<Registration/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </ApolloProvider>
  )
}

export default App