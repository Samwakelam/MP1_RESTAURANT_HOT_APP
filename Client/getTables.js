$(document).ready(function(){

     // tables html 
    const reservedTables = $('#reserved-tables');
    const waitingTables = $('#waiting-tables');


    $.ajax({
        type: "GET",
        url: "/api/tables",
      })
      .then(function(response) {
        console.log('response =', response);
        const [first, second, third, fourth, fifth, ...rest] = response
        console.log("...rest =", ...rest);
        console.log("first =", first);
        reservationList(response);
        const array =[...rest]
        waitingList(array);
      })
      .catch(function(reject, error) {
        console.log("reject =", reject);
        console.log('whoops error', error);
        alert("it failed");
      });
    
  
  
    function reservationList(array){
  
      for (let index = 0; index < 5; index++) {
        const element = array[index];
        console.log("element =", element);
        reservedTables.append(
          `<li class="list-group-item"> ${(index + 1)} | ${array[index].id} </li>`
        );
      }
    }
  
    function waitingList(array){
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log("element =", element);
        waitingTables.append(
          `<li class="list-group-item"> ${(index + 6)} | ${array[index].id} </li>`
        );
      }
    }

});