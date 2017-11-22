<template>
  <div class="col-sm-8 col-xs-12">
        <div class="blog-box" v-for="post in posts">
            <div class="resume-box blog-post">
                <h4><router-link :to="'/posts/'+ post.id"><a >{{ post.title }}</a></router-link></h4>
                <div class="resume-row">
                    <div class="info">
                        <div class="info-title"><i class="fa fa-folder-o"></i></div>
                        <div class="value"><a href="#">Uncategorised</a></div>
                        <div class="info-title"><i class="fa fa-calendar-o"></i></div>
                        <div class="value"><a href="#">October 27, 2017</a></div>
                        <div class="info-title"><i class="fa fa-tags"></i></div>
                        <div class="value"><a href="#">Code</a></div>
                    </div>
                    <p>{{ post.body}}
                    <div class="blog-action">
                        <router-link :to="'/posts/'+ post.id"><a class="m-btn pull-right">Read More</a></router-link>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
computed: {
  posts(){
      return this.$store.state.posts;
  },
},
created() {
  return this.$store.commit('load_blog_posts');
  }
}
</script>


<style >
</style>
