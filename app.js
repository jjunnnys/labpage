const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const compression = require('compression');

class App {
  constructor() {
    this.app = express();

    // 뷰엔진 셋팅
    this.setViewEngine();

    // 미들웨어 셋팅
    this.setMiddleWare();

    // 정적 디렉토리 추가
    this.setStatic();

    // 로컬 변수
    this.setLocals();

    // 라우팅
    this.getRouting();

    // // 404 페이지를 찾을수가 없음
    // this.status404();

    // // 에러처리
    // this.errorHandler();
  }

  setMiddleWare() {
    // 미들웨어 셋팅
    /* 
      사용자의 post 데이터를 내부적으로 분석한 뒤 콜백을 호출하도록 약속되어 있음,
      req.body라는 프로퍼티를 만들어준다.
      create를 할 경우 간결하게 코드 작성이 가능함
    */
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    /* 
      파일의 크기를 줄여줌 
    */
    this.app.use(compression());
  }

  setViewEngine() {
    nunjucks.configure('templates', {
      autoescape: true,
      express: this.app,
    });
  }

  setStatic() {
    /* 
      url를 통해 접근 가능해짐. 다른 파일은 접근 불가 
    */
    this.app.use(express.static('public'));
  }

  setLocals() {
    // 템플릿 변수
    this.app.use((req, res, next) => {
      this.app.locals.isLogin = true;
      this.app.locals.req_path = req.path;
      next();
    });
  }

  getRouting() {
    this.app.use(require('./controllers'));
  }

  //   status404() {
  //     this.app.use((req, res, _) => {
  //       res.status(404).render("common/404.html");
  //     });
  //   }

  //   errorHandler() {
  /*
            next('err')가 발생하면 어떤 미들웨거가 등록되어 있는지 여부와 상관없이 밑에 코드가 실행된다.
          */
  //     this.app.use((err, req, res, _) => {
  //       res.status(500).render("common/500.html");
  //     });
  //   }
}

module.exports = new App().app;
