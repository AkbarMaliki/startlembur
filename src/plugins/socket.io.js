import io from 'socket.io-client'
const url = require('../application-keys.json')
const socket = io(`https://infolayanans.now.sh`)
// https://sockettam.now.sh
export default socket
