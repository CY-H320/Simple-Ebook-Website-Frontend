<template>
  <div
    class="appp"
    :class="{ 'has-mouse': hasMouse }"
    @touchstart="hasMouse = false"
  >
    <div v-if="!login" class="login-form">
      <h2>Login Required</h2>
    </div>
    <Flipbook v-if="login"
      class="flipbook"
      :pages="pages"
      :pagesHiRes="pagesHiRes"
      :startPage="pageNum"
      v-slot="flipbook"
      ref="flipbook"
      @flip-left-start="onFlipLeftStart"
      @flip-left-end="onFlipLeftEnd"
      @flip-right-start="onFlipRightStart"
      @flip-right-end="onFlipRightEnd"
    >
      <div class="action-bar">
        <LeftIcon
          class="btn left"
          :class="{ disabled: !flipbook.canFlipLeft }"
          @click="flipbook.flipLeft"
        />
        <span class="page-num">
          Page {{ flipbook.page }} of {{ flipbook.numPages }}
        </span>
        <RightIcon
          class="btn right"
          :class="{ disabled: !flipbook.canFlipRight }"
          @click="flipbook.flipRight"
        />
      </div>
    </Flipbook>
  </div>
</template>

<script>
import './vue-material-design-icons/styles.css'
import LeftIcon from './vue-material-design-icons/ChevronLeftCircle.vue'
import RightIcon from './vue-material-design-icons/ChevronRightCircle.vue'
import Flipbook from 'flipbook-vue'

export default {
  components: { Flipbook, LeftIcon, RightIcon },
  props: {
    id: Number,
  },
  data() {
    return {
      pages: [],
      pagesHiRes: [],
      hasMouse: true,
      pageNum: null,
      login: false
    }
  },
  watch: {
    id() {
      this.fetchBookData();
    },
  },
  methods: {
    async fetchBookData() {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }
        this.login = true;

        const coverResponse = await fetch(`http://localhost:8080/api/book/${this.id}`);
        if (!coverResponse.ok) {
          throw new Error('Failed to fetch cover');
        }
        const coverData = await coverResponse.json();
        const coverUrl = `http://localhost:8080/image/${coverData.cover}`;

        const pagesResponse = await fetch(`http://localhost:8080/api/book/${this.id}/pages`, {
          headers: { 'Access-Token': token }
        });
        if (!pagesResponse.ok) {
          throw new Error('Failed to fetch pages');
        }
        const pagesData = await pagesResponse.json();
        const pagesUrls = pagesData.map(page => `http://localhost:8080/image/${page.uuid}`);

        this.pages = [null, coverUrl, ...pagesUrls];
        this.resetBook();
      } catch (error) {
        console.error('Error fetching book data:', error);
        // Optionally, you could provide user feedback here
      }
    },
    resetBook() {
      this.pageNum = null;
    },
    onFlipLeftStart(page) { console.log('flip-left-start', page) },
    onFlipLeftEnd(page) {
      console.log('flip-left-end', page)
    },
    onFlipRightStart(page) { console.log('flip-right-start', page) },
    onFlipRightEnd(page) {
      console.log('flip-right-end', page)
    },
  },
  mounted() {
    this.fetchBookData();
    window.addEventListener('keydown', (ev) => {
      const flipbook = this.$refs.flipbook;
      if (!flipbook) return;
      if (ev.keyCode == 37 && flipbook.canFlipLeft) flipbook.flipLeft();
      if (ev.keyCode == 39 && flipbook.canFlipRight) flipbook.flipRight();
    });
  },
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

.appp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #ccc;
  overflow: hidden;
}

a {
  color: inherit;
}

.action-bar {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
}

.action-bar .btn {
  font-size: 30px;
  color: #999;
}

.action-bar .btn svg {
  bottom: 0;
}

.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}

.has-mouse .action-bar .btn:hover {
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}

.action-bar .btn:active {
  filter: none !important;
}

.action-bar .btn.disabled {
  color: #666;
  pointer-events: none;
}

.action-bar .page-num {
  font-size: 12px;
  margin-left: 10px;
}

.flipbook .viewport {
  width: 54vw !important;
  height: calc(60vh - 50px - 40px) !important;
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}

</style>
