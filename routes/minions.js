const { Router } = require('express')
const { addMinion, GetMinion, updateMinion, DeleteMinion } = require('../controller/minion.controller')
const minionsRoutes = Router()


// contact routes
minionsRoutes.post('/minion', addMinion)
minionsRoutes.get('/minions', GetMinion)
minionsRoutes.put('/minion/:id', updateMinion)
minionsRoutes.delete('/minion/:id',DeleteMinion)

module.exports = {
    minionsRoutes
}