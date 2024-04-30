<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Carrito de compra</ion-title>
        </ion-toolbar>
      </ion-header>  
      <ion-content>       
         
          <div >
               <DatosBasicosComponent/>           
          </div>
  
             
      
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import DatosBasicosComponent from '@/components/DatosBasicosComponent.vue';
  </script>
  
  <style scoped src="../theme/container.css"></style>

