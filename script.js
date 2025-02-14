document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');

    const toggleMenu = () => {
        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    };

    menuToggle.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== menuToggle && event.target !== closeMenu) {
            menu.style.display = 'none';
        }
    });
//Signup api
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        let email = document.getElementById("signupEmail").value.trim();
        let username = document.getElementById("signupUsername").value.trim();
        let password = document.getElementById("signupPassword").value.trim();

        try {
            const response = await fetch("https://virtualhandcricket.onrender.com/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password, email })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            if (data.msg === "Success") {
                alert("Signup successful!");
                localStorage.setItem("token", data.token);
                window.location.href = "signin.html";
            } else {
                alert("Signup failed! " + data.msg);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    });
});
//login api 

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        let username = document.getElementById("loginUsername").value.trim();
        let password = document.getElementById("loginPassword").value.trim();

        try {
            const response = await fetch("https://virtualhandcricket.onrender.com/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            if (data.msg === "Success") {
                alert("Login successful!");
                localStorage.setItem("token", data.token);
                window.location.href = "dashboard.html";
            } else {
                alert("Login failed! " + data.msg);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    });
});
