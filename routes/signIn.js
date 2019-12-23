const router = require('express').Router()

// SignIn and Register functionality
router.get('/',(req,res)=>{
    console.log(`${req.params.inputEmail}`)
    res.render('Userprofile')
});

module.exports = router; 