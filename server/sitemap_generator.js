const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
let sitemap;

const generate_sitemap = async (req, res, next) => {

  res.header('Content-Type', 'application/xml');

  if (sitemap) return res.status(200).send(sitemap); 
  // If we have a cached entry send it

  let changefreq = 'weekly';

  try {

    let links = [
      { url: '/', changefreq, priority: 1 },
      { url: '/portfolio', changefreq, priority: 0.9 },
      { url: '/blog', changefreq },
      { url: '/troubleshooting-hub', changefreq },
      { url: '/contact', changefreq },
      { url: '/posts/68c5f0efd7cdb0479a2419e4', changefreq },
      { url: '/posts/657e61285c06ccfa66288cec', changefreq },
      { url: '/registration', changefreq },
      { url: '/login', changefreq },
    ];

    // Additionally, you can do database query and add more dynamic URLs to the "links" array.

    const stream = new SitemapStream({ hostname: 'https://www.lamur.us', lastmodDateOnly: true })
    return streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
      sitemap = data.toString();// Cache the generated sitemap
      stream.end();
      return res.status(200).send(data.toString())
    });

  } catch (error) {
    return res.status(500).end();
  }
}

module.exports = { generate_sitemap };