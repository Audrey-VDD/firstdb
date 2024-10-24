const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/allProduct', (req, res) =>{
    const selectAllProduct = "SELECT produit.id_produit, produit.libelle as libelle_produit, produit.prix, produit.description, produit.image, categorie.libelle as libelle_categorie FROM produit INNER JOIN categorie ON produit.id_categorie = categorie.id_categorie;";
    db.query(selectAllProduct,(error, result)=> {
        if(error) throw error;
        res.render('homePage', {crudProduct: result});
    });
});

router.get('/getProduct/:id', (req, res)=>{
    const selectProduct = 'SELECT * FROM produit WHERE id_produit = ?;';
    db.query(selectProduct, [req.params.id], (error,result) =>{
        if(error) throw error;
        res.render('updatePage', {updateProduct: result[0]});
        console.log(result);
        
    });
});

router.post('/update/:id', (req, res) => {
    const {prix, image, id_produit} = req.body;
    const updateProduct = "UPDATE produit SET prix=?, image=? WHERE id_produit=?;";
    db.query(updateProduct, [prix, image, id_produit], (error, result) =>{
        if(error) throw error;
        res.redirect('/product/allProduct');
        console.log(db.query(updateProduct, [prix, image, id_produit]));
        
    })
})

module.exports = router;