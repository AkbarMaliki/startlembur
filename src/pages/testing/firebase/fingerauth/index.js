// npm install express cors body-parser @webauthn/server firebase
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const userRepository = require('./userRepository');
const {
    generateRegistrationChallenge,
    parseRegisterRequest,
    generateLoginChallenge,
    parseLoginRequest,
    verifyAuthenticatorAssertion,
} = require('@webauthn/server');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors())

app.get('/test',(req,res)=>{
    res.send('Kino no tabi')
})

app.post('/fingerregister', (req, res) => {
    const { id, email } = req.body;

    const challengeResponse = generateRegistrationChallenge({
        relyingParty: { name: 'TA-Maliki inc' },
        user: { id, name: email }
    });
    // SIMPAN KE DATABASE  
    userRepository.create({
        id,
        email,
        challenge: challengeResponse.challenge,
    })

    res.send(challengeResponse);
});
app.post('/fingerlogin', (req, res) => {
    const { key, challenge } = parseRegisterRequest(req.body);
    // CEK APAKAH DI USER CHALLANGE SAMA
    const user = userRepository.findByChallenge(challenge);

    if (!user) {
        return res.sendStatus(400);
    }
    // jika ada maka beri data user
    userRepository.addKeyToUser(user, key);

    return res.send({ loggedIn: true });
});

app.listen(3000, ()=>{
    console.log('server di http://localhost:3000')
})