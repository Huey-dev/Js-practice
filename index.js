// we fetch an error message from our html this isthe (dom)
let errorParagraph = document.getElementById("error");
function purchase() {
    console.log("button clicked");
    // this is where we fetch the paragraph, give it an error message to display to the user
    errorParagraph.textContent = "something went wrong please try again...";
}