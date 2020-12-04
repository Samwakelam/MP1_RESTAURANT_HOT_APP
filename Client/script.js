$(document).ready(function(){

  const contactName = $("#inputName");
  const phoneNumber = $("#inputPhoneNumber");
  const emailAddress = $("#inputEmail");
  const id = $("#uniqueID");
  const reserveForm = $("#reserveForm");

  reserveForm.submit(function (event) {
    event.preventDefault();

    const name = contactName.val();
    const email = emailAddress.val();
    const phone = phoneNumber.val();
    const uniqueID = id.val();
    console.log("Data received");
    console.log(name, email, phone, uniqueID); 
    const reserve = {
      "name": name,
      "email": email,
      "phone": phone,
      "uniqueId": uniqueID
    };
    console.log("reserve =", reserve);
  
    $.ajax({
      type: "POST",
      url: "/api/reserve",
      data: reserve,
      success: () => { console.log('success!'); },
      error: (error) => { console.log('error', error); }
    });

  });


});


