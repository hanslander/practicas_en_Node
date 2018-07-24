const mongoose =require('mongoose')

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre :{
        type:String,
        required: [true, 'El nombre es necesario']
    },
    correo:{
        type: String,
        required:[true,'El correo es necesario']
    },
    password:{
        type: String,
        required:[true,'la contraseña es obligatoria']
    },
    img:{
        type:String,
        required:false
    },
    role:{
        type: String,
        default: 'USER_ROLE'
    },
    estado:{
        type:Boolean,
        default:true
    },

})

module.exports=mongoose.model('USUARIO', usuarioSchema)
