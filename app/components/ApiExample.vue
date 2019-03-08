<template>
  <Page>
    <ActionBar title="second page"/>
    <StackLayout></StackLayout>
  </Page>
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    },
    mounted(){
      fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
    },
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
</style>
