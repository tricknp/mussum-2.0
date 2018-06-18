<template>
<div>

<IconAi   v-if = "extension == 'ai'"   />
<IconAvi  v-if = "extension == 'avi'"  />
<IconCss  v-if = "extension == 'css'"  />
<IconCsv  v-if = "extension == 'csv'"  />
<IconDbf  v-if = "extension == 'dbf'"  />
<IconDoc  v-if = "extension == 'doc' || extension == 'docx' || extension == 'odf'" />
<IconDwg  v-if = "extension == 'dwg'"  />
<Iconmp4  v-if = "extension == 'mp4'"  />  
<IconExe  v-if = "extension == 'exe'"  />
<IconFile v-if = "extension == 'link'" />
<IconFla  v-if = "extension == 'fla'"  />
<IconHtml v-if=  "extension == 'html'" />  
<IconIso  v-if = "extension == 'iso'"  />
<IconJava v-if = "extension == 'java'" />
<IconJpg  v-if = "extension == 'jpg' || extension == 'jpeg'" />
<IconJs   v-if = "extension == 'js'"   />
<IconJson v-if = "extension == 'json'" />
<IconMp3  v-if = "extension == 'mp3'"  />
<IconPdf  v-if = "extension == 'pdf'"  />
<IconPng  v-if = "extension == 'png'"  />
<IconPpt  v-if = "extension == 'ppt'"  />
<IconRtf  v-if = "extension == 'rtf'"  />
<IconSvg  v-if = "extension == 'svg'"  />
<IconTxt  v-if = "extension == 'txt'"  />
<IconXls  v-if = "extension == 'xls'"  />
<IconXml  v-if = "extension == 'xml'"  />
<IconZip  v-if = "extension == 'zip'"  />
<!-- <IconFolder  v-if = "extension=='folder'"  /> -->
    
</div>
</template>

<script>
import IconAi     from  "./Svgs/_extensions/IconAi";
import IconAvi    from  "./Svgs/_extensions/IconAvi";
import IconCss    from  "./Svgs/_extensions/IconCss";
import IconCsv    from  "./Svgs/_extensions/IconCsv";
import IconDbf    from  "./Svgs/_extensions/IconDbf"
import IconDoc    from  "./Svgs/_extensions/IconDoc";
import IconDwg    from  "./Svgs/_extensions/IconDwg";
import IconExe    from  "./Svgs/_extensions/IconExe";
import IconFile   from  "./Svgs/_extensions/IconFile";
import IconFla    from  "./Svgs/_extensions/IconFla";
import IconHtml   from  "./Svgs/_extensions/IconHtml";
import IconIso    from  "./Svgs/_extensions/IconIso";
import IconJava   from  "./Svgs/_extensions/IconJava";
import IconJpg    from  "./Svgs/_extensions/IconJpg";
import IconJs     from  "./Svgs/_extensions/IconJs";
import IconJson   from  "./Svgs/_extensions/IconJson";
import IconMp3    from  "./Svgs/_extensions/IconMp3";
import IconMp4    from  "./Svgs/_extensions/IconMp4";
import IconPdf    from  "./Svgs/_extensions/IconPdf";
import IconPng    from  "./Svgs/_extensions/IconPng";
import IconPpt    from  "./Svgs/_extensions/IconPpt";
import IconRtf    from  "./Svgs/_extensions/IconRtf";
import IconSvg    from  "./Svgs/_extensions/IconSvg";
import IconTxt    from  "./Svgs/_extensions/IconTxt";
import IconXls    from  "./Svgs/_extensions/IconXls";
import IconXml    from  "./Svgs/_extensions/IconXml";
import IconZip    from  "./Svgs/_extensions/IconZip";
import IconFolder from  "./Svgs/_extensions/IconFolder";

export default {
  components: {
    IconAi,
    IconAvi,
    IconCss,
    IconCsv,
    IconDbf,
    IconDoc,
    IconDwg,
    IconExe,
    IconFile,
    IconFla,
    IconHtml,
    IconIso,
    IconJava,
    IconJpg, 
    IconJs,
    IconJson,
    IconMp3,
    IconMp4,
    IconPdf,
    IconPng,
    IconPpt,
    IconRtf,
    IconSvg,
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
      var re = /(?:\.([^.]+))?$/;
      var ext = re.exec(this.model.extension)[1];
      //this.model.extension = this.model.extension.split(".").pop();

      return ext ? ext : "folder";
    }
  }
};
</script>

