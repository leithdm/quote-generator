# quote-generator

A simple quote generator using Vanilla JavaScript, HTML5, CSS3.

1. Makes an asynchronous fetch request to a REST API (http://api.forismatic.com).
2. CORS error circumvented by using a proxy API first ('https://cors-anywhere.herokuapp.com/'), followed by the API url.
3. Mobile responsive. Font-Awesome icons, Google Fonts, background image by: http://www.heropatterns.com/

## Issues:
1. The free API (http://api.forismatic.com) frequently has a http status code 429, because there is too much traffic.
