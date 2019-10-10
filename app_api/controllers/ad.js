const mongoose = require('mongoose');
const User = mongoose.model('User');
const Ad = mongoose.model('Ad');

const allAds = (req,res) => {
    Ad.find()
        .then(ads =>{
            res.status(200);
            res.json(ads);
        })
        .catch(err => {
            res.status(404);
            res.json({error: err.errors})
        })
};
const newAd = (req, res) =>{
    Ad.create(req.body)
        .then(newEntry =>{
            // res.status(200);
            // console.log(req.params.userid)
            // res.json({result: newEntry});
            return newEntry;
        })
        .then((newEntry)=>{
            // let update = {$push: {ads: newEntry}}
            console.log(newEntry);
            User.findById(req.params.userid,function(err,user){
                if (err){
                    res.status(400)
                    res.json(err);
                } else {
                    user.ads.push(newEntry)
                    user.save();
                    res.status(200)
                    res.json(user);
                }
            })
        })
        .catch(err => {
            res.status(404);
            res.json({error: err.errors});
        })
};
const adDetail = (req,res)=>{

};
const deleteAd = (req,res)=>{

};
const updateAd = (req,res)=>{

};

module.exports = {
    allAds,
    newAd,
    adDetail,
    deleteAd,
    updateAd
}