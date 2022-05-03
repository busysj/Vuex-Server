var express = require("express");
var router = express.Router();
const comments = require("../comment.json");
const count = comments.length;

/* memo.id 값에 맞는 코멘트 배열을 전달 */
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  // 값을 여러개 찾기 위해서 filter 사용
  const comment = comments.filter((c) => c.memoid == id);
  res.send(comment);
});

router.post("/", function (req, res, next) {
  const comment = req.body.data.comment;
  // 전체 코멘트에 푸쉬
  comments.push(comment);
  // 메모의 코멘트에만 필터
  const commentmemo = comments.filter((c) => c.memoid == comment.memoid);
  res.send(commentmemo);
});

module.exports = router;
