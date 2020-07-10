<template>
  <div>
    <radial-progress-bar
      :diameter="200"
      :completed-steps="completedSteps"
      :total-steps="totalSteps"
      :startColor="'red'"
      :stopColor="'blue'"
      :innerStrokeColor="'black'"
      :fps="'60'"
    >
      <p>Total steps: {{ totalSteps }}</p>
      <p>Completed steps: {{ completedSteps }}</p>
    </radial-progress-bar>
    <button type="button" @click="completedSteps=completedSteps+10" class="btn btn-sm btn-primary">+</button>
    <button type="button" @click="completedSteps=completedSteps-10" class="btn btn-sm btn-primary">-</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      completedSteps: 0,
      totalSteps: 100
    }
  }
}
</script>