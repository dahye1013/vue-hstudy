<template>
  <div class="about">
    <h2>컴포넌트 샘플 보는 화면</h2>
    <!-- 당장 사용할 애들만 샘플링 진행 -->

    <!-- [select, input sample]  -->
    <section>
      <h-select label="sample" :options="['sample']" />
      <h-input label="sample" placeholder="sample" class="small"></h-input>
    </section>

    <!--  [button sample]  -->
    <hr />
    <section>
      <h-base-button>hihi</h-base-button>
      <h-base-button>hihi</h-base-button>
      <h-base-button>hihi</h-base-button>
      <h-base-button>hihi</h-base-button>
    </section>

    <hr />
    <!--  [button sample]  -->
    <section>
      <h-custom-button buttonClass="-fill-gradient" disabled="true"
        >button</h-custom-button
      >
      <!-- slot으로 아이콘 넣은 버튼 << 이거 써먹기 좋을듯, 정렬은 좀 이상한데.. 수정 필요; -->
      <h-custom-button buttonClass="-fill-gray ">
        <feather-icon name="user"></feather-icon>
      </h-custom-button>
      <h-custom-button buttonClass="-fill-gradient">button</h-custom-button>

      <h-custom-button buttonClass="-fill-gray -size-small "
        >button</h-custom-button
      >
    </section>

    <hr />

    <!-- [Icon sample] 
         1. feather-icon은 라이브러리로 진행
            => ref: https://feathericons.com/
         2. base-icon은 svg로 진행함.
         3. i class 는 구글 아이콘 base.scss 참고 
      -->
    <section>
      <feather-icon name="user"></feather-icon>
      <feather-icon name="bell"></feather-icon>
      <base-icon name="users"></base-icon>
      <i class="material-icons">card_travel</i>
      <i class="material-icons">loyalty</i>
    </section>

    <hr />

    <section>
      <h2>transition sample</h2>
      <div>
        <h4>가로로 늘리기</h4>
        <div class="transition-box transition-box-width"></div>
        <h4>세로 늘리기</h4>
        <h-base-button @click="isOpen = !isOpen">hihi</h-base-button>

        <transition name="slide-fade-y">
          <div v-if="isOpen" class="height-box">asdfasdf asdfasdfsadf asdf</div>
        </transition>
        <div class="transition-box transition-box-height"></div>
        <h4>대각선으로 늘리기</h4>
        <div class="transition-box transition-box-both"></div>
      </div>
    </section>

    <section>
      <h-custom-button
        @click="toggleModal('fade')"
        buttonClass="-fill-gradient "
      >
        fade
      </h-custom-button>

      <transition name="fade">
        <div v-if="boxes.fade" class="modal"></div>
      </transition>

      <h-custom-button
        @click="toggleModal('slideFade')"
        buttonClass="-fill-gradient "
      >
        slide-fade
      </h-custom-button>

      <transition name="slide-fade">
        <div v-if="boxes.slideFade" class="modal"></div>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      boxes: {
        fade: false,
        slideFade: false,
      },
    };
  },
  methods: {
    toggleModal(name) {
      this.boxes[name] = !this.boxes[name];
      // this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/abstract/_variables.scss';
section {
  margin: 20px;
}

// input sampling한것 v-bind="$attrs" 한것 class 속성 제대로 먹는지 확인
.small {
  width: 300px;
}
.large {
  width: 800px;
}
/************************************************************************************************

https://www.w3schools.com/css/css3_transitions.asp

https://easings.net/en

*/
/********** 일반 CSS transition************** */
//ref:https://www.w3schools.com/css/css3_transitions.asp
.transition-box {
  width: 5em;
  height: 2em;
  background: linear-gradient(to right, #16c0b0, #84cf6a);

  &-width {
    transition: width 2s;
    &:hover {
      width: 300px;
      transition-timing-function: ease-in-out;
    }
  }
  &-height {
    transition: height 2s;
    &:hover {
      height: 300px;
    }
  }
  &-both {
    transition: width 2s, height 4s;
    &:hover {
      width: 300px;
      height: 300px;
    }
  }
}
/********************************
easeng function
 - function으로 화면 효과 줄 수 있음.
https://easings.net/en

*/

/********** Vue transition************** */
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 2s;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: opacity 2;
}

.modal {
  width: 250px;
  height: 200px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 2%;
  background-color: #e0e0e0;
}

.height-enter {
  transition: width 2s, height 4s;

  height: 10px;
  // transition: height 2s;
  // transform: translateY(-10px);
}
.height-leave-active {
  height: 300px;
  // transition: height 2s;
  // transition: transform 0.5s ease;
}
.height-enter-active {
  transition: all 0.5s ease;
}
.height-leave-to {
  height: 10px;
  // transform: translateY(10px);
}
.height-box {
  border: 1px solid #e0e0e0;
  background-color: #e0e0e0;
  height: 300px;
}

/** [fade]  */
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(10px);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  //opacity와 transform 효과를 동시에 준다.
  transition: all 0.5s ease;
}

.slide-fade-leave-to {
  //opacity와 transform 효과를 동시에 준다.
  opacity: 0;
  transform: translateX(-10px);
}
//--------------------
.slide-fade-y-enter {
  transform: translateY(-10px);
}
.slide-fade-y-enter-active,
.slide-fade-y-leave-active {
  //opacity와 transform 효과를 동시에 준다.
  transition: height 2s ease;
  // transition: all 0.5s ease;
}

.slide-fade-y-leave-to {
  //opacity와 transform 효과를 동시에 준다.
  opacity: 0;
  transform: translateY(-10px);
}
</style>
