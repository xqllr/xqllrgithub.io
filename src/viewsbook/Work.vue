<template>
  <div class="work">
    <button v-if="xs" @click="chang">查看项目经验</button>
    <button v-if="msg" @click="chang">查看工作经历</button>
    <experience v-if="xs" />
    <suffer v-if="msg" />
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