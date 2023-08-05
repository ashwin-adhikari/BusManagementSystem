document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Here, you can perform your login logic using JavaScript (e.g., sending data to a server for validation).
      // For this example, let's just log the username and password to the console.
      console.log("Username: ", username);
      console.log("Password: ", password);
  
  
      if (username === "hello" && password === "123") {
        // Redirect to the home page (replace "home.html" with the actual path of your home page).
        window.location.href = "indexaccount.html";
        var usernamePlaceholder = document.getElementById("username-placeholder");
    usernamePlaceholder.textContent = username;
      } else {
        alert("Invalid credentials. Please try again.");
      }
  
      // You can add your login validation logic here and display appropriate messages to the user.
    });
  });
  
