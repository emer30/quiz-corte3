<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Dashboard</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <br>
        <div id="container">
          <strong><a href="/Estudiante">Ir a estudiante</a></strong>
          <br>
          <strong><a href="/Empleado">Ir a empleado</a></strong>
          <strong><a href="/Cliente">Ir a cliente</a></strong>
  
        </div>

        <br>
  
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  </script>
  
  <style scoped></style>
  