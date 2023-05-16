const navigation = [
  { name: 'Portfolio', href: '/Portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const bio = [
{
  title: "Hi, My name is Iaroslav Lasiichuk I'm Frontend Developer",
  content: "Hi, everyone!I'm a young aspiring junior web developer with a passion for technology and a strong desire to make a difference in the world. I'm constantly seeking new challenges and opportunities to learn and grow as a developer"
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
]
const projects = [
{
  id: 1,
  name: 'Movie Blog',
  description:'The application allows users to search for movies based on title. The application also allows for the user to register to our app to save movies watched, comment, and read critic reviews.',
  href: 'https://github.com/IaroslavLasiichuk/movie-blog',
  imageSrc: 'https://blog.logrocket.com/wp-content/uploads/2020/12/javascript-logo.png',
  imageAlt: "Javascript Logo",
},
{
  id: 2,
  name: 'The Tech Blog',
  description:'This is a CMS-style blog site for tech developers who want to publish articles, blog posts, and their thoughts and opinions. This site provides a user-friendly interface for managing posts, comments, and user accounts',
  href: 'https://github.com/IaroslavLasiichuk/mvc-tech-blog',
  imageSrc: 'https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png',
  imageAlt: "Node js logo",
 
},
{
  id: 3,
  name: 'Note Taker',
  description:'This is a simple Note Taker application that allows small business owners to write and save notes to keep track of their tasks and organize their thoughts.',
  href: 'https://github.com/IaroslavLasiichuk/note-taker',
  imageSrc: 'https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/Express-JS-vs-Node-JS_-Why-its-Time-to-Migrate_-1.png.webp',
  imageAlt: "Node js express logo",
},
{
  id: 4,
  name: 'Employee Management System',
  description:'This command-line application allows a business owner to manage their company employee database. It is built using Node.js, Inquirer, and MySQL. The user can view and manage departments, roles, and employees in the company, allowing for easy organization and planning.',
  href: 'https://github.com/IaroslavLasiichuk/employee-tracker',
  imageSrc: 'https://ourcodeworld.com/public-media/articles/articleocw-57e139c25d2be.png',
  imageAlt: "Node js express logo",
},
{
  id: 5,
  name: 'Pasword Generator',
  description:'This project is a password generator application. The user can click a button to generate a new, secure password based on their chosen criteria. The user is prompted for password criteria, including character types to include, and the length of the password.',
  href: 'https://github.com/IaroslavLasiichuk/password-generator',
  imageSrc: 'https://blog.logrocket.com/wp-content/uploads/2021/01/js-css-html.png',
  imageAlt: "Node js express logo",
},
{
  id: 6,
  name: 'Quiz Application',
  description:'This quiz is designed for coding boot camp students to test their knowledge of JavaScript fundamentals, and to track their progress compared to their peers by storing high scores.',
  href: 'https://github.com/IaroslavLasiichuk/quiz-application',
  imageSrc: 'https://blog.boot.dev/img/800/HTML-vs-CSS-vs-JavaScript-min.webp',
  imageAlt: "JS",
},
]
export default { navigation, bio, posts, projects };