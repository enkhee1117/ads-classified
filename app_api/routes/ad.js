const express = require('express');
const router = express.Router();
const ctrlAd = require('../controllers/ad');

router.get('/',ctrlAd.allAds);
router.post('/new/:userid',ctrlAd.newAd);
router
    .route('/locations')
    .get(ctrlAd.adDetail)
    .put(ctrlAd.updateAd)
    .delete(ctrlAd.deleteAd)

module.exports = router;