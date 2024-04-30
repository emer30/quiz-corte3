<template>
    <InputComponent id="id" name="id" type="hidden"/>
    <InputComponent id="primerNombre" name="primerNombre" label="NomprimerNombre: " />
    <InputComponent id="segundoNombre" name="segundoNombre" label="segundoNombre: " />
    <InputComponent id="primerApellido" name="primerApellido" label="primerApellido: " />
    <InputComponent id="segundoApellido" name="segundoApellido" label="segundoApellido: " />
    <InputComponent id="tipoDocumento" name="tipoDocumento" label="Tipo Documento: " />
    <InputComponent type="number" id="Documento" name="Documento" label="Documento: " />
  
</template>
<script setup lang="ts">
import InputComponent from '@/components/InputComponent.vue';
</script>

<style scoped src="../theme/container.css"></style>
