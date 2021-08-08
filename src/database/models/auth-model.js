import { Model } from '../schemas/auth'

class AuthEntity {
  constructor (AuthInstance) {
    this.authInstance = new AuthInstance()
  }

  async insertOne ({ data, options }) {
    return this.authInstance.insert(data, options)
  }

  async findOne ({ queryFilter }) {
    return this.authInstance.findOne(queryFilter)
  }
}

export const instance = new AuthEntity(Model)
