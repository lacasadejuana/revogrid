<template>
<div class="theme-body">
  <section class="hero-section">
    <div class="container-fluid" style="max-width:98vw">
      <div class="row">
 <demo-page/>
      </div><!--//row-->
    </div><!--//container-->
  </section><!--//hero-section-->
   
   
</div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue';
import GithubButton from 'vue-github-button';

export default {
  name: 'Home',

  components: { NavLink, GithubButton },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap-grid.scss";
@import "~bootstrap/scss/bootstrap-utilities.scss";
@import "~bootstrap/scss/buttons";
@import '../styles/home/theme.scss';
</style>
