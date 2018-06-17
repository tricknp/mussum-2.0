<template>
<div>

<IconAi   v-if = "extension == 'ai'"   />
<IconAvi  v-if = "extension == 'avi'"  />
<IconCsv  v-if = "extension == 'csv'"  />
<IconDoc  v-if = "extension == 'doc' || extension == 'docx' || extension == 'odf'" />
<IconDwg  v-if = "extension == 'dwg'"  />
<Iconmp4  v-if = "extension == 'mp4'"  />  
<IconExe  v-if = "extension == 'exe'"  />
<IconFile v-if = "extension == 'link'" />
<IconFla  v-if = "extension == 'fla'"  />
<IconHtml v-if=  "extension == 'html'" />  
<IconIso  v-if = "extension == 'iso'"  />
<IconJs   v-if = "extension == 'js'"   />
<IconJson v-if = "extension == 'json'" />
<IconMp3  v-if = "extension == 'mp3'"  />
<IconPdf  v-if = "extension == 'pdf'"  />
<IconPpt  v-if = "extension == 'ppt'"  />
<IconTxt  v-if = "extension == 'txt'"  />
<IconXls  v-if = "extension == 'xls'"  />
<IconXml  v-if = "extension == 'xml'"  />
<IconZip  v-if = "extension == 'zip'"  />
<!-- <IconFolder  v-if = "extension=='folder'"  /> -->
    
</div>
</template>

<script>
import IconAi     from  "../_extensions/IconAi";
import IconAvi    from  "../_extensions/IconAvi";
import IconCsv    from  "../_extensions/IconCsv";
import IconDoc    from  "../_extensions/IconDoc";
import IconDwg    from  "../_extensions/IconDwg";
import IconExe    from  "../_extensions/IconExe";
import IconFile   from  "../_extensions/IconFile";
import IconFla    from  "../_extensions/IconFla";
import IconHtml   from  "../_extensions/IconHtml";
import IconIso    from  "../_extensions/IconIso";
import IconJs     from  "../_extensions/IconJs";
import IconJson   from  "../_extensions/IconJson";
import IconMp3    from  "../_extensions/IconMp3";
import IconMp4    from  "../_extensions/IconMp4";
import IconPdf    from  "../_extensions/IconPdf";
import IconPpt    from  "../_extensions/IconPpt";
import IconTxt    from  "../_extensions/IconTxt";
import IconXls    from  "../_extensions/IconXls";
import IconXml    from  "../_extensions/IconXml";
import IconZip    from  "../_extensions/IconZip";
import IconFolder from  "../_extensions/IconFolder";

export default {
  components: {
    IconAi,
    IconAvi,
    IconCsv,
    IconDoc,
    IconDwg,
    IconExe,
    IconFile,
    IconFla,
    IconHtml,
    IconJs,
    IconJson,
    IconMp3,
    IconMp4,
    IconPdf,
    IconPpt,
    IconTxt,
    IconXls,
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
      let re = /(?:\.([^.]+))?$/;
      let ext = re.exec(this.model.extension)[1];
      //this.model.extension = this.model.extension.split(".").pop();
      console.log("EXTENSAO FINAL:: " + ext);

      return ext ? ext : "folder";
    }
  }
};
</script>

