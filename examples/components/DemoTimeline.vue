<template>
  <main-layout menuActiveIndex="timeline">
    <h3>Timeline</h3>
    <fish-row gutter="1">
      <fish-col span="12">
        <code-card title="Basic" desc="Basic use case">
          <template slot="demo">
            <fish-timeline>
              <fish-timeline-item>
                I ain't shooting this thing, I hate guns.
              </fish-timeline-item>
              <fish-timeline-item>
                <h4>I find your lack of faith disturbing</h4>
                Don't be too proud of this technological terror you've constructed.
                The ability to destroy a planet is insignificant next to the power of the Force.
                The plans you refer to will soon be back in our hands.
                A tremor in the Force. The last time I felt it was in the presence of my old master.
                Escape is not his plan. I must face him. Alone.
              </fish-timeline-item>
            </fish-timeline>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-timeline&gt;
  &lt;fish-timeline-item&gt;
    I ain&#x27;t shooting this thing, I hate guns.
  &lt;/fish-timeline-item&gt;
  &lt;fish-timeline-item&gt;
    &lt;h4&gt;I find your lack of faith disturbing&lt;/h4&gt;
    Don&#x27;t be too proud of this technological terror you&#x27;ve constructed.
    The ability to destroy a planet is insignificant next to the power of the Force.
    The plans you refer to will soon be back in our hands.
    A tremor in the Force. The last time I felt it was in the presence of my old master.
    Escape is not his plan. I must face him. Alone.
  &lt;/fish-timeline-item&gt;
&lt;/fish-timeline&gt;</code></pre>
        </code-card>
      </fish-col>
      <fish-col span="12">
        <code-card title="Color" desc="set timeline item color">
          <template slot="demo">
            <fish-timeline>
              <fish-timeline-item color="red">
                I ain't shooting this thing, I hate guns.
              </fish-timeline-item>
              <fish-timeline-item>
                <h4>I find your lack of faith disturbing</h4>
                Don't be too proud of this technological terror you've constructed.
                The ability to destroy a planet is insignificant next to the power of the Force.
                The plans you refer to will soon be back in our hands.
                A tremor in the Force. The last time I felt it was in the presence of my old master.
                Escape is not his plan. I must face him. Alone.
              </fish-timeline-item>
            </fish-timeline>
          </template>
          <pre v-highlightjs slot="codeHtml"><code class="xml">&lt;fish-timeline&gt;
  &lt;fish-timeline-item color=&quot;red&quot;&gt;
    I ain&#x27;t shooting this thing, I hate guns.
  &lt;/fish-timeline-item&gt;
  &lt;fish-timeline-item&gt;
    &lt;h4&gt;I find your lack of faith disturbing&lt;/h4&gt;
    Don&#x27;t be too proud of this technological terror you&#x27;ve constructed.
    The ability to destroy a planet is insignificant next to the power of the Force.
    The plans you refer to will soon be back in our hands.
    A tremor in the Force. The last time I felt it was in the presence of my old master.
    Escape is not his plan. I must face him. Alone.
  &lt;/fish-timeline-item&gt;
&lt;/fish-timeline&gt;</code></pre>
        </code-card>
      </fish-col>
    </fish-row>

    <h3>TimelineItem Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in api_data">
          <td v-for="v in item" v-html="v"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </main-layout>
</template>
<script>
  import MainLayout from './MainLayout.vue'
  import CodeCard from './CodeCard.vue'

  export default {components: {
    CodeCard,
    MainLayout},
    data () {
      return {
        api_columns: ['Attribute', 'Description', 'Type', 'Default'],
        api_data: [
          ['color', 'optional: <code>red</code>, <code>orange</code>, <code>yellow</code>, <code>olive</code>, <code>green</code>, <code>teal</code>, <code>blue</code>, <code>violet</code>, <code>purple</code>, <code>pink</code>, <code>brown</code>, <code>grey</code>, <code>black</code>', 'String', '-']
        ]
      }
    }
  }
</script>