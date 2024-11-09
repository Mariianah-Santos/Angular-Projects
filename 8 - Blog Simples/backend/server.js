const express = require('express'); 
const bodyParser = require('body-parser'); 
const fs = require('fs'); 
const app = express();
const cors = require('cors');

app.use(bodyParser.json()); 
app.use(cors());
const filePath = './users.json';
 
// Função para ler usuários do arquivo JSON 
const getUsers = () => { 
    const data = fs.readFileSync(filePath); 
    return JSON.parse(data); 
}; 

// Função para salvar usuários no arquivo JSON 
const saveUsers = (users) => { 
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2)); 
}; 

// Endpoint de Cadastro 
app.post('/signup', (req, res) => { 
    const { name, email, password } = req.body; 
    const users = getUsers(); 

// Verifica se o usuário já existe 
if (users.some(user => user.email === email)) 
    { return res.status(400).send({ message: 'User already exists' }); 
} users.push({ id: Date.now(), name, email, password }); 
saveUsers(users); res.status(201).send({ message: 'User registered successfully' });
}); 

// Endpoint de Login 
app.post('/login', (req, res) => 
    { const { email, password } = req.body;
const users = getUsers(); 
const user = users.find(user => user.email === email && user.password === password); 
if (!user) { 
    return res.status(401).send({ message: 'Invalid credentials' }); 
} 
res.status(200).send({ message: 'User logged in successfully' }); }); 
// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

app.listen(3001, () => { console.log('Server is running on http://localhost:3001'); });