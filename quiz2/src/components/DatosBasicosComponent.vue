<template>
    <div id="login-container">
      <div id="log-form">
     <InputComponent id="id" name="id" type="hidden"/>
     <InputComponent id="primerNombre" name="primerNombre" label="primer Nombre: " />
     <InputComponent id="segundoNombre" name="segundoNombre" label="segundo Nombre: " />
     <InputComponent id="primerApellido" name="primerApellido" label="primer Apellido: " />
     <InputComponent id="segundoApellido" name="segundoApellido" label="segundo Apellido: " />
     <InputComponent id="tipoDocumento" name="tipoDocumento" label="Tipo Documento: " />
     <InputComponent type="number" id="Documento" name="Documento" label="Documento: " />  

      </div>
</div>
</template>
<script setup lang="ts">
import InputComponent from '@/components/InputComponent.vue';
</script>

<style scoped src="../theme/container.css"></style>
