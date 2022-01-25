class PublicAgentRepositorySqlite {
  #dbConnection

  constructor(dbConnection) {
    this.#dbConnection = dbConnection;
  }

  async retrieveByFederalTaxId({ federalTaxId }) {
    const client = await this.#dbConnection.getPoolConnection();

    const publicAgentQuery = `SELECT * FROM public_agent WHERE federal_tax_id = ?`;

    return client.serialize(() => {
      const publicAgent = client.get(publicAgentQuery, [ federalTaxId ])
      console.log({ publicAgentFromRepo: publicAgent });
    });
  }

  async create({ publicAgent }) {
    const client = await this.#dbConnection.getPoolConnection();

    const publicAgentQuery = `INSERT INTO public_agent (
      federal_tax_id,
      description,
      name
    ) VALUES (?, ?, ?);`;

    return client.run(publicAgentQuery, [ publicAgent.federalTaxId, publicAgent.description, publicAgent.name ]);
  }
}

module.exports = PublicAgentRepositorySqlite;