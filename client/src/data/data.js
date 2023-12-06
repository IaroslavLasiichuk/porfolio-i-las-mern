const navigation = [
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  // { name: 'About Me', href: '/about' },
]

const bio = [
{
  title: "Hi, My name is Iaroslav Lasiichuk I'm Frontend Developer",
  content: "Hi, everyone! I'm a young aspiring Full Stack Web developer with a passion for technology and a strong desire to make a difference in the world. I'm constantly seeking new challenges and opportunities to learn and grow as a developer"
}
]

const posts = [
{
  id: 1,
  title: 'HTML',
  href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  description:
    'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page\'s appearance/presentation (CSS) or functionality/behavior (JavaScript).',
  date: 'Jan 16, 2023',
  category: { title: 'HTML'},
  author: {
    name: 'Iaroslav Lasiichuk',
    role: 'Web Developer',
  },
},
  {
    id: 2,
    title: 'CSS: Cascading Style Sheets',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    description:
      'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
    date: 'Feb 2, 2023',
    category: { title: 'CSS'},
    author: {
      name: 'Iaroslav Lasiichuk',
      role: 'Web Developer',
    },
  },
  {
    id: 3,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    description:
      'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
    date: 'May 15, 2023',
    category: { title: 'JavaScript'},
    author: {
      name: 'Iaroslav Lasiichuk',
      role: 'Web Developer',
    },
  },
  {
    id: 4,
    title: 'Create a New Repository',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    description:
      'Creating a repository is something you\'ll need to do often—every time you start working on a new project, in fact. To create a new repository on GitHub, follow these steps...',
    content: 'Jul 28, 2023',
    date: 'Jul 28, 2023',
    category: { title: 'GitHub'},
    link: 'Read more and comment',
    author: {
      name: 'Iaroslav Lasiichuk',
      role: 'Full Stack Web Developer || Owner',
    },
  },
]

const projects = [
{
  id: 1,
  name: 'Movie Blog',
  description:'The application allows users to search for movies based on title. The application also allows for the user to register to our app to save movies watched, comment, and read critic reviews.',
  git:'https://github.com/IaroslavLasiichuk/movie-blog',
  link:'https://intense-island-90811.herokuapp.com/',
  imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8Y6QCkY7uUARJR288NRuRYyivuFpGYbt40-8mkooaAXPnThuPpKlD_KtiwHWd4B8CdM&usqp=CAU',
  imageAlt: "Javascript Logo",
},
{
  id: 2,
  name: 'The Tech Blog',
  description:'This is a CMS-style blog site for tech developers who want to publish articles, blog posts, and their thoughts and opinions. This site provides a user-friendly interface for managing posts, comments, and user accounts',
  git:'https://github.com/IaroslavLasiichuk/mvc-tech-blog',
  link:'https://intense-river-83466.herokuapp.com/',
  imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBIzg1d5lBFFE3bJ2zkW7h0Gq8h7S343vEw&usqp=CAU',
  imageAlt: "Node js logo",
 
},
{
  id: 3,
  name: 'Note Taker',
  description:'This is a simple Note Taker application that allows small business owners to write and save notes to keep track of their tasks and organize their thoughts.',
  git: 'https://github.com/IaroslavLasiichuk/note-taker',
  link: 'https://desolate-journey-55866.herokuapp.com/',
  imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROlpbROsuLWFnUQWjoTX-rtcoX3__48J66Zw&usqp=CAU',
  imageAlt: "Node js express logo",
},
{
  id: 4,
  name: 'Weather Dashboard',
  description:'As a traveler, it is important to be informed about the weather conditions of the cities you plan to visit. This weather dashboard allows you to search for current and future weather conditions for multiple cities, so you can plan your trips accordingly.',
  git:'https://github.com/IaroslavLasiichuk/weather-dashboard',
  link:'https://iaroslavlasiichuk.github.io/weather-dashboard/',
  imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkZVtayyBxxdHkZyGXIMPy1S2tYSp8H4VxQ&usqp=CAU',
  imageAlt: "Node js express logo",
},
{
  id: 5,
  name: 'Pasword Generator',
  description:'This project is a password generator application. The user can click a button to generate a new, secure password based on their chosen criteria. The user is prompted for password criteria, including character types to include, and the length of the password.',
  git:'https://github.com/IaroslavLasiichuk/password-generator',
  link:'https://iaroslavlasiichuk.github.io/password-generator/',
  imageSrc: 'https://i.ytimg.com/vi/duNmhKgtcsI/maxresdefault.jpg',
  imageAlt: "Node js express logo",
},
{
  id: 6,
  name: 'Quiz Application',
  description:'This quiz is designed for coding boot camp students to test their knowledge of JavaScript fundamentals, and to track their progress compared to their peers by storing high scores.',
  git:'https://github.com/IaroslavLasiichuk/quiz-application',
  link:'https://iaroslavlasiichuk.github.io/quiz-application/',
  imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ6l4hw1GqQGvb7fJvg-Clw-254H2h8dYk8A&usqp=CAU',
  imageAlt: "JS",
},
{
  id: 7,
  name: 'Thinker',
  description:'Thinker is a community-driven question and answer platform designed to connect people seeking knowledge with those who have expertise in various fields.',
  git:'https://github.com/IaroslavLasiichuk/blog_thinker',
  link:'https://salty-eyrie-98942.herokuapp.com/',
  imageSrc: 'https://miro.medium.com/v2/resize:fit:1400/0*GKIyAWHbKbANm7d9.png',
  imageAlt: "React",
},
]
export default { navigation, bio, posts, projects };