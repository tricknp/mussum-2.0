<template>
  <section>
      
      <Header />
      
      <Info />
      <Footer />

  </section>
</template>

<script>
import Header from "../../FixedComponents/Header/Header";
//import TeacherAside from '../../FixedComponents/Aside/TeacherAside'
import Info from "./Info/TeacherInfo";
import Footer from "../../FixedComponents/Footer/Footer";

export default {
  name: "Teacher",

  components: { Header, Info, Footer },

  data() {
    return {
      treeData: [
        {
          text: "Item 1",
          state: { expanded: false },
          children: [
            { text: "Item 2.1" },
            { text: "Item 2.2" },
            { text: "Item 2.3" }
          ]
        },

        {
          text: "Item 2",
          state: { expanded: false },
          children: [
            { text: "Item 2.1" },
            { text: "Item 2.2" },
            { text: "Item 2.3" }
          ]
        },

        { text: "Item 3", state: { selected: false } }
      ],
      treeOptions: {}
    };
  },
  methods: {
    onNodeSelected(node) {
      console.log(node.text);
    }
  }
};
</script>
