<template>
  <Page>
    <ActionBar title="app"/>
    <StackLayout>
      
    </StackLayout>
  </Page>
</template>

<script >
  export default {
    data() {
      return {
        textContent:'',
        countries: [
          { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
          { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
          { name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
          { name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
          { name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
          { name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
          { name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
          { name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
          { name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
          { name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
          { name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
          { name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
          { name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
          { name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
          { name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
          { name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
          { name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
        ],
      }
    },
    methods: {
      onItemTap: function(data){
        console.log(data.item.name)
        this.textContent = data.item.name
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .flag-container{
      background-color: #ffffff;
      width:60;
      height: 60;
    }
    .thumb{
      border-radius: 100;
      width: 100%;
      height: 100%;
    }
    .list-group-item{
      padding: 20;
    }
    .list-group-item-heading{
      padding: 20;
    }

    
</style>
