<template>
  <p>
    <label for="all">
      <input
			value="-1"
			change="changeFilter"
			id="all"
			type="radio"
			name="todoFilter"
			v-bind:checked="activeFilter==-1"
			/>
			<span>all</span>
    </label>
    <label for="toggled">
			<input
			value="true"
			change="changeFilter"
			id="toggled"
			type="radio"
			name="todoFilter"
			v-bind:checked="activeFilter==-true"
			/>
			<span>toggled</span>
		</label>
    <label for="untoggled">
			<input
			value="false"
			change="changeFilter"
			id="untoggled"
			type="radio"
			name="todoFilter"
			v-bind:checked="activeFilter==-false"
			/>
			<span>unoggled</span>
    </label>
  </p>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
		vuex:{
			getters:{
				activeFilter: function(state){
					return state.todos.activeFilter;
				}
			},
			actions:{
				// ES6 Deconstructor
				changeFilter: function({ dispatch }, e) {
					dispatch('CHANGE_FILTER', {
						activeFilter: JSON.parse(e.target.value),
					});
				}
			}
		}
  });
</script>

<style lang="less">
  label {
    cursor: pointer;
  }
  input[type="radio"] {
    visibility: hidden;
    position: absolute;

    & + span {
      display: inline-block;
      padding: 3px 10px;
      transition: background 150ms;
    }

    &:checked + span {
      background: black;
      color: white;
    }
  }
</style>
