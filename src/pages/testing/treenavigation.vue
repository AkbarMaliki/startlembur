<template>
  <div>
    <vue-tree-navigation :items="items" :defaultOpenLevel="1"/>
  </div>
</template>

    <script>
import VueTreeNavigation from 'vue-tree-navigation'

export default {
  components:{
VueTreeNavigation
  },
  data() {
    return {
      items: [
        {
          name: "Introduction",
          path: "introduction",
          children: [
            { name: "Features", element: "features" },
            { name: "Requirements", element: "requirements" },
            { name: "Demo", element: "demo" }
          ]
        },
        { name: "Installation", path: "installation" },
        {
          name: "Usage",
          path: "usage",
          children: [
            {
              name: "Props",
              element: "props",
              children: [
                { name: "items", element: "items" },
                { name: "defaultOpenLevel", element: "default-open-level" }
              ]
            }
          ]
        },
        {
          name: "Examples",
          path: "examples",
          children: [
            { name: "Auto-generated", path: "auto" },
            { name: "Manually defined", path: "manual" },
            { name: "This website", path: "this" }
          ]
        },
        { name: "Styling", path: "styling" },
        {
          name: "Visit GitHub",
          external: "https://github.com/MisRob/vue-tree-navigation"
        }
      ]
    };
  }
};
</script>
<style>
.NavigationLevel__children {
  padding-left: 10px;
}

.NavigationLevel__parent {
  font-weight: 600;
  padding-bottom: 5px;
}

.NavigationItem {
  color: #545454;
  padding: 0;
}

.NavigationItem--active {
  color: #42b883;
}

.NavigationToggle__icon {
  border-color: #42b883;
}
</style>