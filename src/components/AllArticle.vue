<template>
  <div class="col-sm-8 col-xs-12">
        <div class="blog-box" v-for="post in posts" :key="post.id">
            <div class="resume-box blog-post">
                <h4><router-link :to="'/posts/'+ post.id">{{ post.title }}</router-link></h4>
                <div class="resume-row">
                    <div class="info">
                        <div class="info-title"><i class="fa fa-folder-o"></i></div>
                        <div class="value"><a href="#">Uncategorised</a></div>
                        <div class="info-title"><i class="fa fa-calendar-o"></i></div>
                        <div class="value"><a href="#">October 27, 2017</a></div>
                        <div class="info-title"><i class="fa fa-tags"></i></div>
                        <div class="value"><a href="#">Code</a></div>
                    </div>
                    <p>{{ post.body}}</p>
                    <div class="blog-action">
                        <router-link :to="'/posts/'+ post.id"><a class="m-btn pull-right">Read More</a></router-link>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
computed: {
    ...mapGetters(['getPosts']),
  posts(){
        return this.getPosts;
  },
},
methods:{
    ...mapActions(['fetchPosts'])
},
created() {
    this.fetchPosts()
  }
}
</script>