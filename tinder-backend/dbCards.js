import mongoose from 'mongoose'

const cardsScema = mongoose.Schema({
    name: String ,
    imgUrl: String
})

export default mongoose.model('cards', cardsScema)