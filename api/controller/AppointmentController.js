const AppointmentService = require('../service/AppointmentService')
const WorkerWeekendDaysService = require('../service/WorkerWeekendDaysService')
const WorkerScheduleService = require('../service/WorkerScheduleService')
const WorkerServiceService = require('../service/WorkerServicesService')
const ProfileService = require('../service/ProfileService')
const UserService = require('../service/UserService')
const APIError = require('../exception/APIError')
const oneExists = require('../utils/oneExists.js')


class AppointmentController {
    async clientDetails(req, res, next) {
        try {
            const slug = req.params.slug

            res.json('ok')
        }
        catch(e) {
            res.status(e.status || 500).json(e.errors)
        }
    }

    async clientList(req, res, next) {
        try {
            
        }
        catch(e) {
            res.status(e.status || 500).json(e.errors)
        }
    }

    async clientListToday(req, res, next) {
        try {
            
        }
        catch(e) {
            res.status(e.status || 500).json(e.errors)
        }
    }

    async clientMake(req, res, next) {
        try {
            
        }
        catch(e) {
            res.status(e.status || 500).json(e.errors)
        }
    }

    async clientCancel(req, res, next) {
        try {
            
        }
        catch(e) {
            res.status(e.status || 500).json(e.errors)
        }
    }

    async workerDetails(req, res, next) {
        try {
            
        }
        catch(e) {
            res.status(e.status || 500).json(e.errors)
        }
    }

    async workerList(req, res, next) {
        try {
            
        }
        catch(e) {
            res.status(e.status || 500).json(e.errors)
        }
    }

    async workerListToday(req, res, next) {
        try {
            
        }
        catch(e) {
            res.status(e.status || 500).json(e.errors)
        }
    }

    async workerCancel(req, res, next) {
        try {
            
        }
        catch(e) {
            res.status(e.status || 500).json(e.errors)
        }
    }

    async workerConfirm(req, res, next) {
        try {
            
        }
        catch(e) {
            res.status(e.status || 500).json(e.errors)
        }
    }

    async findWorker(req, res, next) {
        try {
            const {serviceID} = req.query

            oneExists({serviceID})

            let workersResult = []
            const workerServices = await WorkerServiceService.findService(serviceID)

            if (workerServices.length == 0) {
                throw APIError.NotFoundError()
            }

            for (const w of workerServices) {
                const foundWorker = await ProfileService.findWorkerByID(w.workerID)
                workersResult.push({worker: foundWorker[0], workerService: w})
            }

            if (workersResult.length == 0) {
                throw APIError.NotFoundError()
            }
            console.log(workersResult) 
            res.json(workersResult)
        }
        catch(e) {
            res.status(e.status || 500).json(e.errors)
        }
    }

    async getSchedule(req, res, next) {
        try {
            const from = req.query.from
            const to = req.query.to
            const workerProfileID = req.query.worker_id
            
            const workingDays = await WorkerWeekendDaysService.findWeekendDaysByID(workerProfileID)
            const foundSchedules = await WorkerScheduleService.getSchedule({
                dateRange: [from, to],
                workerProfileID,
            })

            return {
                workingDays,
                foundSchedules
            }
        }
        catch(e) {
            res.status(e.status || 500).json(e.errors)
        }
    }
}


module.exports = new AppointmentController()
