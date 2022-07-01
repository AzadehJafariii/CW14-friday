const API_URL = "https://62ac4e7dbd0e5d29af1fac5b.mockapi.io/api/todosList";

$(document).ready(function () {
  $.ajax({
    url: API_URL,
  }).done(function (todos) {
    console.log(todos);
  });
});
