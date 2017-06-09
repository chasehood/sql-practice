module.exports = { 

    getAll : function(req, res){
        req.app.get('db').read_products().then(function(response){
        res.status(200).send(response)    
        })
    },
     create : function(req, res){
         var variable = [
            req.body.name,
            req.body.description,
            req.body.price,
            req.body.imageurl
        ]
        req.app.get('db').create_product(variable).then(function(response){
        res.status(200).send(response)    
        })
    },
     getOne : function(req, res){
        
        req.app.get('db').read_product(req.params.id).then(function(response){
        res.status(200).send(response)    
        })
    },
    update : function(req, res){
        req.app.put('db').update_product([req.params.id, req.body.description]).then(function(response){
        res.status(200).send(response)    
        })
    },
     delete : function(req, res){
        req.app.get('db').delete_product(req.params.id).then(function(response){
        res.status(200).send(response)    
        })
    }
} 



// app.create('/products' function(req, res){
// req.app.get('db').create_product
// })

// app.getOne('/products' function(req, res){
// req.app.get('db').read_product
// })
// app.getAll('/products' function(req, res){
// req.app.get('db').read_products
// })
// app.update('/products' function(req, res){
// req.app.get('db').update_product
// })
// app.delete('/products' function(req, res){
// req.app.get('db').delete_products
// })