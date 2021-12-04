// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxVeDYCs9OpCf1pZJO3XUl3K2Bha-qx7o",
  authDomain: "kwitter-6cf12.firebaseapp.com",
  projectId: "kwitter-6cf12",
  storageBucket: "kwitter-6cf12.appspot.com",
  messagingSenderId: "535275616514",
  appId: "1:535275616514:web:87f5ba39a9313ec1322a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome: " + user_name;

function adding_room() {
    room_name = document.getElementById("add_room").value;
firebase.database().ref("/").child(room_name).update({
    purpose: "adding room"
});
localStorage.setItem("adding_room", room_name);
window.location = "Kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
    Room_names = childKey; 
console.log("Room Name - " + Room_names)
row= "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
}); }); }
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location + "Kwitter_page.html";
}

function logout() {
    localStorage.getItem("user_name");
    localStorage.getItem("adding_room");
    window.location = "Kwitter.html";
}