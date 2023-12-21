let nameV, emailV, genderV, addressV;

function readForm() {
  nameV = document.getElementById("name").value;
  emailV = document.getElementById("email").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  console.log(nameV, emailV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("member/" + nameV)
    .set({
      name: nameV,
      email: emailV,
      gender: genderV,
      address: addressV,
    });
    
  alert("Data Inserted");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};

document.getElementById("read").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("member/" + nameV)
    .on("value", function (snap) {
      document.getElementById("name").value = snap.val().name;
      document.getElementById("email").value = snap.val().email;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
    });
};

document.getElementById("update").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("member/" + nameV)
    .update({
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Update");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};


document.getElementById("delete").onclick = function () {
  readForm();

  firebase
    .database()
    .ref("member/" + nameV)
    .remove();
  alert("Data Deleted");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};