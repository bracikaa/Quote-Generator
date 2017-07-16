$(document).ready(function(){
  var author, quote;
  getQuote();
  $('#button').on('click', getQuote);
  
  function getQuote(){
    $.ajax({
      url:
      'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        format: 'jsonp',
        lang: 'en'
      },
      success: function(response){
       
        $("#quote").text(response.quoteText);
        $("#author").text("- " + response.quoteAuthor)
        quote = $("#quote").text();
        author = $("#author").text();
      }
    });
    
  }
   $('#twitter').on('click', function(event){
     event.preventDefault();
     window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '\n\r' + author));
   });
});