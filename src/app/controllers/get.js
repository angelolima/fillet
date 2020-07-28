module.exports = (req, res) => {
    //res.render('pages/index', {}); 
    res.render('pages/home', {
        title: "Pagina Inicial"
    });
}