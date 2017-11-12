<template>
  <div class="application"
       :style="{
         background,
         color
        }">
    <slot name="header"></slot>
    <slot name="title"></slot>
    <slot></slot>
  </div>
</template>

<script>
import Theme from '~/Theme'

export default {
  mixins: [Theme],
  props: {
    title: {
      type: String
    }
  },
  computed: {
    background () {
      return this.theme.background
    },
    color () {
      return this.theme.font
    }
  }
}
</script>

<style>
.application {
  display: flex;
  flex-flow: column;
  height: 100vh;
  font-size: 14px;
  font-family: "\30E1\30A4\30EA\30AA", Meiryo, "\30D2\30E9\30AE\30CE\89D2\30B4   Pro W3", "Hiragino Kaku Gothic Pro W3", sans-serif;
  line-height: 1.6;
  text-align: left;
  word-break: break-all;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input,
select {
  vertical-align: middle;
}

select {
  border: 0;
  cursor: pointer;
}

*:focus {
  outline: none;
}

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  color: inherit;
}

a {
  cursor: pointer;
}

a:link,
a:visited {
  text-decoration: underline;
}

button {
  font-family: "\30E1\30A4\30EA\30AA", Meiryo, "\30D2\30E9\30AE\30CE\89D2\30B4   Pro W3", "Hiragino Kaku Gothic Pro W3", sans-serif;
}

input,
textarea,
select,
button {
  font-family: "\30E1\30A4\30EA\30AA", Meiryo, "\30D2\30E9\30AE\30CE\89D2\30B4   Pro W3", "Hiragino Kaku Gothic Pro W3", sans-serif;
}

.heading-lv01 {
  position: relative;
  display: block;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.2;
}

.heading-lv02 {
  position: relative;
  display: block;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.2;
}

.heading-lv03 {
  display: block;
  padding-left: 10px;
  border-left: 5px solid #666;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.2;
}

*+.heading-lv01,
*+.heading-lv02,
*+.heading-lv03 {
  margin-top: 20px;
}

.heading-lv01+* {
  margin-top: 20px;
}

.heading-lv02+*,
.heading-lv03+* {
  margin-top: 10px;
}

.w100 {
  width: 100%;
}

.readOnly {
  cursor: default !important;
  text-decoration: none !important;
}

.disabled {
  cursor: not-allowed !important;
  text-decoration: none !important;
}

.pre-wrap {
  white-space: pre-wrap !important;
}

.inline-block {
  display: inline-block !important;
}

.text-s {
  font-size: 12px;
}

.text-m {
  font-size: 14px;
}

.text-l {
  font-size: 16px;
}

.text-ll {
  font-size: 18px;
}

.text-lll {
  font-size: 20px;
}

.text-number {
  font-family: "Noto Sans", sans-serif;
}

.text-strong {
  font-weight: bold;
}

.text-normal {
  font-weight: normal;
}

.text-result {
  min-width: 40px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "Noto Sans", sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.aC {
  text-align: center !important;
}

.aR {
  text-align: right !important;
}

.aL {
  text-align: left !important;
}

.vM {
  vertical-align: middle !important;
}

.vT {
  vertical-align: top !important;
}

.vB {
  vertical-align: bottom !important;
}

.mt00 {
  margin-top: 0 !important;
}

.mt05 {
  margin-top: 5px !important;
}

.mt10 {
  margin-top: 10px !important;
}

.mt15 {
  margin-top: 15px !important;
}

.mt20 {
  margin-top: 20px !important;
}

.mt25 {
  margin-top: 25px !important;
}

.mt30 {
  margin-top: 30px !important;
}

.mt35 {
  margin-top: 35px !important;
}

.mt40 {
  margin-top: 40px !important;
}

.mb00 {
  margin-bottom: 0 !important;
}

.mb05 {
  margin-bottom: 5px !important;
}

.mb10 {
  margin-bottom: 10px !important;
}

.mb15 {
  margin-bottom: 15px !important;
}

.mb20 {
  margin-bottom: 20px !important;
}

.mb25 {
  margin-bottom: 25px !important;
}

.mb30 {
  margin-bottom: 30px !important;
}

.mb35 {
  margin-bottom: 35px !important;
}

.mb40 {
  margin-bottom: 40px !important;
}

.ml00 {
  margin-left: 0 !important;
}

.ml05 {
  margin-left: 5px !important;
}

.ml10 {
  margin-left: 10px !important;
}

.ml15 {
  margin-left: 15px !important;
}

.ml20 {
  margin-left: 20px !important;
}

.ml25 {
  margin-left: 25px !important;
}

.ml30 {
  margin-left: 30px !important;
}

.ml35 {
  margin-left: 35px !important;
}

.ml40 {
  margin-left: 40px !important;
}

.mr00 {
  margin-right: 0 !important;
}

.mr05 {
  margin-right: 5px !important;
}

.mr10 {
  margin-right: 10px !important;
}

.mr15 {
  margin-right: 15px !important;
}

.mr20 {
  margin-right: 20px !important;
}

.mr25 {
  margin-right: 25px !important;
}

.mr30 {
  margin-right: 30px !important;
}

.mr35 {
  margin-right: 35px !important;
}

.mr40 {
  margin-right: 40px !important;
}
</style>
