<template>
  <div class="work">
    <experience v-if="xs" />
    <suffer v-if="msg" />
    <button v-if="xs" @click="chang">查看项目经验</button>
    <button v-if="msg" @click="chang">查看工作经历</button>
  </div>
</template>

<script>
import experience from "@/components/experience.vue";
import suffer from "@/components/suffer.vue";

export default {
  name: "Work",
  data() {
    return {
      xs: true,
      msg: false,
    };
  },
  components: {
    experience,
    suffer,
  },
  methods: {
    chang() {
      this.msg = !this.msg;
      this.xs = !this.xs;
    },
  },
};
</script>
<style>
  .work {
    margin-bottom:3rem ;
  }
  .work button {
    margin-top: .5rem;
    padding: .25rem .5rem;
  }
</style>