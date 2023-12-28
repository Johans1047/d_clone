<!-- START TYPESCRIPT -->
<script lang="ts">
    export default {
        name: "StyledCheckbox",
        
        data(){
            return {
                containerId: `${this.$props.checkboxId}-container` as string,
                wrapperId: `${this.$props.checkboxId}-wrapper` as string,
                checked: false as boolean
            }
        },
        
        methods: {
            clickCheckbox(): void{
                this.checked = !this.checked;
            }
        },
        
        computed: {
            checkValue: {
                get(){
                    return this.modelValue as boolean;
                },
                set(value: boolean){
                    this.$emit("update:modelValue", value);
                }
            }
        },
        
        props: {
            checkboxId: {
                type: String,
                required: true
            },
            labelText: {
                type: String,
                required: true
            },
            modelValue: {}
        },
        
        components: {}
        
    }
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
<div :id=containerId>
<label :id=wrapperId :for=checkboxId class="flex items-center my-4">
    <div class="checkbox-outline bg-transparent mr-2 w-4 h-4 sm:w-5 sm:h-5 border border-neutral-400">
        <div v-if=checked class="checkbox-fill bg-blue-400 h-full w-full border-[3px] border-white"></div>
    </div>
    <input type="checkbox" :name=checkboxId :id=checkboxId class="hidden" @click="clickCheckbox()" v-model=checkValue>
    <span class="text-base sm:text-lg ml-2">{{ labelText }}</span>
</label>
</div>  
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>
    
</style>
<!-- END CSS -->