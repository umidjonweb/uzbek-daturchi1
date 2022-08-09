<template>
  <div class="w-full pb-9 mb-2">
    <div class="flex py-2 items-center justify-around">
      <router-link :to="{ name: 'about' }">
        <img src="@/assets/logos.svg" alt="" />
      </router-link>
      <div class="hidden lg:inline-block">
        <p class="text-red-500">8(978)777-55-55</p>
        <p class="text-red-500">8(800)550-70-77</p>
      </div>
      <button
        class="
          navbar-toggler
          border-0
          py-3
          lg:hidden
          leading-none
          text-xl
          bg-transparent
          text-gray-600
          hover:text-gray-700
          focus:text-gray-700
          transition-shadow
          duration-150
          ease-in-out
        "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContentX"
        aria-controls="navbarSupportedContentX"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          class="w-5"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
    </div>
    <nav
      class="
        navbar navbar-expand-lg
        relative
        flex
        items-center
        w-full
        justify-center
      "
    >
      <div class="w-4/5 mx-auto navbar-border py-1">
        <div
          class="navbar-collapse mx-auto collapse items-center"
          id="navbarSupportedContentX"
        >
          <ul class="navbar-nav lg:flex flex-row items-center mx-auto">
            <li class="nav-item">
              <router-link
                :to="{ name: 'aboutdetail' }"
                class="
                  nav-link
                  block
                  pr-2
                  lg:px-2
                  py-2
                  text-sm
                  color-gray
                  focus:text-gray-500
                  transition
                  duration-150
                  ease-in-out
                "
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                >О нас</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'about' }"
                class="
                  nav-link
                  block
                  pr-2
                  lg:px-2
                  py-2
                  text-sm
                  color-gray
                  focus:text-gray-500
                  transition
                  duration-150
                  ease-in-out
                "
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                >Все Услуги</router-link
              >
            </li>
            <li class="nav-item dropdown relative">
              <a
                class="
                  nav-link
                  block
                  pr-2
                  lg:px-2
                  py-2
                  text-sm
                  color-gray
                  focus:text-gray-500
                  transition
                  duration-150
                  ease-in-out
                  dropdown-toggle
                  flex
                  items-center
                  whitespace-nowrap
                "
                href="#"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                type="button"
                id="dropdownMenuButtonX"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Предрейсовые осмотры
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </a>
              <div
                class="
                  dropdown-menu
                  mt-0
                  hidden
                  shadow-lg
                  bg-white
                  absolute
                  left-0
                  top-full
                "
                aria-labelledby="dropdownMenuButtonX"
              >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Предрейсовые осмотры</a
                >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Предрейсовые осмотры</a
                >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Предрейсовые осмотры</a
                >
              </div>
            </li>
            <li class="nav-item dropdown relative">
              <a
                class="
                  nav-link
                  block
                  pr-2
                  lg:px-2
                  py-2
                  text-sm
                  color-gray
                  focus:text-gray-500
                  transition
                  duration-150
                  ease-in-out
                  dropdown-toggle
                  flex
                  items-center
                  whitespace-nowrap
                "
                href="#"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                type="button"
                id="dropdownMenuButtonX"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Заказать автобус
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </a>
              <div
                class="
                  dropdown-menu
                  mt-0
                  hidden
                  shadow-lg
                  bg-white
                  absolute
                  left-0
                  top-full
                "
                aria-labelledby="dropdownMenuButtonX"
              >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Заказать автобус</a
                >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Заказать автобус</a
                >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Заказать автобус</a
                >
              </div>
            </li>
            <li class="nav-item dropdown relative">
              <a
                class="
                  nav-link
                  block
                  pr-2
                  lg:px-2
                  py-2
                  text-sm
                  color-gray
                  focus:text-gray-500
                  transition
                  duration-150
                  ease-in-out
                  dropdown-toggle
                  flex
                  items-center
                  whitespace-nowrap
                "
                href="#"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                type="button"
                id="dropdownMenuButtonX"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Блог
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </a>
              <div
                class="
                  dropdown-menu
                  mt-0
                  hidden
                  shadow-lg
                  bg-white
                  absolute
                  left-0
                  top-full
                "
                aria-labelledby="dropdownMenuButtonX"
              >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Блог</a
                >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Блог</a
                >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Блог</a
                >
              </div>
            </li>
            <li class="nav-item dropdown relative">
              <a
                class="
                  nav-link
                  block
                  pr-2
                  lg:px-2
                  py-2
                  text-sm
                  color-gray
                  focus:text-gray-500
                  transition
                  duration-150
                  ease-in-out
                  dropdown-toggle
                  flex
                  items-center
                  whitespace-nowrap
                "
                href="#"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                type="button"
                id="dropdownMenuButtonX"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Законодательство
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </a>
              <div
                class="
                  dropdown-menu
                  mt-0
                  hidden
                  shadow-lg
                  bg-white
                  absolute
                  left-0
                  top-full
                "
                aria-labelledby="dropdownMenuButtonX"
              >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Законодательство</a
                >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Законодательство</a
                >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Законодательство</a
                >
              </div>
            </li>
            <li class="nav-item">
              <a
                class="
                  nav-link
                  block
                  pr-2
                  lg:px-2
                  py-2
                  text-sm
                  color-gray
                  focus:text-gray-700
                  transition
                  duration-150
                  ease-in-out
                "
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                >Конкурентам</a
              >
            </li>
            <li class="nav-item dropdown relative">
              <a
                class="
                  nav-link
                  block
                  pr-2
                  lg:px-2
                  py-2
                  text-sm
                  color-gray
                  focus:text-gray-500
                  transition
                  duration-150
                  ease-in-out
                  dropdown-toggle
                  flex
                  items-center
                  whitespace-nowrap
                "
                href="#"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                type="button"
                id="dropdownMenuButtonX"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Сотрудникам
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </a>
              <div
                class="
                  dropdown-menu
                  mt-0
                  hidden
                  shadow-lg
                  bg-white
                  absolute
                  left-0
                  top-full
                "
                aria-labelledby="dropdownMenuButtonX"
              >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Сотрудникам</a
                >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Сотрудникам</a
                >
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    color-gray
                    px-2
                    py-2
                    text-sm
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-50 hover:text-gray-500
                    transition
                    duration-150
                    ease-in-out
                  "
                  >Сотрудникам</a
                >
              </div>
            </li>
            <li class="nav-item">
              <a
                class="
                  nav-link
                  block
                  pr-2
                  lg:px-2
                  py-2
                  text-sm
                  color-gray
                  focus:text-gray-700
                  transition
                  duration-150
                  ease-in-out
                "
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                >Вакансии</a
              >
            </li>
            <li class="nav-item">
              <a
                class="
                  nav-link
                  block
                  pr-2
                  lg:px-2
                  py-2
                  text-sm
                  color-gray
                  focus:text-gray-700
                  transition
                  duration-150
                  ease-in-out
                "
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                >Контакты</a
              >
            </li>
            <li class="nav-item">
              <img
                src="@/resource/icons/icons8-search.svg"
                class="w-6"
                alt=""
              />
            </li>
            <li class="nav-item">
              <img
                src="@/resource/icons/icons8-eye-48.png"
                class="w-6"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 1024px) {
  .navbar-border {
    border: none;
  }
}

@media (min-width: 1024px) {
  .navbar-border {
    border-top: 1.8px solid #999;
    border-bottom: 1.5px solid #999;
  }
}
</style>