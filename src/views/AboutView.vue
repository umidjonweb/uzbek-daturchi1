<template>
  <div class="wrapper">
    <HeaderComponenet />
    <div class="about">
      <div class="container">
        <div class="title">
          <h1>Купить пакет документов</h1>
          <h1>по безопасности дорожного</h1>
          <h1>движения</h1>
          <p>Оставляйте заявку!</p>
          <div class="input">
            <input
              placeholder="Номер телефона "
              type="tel"
              v-mask="'+7 ###-####-###'"
            />
            <router-link :to="{ name: 'aboutdetail' }">
              <button>Оставить заявку</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="what">
      <h1>Что это?</h1>
      <div class="container">
        <div class="what_left">
          <p>
            Пакет документов по безопасности дорожного движения - это самый
            объемный перечень нормативных документов и проводимых мер,
            необходимых для обеспечения безопасной работы с транспортными
            средствами.
          </p>
          <p>
            Сегодня почти каждое предприятие имеет на балансе свой транспорт. По
            этой причине действующее законодательство предусматривает ряд правил
            и мер, соблюдение которых необходимо для обеспечения безопасности
            дорожного движения.
          </p>
          <p>
            При этом нормативно-правовая база в сфере БДД претерпевает
            регулярные обновления. Мы всегда следим за изменениями и
            предоставляем своим клиентам самую актуальную информацию на текущий
            период времени.
          </p>
        </div>
        <div class="what_right">
          <img src="@/assets/file.png" alt="" />
        </div>
      </div>
    </div>
    <div class="who">
      <h1>Кому нужно?</h1>
      <div class="container">
        <p>
          Приказом Минтранса № 145 от 30.04.2021 предъявляются требования по
          обеспечению безопасности при организации и осуществлении перевозок
          автомобильным транспортом к следующим субъектам транспортной
          деятельности:
        </p>
        <h2>
          Юридические лица и индивидуальные предприниматели, которые
          осуществляют:
        </h2>
        <div class="who_inner">
          <img src="@/assets/w1.svg" alt="" />
          <p>
            перевозки пассажиров на основании договора перевозки пассажира или
            договора фрахтования
          </p>
        </div>
        <div class="who_inner">
          <img src="@/assets/w2.svg" alt="" />
          <p>
            перевозки грузов автомобильным транспортом на основании договора
            перевозки
          </p>
        </div>
        <div class="who_inner">
          <img src="@/assets/w3.svg" alt="" />
          <p>
            перемещение лиц, кроме водителя, и (или) материальных объектов
            автобусами и грузовыми автомобилями без заключения указанных
            договоров
          </p>
        </div>
        <h2 class="title1">Физических лица, осуществляющие:</h2>
        <div class="who_inner">
          <img src="@/assets/w1.svg" alt="" />
          <p>
            перевозки пассажиров на основании договора перевозки пассажира или
            договора фрахтования
          </p>
        </div>
        <h3 class="subtitle">Зачем?</h3>
        <p class="intext">
          Федеральный закон от 10.12.1995 №196-ФЗ «О безопасности дорожного
          движения» является документом, выполнение положений которого
          существенно уменьшает количество ДТП на дорогах. При этом для
          безопасности водителя, пассажиров и пешеходов, владелец организации
          обязан осуществлять деятельность, направленную на обеспечение БДД и
          повышение квалификации своих сотрудников, управляющих транспортом
          предприятия . <br /><br />
          Вы можете обратиться в нашу компанию, чтобы решить вопрос с
          обеспечением безопасности дорожного движения:
        </p>

        <div class="gallery">
          <div class="gallery_left">
            <p>
              Наши специалисты проведут для вас бесплатный аудит по безопасности
              дорожного движения.
            </p>
          </div>
          <img src="@/assets/img1.png" alt="" />
        </div>
        <div class="gallery">
          <div class="gallery_left">
            <p>
              Предлагаем заключить с нами договор на ведение документации по БДД
              нашими специалистами на постоянной основе.
            </p>
          </div>
          <img src="@/assets/img2.png" alt="" />
        </div>
        <div class="scales">
          <div class="img">
            <img src="@/assets/scales.svg" alt="" />
          </div>
          <p class="scales_inner">
            Если вы хотите вести свою документацию самостоятельно, вы можете
            ,купить пакет необходимый документов у нас на сайте. Такой пакет
            документов рекомендовано к обновлять каждый год, так как документы
            периодически меняются, а мы оперативно их обновляем.
          </p>
        </div>
        <div class="downloades">
          <h3>Купить пакет документов</h3>
          <h5>Оплатите документы</h5>
          <div class="btn">
            <button>Скачать</button>
          </div>
        </div>
        <h3 class="subtitle">В пакет входит:</h3>
        <div class="dropdown">
          <div @click="drop" class="dropdown_item">
            <p>Должностные инструкции</p>
            <img :class="{ next: dropdowns }" src="@/assets/next1.svg" alt="" />
          </div>
          <div :class="{ drop_active: dropdowns }" class="dropdown_content">
            <p>Должностная инструкция ответственного за БДД;</p>
            <p>
              Должностная инструкция ответственного за техническое состояние;
            </p>
            <p>Должностная инструкция контролера техсостояния ТС;</p>
            <p>
              Должностная инструкция лица ответственного за выдачу и учет
              путевых листов;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>

            <p>Должностная инструкция лица управляющего автобусом;</p>
            <p>
              Должностная инструкция лица, перевозящего крупногабаритные и
              тяжеловесные грузы
            </p>
            <p>Должностная инструкция лица, перевозящего опасные грузы;</p>
            <p>
              Должностная инструкция лица управляющего авто со спецсигналами.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <div @click="drop1" class="dropdown_item">
            <p>Приказы о назначении ответственных лиц</p>
            <img
              :class="{ next: dropdowns1 }"
              src="@/assets/next1.svg"
              alt=""
            />
          </div>
          <div :class="{ drop_active: dropdowns1 }" class="dropdown_content">
            <p>Должностная инструкция ответственного за БДД;</p>
            <p>
              Должностная инструкция ответственного за техническое состояние;
            </p>
            <p>Должностная инструкция контролера техсостояния ТС;</p>
            <p>
              Должностная инструкция лица ответственного за выдачу и учет
              путевых листов;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>

            <p>Должностная инструкция лица управляющего автобусом;</p>
            <p>
              Должностная инструкция лица, перевозящего крупногабаритные и
              тяжеловесные грузы
            </p>
            <p>Должностная инструкция лица, перевозящего опасные грузы;</p>
            <p>
              Должностная инструкция лица управляющего авто со спецсигналами.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <div @click="drop2" class="dropdown_item">
            <p>Инструктажи</p>
            <img
              :class="{ next: dropdowns2 }"
              src="@/assets/next1.svg"
              alt=""
            />
          </div>
          <div :class="{ drop_active: dropdowns2 }" class="dropdown_content">
            <p>Должностная инструкция ответственного за БДД;</p>
            <p>
              Должностная инструкция ответственного за техническое состояние;
            </p>
            <p>Должностная инструкция контролера техсостояния ТС;</p>
            <p>
              Должностная инструкция лица ответственного за выдачу и учет
              путевых листов;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>

            <p>Должностная инструкция лица управляющего автобусом;</p>
            <p>
              Должностная инструкция лица, перевозящего крупногабаритные и
              тяжеловесные грузы
            </p>
            <p>Должностная инструкция лица, перевозящего опасные грузы;</p>
            <p>
              Должностная инструкция лица управляющего авто со спецсигналами.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <div @click="drop3" class="dropdown_item">
            <p>Испытание (стажировка) водителей</p>
            <img
              :class="{ next: dropdowns3 }"
              src="@/assets/next1.svg"
              alt=""
            />
          </div>
          <div :class="{ drop_active: dropdowns3 }" class="dropdown_content">
            <p>Должностная инструкция ответственного за БДД;</p>
            <p>
              Должностная инструкция ответственного за техническое состояние;
            </p>
            <p>Должностная инструкция контролера техсостояния ТС;</p>
            <p>
              Должностная инструкция лица ответственного за выдачу и учет
              путевых листов;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>

            <p>Должностная инструкция лица управляющего автобусом;</p>
            <p>
              Должностная инструкция лица, перевозящего крупногабаритные и
              тяжеловесные грузы
            </p>
            <p>Должностная инструкция лица, перевозящего опасные грузы;</p>
            <p>
              Должностная инструкция лица управляющего авто со спецсигналами.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <div @click="drop4" class="dropdown_item">
            <p>Контроль технического состояния, выпуск на линию</p>
            <img
              :class="{ next: dropdowns4 }"
              src="@/assets/next1.svg"
              alt=""
            />
          </div>
          <div :class="{ drop_active: dropdowns4 }" class="dropdown_content">
            <p>Должностная инструкция ответственного за БДД;</p>
            <p>
              Должностная инструкция ответственного за техническое состояние;
            </p>
            <p>Должностная инструкция контролера техсостояния ТС;</p>
            <p>
              Должностная инструкция лица ответственного за выдачу и учет
              путевых листов;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>

            <p>Должностная инструкция лица управляющего автобусом;</p>
            <p>
              Должностная инструкция лица, перевозящего крупногабаритные и
              тяжеловесные грузы
            </p>
            <p>Должностная инструкция лица, перевозящего опасные грузы;</p>
            <p>
              Должностная инструкция лица управляющего авто со спецсигналами.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <div @click="drop5" class="dropdown_item">
            <p>Повышение квалификации водителей и</p>
            <img
              :class="{ next: dropdowns5 }"
              src="@/assets/next1.svg"
              alt=""
            />
          </div>
          <div :class="{ drop_active: dropdowns5 }" class="dropdown_content">
            <p>Должностная инструкция ответственного за БДД;</p>
            <p>
              Должностная инструкция ответственного за техническое состояние;
            </p>
            <p>Должностная инструкция контролера техсостояния ТС;</p>
            <p>
              Должностная инструкция лица ответственного за выдачу и учет
              путевых листов;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>

            <p>Должностная инструкция лица управляющего автобусом;</p>
            <p>
              Должностная инструкция лица, перевозящего крупногабаритные и
              тяжеловесные грузы
            </p>
            <p>Должностная инструкция лица, перевозящего опасные грузы;</p>
            <p>
              Должностная инструкция лица управляющего авто со спецсигналами.
            </p>
          </div>
        </div>
        <div class="dropdown">
          <div @click="drop6" class="dropdown_item">
            <p>ДТП</p>
            <img
              :class="{ next: dropdowns6 }"
              src="@/assets/next1.svg"
              alt=""
            />
          </div>
          <div :class="{ drop_active: dropdowns6 }" class="dropdown_content">
            <p>Должностная инструкция ответственного за БДД;</p>
            <p>
              Должностная инструкция ответственного за техническое состояние;
            </p>
            <p>Должностная инструкция контролера техсостояния ТС;</p>
            <p>
              Должностная инструкция лица ответственного за выдачу и учет
              путевых листов;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>
            <p>
              Должностная инструкция лица управляющего легковым автомобилем;
            </p>

            <p>Должностная инструкция лица управляющего автобусом;</p>
            <p>
              Должностная инструкция лица, перевозящего крупногабаритные и
              тяжеловесные грузы
            </p>
            <p>Должностная инструкция лица, перевозящего опасные грузы;</p>
            <p>
              Должностная инструкция лица управляющего авто со спецсигналами.
            </p>
          </div>
        </div>

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
  </div>
