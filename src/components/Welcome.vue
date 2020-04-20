
<template>
	<div class="hello">
		<h3>Text Box  with default text and place holder</h3>
		<label-edit :text="text" id="labeledit1" v-on:text-updated="textUpdated" placeholder="Enter some text"></label-edit>
	</div>
</template>

<script>
import LabelEdit from 'label-edit'
export default {
  name: 'HelloWorld',
  data () {
    return {
      text: 'Click this text!',
    }
  },
  components: {
    LabelEdit,
  },
  methods: {
    textUpdated: function(text){
      this.text = text;
    },
    handleSetUsername(text){
        this.$socket.emit('set_username',{text})
    }
  },
 
}
</script>