// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";
import styled from "styled-components";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 0;
const LIMIT_BALANCE = 10000;
const GET_MONEY = 400;
const BUY = 100;
const OUT_MONEY = 200;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => {
    setBalance(balance + GET_MONEY);

    setpeyment([
      ...payment,
      {
        name: "Баланс було поповнено",
        amount: 400,
        type: "+"
      }
    ]);
  };

  const outMoney = () => {
    setBalance(balance - OUT_MONEY);

    setpeyment([
      ...payment,
      {
        name: "Баланс було знято",
        amount: 200,
        type: "-"
      }
    ]);
  };

  const Buy = () => {
    setBalance(balance - BUY);

    setpeyment([
      ...payment,
      {
        name: "Супермаркет",
        amount: 100,
        type: "-"
      }
    ]);
  };

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ліміт: ${LIMIT_BALANCE} Ваш баланс: ${balance}`);
      setBalance(0);
    }

    // Перевірка на мінусовий баланс
    if (balance < -1000) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  const [payment, setpeyment] = React.useState([]);
  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  const LOGIN = "Mykyta";
  const PASSWORD = "999";

  const [isLogged, setLogged] = React.useState(false);

  const doLogin = () => {
    const login = prompt("Ваш логін");
    const password = prompt("Ваш пароль");

    if (login === LOGIN && password === PASSWORD) {
      alert("Ви увійшли");
      setLogged(true);
    } else {
      if (login !== LOGIN && password !== PASSWORD);
      return alert("Помилка в логіні або паролі, спробуйте ще раз ");

      if (login !== LOGIN) {
        return alert("Помилка в логіні");
      }

      if (password !== PASSWORD) {
        return alert("Помилка в паролі");
      }

      return alert("Помилка");
    }
  };

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="Mykyta Corp." onClick={doLogin} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      {isLogged && <Balance balance={balance} />}

      {/* Компонент меню з кнопками */}
      {isLogged && (
        <Menu
          // ось сюди ми передаємо конфігурацію кнопок
          config={[
            {
              name: "Поповнити баланс",
              onClick: getMoney,
              img: "/icon/payment.svg"
            },
            {
              name: "Вивести гроші",
              onClick: outMoney,
              img: "/icon/send.svg"
            },

            {
              name: "Купити продукти харчування",
              onClick: Buy,
              img: "/icon/apple.svg"
            }
          ]}
        />
      )}
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      {isLogged && <Payment payment={payment} />}
      {isLogged === false && (
        <NotLogged>Увійдіть в свій аккаунт</NotLogged>
      )}
    </Page>
  );
}

const NotLogged = styled.div`
  padding: 70px 30px;
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 25px;

  margin-top: 550px;

  border-border-top-left-radius: 30px;
  border-border-top-right-radius: 30px;
`;
