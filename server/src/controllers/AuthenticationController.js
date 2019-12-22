const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (error) {
      if (error && error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).send({
          error: 'This email is alredy in use.'
        })
      } else {
        res.status(500).send({
          error: error.message
        })
      }
    }
  }
}