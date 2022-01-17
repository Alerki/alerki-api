const {ServiceModel} = require('../db/models')


class ServiceService {
    async findByName(name, limit, page) {
        const results = await ServiceModel.findAll({
            raw: true,
            where: {
                name,
            },
            offset: page * limit || 0,
            limit: limit || 24,
        })

        return results
    }

    async findOneByName(name) {
        const results = await ServiceModel.findOne({
            raw: true,
            where: {
                name,
            },
        })

        return results
    }

    async createService(name) {
        const candedats = await this.findOneByName(name)

        if (!candedats) {
            const newService = await ServiceModel.create(name)

            return newService.dataValues
        }
    }
}


module.exports = new ServiceService()
