<template>
  <main-layout menuActiveIndex="card">
    <h3>Card 卡片</h3>
    <vui-card>
      <vui-row gutter="1">
        <vui-col span="4">
          <vui-card>
            <strong slot="header">Elliot requested permission</strong>
            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="image" width="100%"/>
          </vui-card>
        </vui-col>
        <vui-col span="4">
          <vui-card>
            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="image" width="100%"/>
            Elliot requested permission to view your contact details
          </vui-card>
        </vui-col>
        <vui-col span="8">
          <vui-card>
            <h4>Elliot Fu</h4>
            <p>好友</p>
            Kristy is an art director living in New York.<br/>
            Veronika Ossi是一名居住在纽约的舞美师，她喜爱小猫、音乐和派对。<br/>
            萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。
            <br/>
            Many people also have their own barometers for what makes a cute dog.
          </vui-card>
        </vui-col>
        <vui-col span="8">
          <vui-card>
            <div slot="header">Header</div>
            Kristy is an art director living in New York.<br/>
            Veronika Ossi是一名居住在纽约的舞美师，她喜爱小猫、音乐和派对。<br/>
            萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。
            <br/>
            Many people also have their own barometers for what makes a cute dog.
            <div slot="footer">
              <vui-button>GO-Back</vui-button>
            </div>
          </vui-card>
        </vui-col>
      </vui-row>
      <footer slot="footer">
        <pre v-highlightjs><code class="html">&lt;vui-row gutter=&quot;1&quot;&gt;
  &lt;vui-col span=&quot;4&quot;&gt;
    &lt;vui-card&gt;
      &lt;strong slot=&quot;header&quot;&gt;Elliot requested permission&lt;/strong&gt;
      &lt;img src=&quot;https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png&quot; slot=&quot;image&quot; width=&quot;100%&quot;/&gt;
    &lt;/vui-card&gt;
  &lt;/vui-col&gt;
  &lt;vui-col span=&quot;4&quot;&gt;
    &lt;vui-card&gt;
      &lt;img src=&quot;https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png&quot; slot=&quot;image&quot; width=&quot;100%&quot;/&gt;
      Elliot requested permission to view your contact details
    &lt;/vui-card&gt;
  &lt;/vui-col&gt;
  &lt;vui-col span=&quot;8&quot;&gt;
    &lt;vui-card&gt;
      &lt;h4&gt;Elliot Fu&lt;/h4&gt;
      &lt;p&gt;好友&lt;/p&gt;
      Kristy is an art director living in New York.&lt;br/&gt;
      Veronika Ossi是一名居住在纽约的舞美师，她喜爱小猫、音乐和派对。&lt;br/&gt;
      萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。
      &lt;br/&gt;
      Many people also have their own barometers for what makes a cute dog.
    &lt;/vui-card&gt;
  &lt;/vui-col&gt;
  &lt;vui-col span=&quot;8&quot;&gt;
    &lt;vui-card&gt;
      &lt;div slot=&quot;header&quot;&gt;Header&lt;/div&gt;
      Kristy is an art director living in New York.&lt;br/&gt;
      Veronika Ossi是一名居住在纽约的舞美师，她喜爱小猫、音乐和派对。&lt;br/&gt;
      萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。
      &lt;br/&gt;
      Many people also have their own barometers for what makes a cute dog.
      &lt;div slot=&quot;footer&quot;&gt;
        &lt;vui-button&gt;GO-Back&lt;/vui-button&gt;
      &lt;/div&gt;
    &lt;/vui-card&gt;
  &lt;/vui-col&gt;
&lt;/vui-row&gt;</code></pre>
      </footer>
    </vui-card>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import VuiButton from '../components/Button.vue'
  import VuiCard from '../components/Card.vue'
  import VuiCol from '../components/Col.vue'
  import VuiRow from '../components/Row.vue'

  export default {
    components: {
      VuiRow,
      VuiCol,
      VuiCard,
      VuiButton,
      MainLayout
    }
  }
</script>
