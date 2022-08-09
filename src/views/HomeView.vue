<template>
  <HeaderComponenet></HeaderComponenet>
  <div class="about">
    <div class="container">
      <div class="title">
        <h1>Дистанционное обучение:</h1>
        <h1>“Предрейсовые и послерейсовые</h1>
        <h1>медицинские осмотры водителей</h1>
        <h1>автотранспортных средств”</h1>
        <p>Оставляйте заявку!</p>
        <div class="input">
          <input
            placeholder="Номер телефона "
            type="tel"
            v-mask="'+7 ###-####-###'"
          />

          <button>Оставить заявку</button>
        </div>
      </div>
    </div>
  </div>
  <WhatIs />
  <div class="who">
    <div class="container">
      <h1 class="introsubtitle">Преимущества</h1>
      <div class="Advantages">
        <img src="@/assets/a1.svg" alt="" />
        <div class="Advantages_inner">
          <p>
            Вся документация в одном месте. Экономия времени на поиск нужных
            документов.
          </p>
        </div>
      </div>
      <div class="Advantages">
        <img src="@/assets/a2.svg" alt="" />
        <div class="Advantages_inner">
          <p>
            Гарантия качества от федеральной компании Трансавто-7. Мы
            гарантируем актуальность информации. Если клиент найдёт ошибку, мы
            вернем деньги.
          </p>
        </div>
      </div>
      <div class="Advantages">
        <img src="@/assets/a3.svg" alt="" />
        <div class="Advantages_inner">
          <p>
            Низкая стоимость: стоимость наших услуг значительно ниже, чем на
            рынке.
          </p>
        </div>
      </div>
      <div class="Advantages">
        <img src="@/assets/a4.svg" alt="" />
        <div class="Advantages_inner">
          <p>
            Экономия времени: вам не нужно постоянно следить за изменениями в
            законодательстве, мы сделаем все за вас
          </p>
        </div>
      </div>
      <div class="Advantages">
        <img src="@/assets/a5.svg" alt="" />
        <div class="Advantages_inner">
          <p>Опыт работы более 15 лет</p>
        </div>
      </div>
      <ButtonComponent></ButtonComponent>

      <div class="downloades">
        <h3>Купить пакет документов</h3>
        <h5>Оплатите документы</h5>
        <div class="btn">
          <button>Скачать</button>
        </div>
      </div>
      <div class="footer">
        <div class="footer_top">
          <a href="#">Все услуг </a>
          <a href="#"> Оставить отзыв </a>
          <a href="#"> Контакты </a>
          <a href="#"> Политика конфиденциальности</a>
        </div>
        <h3>Мы будем рады, если вы присоединитесь к нам в соц.сетях:</h3>
        <div class="icons">
          <img src="@/assets/f2.svg" alt="" />
          <img src="@/assets/f3.svg" alt="" />
          <img src="@/assets/f4.svg" alt="" />
          <img src="@/assets/f5.svg" alt="" />
          <img src="@/assets/f6.svg" alt="" />
          <img src="@/assets/f7.svg" alt="" />
        </div>
        <p>Мы работаем на упрощённой системе налогообложение, без НДС</p>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderComponenet from "@/components/Header/HeaderComponenet.vue";
import WhatIs from "@/components/WhatIs/WhatIs.vue";
import ButtonComponent from "@/components/ButtonComponenet/ButtonComponent.vue";
export default {
  components: { HeaderComponenet, WhatIs, ButtonComponent },
};
</script>
<style lang="scss" scoped>
.about {
  margin-bottom: 70px;
  background-image: url("@/assets/bg1.png");
  background-repeat: no-repeat;
  background-position: 100%;
  //   background: rgba(32, 39, 55, 0.7);
  width: 100%;
  height: 567px;
  background-size: cover;
  background-position: center;
}
.introsubtitle {
  margin-top: 80px;
}
.downloades {
  margin: 107px auto;
  padding-top: 35px;
  width: 424.75px;
  height: 180.73px;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  box-shadow: 0px 2.60984px 26.0984px #e6e8ed;
  border-radius: 19.5738px;
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 21.5312px;
    line-height: 25px;
    text-align: center;
    color: #5374ca;
    //   margin-top: 40px;
  }
  h5 {
    margin-top: 9px;
    margin-bottom: 11px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13.0492px;
    line-height: 15px;
    text-align: center;
    color: #000000;
  }
  .btn {
    margin-top: 4px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  button {
    transition: all 0.4s;
    margin: 10px auto;
    width: 238.8px;
    height: 38.58px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 15.0066px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
    border: 2px solid #5374ca;
    background: linear-gradient(0deg, #5374ca, #5374ca);
    border-radius: 19.5738px;
    &:hover {
      color: #5374ca;
      background: #ffffff;
      border: 2px solid #5374ca;
    }
  }
}
.Advantages {
  margin-top: 20px;
  display: flex;
  gap: 53px;
  align-items: center;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  box-shadow: 0px 2.60984px 26.0984px #e6e8ed;
  border-radius: 19.5738px;
  padding: 22px 47px;
  .Advantages_inner {
    p {
      width: 80%;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 23px;
      line-height: 27px;

      color: #000000;
    }
  }
}
.title {
  padding-top: 97px;
}
.input {
  display: flex;
  gap: 25px;
  input {
    width: 337.32px;
    height: 63.29px;
    background: #ffffff;
    border-radius: 13.0492px;
    border: none;
    outline: none;
    padding: 0px 23px;
    font-size: 18px;
  }
  button {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 17.6164px;
    line-height: 21px;
    color: #ffffff;
    background: #e83a2d;
    border-radius: 13.0492px;
    border: 2px solid #e83a2d;
    transition: all 0.3s;
    width: 207.48px;
    height: 63.29px;
    &:hover {
      background: #ffffff;
      color: #e83a2d;
    }
  }
}
h1 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 53px;

  color: #ffffff;
}
p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 26.0984px;
  line-height: 31px;
  margin-top: 56px;
  margin-bottom: 26px;
  color: #ffffff;
}
.footer {
  margin-top: 20px;
  .footer_top {
    padding: 12px 0;
    border-bottom: 1px solid #999999;
    a {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 13px;
    }

    display: flex;
    gap: 40px;
    justify-content: center;
  }
  h3 {
    margin-top: 30px;
    margin-bottom: 20px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    color: #000000;
  }
  .icons {
    display: flex;
    justify-content: center;
  }
  p {
    margin-top: 35px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    color: #999999;
    padding-bottom: 40px;
  }
}
</style>

