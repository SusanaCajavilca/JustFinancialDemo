var express = require('express');
var router = express.Router();

var User = require("../models/user");
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Demo_JustFinancial', user:req.user, });
});

/*get login */
router.get('/login', function(req, res, next) {

  let messages = req.session.messages || [];
  req.session.messages = [];
  
  res.render('login', { title: 'Login to your account', messages:messages });
});

/*post login */
router.post("/login", passport.authenticate("local",{

  successRedirect: "/dashboard",
  failureRedirect: "/login",
  failureMessage: "Invalid Login"
}));

/*get register */
router.get('/register', function(req, res, next) {
  
  res.render('register', { title: 'Create new Account' });
});

/*post register */
router.post('/register', function(req, res, next){
  User.register(
   new User({username:req.body.username}),
   req.body.password,
   function(err,user){
     if(err){
       console.log(err);
       return res.redirect("/register");
     }else{
       req.login(user,(err)=> {res.redirect("/dashboard");});
     }
   });

});

//get handler for log out
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    res.redirect("/login");
  });
});




module.exports = router;
