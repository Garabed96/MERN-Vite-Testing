import { type ObjectId } from 'mongodb'

export default class Game {
   constructor(
      public name: string,
      public price: number,
      public category: string,
      public _id?: ObjectId,
   ) {}
}
