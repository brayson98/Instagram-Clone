document.addEventListener('DOMContentLoaded', () => {
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = loginForm.querySelector('input[type="text"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;

            // Simple validation (you can expand this)
            if (username && password) {
                alert(`Welcome, ${username}! You are now logged in.`);
                // Redirect to the Feed page after a successful login
                window.location.href = 'feed.html';
            } else {
                alert('Please enter both username and password.');
            }
        });
    }

    // Dynamic photo feed on the Feed page
    const photoFeed = document.querySelector('.photos');
    if (photoFeed) {
        const photoCount = 6; // Number of photos to display
        for (let i = 0; i < photoCount; i++) {
            const img = document.createElement('img');
            img.src = `https://picsum.photos/400/500?random=${Math.floor(Math.random() * 1000)}`; // Random photo
            img.alt = 'Random photo';
            photoFeed.appendChild(img);
        }
    }
});
