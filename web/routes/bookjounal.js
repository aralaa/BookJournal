var express = require('express');
var router = express.Router();
var db = require('../db');

/**
 * 노트에 책 추가
 * POST /:userId
 */
router.post('/test', function(req, res) {
    var user_id = req.body.userId;
    var isbn = req.body.isbn;
    var title = req.body.title;
    var author = req.body.author;
    var cover = req.body.cover;
    var state = req.body.state;
    var grade = req.body.grade;
    var startDate = req.body.startDate;
    var endDate = req.body.endDate;

    var sql_insert = 
    "insert into bookjounal (user_id, isbn, title, author, cover, state, grade, startDate, endDate) " +
    "values(?, ?, ?, ?, ?, ?, ?, ?, ?); ";

    //console.log(sql_insert);

    var params = [user_id, isbn, title, author, cover, state, grade, startDate, endDate];

    db.get().query(sql_insert, params, function (err, result) {
        console.log(result);
        res.status(200).send('' + result);
        res.json(result);
    });
  });

/**
 * 리뷰 작성
 * PUT /:userId/review
 */
router.put('/:userId/review', function(req, res) {
    res.send('About birds');
  });

/**
 * 책 수정
 * PUT /:userId
 */
router.put('/:userId', function(req, res) {
    res.send('About birds');
  });

/**
 * 책 삭제
 * DELETE /:userId
 */
router.delete('/:userId', function(req, res) {
    res.send('About birds');
  });

/**
 * 리뷰 삭제
 * DELETE /:userId/review
 */
router.delete('/:userId/review', function(req, res) {
    res.send('About birds');
  });

 /**
  * 책장에 있는 책 가져오기
  * GET /:userId
  */
 router.get('/test', function(req, res) {
     var body = req.body;

     var sql = 'SELECT * FROM bookjounal';
     db.get().query(sql, function(err, result){
        if (err){
            console.log(err);
        } else {
            console.log(JSON.stringify(result));
            res.json(result);
        }        
    });
  });


module.exports = router;