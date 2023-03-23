
function selectIceCream () {
    console.log("icecream selected");



    // const vanillaButton = document.querySelector(".vanilla");
    // function clickedMessage () { console.log("vanilla") }; 
    // vanillaButton.onClick = clickedMessage;

    // const vanilla = true;
    // const chocolate = false;
    // const rockyRoad = true;
    // const pbCup = true; 
    
    // if (vanilla === true) {
    //     return alert("Vanilla on the way!");
    // } else if (chocolate === true) {
    //     return alert("Chocolate day!");
    // } else if (rockyRoad === true) {
    //     return alert("Walk the Rocky Road!");
    // } else if (pbCup === true) {
    //     return alert("PB is my FAVORITE!!!");
    // } else {
    //     return alert("All out, sucka")
    // }
    // console.log(vanillaButton);

    };

    




//Order Form JS: 
const form = document.querySelector("#orderForm");
const inputFirst = document.querySelector("#first-name");
const inputLast = document.querySelector("#last-name");
const inputEmail = document.querySelector("#email");
const inputFlavor = document.querySelector("#order-flavor");
// const inputSize = document.querySelector("input[name=size]:checked");
const inputSizeSmall = document.querySelector("#small");
const inputSizeMedium = document.querySelector("#medium");
const inputSizeLarge = document.querySelector("#large");



form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submitted Flavor Form");
    alert(`Thank You, ${inputFirst.value} ${inputLast.value}, we will process your order of 
    a ${findSize()} ${inputFlavor.value} icecream. You will receive an email at ${inputEmail.value} when it is ready.`)
    
    clearForm();
    
});

function findSize(){
    if (inputSizeSmall.checked === true) {
        return inputSizeSmall.value;
    } else if (inputSizeMedium.checked === true) {
        return inputSizeMedium.value;
    } else return inputSizeLarge.value;
};

function clearForm() {
    inputFirst.value = '';
    inputLast.value = '';
    inputEmail.value = '';
    inputFlavor.value = '';
    inputSizeSmall.checked = false;
    inputSizeMedium.checked = false;
    inputSizeLarge.checked = false;
};


// function addResponse() {
//     const newOrder = document.createElement('p');
//     newOrder.append("Success");

// };






