<h1>UMC project : PLACE 🎱</h1>
<h3>(2023.07 ~ 2023.08)</h3><br/>

1️⃣ 프로젝트 환경설정<br/><br/>
폴더를 하나 만드신 후, 폴더의 경로에서 터미널에 ```git clone [레포지토리 url]``` 를 실행하시면 됩니다.<br/>
그리고 place 폴더 경로에서 ```npm i``` 를 실행해 설치해주세요. (이후 git pull 할때마다 해주시면 좋아요)<br/>
```npm start```를 실행하여 오류 없이 실행되는지 확인해주세요.<br/><br/>

2️⃣ Front-end 개발 규칙<br/><br/>
place/src 내부에는 아래의 5가지 폴더가 있습니다.<br/>
충돌을 최소화하기 위해, 가급적이면 본인의 영역에서만 개발을 진행하도록 합니다.<br/>
(각 폴더 내의 파일은 임의로 넣어놓은 것이니 자유롭게 수정해주시면 됩니다.)<br/>
<img width="405" alt="image" src="https://github.com/PLACE-4th-UMC/PLACE-front/assets/91872300/0ee5fe5d-65b5-4771-9907-e9f364815254"><br/>
```
Home : 곽은채
User : 이승용
Story : 이예성
Magazine : 정수현
Exhibitions : 염지은
```
<br/><br/>
3️⃣ 커밋 메시지 컨벤션을 지켜주세요.<br/><br/>
<img width="550" alt="image" src="https://github.com/PLACE-4th-UMC/PLACE-front/assets/91872300/57ab46a7-139c-4ff9-967e-10c1e4b3bf77"><br/>
commit 할 때, 위 양식을 지켜주세요. (예시 -> Feat: add login button)<br/>
혹시 모르실까봐 커밋&푸시 명령어 순서<br/>
<br/>
git status (변경상태 확인)<br/>
git add . (전체 변경사항 add/ 혹은 특정 파일만 add도 가능해요)<br/>
git commit -m "[커밋 메시지]"<br/>
git push origin main<br/>

<br/>
4️⃣ 작업 시작 전에 pull하고 시작해주세요.<br/><br/>
안그러면 푸시할 때 충돌을 마주칠수도 있답니다.<br/>
git pull origin main ⭐️<br/>

<br/>
5️⃣ Header와 Footer은 공용 컴포넌트를 사용합니다.<br/><br/>
사용방법 : Header 파일과 Footer 파일 import 후 <Header/>, <Footer/> 형식으로 사용
<br/>
<br/>
6️⃣ tsx 파일명은 대문자로 시작해야 해요.<br/><br/>
이외에도 모든 컴포넌트명은 첫 글자가 대문자여야 합니다!
<br/>
<br/><br/>
어려운 부분이 있거나 질문이 있다면 파트장에게~~
