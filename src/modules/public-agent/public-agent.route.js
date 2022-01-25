const express = require('express');
const { HTTP_STATUS_FOUND, HTTP_STATUS_INTERNAL_SERVER_ERROR } = require('http2').constants;

const router = express.Router();

const PublicAgentController = require('./public-agent.controller');
const publicAgentController = new PublicAgentController();

router.get('/:federalTaxId', async (req, res) => {
  const { federalTaxId } = req.params;

  try {
    const publicAgent = await publicAgentController.retrieveByFederalTaxId({ federalTaxId });
    console.log({
      publicAgent
    });
    res.status(HTTP_STATUS_FOUND).json({ agent: publicAgent?.name });
  } catch (e) {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({ error: e.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const publicAgent = await publicAgentController.createPublicAgent({ publicAgent: req.body });
    res.status(HTTP_STATUS_FOUND).json({ agent: publicAgent });
  } catch (error) {
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({ error: e.message });
  }
});

module.exports = router;