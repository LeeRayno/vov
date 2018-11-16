<template>
  <div class="app">
    <docs-header />
    <docs-aside />
    <div class="main-content">
      <div class="page-container clearfix">
        <div class="page-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DocsHeader from './components/docs-header.vue'
import DocsAside from './components/docs-aside.vue'
export default {
  name: 'App',
  components: {
    DocsHeader,
    DocsAside
  }
}
</script>
