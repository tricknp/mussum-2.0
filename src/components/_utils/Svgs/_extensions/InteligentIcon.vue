<template>
<div>

<IconAi   v-if = "extension=='ai'"   />
<IconAvi  v-if = "extension=='avi'"  />
<IconDoc  v-if = "extension=='doc'"  />
<IconFile v-if = "extension=='exe'"  />
<IconHtml v-if = "extension=='html' || extension=='link'" />
<IconIso  v-if = "extension=='iso'"  />
<IconJs   v-if = "extension=='js'"   />
<IconJson v-if = "extension=='json'" />
<IconMp3  v-if = "extension=='mp3'"  />
<IconPdf  v-if = "extension=='pdf'"  />
<IconTxt  v-if = "extension=='txt'"  />
<IconXml  v-if = "extension=='xml'"  />
<IconZip  v-if = "extension=='zip'"  />
<!-- <IconFolder  v-if = "extension=='folder'"  /> -->
    
</div>
</template>

<script>
import IconAi from "../_extensions/IconAi";
import IconAvi from "../_extensions/IconAvi";
import IconDoc from "../_extensions/IconDoc";
import IconFile from "../_extensions/IconFile";
import IconHtml from "../_extensions/IconHtml";
import IconIso from "../_extensions/IconIso";
import IconJs from "../_extensions/IconJs";
import IconJson from "../_extensions/IconJson";
import IconMp3 from "../_extensions/IconMp3";
import IconPdf from "../_extensions/IconPdf";
import IconTxt from "../_extensions/IconTxt";
import IconXml from "../_extensions/IconXml";
import IconZip from "../_extensions/IconZip";
import IconFolder from "../_extensions/IconFolder";

export default {
  components: {
    IconAi,
    IconAvi,
    IconDoc,
    IconFile,
    IconHtml,
    IconJs,
    IconJson,
    IconMp3,
    IconPdf,
    IconTxt,
    IconXml,
    IconZip,
    IconFolder
  },
  props: {
    model: Object
  },
  computed: {
    extension: function() {
      //return this.model.children && this.model.children.length;
      console.log("EXTENSAO:: " + this.model.extension);
      var re = /(?:\.([^.]+))?$/;
      var ext = re.exec(this.model.extension)[1];
      //this.model.extension = this.model.extension.split(".").pop();
      console.log("EXTENSAO FINAL:: " + ext);

      return ext ? ext : "folder";
    }
  }
};
</script>

