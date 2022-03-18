<template>
    <table class="table" id="table">
        <thead>
            <tr>
                <th v-for="item in th">{{ item }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(persona, indice) in personas" :key="indice">
                <td>{{ indice + 1 }}</td>
                <td v-for="dato of persona">{{ dato }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Persona } from "@/assets/ts/classes";

const th = reactive<string[]>([
    "#",
    "Nombre",
    "Apellido",
    "RUN",
    "Nacimiento",
    "Edad",
]);

const personas = reactive([
    new Persona("Tomas", "Yañez", "20298598-K", [1999, 11, 23], 22),
    new Persona("Camila", "Vidal", "12345678-9", [1998, 8, 21], 23),
    new Persona("Fernanda", "Apolo", "98765432-1", [1998, 9, 5], 23),
]);
</script>

<style scoped></style>
