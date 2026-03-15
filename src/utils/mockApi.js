const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const registerUser = async (email, password, name) => {
    await delay(600); // Simulate network request
    const users = JSON.parse(localStorage.getItem('appUsers') || '[]');

    if (users.find(u => u.email === email)) {
        throw new Error('User with this email already exists.');
    }

    const newUser = { id: Date.now().toString(), email, password, name };
    users.push(newUser);
    localStorage.setItem('appUsers', JSON.stringify(users));

    // Create a simulated JWT token structure: header.payload.signature
    const payload = btoa(JSON.stringify({ id: newUser.id, email }));
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${payload}.mock_signature_${Date.now()}`;

    return { user: { id: newUser.id, name, email }, token };
};

export const loginUser = async (email, password) => {
    await delay(500);
    const users = JSON.parse(localStorage.getItem('appUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        throw new Error('Invalid email or password.');
    }

    const payload = btoa(JSON.stringify({ id: user.id, email: user.email }));
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${payload}.mock_signature_${Date.now()}`;

    return { user: { id: user.id, name: user.name, email: user.email }, token };
};