</template>

<script>
import HeaderComponenet from "@/components/Header/HeaderComponenet.vue";

export default {
  name: "UzbDasturAboutView",
  components: {
    HeaderComponenet,
  },
  data() {
    return {
      dropdowns: false,
      dropdowns1: false,
      dropdowns2: false,
      dropdowns3: false,
      dropdowns4: false,
      dropdowns5: false,
      dropdowns6: false,
    };
  },

  mounted() {},

  methods: {
    drop() {
      this.dropdowns = !this.dropdowns;
    },
    drop1() {
      this.dropdowns1 = !this.dropdowns1;
    },
    drop2() {
      this.dropdowns2 = !this.dropdowns2;
    },
    drop3() {
      this.dropdowns3 = !this.dropdowns3;
    },
    drop4() {
      this.dropdowns4 = !this.dropdowns4;
    },
    drop5() {
      this.dropdowns5 = !this.dropdowns5;
    },
    drop6() {
      this.dropdowns6 = !this.dropdowns6;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .about {
    background-image: url("@/assets/bg1.png");
    background-repeat: no-repeat;
    background-position: 100%;
    //   background: rgba(32, 39, 55, 0.7);
    width: 100%;
    height: 567px;
    background-size: cover;
    background-position: center;
    .title {
      padding-top: 127px;
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
  }
  .what {
    background: #eff2f8;
    margin-top: 50px;
    padding-top: 40px;
    padding-bottom: 60px;
    h1 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 35.8853px;
      line-height: 42px;
      text-align: center;
      margin-bottom: 46px;
      color: #000000;
    }
    .container {
      display: flex;
      gap: 50px;
      .what_left {
        padding-right: 2px;
        p {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 23px;
          padding-bottom: 20px;
          color: #000000;
        }
      }
    }
  }
  .who {
    margin-top: 80px;
    h1 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 35.8853px;
      line-height: 42px;
      text-align: center;
      margin-bottom: 46px;
      color: #000000;
    }
    .container {
      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;

        color: #000000;
      }
      h2 {
        margin-top: 25px;
        font-size: 22px;
        text-align: center;
      }
      .who_inner {
        margin-top: 14px;
        padding: 12px 7px;
        border: 1px solid #c4c9d5;
        display: flex;
        gap: 18px;
        align-items: center;
      }
      .title1 {
        margin-top: 50px;
      }
      //  .intext {
      //  }
      .subtitle {
        margin-top: 100px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 35.8853px;
        line-height: 42px;
        text-align: center;
        margin-bottom: 33px;
        color: #000000;
      }
      .gallery {
        margin-top: 53px;
        border: 2px solid #c4c9d5;
        display: flex;
        justify-content: space-between;
        .gallery_left {
          width: 50%;
          border-right: 2px solid #c4c9d5;
        }
        img {
          width: 50%;
        }
        p {
          padding: 63px 28px;
        }
      }
      .introsubtitle {
        margin-top: 80px;
      }
      .dropdown {
        margin-top: 31px;
        .dropdown_item {
          padding: 24px 46px;
          border: 1px solid #c4c9d5;
          display: flex;
          gap: 10px;
          img {
            transition: 0.4s;
          }
          .next {
            transform: rotate(180deg);
          }
        }
        .dropdown_content {
          display: none;
          padding: 24px 46px;
          border: 1px solid #c4c9d5;
          p {
            margin-bottom: 15px;
            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            text-decoration-line: underline;
            color: #000000;
          }
          &.drop_active {
            display: block;
          }
        }
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
      .scales {
        margin-top: 90px;
        position: relative;
        border: 2px solid #c4c9d5;

        .img {
          width: 125px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: 50%;
          margin-top: -30px;
          transform: translateX(-50%);
        }
        .scales_inner {
          padding: 33px 22px;
          padding-top: 60px;
        }
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
    }
  }
  @media (max-width: 1200px) {
    .who .container .Advantages {
      gap: 30px;
    }
    .who .container .Advantages .Advantages_inner p {
      font-size: 20px;
      width: 90%;
    }
    .about h1 {
      font-size: 39px;
      line-height: 1.3;
    }
    .what_right {
      display: none;
    }
    .who .container .gallery p {
      padding: 30px 20px;
    }
  }
}
</style>
