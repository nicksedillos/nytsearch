var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
  'api-key': "5793f7346ff441f5b31ac78df680ddf1",
  'q': $("#title-input-box").val(),
  'page': $("#number-of-records-input-box").val(),
  'begin_date': $("#begin-date-input-box").val(),
  'end_date': $("#end-date-input-box").val(),
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  console.log(result.headline.main);
  console.log(result.byline.original)
}).fail(function(err) {
  throw err;
});

// Here we grab the text from the input box
