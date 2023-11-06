# 입력

## 구입 금액

- 로또 구입 금액을 입력 받는다.
- 구입 금액은 1,000원 단위로 입력 받는다.
- 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
- 0원을 입력한 경우 예외 처리한다.
- 숫자 외의 입력이 들어왔을 경우 예외 처리한다.

## 로또 당첨 번호

- 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.
- 로또 번호의 입력 숫자 범위는 1~45까지이다.
- 입력이 중복될 때 예외 처리한다.
- 입력의 숫자 범위가 1~45가 아닐 때 예외 처리한다.
- 입력이 6개가 아닐 때 예외 처리한다.
- 입력이 쉼표로 끝날 때 예외 처리한다.
- 입력이 쉼표를 제외한 특수문자가 포함 됐을 때 예외 처리한다.

## 보너스 번호

- 보너스 번호의 입력 숫자 범위는 1~45까지이다.
- 입력의 숫자 범위가 1~45가 아닐 때 예외 처리한다.
- 숫자 외의 입력이 들어왔을 경우 예외 처리한다.

# 출력

## 발행한 로또 수량 출력

- 구입 금액에 해당하는 만큼 로또를 발행해야 한다.

## 발행한 로또 번호 출력

- 로또 번호는 오름차순으로 정렬하여 보여준다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.

## 수익률

- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)