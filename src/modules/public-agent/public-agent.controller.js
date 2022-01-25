const PublicAgentService = require('./public-agent.service');

class PublicAgentController {
  constructor() {
    this.publicAgentService = new PublicAgentService();
  }

  async retrieveByFederalTaxId({ federalTaxId }) {
    return this.publicAgentService.retrieveByFederalTaxId({ federalTaxId });
  }

  async createPublicAgent({ publicAgent}) {
    return this.publicAgentService.createPublicAgent({ publicAgent });
  }
};

module.exports = PublicAgentController;