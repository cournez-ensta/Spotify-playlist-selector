console.log('Client-side code running');



var callback = function(res)
{
  var n = res[0].choices.length;
  var i;
  var dict = {};
  for (i = 0; i < n; i++)
  {
    key = res[0].choices[i].value;
    value = res[0].choices[i].votes;
    dict[key] = value;
  }
  var highestVal = Math.max.apply(null, Object.values(dict)),
  val = Object.keys(dict).find(function(a) {
    return dict[a] === highestVal;
  });
  return val; 
  //console.log(dict);
}

function demo()
{
  fetch('/clicks', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      /* document.getElementById('counter').innerHTML = `Button was clicked ${data.length} times`; */
      result = callback(data)
      console.log(result) 
    })
    .catch(function(error) {
      console.log(error);
    });
}