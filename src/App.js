import './App.css';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

function App() {
    let params = useParams();
    let amount;
    let description;
    if (parseInt(params.id) === 1) {
        amount = 1000;
        description = 'Продление подписки на 1 месяц';
    }
    if (parseInt(params.id) === 3) {
        amount = 2000;
        description = 'Продление подписки на 3 месяца';
    }
    if (parseInt(params.id) === 6) {
        amount = 3000;
        description = 'Продление подписки на 6 месяцев';
    }
  function pay (amount, description) {
    // eslint-disable-next-line no-undef
    const widget = new cp.CloudPayments();
    widget.pay('charge', // или 'charge'
        { //options
          publicId: 'test_api_00000000000000000000002', //id из личного кабинета
          description, //назначение
          amount, //сумма
          currency: 'RUB', //валюта
          accountId: 'user@example.com', //идентификатор плательщика (необязательно)
          invoiceId: '1234567', //номер заказа  (необязательно)
          // email: 'user@example.com', //email плательщика (необязательно)
          skin: "modern", //дизайн виджета (необязательно)
          data: {
            myProp: 'myProp value'
          }
        },
        {
          onSuccess: function (options) { // success
            //действие при успешной оплате
          },
          onFail: function (reason, options) { // fail
            //действие при неуспешной оплате
          },
          onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
            //например вызов вашей аналитики Facebook Pixel
          }
        }
    )
  }
  useEffect(() => {pay(amount, description)}, [amount, description]);
  return (
      <div></div>
  );
}

export default App;
