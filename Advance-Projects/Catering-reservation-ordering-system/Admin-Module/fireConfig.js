var firebaseConfig = {
    apiKey: "AIzaSyDduHsElZ0B08Gjn79bGQDvuvNYTaWcRjQ",
    authDomain: "gym-management-system-d15af.firebaseapp.com",
    databaseURL: "https://gym-management-system-d15af-default-rtdb.firebaseio.com",
    projectId: "gym-management-system-d15af",
    storageBucket: "gym-management-system-d15af.appspot.com",
    messagingSenderId: "241812856909",
    appId: "1:241812856909:web:a6280efcd86a4fd8b4bc04",
    measurementId: "G-H7CSF6KZYT"
};

//Initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
const crudData = firebase.database().ref('gym-management-system')

document.getElementById('form').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    let name = getElementVal('name');
    let email = getElementVal('email');
    let gender = getElementVal('gender');
    let address = getElementVal('address');

    console.log(name, email, gender, address);

}



const getElementVal = (id) =>{
    return document.getElementById(id).value;
}