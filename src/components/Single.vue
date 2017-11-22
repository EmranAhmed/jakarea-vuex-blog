<template>
  <div>
    <div class="col-sm-8 col-xs-12">
          <div class="blog-box">
              <div class="resume-box blog-post">
                  <h4><a href="">{{ post.title }}</a></h4>
                  <div class="resume-row">
                      <div class="info">
                          <div class="info-title"><i class="fa fa-folder-o"></i></div>
                          <div class="value"><a href="#">Uncategorised</a></div>
                          <div class="info-title"><i class="fa fa-calendar-o"></i></div>
                          <div class="value"><a href="#">October 27, 2017</a></div>
                          <div class="info-title"><i class="fa fa-tags"></i></div>
                          <div class="value"><a href="#">Code</a></div>
                      </div>
                      <p>{{ post.body}} </p>
                  </div>
              </div>
          </div>
      </div>
    <Sidebar/>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  data(){
    return  {
          post : ''
        }
      },
  components: {
    'Sidebar' : Sidebar
  },
  created: function(){
    var postId = this.$route.params.postId;
    this.$store.state.posts.forEach( post=>{
        if(post.id == postId){
          this.post = post;
        }
    });
  }
}
</script>
