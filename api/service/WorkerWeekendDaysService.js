const {WorkerWeekendDaysModel} = require('../db/models')


class WorkerWeekendDaysService {
    async findByID({id}) {
        const foundDays = await WorkerWeekendDaysModel.findOne({
            raw: true,
            where: {
                id,
            },
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt'],
            },
        })

        return foundDays
    }

    async create() {
        const newWeekendDays = await WorkerWeekendDaysModel.create()

        return newWeekendDays.dataValues
    }

    async update({
        id,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
    }) {
        const checkExists = await this.findByID({id})

        if (!checkExists) {
            const newWeekendDays = await this.create({
                monday,
                tuesday,
                wednesday,
                thursday,
                friday,
                saturday,
                sunday,
            })
            
            return newWeekendDays
        }
        else {
            await WorkerWeekendDaysModel.update(
                {
                    monday,
                    tuesday,
                    wednesday,
                    thursday,
                    friday,
                    saturday,
                    sunday,
                },
                {
                    where: {
                        id
                    }
                }
            )

            const updatedWeekendDays = WorkerWeekendDaysModel.findOne({
                raw: true,
                where: {
                    id,
                },
            })

            return updatedWeekendDays
        }
    }
}


module.exports = new WorkerWeekendDaysService()
