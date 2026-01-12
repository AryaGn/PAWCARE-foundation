
const links = document.querySelectorAll(".menu a");
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

function showDog(name, age, breed, gender, size, vaccinated, sterilized, health, nature, img) {
    document.getElementById("dog-name").innerText = name;
    document.getElementById("dog-age").innerText = age;
    document.getElementById("dog-breed").innerText = breed;
    document.getElementById("dog-gender").innerText = gender;
    document.getElementById("dog-size").innerText = size;
    document.getElementById("dog-vaccinated").innerText = vaccinated;
    document.getElementById("dog-sterilized").innerText = sterilized;
    document.getElementById("dog-health").innerText = health;
    document.getElementById("dog-nature").innerText = nature;
    document.getElementById("dog-img").src = img;

    document.getElementById("dog-details").style.display = "block";
    document.getElementById("adoption-form").style.display = "none";
}

function showAdoptionForm() {
    document.getElementById("selected-dog").value =
        document.getElementById("dog-name").innerText;
    document.getElementById("adoption-form").style.display = "block";
}

function submitAdoptionForm() {
    alert("Thank you! Your adoption request has been submitted.");
}

function submitVolunteerForm() {
    alert("Thank you for volunteering! We will contact you soon.");
}

function submitContactForm() {
    alert("Thank you for contacting us! We will respond shortly.");
}

function processPayment() {
    let name = document.getElementById("donor-name").value;
    let email = document.getElementById("donor-email").value;
    let amount = document.getElementById("donation-amount").value;
    let paymentMethod = document.querySelector('input[name="payment"]:checked');

    if (!name || !email || !amount || !paymentMethod) {
        alert("Please fill all fields and select a payment method.");
        return;
    }

    alert("Payment successful via " + paymentMethod.value);
    generateReceipt();
}

function generateReceipt() {
    let date = new Date().toLocaleDateString();
    let receiptId = "PCF" + Math.floor(Math.random() * 100000);

    document.getElementById("r-name").innerText =
        document.getElementById("donor-name").value;

    document.getElementById("r-email").innerText =
        document.getElementById("donor-email").value;

    document.getElementById("r-amount").innerText =
        document.getElementById("donation-amount").value;

    document.getElementById("r-date").innerText = date;
    document.getElementById("r-id").innerText = receiptId;

    document.getElementById("receipt").style.display = "block";
}

function printReceipt() {
    window.print();
}


document.addEventListener("change", function (e) {
    if (e.target.name === "payment") {
        const upiBox = document.getElementById("upi-box");
        if (upiBox) {
            upiBox.style.display = e.target.value === "UPI" ? "block" : "none";
        }
    }
});
