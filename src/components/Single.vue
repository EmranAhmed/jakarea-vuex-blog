<template>
    <div class="col-sm-8 col-xs-12">
          <div class="blog-box">
              <div class="resume-box blog-post">
                  <h4><router-link :to="'/'">{{ post.title }}</router-link></h4>
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
    
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data(){
    return {
         id: this.$route.params.id
        }
  },

  computed:{
    ...mapGetters(['getPost', 'getPostById']),
    post(){
      return this.getPostById(this.id) || this.getPost
    }
  },

  methods:{
    ...mapActions(['fetchPost'])
  },
  created(){
    this.fetchPost(this.id)
  }
}
</script>
