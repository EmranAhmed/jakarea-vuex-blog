<template>
<div >
  <AllArticle/>
  <Sidebar/>
</div>
</template>

<script>
import AllArticle from './AllArticle.vue';
import Sidebar from './Sidebar.vue';

export default {
  components: {
    'AllArticle' : AllArticle,
    'Sidebar' : Sidebar
  }
}
</script>
