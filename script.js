
export default function selectIceCream () {
const vanilla = true;
const chocolate = false;
const rockyRoad = true;
const pbCup = true; 

if (vanilla === true) {
    return alert("Vanilla on the way!");
} else if (chocolate === true) {
    return alert("Chocolate day!");
} else if (rockyRoad === true) {
    return alert("Walk the Rocky Road!");
} else if (pbCup === true) {
    return alert("PB is my FAVORITE!!!");
} else {
    return alert("All out, sucka")
}

}