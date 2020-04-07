var express = require('express');
var router = express.Router();
//var db = require('../db');

/**
 * 책 추가 | POST /bookjournals/:id
 */
router.post('/:id', function(req, res, next){
  var user_id = req.params.id;
  var isbn = req.body.isbn;
  var title = req.body.title;
  var author = req.body.author;
  var cover = req.body.cover;
  var state = req.body.state;
  var grade = req.body.grade;
  var start_date = req.body.start_date;
  var end_date = req.body.end_date;

  var sql = "insert into bookjournal ('user_id', 'isbn', 'state', 'grade', 'start_date', 'end_date') "+
  "values(?, ?, ?, ?, ?, ?); ";

  var params = [user_id, isbn, state, grade, start_date, end_date];

  db.get().query(sql, params, (err, rows) => {

    if (err) {
      console.log(err);
      return res.sendStatus(400);
    }
    console.log("rows : " + JSON.stringify(rows));
    res.json(rows[0]);

  });

});

/**
 * 책 수정 | PUT /bookjournals/:id/books/:isbn
 */


/**
 * 책 삭제 | DELETE /bookjournals/:id/books/:isbn
 */


 /**
  * 책 보기 | GET /bookjournals/:id/books/:isbn
  */




/**
 * 메모 추가 | POST /bookjournals/:id/memos/:isbn
 */

/**
 * 메모 수정 | PUT /bookjournals/:id/memos/:isbn
 */

 /**
 * 메모 삭제 | DELETE /bookjournals/:id/memos/:isbn
 */

 /**
 * 메모 보기 | GET /bookjournals/:id/memos/:isbn
 */


module.exports = router;