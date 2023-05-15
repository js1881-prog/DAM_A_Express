

<img width="899" alt="20230418_230720" src="https://user-images.githubusercontent.com/98295182/235498628-ada7a957-41ca-4dbc-b947-89e450875218.png">


  ### 💻 DAM_A Project
 
  
  ### ***Elice.SW Track을 통해 경험한 토이 프로젝트입니다.***

**14일이라는 한정된 시간동안 gitlab을 통해 협업을 경험하고, 리더로써 프로젝트 리딩을 하며 완성한 토이 프로젝트 입니다.**

## 🔥 역할

**팀 리딩 및 Express를 기반으로 하는 Backend 전반의 코드를 작성하였습니다.**

## 🎯 고민 해본 부분

- [-] 상황마다 적절한 HTTP 상태 코드 반환하는가
- [-] HttpOnlyCookie를 이용한 jwt관리
- [-] Spring Hibernate Validator와 같은 [client request validate](https://github.com/padonan/DAM_A_Express/blob/main/src/middleware/validate/schema/productValidate.js)를 위한 Joi 라이브러리 사용 => XSS 공격,악의적인 사용자 차단 
- [-] [passport](https://github.com/padonan/DAM_A_Express/blob/main/src/middleware/passport/passport.js)를 이용한 여러 인증 전략 구성 => 어떠한 api는 jwt 만기 시간만 체크하고, 어떠한 api는 user의 Role을 확인해야하기에,
      passport middleware를 미리 구성하여 코드의 재사용성을 높임.
- [-] [Jest](https://github.com/padonan/DAM_A_Express/blob/main/src/test/service/productService.test.js)를 이용한 ServiceLayer TestCode 작성, TestCode의 커버리지를 높이기 위해 DAO-Service-Controller의 3-tier architecture구성.
- [-] 예외 처리에 대한 고민, 3-tier 구조에서의 모든 에러는 최종적으로 Controller에서 catch하고, DAO,Service는 에러를 Controller로 throw,
       => 이러한 구조는 DAO에서 올라온 에러가 Service 레이어에서 겹치는 경우가 문제가 발생 할 수 있기에, 이와 같은 에러 처리 방식은 문제가 발생할 수 있음.
          최종적으로는 팀 컨벤션을 따르고, 반드시 처리해야하는 에러를 판단하여, 유동적으로 에러처리를 하는것이 좋다고 판단. 
- [-] morgan, pino를 이용한 일별 로깅 => Spring 진형과 달리 express에서 리소스를 사용해가며 에플리케이션에서 자체 로깅을 해나가는것은 비효율적이라는 피드백을 받음.
      또 pm2에서 자체적으로 로그를 제공해주기에 제외하고 배포.

## 📝 License
This project is (https://kdt-gitlab.elice.io/) licensed.
