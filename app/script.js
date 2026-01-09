// Show authentication section
function showAuth(type) {
    const authSection = document.getElementById('authSection');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    authSection.classList.remove('hidden');
    
    if (type === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    } else {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    }
}

// Hide authentication section
function hideAuth() {
    const authSection = document.getElementById('authSection');
    authSection.classList.add('hidden');
}

// Scroll to features
function scrollToFeatures() {
    const features = document.getElementById('features');
    features.scrollIntoView({ behavior: 'smooth' });
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulate login (replace with actual API call)
    console.log('Login attempt:', { email, password });
    
    alert(`Welcome back! Logging in as ${email}`);
    hideAuth();
}

// Handle signup
function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const role = document.getElementById('signupRole').value;
    
    // Simulate signup (replace with actual API call)
    console.log('Signup attempt:', { name, email, password, role });
    
    alert(`Welcome to CodeHub, ${name}! Your account has been created.`);
    hideAuth();
}

// Close auth on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideAuth();
    }
});
