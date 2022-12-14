<template>
  <validation-observer ref="obs" v-slot="ObserverProps">
    <div>
      <validation-provider rules="required" name="firstName" v-slot="{ errors }">
        <label for="firstName">名前</label>
        <input name="name" v-model="name" />
        <span>{{ errors[0] }}</span>
      </validation-provider>
    </div>
    <div>
      <label for="genderList">性別
        <input type="radio" id="gender" name="gender" value="man" checked />
        <label for="man">男</label>
        <input type="radio" id="gender" name="gender" value="woman" />
        <label for="woman">女</label>
      </label>
    </div>
    <div>
      <label for="age">年齢</label>
      <input type="number" id="age" name="age" min="0" max="100" />
    </div>
    <div>
      <ValidationProvider rules="email|required" v-slot="{ errors }">
        <label for="email">メールアドレス</label>
        <input type="text" name="email" v-model="email">
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </div>
    <button type="submit" @click="handleSubmit()" :disabled="ObserverProps.invalid || !ObserverProps.validated">送信する</button>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import ja from 'vee-validate/dist/locale/ja.json'
extend('required', required)
extend('email', email)
localize('ja', ja)
localize('ja')
localize({
  ja: {
    messages: ja.messages,
    names: {
      firstName: '名前',
      age:'',
      email: 'Eメール'
    }
  }
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => {
    return {
      name: '',
      age: '',
      email: ''
    }
  },
  methods: {
    handleSubmit () {
      alert('送信しました。')
    }
  }
}
</script>

<style scoped></style>
