const express = require('express')

const Usuario = require('../models/usuario')

const app = express()


app.get('/usuario', function (req, res) {
    res.json('get usuario')
  })
   
  app.post('/usuario', function (req, res) {
      let persona =req.body;

        let usuario = new Usuario({
            nombre: persona.nombre,
            correo: persona.correo,
            password: persona.password,
            role: persona.role
        });

        usuario.save((err, usuarioDB  )=>{
            if(err){
                res.status(400).json({
                    ok: false,
                    errr
                })
            }
            res.json({
                ok:true,
                usuario : usuarioDB
            })
             

        })
  
      if(persona.nombre === undefined){
          res.status(400).json({
              ok:false,
              mensaje:'El nombre es obligatorio'
          })
  
      }else{
      res.json({
          persona
      })
      }
    })
  
  app.put('/usuario/:id', function (req, res) {
      let id= req.params.id;
  
      res.json({
          id
      })
  })
  
  app.delete('/usuario', function (req, res) {
      res.json('delete usuario')
  })


  module.exports = app;