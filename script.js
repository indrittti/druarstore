    document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            if (validateForm()) {
                // If the form is valid, you can perform further actions here
                alert('Form submitted successfully!');
                location.reload();
            }
        });

        function validateForm() {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            if (isEmpty(nameInput.value) || isEmpty(emailInput.value) || isEmpty(messageInput.value)) {
                showAlert('Please fill in all fields.');
                return false;
            }

            if (!isValidEmail(emailInput.value)) {
                showAlert('Please enter a valid email address.');
                return false;
            }

            return true;
        }

        function isEmpty(value) {
            return value.trim() === '';
        }

        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        function showAlert(message) {
            alert(message);
        }
    });