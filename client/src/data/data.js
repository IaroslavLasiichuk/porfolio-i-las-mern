const navigation = [
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "BLOG", href: "/blog" },
  { name: "TROUBLESHOOTING HUB", href: "/troubleshooting-hub" },
  { name: "CONTACT", href: "/contact" },
  { name: "ABOUT ME", href: "/about" },
];

const bio = [
  {
    title: "Hi, My name is Iaroslav Lasiichuk I'm Frontend Developer",
    content:
      "Hi, everyone! I'm a young aspiring Full Stack Web developer with a passion for technology and a strong desire to make a difference in the world. I'm constantly seeking new challenges and opportunities to learn and grow as a developer",
  },
];

const posts = [
  {
    id: 1,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    description:
      "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).",
    date: "Jan 16, 2023",
    category: { title: "HTML" },
    author: {
      name: "Iaroslav Lasiichuk",
      role: "Web Developer",
    },
  },
  {
    id: 2,
    title: "CSS: Cascading Style Sheets",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description:
      "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
    date: "Feb 2, 2023",
    category: { title: "CSS" },
    author: {
      name: "Iaroslav Lasiichuk",
      role: "Web Developer",
    },
  },
  {
    id: 3,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description:
      "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.",
    date: "May 15, 2023",
    category: { title: "JavaScript" },
    author: {
      name: "Iaroslav Lasiichuk",
      role: "Web Developer",
    },
  },
  {
    id: 4,
    title: "Create a New Repository",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description:
      "Creating a repository is something you'll need to do often—every time you start working on a new project, in fact. To create a new repository on GitHub, follow these steps...",
    content: "Jul 28, 2023",
    date: "Jul 28, 2023",
    category: { title: "GitHub" },
    link: "Read more and comment",
    author: {
      name: "Iaroslav Lasiichuk",
      role: "Full Stack Web Developer || Owner",
    },
  },
];

const projects = [
  {
    id: 0,
    name: "Book Your Spot",
    description:
      "Enjoy the convenience of booking a parking spot at the venue ahead of time, ensuring you have a space when you arrive for games, concerts, and more.",
    git: "https://github.com/IaroslavLasiichuk/make-appointment",
    link: "https://rdc.lamur.us",
    imageSrc: "https://rdc.lamur.us/assets/il_logo-da249e15.png",
    imageAlt: "Logo Lamur",
  },
  // {
  //   id: 1,
  //   name: "DunkZone",
  //   description:
  //     "Dunk4Dreams, a non-profit organization committed to empowering underprivileged and through sports education and basketball skill development, is set to create a lasting positive impact in the Las Vegas community. ",
  //   git: "https://github.com/IaroslavLasiichuk/",
  //   link: "https://www.dunk-zone.com",
  //   imageSrc: "https://dunk-zone.com/wp-content/uploads/2023/11/dunk_zone.png",
  //   imageAlt: "Logo DunkZone",
  // },
  {
    id: 2,
    name: "Dun4Dreams",
    description:
      "Dunk4Dreams, a non-profit organization committed to empowering underprivileged and through sports education and basketball skill development, is set to create a lasting positive impact in the Las Vegas community. ",
    git: "https://github.com/IaroslavLasiichuk/",
    link: "https://www.dunk4dreams.org",
    imageSrc:
      "https://dunk4dreams.org/wp-content/uploads/2023/11/logo_11_29.png",
    imageAlt: "Logo Dunk4Dreams",
  },
  {
    id: 3,
    name: "Thinker",
    description:
      "Thinker is a community-driven question and answer platform designed to connect people seeking knowledge with those who have expertise in various fields.",
    git: "https://github.com/IaroslavLasiichuk/blog_thinker",
    link: "https://thinker.lamur.us/",
    imageSrc:
      "https://miro.medium.com/v2/resize:fit:1400/0*GKIyAWHbKbANm7d9.png",
    imageAlt: "React",
  },

  {
    id: 4,
    name: "Weather Dashboard",
    description:
      "As a traveler, it is important to be informed about the weather conditions of the cities you plan to visit. This weather dashboard allows you to search for current and future weather conditions for multiple cities, so you can plan your trips accordingly.",
    git: "https://github.com/IaroslavLasiichuk/weather-dashboard",
    link: "https://iaroslavlasiichuk.github.io/weather-dashboard/",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkZVtayyBxxdHkZyGXIMPy1S2tYSp8H4VxQ&usqp=CAU",
    imageAlt: "Node js express logo",
  },
  {
    id: 5,
    name: "Pasword Generator",
    description:
      "This project is a password generator application. The user can click a button to generate a new, secure password based on their chosen criteria. The user is prompted for password criteria, including character types to include, and the length of the password.",
    git: "https://github.com/IaroslavLasiichuk/password-generator",
    link: "https://iaroslavlasiichuk.github.io/password-generator/",
    imageSrc: "https://i.ytimg.com/vi/duNmhKgtcsI/maxresdefault.jpg",
    imageAlt: "Node js express logo",
  },
  {
    id: 6,
    name: "Quiz Application",
    description:
      "This quiz is designed for coding boot camp students to test their knowledge of JavaScript fundamentals, and to track their progress compared to their peers by storing high scores.",
    git: "https://github.com/IaroslavLasiichuk/quiz-application",
    link: "https://iaroslavlasiichuk.github.io/quiz-application/",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ6l4hw1GqQGvb7fJvg-Clw-254H2h8dYk8A&usqp=CAU",
    imageAlt: "JS",
  },

  {
    id: 7,
    name: "Note Taker",
    description:
      "This is a simple Note Taker application that allows small business owners to write and save notes to keep track of their tasks and organize their thoughts.",
    git: "https://github.com/IaroslavLasiichuk/note-taker",
    link: "https://note-taker.lamur.us/",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROlpbROsuLWFnUQWjoTX-rtcoX3__48J66Zw&usqp=CAU",
    imageAlt: "Node js express logo",
  },

  {
    id: 8,
    name: "Movie Blog",
    description:
      "The application allows users to search for movies based on title. The application also allows for the user to register to our app to save movies watched, comment, and read critic reviews.",
    git: "https://github.com/IaroslavLasiichuk/movie-blog",
    link: "https://movie-blog.lamur.us/",
    imageSrc:
      "https://img.freepik.com/free-vector/showtime-movie-time-film-strip-red-background_1017-33454.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716595200&semt=ais_user",
    imageAlt: "Javascript Logo",
  },
  {
    id: 9,
    name: "The Tech Blog",
    description:
      "This is a CMS-style blog site for tech developers who want to publish articles, blog posts, and their thoughts and opinions. This site provides a user-friendly interface for managing posts, comments, and user accounts",
    git: "https://github.com/IaroslavLasiichuk/mvc-tech-blog",
    link: "https://tech-blog.lamur.us/",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBIzg1d5lBFFE3bJ2zkW7h0Gq8h7S343vEw&usqp=CAU",
    imageAlt: "Node js logo",
  },
];
export default { navigation, bio, posts, projects };
