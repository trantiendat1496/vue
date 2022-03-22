<template>
  <v-container>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" label="Standard"></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" filled label="Filled style"></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" label="Outlined style" outlined></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" label="Solo field" solo></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  items = ["Foo", "Bar", "Fizz", "Buzz"];
  selected = 3;
}
</script>
