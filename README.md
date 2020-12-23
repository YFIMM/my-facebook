# 소개

Twitter 와 Facebook 을 융합한 웹 사이트

# 실행 방법

## Front

> cd ./front  
> npm i  
> npm run dev

## Back

> cd ./back  
> npm i  
> .env 작성  
> npx sequelize db:create  
> npm run dev

# 프론트 기술 스택

- React
- Next
- SWR
- Styled-Components
- Dayjs
- Socket.io-client
- Ant Design

# 백엔드 기술 스택

- Express
- Passport
- JWT
- Multer
- Sequelize
- MYSQL
- Socket.io

## DB 구조도

![DB](https://user-images.githubusercontent.com/58874665/102963534-b1468b00-452c-11eb-8a6b-4634fcf6bb52.PNG)

# UI

## 1) 메인

![MAIN](https://user-images.githubusercontent.com/58874665/102963897-a3ddd080-452d-11eb-8a36-02dea92f223d.gif)
![MAIN2](https://user-images.githubusercontent.com/58874665/102963903-a6402a80-452d-11eb-848a-189d4503fc46.gif)
![MAIN3](https://user-images.githubusercontent.com/58874665/102963974-d5569c00-452d-11eb-8a75-76ee71c72803.gif)
![MAIN4](https://user-images.githubusercontent.com/58874665/102964086-1b136480-452e-11eb-97ee-891a987a1651.gif)
![MAIN5](https://user-images.githubusercontent.com/58874665/102964876-ffa95900-452f-11eb-8d8b-e555d15d3088.gif)
![MAIN6](https://user-images.githubusercontent.com/58874665/102964883-02a44980-4530-11eb-9727-695764bcd10a.gif)

- accessToken 있을 경우 바로 main 으로 이동
- accessToken 이 없으면 auth 페이지로 이동
- 로그아웃을 할 시 토큰은 없애지만 LocalStorage 에 아이디를 저장해서 History Card 를 생성
- Card 를 누르면 모달이 오픈되고 로그인 기능을 함
- Card 에 **X** 를 누르면 LocalStorage 에 저장되어 있던 기본 유저 정보를 지움

## 2) 게시글

![POST](https://user-images.githubusercontent.com/58874665/102964226-6fb6df80-452e-11eb-9b0a-297ae79d98f9.gif)
![POST2](https://user-images.githubusercontent.com/58874665/102964353-c15f6a00-452e-11eb-81dc-bf86b6a228bc.gif)
![POST3](https://user-images.githubusercontent.com/58874665/102964356-c2909700-452e-11eb-8626-9236aa7d02af.gif)
![POST4](https://user-images.githubusercontent.com/58874665/102964425-f23f9f00-452e-11eb-8bd3-2a874fc440ef.gif)
![POST5](https://user-images.githubusercontent.com/58874665/102964494-24e99780-452f-11eb-87dd-f44e7ab30e76.gif)
![POST6](https://user-images.githubusercontent.com/58874665/102964746-b48f4600-452f-11eb-9450-d945b427f2df.gif)
![POST7](https://user-images.githubusercontent.com/58874665/102965293-e6ed7300-4530-11eb-9e24-a7b757265144.gif)
![POST8](https://user-images.githubusercontent.com/58874665/102966308-fcfc3300-4532-11eb-8cb0-ca9aa9b7c04c.gif)

- Input 을 클릭해 모달을 오픈
- Textarea 가 빈 공간이면 오류 발생 및 출력
- 업로드할 사진이 5장 이하이면 그대로 보여주지만 초과할시 **+** 를 이용해 남은 사진 갯수를 보여줌
- 사진을 클릭 시 react-image-lightbox 를 이용해 사진을 큰 화면에서 볼 수 있음
- 프로필을 클릭해 프로필 사진동안 바꿈
- 좋아요를 누를 시 파랑색 컬러 생성, 다시 누를 시 컬러 원상복귀
- 게시글의 오른쪽 상단 버튼을 클릭 시 자신을 제외한 유저를 팔로우를 할 수 있고 오른쪽 목록에 자신의 팔로잉 또는 팔로워 출력
- 팔로잉한 유저의 게시글을 다시 누를 시 언팔로우 또한 할 수 있음
- 팔로잉 또는 팔로워가 로그인 할 시 socket 을 이용해 로그인 표시

## 3) 채팅

![CHAT](https://user-images.githubusercontent.com/58874665/102965606-87dc2e00-4531-11eb-93d4-9008209a81bf.gif)
![CHAT2](https://user-images.githubusercontent.com/58874665/102965693-b78b3600-4531-11eb-9479-811d07161e50.gif)
![CHAT3](https://user-images.githubusercontent.com/58874665/102966692-ba872600-4533-11eb-9cbb-5e865f79cb8c.gif)
![CHAT4](https://user-images.githubusercontent.com/58874665/102966833-0a65ed00-4534-11eb-9ab6-2e732cf27b34.gif)

- 채팅으로 이동 시 팔로잉 팔로워와 1:1 채팅을 할 수 있음
- 채팅을 하고 싶은 사람을 클릭 시 그전 채팅내역을 불러옴
- 채팅을 완료할 시 채팅 내역 스크롤바 자동으로 내림
- Socket 을 이용해 실시간으로 1:1 DM 기능 구현
