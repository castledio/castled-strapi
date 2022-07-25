//change deployed url to heroku url

module.exports = ({ env }) => ({
    url: env('https://strapi-xtln.onrender.com'),
});
