/*
API key: 4a9d4a4c035e495aab2899f3e1f07991

Query URL
???

Search parameters
Search term, number of records to retrieve, start year (optional), end year (optional)

Search, clear results

Top articles

TO DO
Create the AJAX call needed to retrieve data then console.log all of the relevant fields.
Incorporate various “optional parameters” (hard code these in initially).
Take note of various “bugs” that appear with certain searches.

*/


//Set up URL and search params
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
    'api-key': "4a9d4a4c035e495aab2899f3e1f07991",
    'q': $('#search-term').val(),
    'begin_date': $('#start-year').val(),
    'end_date': $('#end-year').val(),
    'page': $('#number-records').val(),

});

$.ajax()
