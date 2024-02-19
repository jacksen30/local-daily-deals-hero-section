const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalInner = document.getElementById('modal-inner');
const signupFormPrelaunch = document.getElementById('signup-form-prelaunch');


setTimeout(function(){
    modal.style.display = 'inline'
}, 2000)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})


signupFormPrelaunch.addEventListener('submit', (e) => {
    e.preventDefault();

    const signupPrelaunchFormData = new FormData(signupFormPrelaunch)
    const fullName = signupPrelaunchFormData.get('fullName');
    let firstName = fullName.split(' ')[0];

    // Submit the form data to Netlify manually
    const form = e.target;
    fetch(form.action, {
        method: form.method,
        body: new URLSearchParams(signupPrelaunchFormData),
    })
        .then((response) => {
        // Handle the response, e.g., show success message
        modalInner.innerHTML = `
        <h2>🍔Epic Eats,<br>🤑 Smart Savings!<h2>
        <br>
        <h3>Welcome ${firstName},<br><br>You've unlocked the secret to epic eats with smart savings. As part of our community, you'll feast on deals that are as kind to your wallet as they are to your palate.<br><br>Stay tuned! We will email you when the first deals become available 👍 </h3>
        `

        setTimeout(function(){
            modal.style.display = 'none';
        }, 3000)
        })
        .catch((error) => {
        // Handle errors, e.g., show error message
        alert('Error submitting the form. Please try again later.');
        });
});