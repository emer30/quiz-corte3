<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title color="success">ESTUDIANTE</ion-title>
        </ion-toolbar>
      </ion-header>  
      <ion-content>
        <div id="login-container">         
       
          <div >
               <DatosBasicosComponent/>           
          </div>

          <div>
          <ButtonComponent id="btnAgregar" value="Agregar" />
          <ButtonComponent id="btnModificar" value="Modificar" />
          <ButtonComponent id="btnEliminar" color="danger" value="Eliminar" />
          <ButtonComponent id="btnAtras" color ="medium" value="Atras" href="/Dasboard"  />
          
        </div>

  </div>
             
      
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import DatosBasicosComponent from '@/components/DatosBasicosComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
  </script>
  
  <style scoped src="../theme/container.css"></style>

