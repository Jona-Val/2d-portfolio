import kaboom from "kaboom";

export const k = kaboom({
    global: false,
    touchtoMouse: true, // TO make it work with mobile
    canvas: document.getElementById("game"), // To give it the ID I set up in the index.html
});