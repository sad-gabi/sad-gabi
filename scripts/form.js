function entercheck() {
  if (event.key === 'Enter') {
    addTags();
  }
}

function art_on() {
  const tagsValue = document.getElementById('tags');
  tagsValue.value = 'Art, ';
}

function branding_on() {
  const tagsValue = document.getElementById('tags');
  tagsValue.value = 'Branding, ';
}

function ux_on() {
  const tagsValue = document.getElementById('tags');
  tagsValue.value = 'UX/UI Design, ';
}

function td_on() {
  const tagsValue = document.getElementById('tags');
  tagsValue.value = '3D Design, ';
}

function web_on() {
  const tagsValue = document.getElementById('tags');
  tagsValue.value = 'Web Design, ';
}

function checkFormValidity() {
  const form = document.querySelector('form');
  const submitButton = document.getElementById('submitButton');

  if (form.checkValidity()) {
    submitButton.classList.add('active');
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.classList.remove('active');
    submitButton.setAttribute('disabled', 'true');
  }
}

function submitForm() {

  alert("Ticket submited!");

  const ticketForm = document.getElementById('ticket');
  ticketForm.submit();
}

function addTags() {
  const tagText = document.getElementById('tags').value;

  if (tagText.trim() === "") {
    alert("Please enter some text before creating the button.");
    return;
  }

  const tagssec = document.getElementById("tagssec");
  const newButton = document.createElement('div');
  newButton.style = "cursor: pointer; border-radius: 20px; background-image: linear-gradient(to right, #b923ff, #3341ff); margin-left: 5px; margin-right: 5px; text-align: center; width: auto; min-width: 0; padding: 3px; padding-left: 10px; padding-right: 10px; color: white; font-family: MontserratBold; font-size: 12px; min-width: 50px";
  newButton.textContent = tagText;

  tagssec.appendChild(newButton);

  document.getElementById('tags').value = "";
}