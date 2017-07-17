function greeting() {
   var commentval = $('#comment').val();
   alert("Hi "  + commentval + ", welcome to my page!");
   $("#commentsHere").append("<p>"+commentval+"</p>");
}

function setup() {
   $("#submit").click(greeting);
}

$(document).ready(setup)
