function requestAccess() {
    // Prompt for name
    var name = prompt("Please enter
    your name:");
    if (name === null || name.trim()
    === "") {
    alert("Name is required to
    access the content.");
    return;
    }
    // Prompt for email
    var email = prompt("Please enter
    your email:");
    if (email === null ||
    email.trim() === "") {
    alert("Email is required to
    access the content.");
    return;
    }
    // Simple validation for email
    format (basic)
    var emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
    alert("Please enter a valid
    email address.");
    return;
    }
    // If both name and email are
    provided and email is valid, show
    content
    document.getElementById('content
    ').style.display = 'block';
    document.getElementById('authent
    ication').style.display = 'none';
    }