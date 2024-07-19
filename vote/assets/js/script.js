const randomRefNumber = Math.floor(100000 + Math.random() * 900000);
const refcodeElement = document.getElementById('refcode');
refcodeElement.textContent = `REF#: ${randomRefNumber}`;
