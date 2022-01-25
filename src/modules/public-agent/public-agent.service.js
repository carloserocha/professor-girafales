const PublicAgentRepository = require('./public-agent.repository');
const AppEnv = require('../../config/app.env');

class PublicAgentService {
  constructor() {
    this.publicAgentRepository = new PublicAgentRepository(AppEnv.RELATIONAL_DATABASE);
  }

  async retrieveByFederalTaxId({ federalTaxId }) {
    return await this.publicAgentRepository.retrieveByFederalTaxId({ federalTaxId });
  }

  async createPublicAgent({ publicAgent }) {
    if (!publicAgent) throw new Error('Public Agent not provided');

    if (!publicAgent.federalTaxId) throw new Error('Public Agent federal tax id not provided');
    if (!publicAgent.description) throw new Error('Public Agent description not provided');
    if (!publicAgent.name) throw new Error('Public Agent name not provided');

    return await this.publicAgentRepository.create({ publicAgent });
  }
};

module.exports = PublicAgentService;