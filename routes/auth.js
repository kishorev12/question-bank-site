const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hash });
    await user.save();
    res.status(201).send('User registered');
  } catch (err) {
    res.status(400).send('Registration failed');
  }
});

router.post('/login', (req, res) => {
  res.json({ username: 'TestUser', token: 'test123' });
});

module.exports = router;
