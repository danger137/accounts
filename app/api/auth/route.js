// app/api/login.js
import users from '@/app/api/users';
import Cookies from 'cookies';

// app/api/users.js
const users = [
  { username: 'admin', password: 'password' },
  { username: 'user1', password: 'password123' },
  // Add more users as needed
];




export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Check if the provided credentials match any user
        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            // Set a cookie for authentication
            const cookies = new Cookies(req, res);
            cookies.set('authToken', 'authenticated', { httpOnly: true });

            // Redirect to the admin section
            res.status(200).json({ message: 'Login successful' });
        } else {
            // Authentication failed
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} not allowed`);
    }
}
