const PostageSchema = new mongoose.Schema({

    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'UserCommon', ref: 'UserCareviger'},
    
    titulo: {
    type: String,
    required: true
    },
    local: {
    type: String,
    required: true
    },
    horario: {
    type: String,
    required: true
    },
    descricao: {
    type: String,
    required: true
    },
    salario: {
    type: Number,
    required: true
    },
    
    data_criada: {
    type: Date,
    default: Date.now
    },
    
    horario_criado: {
    type: Date,
    default: Date.now
    }
    
    })
    
    const UserPostage = mongoose.model('Postage', PostageSchema)
    
    module.exports = UserPostage