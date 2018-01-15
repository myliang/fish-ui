<template>
  <main-layout menuActiveIndex="collapse">
    <h3>Collapse</h3>
    <code-card title="Basic" desc="Basic Collapse">
      <template slot="demo">
        <fish-collapse>
          <fish-collapse-item>
            <template slot="title">What is a dog?</template>
            <p class="transition visible" style="display: block !important;">A dog .</p>
          </fish-collapse-item>
          <fish-collapse-item title="What kinds of dogs are there?">
            <p class="transition hidden">There are many breeds of dogs.</p>
          </fish-collapse-item>
          <fish-collapse-item title="How do you acquire a dog?">
            <p class="transition hidden">Three common ways for a prospective owner</p>
          </fish-collapse-item>
        </fish-collapse>
      </template>
      <template slot="codeHtml">
    <pre v-highlightjs><code class="xml">&lt;fish-collapse&gt;
  &lt;fish-collapse-item&gt;
    &lt;template slot=&quot;title&quot;&gt;What is a dog?&lt;/template&gt;
    &lt;p class=&quot;transition visible&quot; style=&quot;display: block !important;&quot;&gt;A dog .&lt;/p&gt;
  &lt;/fish-collapse-item&gt;
  &lt;fish-collapse-item title=&quot;What kinds of dogs are there?&quot;&gt;
    &lt;p class=&quot;transition hidden&quot;&gt;There are many breeds of dogs.&lt;/p&gt;
  &lt;/fish-collapse-item&gt;
  &lt;fish-collapse-item title=&quot;How do you acquire a dog?&quot;&gt;
    &lt;p class=&quot;transition hidden&quot;&gt;Three common ways for a prospective owner&lt;/p&gt;
  &lt;/fish-collapse-item&gt;
&lt;/fish-collapse&gt;</code></pre>
      </template>
    </code-card>

    <code-card title="Border" desc="Border Collapse">
      <template slot="demo">
        <fish-collapse bordered>
          <fish-collapse-item title="What is a dog?">
            <p class="transition visible" style="display: block !important;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
          </fish-collapse-item>
          <fish-collapse-item title="What kinds of dogs are there?">
            <p class="transition hidden">There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
          </fish-collapse-item>
          <fish-collapse-item title="How do you acquire a dog?">
            <p class="transition hidden">Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
        <p class="transition hidden">A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
          </fish-collapse-item>
        </fish-collapse>
      </template>
      <template slot="codeHtml">
    <pre v-highlightjs><code class="xml">&lt;fish-collapse bordered&gt;
  &lt;fish-collapse-item title=&quot;What is a dog?&quot;&gt;
    &lt;p class=&quot;transition visible&quot; style=&quot;display: block !important;&quot;&gt;
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, 
    it can be found as a welcome guest in many households across the world.&lt;/p&gt;
  &lt;/fish-collapse-item&gt;
  &lt;fish-collapse-item title=&quot;What kinds of dogs are there?&quot;&gt;
    &lt;p class=&quot;transition hidden&quot;&gt;There are many breeds of dogs. 
    Each breed varies in size and temperament. Owners often select a breed of dog that they find to 
    be compatible with their own lifestyle and desires from a companion.&lt;/p&gt;
  &lt;/fish-collapse-item&gt;
  &lt;fish-collapse-item title=&quot;How do you acquire a dog?&quot;&gt;
    &lt;p class=&quot;transition hidden&quot;&gt;Three common ways for a prospective owner to acquire a dog is from pet shops, 
    private owners, or shelters.&lt;/p&gt;
&lt;p class=&quot;transition hidden&quot;&gt;A pet shop may be the most convenient way to buy a dog. Buying a dog 
from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. 
Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.&lt;/p&gt;
  &lt;/fish-collapse-item&gt;
&lt;/fish-collapse&gt;</code></pre>
      </template>
    </code-card>
    
    <h3>Collapse Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in api_data" :key="index">
          <td v-for="v in item" v-html="v" :key="v"></td>
        </tr>
        </tbody>
      </table>
    </div>

    <h3>CollapseItem Attributes</h3>
    <div class="fish table attributes">
      <table style="table-layout: auto;">
        <thead>
        <tr>
          <th v-for="column in api_columns" :key="column">{{column}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in api_data2" :key="index">
          <td v-for="v in item" v-html="v" :key="v"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from './MainLayout.vue'
import CodeCard from './CodeCard.vue'

export default {
  components: {
    CodeCard,
    MainLayout
  },
  name: 'demo-collapse',
  data () {
    return {
      api_columns: ['Attribute', 'Description', 'Type', 'Default'],
      api_data: [
        ['bordered', 'Whether checkbox is bordered or not', 'Boolean', 'false']
      ],
      api_data2: [
        ['title', 'collapse title or slot="title"', 'String', '-']
      ]
    }
  }
}
</script>

