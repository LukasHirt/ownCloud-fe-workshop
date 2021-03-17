<template>
  <div class="oc-p-m uk-flex uk-flex-center uk-text-center uk-flex-column">
    <div class="uk-flex uk-flex-center">
      <oc-button variation="primary" @click="hello">
        Say Hello!
      </oc-button>
    </div>
    <h1 v-if="isMessageVisible">
      Welcome to my amazing extension!
    </h1>
  </div>
</template>

<script>
  export default {
    data: () => ({
      isMessageVisible: false
    }),

    methods: {
      hello() {
        this.isMessageVisible = true
      }
    }
  }
</script>
