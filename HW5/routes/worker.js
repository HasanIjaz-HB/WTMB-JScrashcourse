const express = require('express')
const router = express.Router()

const WorkerService = require('../services/worker-service')

router.get('/all', async (req, res) => {
  const workers = await WorkerService.findAll()
  res.render('list', { items: workers })
})

router.get('/:id', async (req, res) => {
  const worker = await WorkerService.find(req.params.id)
  res.render('data', { data: worker })
})

router.post('/', async (req, res) => {
  const worker = await WorkerService.add(req.body)
  res.send(worker)
})

router.delete('/:id', async (req, res) => {
  const worker = await WorkerService.del(req.params.id)
  res.send(worker)
})

module.exports = router