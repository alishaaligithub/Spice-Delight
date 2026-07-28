// ================= RESERVE TABLE =================

function reserveTable() {
    alert("Thank you for choosing Spice Delight!\n\nYour reservation request has been received.");
}

// ================= ORDER FOOD =================

function orderFood(item) {
    alert(item + " has been added to your order.");
}

// ================= STICKY NAVBAR =================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {
        header.style.background = "#111";
    } else {
        header.style.background = "rgba(0,0,0,.35)";
    }

});

// ================= SCROLL TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ================= FOOTER YEAR =================

document.getElementById("year").textContent = new Date().getFullYear();

window.onload = function () {

    console.log("Welcome to Spice Delight Restaurant");

}

// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {

        alert("Please fill in all the fields.");
        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");
        return;

    }

    alert("Thank you, " + name + "!\n\nYour message has been sent successfully.");

    contactForm.reset();

});

// ================= MOBILE MENU =================

function toggleMenu() {

    document.getElementById("navLinks").classList.toggle("show");

}

document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks").classList.remove("show");

    });

});

// ================= TO-DO LIST =================

function addTask() {

    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {

        alert("Please enter a task.");
        return;

    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button onclick="removeTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    alert("Task Added Successfully!");

    input.value = "";

}

function removeTask(button) {

    button.parentElement.remove();

    alert("Task Removed Successfully!");

}

// ================= SPECIAL OFFER =================

function specialOffer(item){

    alert(
        "🎉 Congratulations!\n\n" +
        item +
        " special offer has been selected.\n\n" +
        "Visit our restaurant to enjoy today's exclusive deal!"
    );

}