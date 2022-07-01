const API_URL = "https://62ac4e7dbd0e5d29af1fac5b.mockapi.io/api/todosList";

$(document).ready(function () {
  const table =$(".tableBody")
  $.ajax({
    url: API_URL,
  }).done(function (data) {
    const{todosList}=data
    $.each(todosList,function(_,todo){
      table.append(
        `<tr data-id=${todo.id}><td><i class="bi bi-check" style=${todo.status ? "display:none" : "display:block"} ></i></td><td>${todo.todos}</td><td><i class="bi bi-x"></i></td></tr>`
      )
    })
    

  });
});
