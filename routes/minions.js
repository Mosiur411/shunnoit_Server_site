const { Router } = require('express')
const minionsRoutes = Router()


// contact routes
minionsRoutes.post('/minion',)
minionsRoutes.get('/minions',)
minionsRoutes.put('/minion',)
minionsRoutes.delete('/minion',)

module.exports = {
    minionsRoutes
}