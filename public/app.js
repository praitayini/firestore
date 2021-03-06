var config = {
    apiKey: "AIzaSyC9Vwq3aBS8y-PvutBiRhOmO0BywRbnV2M",
    authDomain: "firestore-1da30.firebaseapp.com",
    databaseURL: "https://firestore-1da30.firebaseio.com",
    projectId: "firestore-1da30",
    storageBucket: "firestore-1da30.appspot.com",
    messagingSenderId: "11860285726"
};
firebase.initalizeApp(config);
var firestore = firebase.firestore();

const docRef = firestore.doc("samples/americaData");
const outputHeader = document.querySelector("#AmericaOutput");
const inputTextField = document.querySelector("#latestAmericastatus");
const saveButton = document.querySelector("#savebutton");

saveButton.addEventListener("click",function(){
    const textToSave = inputTextField.value;
    console.log("I am going to save" + textToSave + "to Firestore");
    docRef.set({
        americabestcountry: textToSave
    }).then(function(){
        console.log("Status saved!");
    }).catch(function(error){
        console.log("Got an error:",error);
    });
})
