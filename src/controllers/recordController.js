const recordService = require('../services/recordService')

const getRecordForWorkout = (req, res) => {
  try {
    const allRecords = recordService.getRecordForWorkout
    res.send({ status: 'OK', data: { allRecords } })
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } })
  }
}

module.exports = {
  getRecordForWorkout,
}
