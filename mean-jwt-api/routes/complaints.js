const express   = require('express');
const router    = express.Router();
const Complaint = require('../models/Complaint')
const c         = require ('../controllers/complaint');
const auth      = require ('../controllers/auth');
const verified  = auth.verified;
const has       = auth.has;
const hasAny    = auth.hasAny;
const hasAll    = auth.hasAll;


router.get ('/', c.list);

router.get ('/:id', [verified], c.byId);

router.post ('/', [verified, has ('cleaner')], c.create);

router.put ('/:id', [verified, hasAny ([ 'cleaner', 'admin' ])], c.update);

router.delete ('/:id', [verified, hasAll ([ 'admin', 'cleaner' ])], c.remove);

module.exports = router;
