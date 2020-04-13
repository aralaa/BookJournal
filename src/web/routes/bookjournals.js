var express = require('express');
var router = express.Router();
var db = require('../db');


/**
 * 책 추가 | POST /bookjournals/:id
 */
router.post('/:id', (req, res) => {
  var user_id = req.params.id;
  var isbn = req.body.isbn;
  var title = req.body.title;
  var author = req.body.author;
  var cover = req.body.cover;
  var state = req.body.state;
  var grade = req.body.grade;
  var start_date = req.body.start_date;
  var end_date = req.body.end_date;

  // 1) BOOK 테이블에 새로운 책 저장
  var sql_select = "SELECT * FROM book " +
            "WHERE isbn =?; ";
  db.get().query(sql_select, [isbn], (err, rows) => {
    //undefinded(DB에 데이터가 없을 때)면 insert
    if (!err) {
      if (rows[0] !== undefined) {
        //res.send(rows[0].isbn)
      } else {
        var sql_insert = "insert into book (isbn, title, author, cover) " +
                          "values(?, ?, ?, ?); ";

        params = [isbn, title, author, cover];

        db.get().query(sql_insert, params, (err, rows) => {
          res.json(rows[0]);
        })
      }

    } else {
      res.send('err: ' + err);
    }
  });

  // 2) BOOKJOURNAL 테이블에 저장
  var sql = "insert into bookjournal (user_id, isbn, state, grade, start_date, end_date) " +
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
 * 업데이트 할 수 있는 경우가 여러개?
 */
router.put('/:id/books/:isbn', (req, res) => {
  
});


/**
 * 책 삭제 | DELETE /bookjournals/:id/books/:isbn
 */


 /**
  * 책 보기 | GET /bookjournals/:id/books/:isbn
  */
router.get('/:id/books/:isbn', function(req, res, next) {
  // bookjournal.state, bookjournal.grade, bookjournal.start_date, bookjournal.end_date
  // book.title, book.author, book.cover
  // bookjournal.isbn, book.isbn
  // inner join 사용해서 테이블 가져오기

  
  res.send('respond with a resource');
});




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