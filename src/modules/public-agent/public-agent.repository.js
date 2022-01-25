const PublicAgentRepositorySqlite = require('./public-agent.sqlite-repository');
const sqlite = require('../../database/sqlite');

class PublicAgentRepository {
  #repository;

  constructor(dbType) {
    switch (dbType) {
      case 'sqlite': this.#repository = new PublicAgentRepositorySqlite(sqlite());
    }
  }

  async retrieveByFederalTaxId({ federalTaxId }) {
    return this.#repository.retrieveByFederalTaxId({ federalTaxId });
  }

  async create({ publicAgent }) {
    return this.#repository.create({ publicAgent });
  }
};

module.exports = PublicAgentRepository;