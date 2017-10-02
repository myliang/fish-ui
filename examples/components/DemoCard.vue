<template>
  <main-layout menuActiveIndex="card">
    <h3>Card 卡片</h3>
    <fish-card>
      <fish-row gutter="1">
        <fish-col span="4">
          <fish-card>
            <strong slot="header">Elliot requested permission</strong>
            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="image" width="100%"/>
          </fish-card>
        </fish-col>
        <fish-col span="4">
          <fish-card>
            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" slot="image" width="100%"/>
            Elliot requested permission to view your contact details
          </fish-card>
        </fish-col>
        <fish-col span="8">
          <fish-card>
            <h4>Elliot Fu</h4>
            <p>好友</p>
            Kristy is an art director living in New York.<br/>
            Veronika Ossi是一名居住在纽约的舞美师，她喜爱小猫、音乐和派对。<br/>
            萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。
            <br/>
            Many people also have their own barometers for what makes a cute dog.
          </fish-card>
        </fish-col>
        <fish-col span="8">
          <fish-card>
            <div slot="header">Header</div>
            Kristy is an art director living in New York.<br/>
            Veronika Ossi是一名居住在纽约的舞美师，她喜爱小猫、音乐和派对。<br/>
            萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。
            <br/>
            Many people also have their own barometers for what makes a cute dog.
            <div slot="footer">
              <fish-button>GO-Back</fish-button>
            </div>
          </fish-card>
        </fish-col>
      </fish-row>
      <footer slot="footer">
        <pre v-highlightjs><code class="html">&lt;fish-row gutter=&quot;1&quot;&gt;
  &lt;fish-col span=&quot;4&quot;&gt;
    &lt;fish-card&gt;
      &lt;strong slot=&quot;header&quot;&gt;Elliot requested permission&lt;/strong&gt;
      &lt;img src=&quot;https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png&quot; slot=&quot;image&quot; width=&quot;100%&quot;/&gt;
    &lt;/fish-card&gt;
  &lt;/fish-col&gt;
  &lt;fish-col span=&quot;4&quot;&gt;
    &lt;fish-card&gt;
      &lt;img src=&quot;https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png&quot; slot=&quot;image&quot; width=&quot;100%&quot;/&gt;
      Elliot requested permission to view your contact details
    &lt;/fish-card&gt;
  &lt;/fish-col&gt;
  &lt;fish-col span=&quot;8&quot;&gt;
    &lt;fish-card&gt;
      &lt;h4&gt;Elliot Fu&lt;/h4&gt;
      &lt;p&gt;好友&lt;/p&gt;
      Kristy is an art director living in New York.&lt;br/&gt;
      Veronika Ossi是一名居住在纽约的舞美师，她喜爱小猫、音乐和派对。&lt;br/&gt;
      萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。
      &lt;br/&gt;
      Many people also have their own barometers for what makes a cute dog.
    &lt;/fish-card&gt;
  &lt;/fish-col&gt;
  &lt;fish-col span=&quot;8&quot;&gt;
    &lt;fish-card&gt;
      &lt;div slot=&quot;header&quot;&gt;Header&lt;/div&gt;
      Kristy is an art director living in New York.&lt;br/&gt;
      Veronika Ossi是一名居住在纽约的舞美师，她喜爱小猫、音乐和派对。&lt;br/&gt;
      萌萌狗有各种形状和大小。有的小狗因为呆萌的表情惹人疼爱，有的则因为五短身材令人怜惜。甚至还有一些会因为巨大的体型也会显得傻缺。
      &lt;br/&gt;
      Many people also have their own barometers for what makes a cute dog.
      &lt;div slot=&quot;footer&quot;&gt;
        &lt;fish-button&gt;GO-Back&lt;/fish-button&gt;
      &lt;/div&gt;
    &lt;/fish-card&gt;
  &lt;/fish-col&gt;
&lt;/fish-row&gt;</code></pre>
      </footer>
    </fish-card>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'

  export default {
    components: {
      MainLayout
    }
  }
</script>
