//change deployed url to heroku url

module.exports = ({ env }) => ({
    url: env('https://castled-cms.herokuapp.com'),
});
