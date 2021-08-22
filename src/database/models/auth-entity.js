import { Model } from '../schemas/auth.js'

export default class AuthEntity {
  constructor () {
    this.authInstance = Model
  }

  async insertOne ({ data, options }) {
    return this.authInstance.insertOne(data, options)
  }

  async findOne ({ queryFilter }) {
    return this.authInstance.findOne(queryFilter)
  }
}
