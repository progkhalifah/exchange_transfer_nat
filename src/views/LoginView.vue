<template>
  <div class="main-container">
    <div class="card mainCompo image_bkground">
      <div class="card-body">
        <h3>{{ $t('welcome_to_company') }}</h3>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">{{ $t('user_name') }}</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">{{ $t('password') }}</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary form-control" @click="loginBtn">
          <i class="fa-solid fa-right-to-bracket"></i> {{ $t('button_login') }}
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>

import {redirectTo} from "@/services/redirectTo";
import {useStore} from "vuex";

const store = useStore()

const loginBtn = ()=>{
  redirectTo(store, 'Dashboard')
}


</script>

<style lang="css" scoped>
.main-container {
  height: 100vh; /* Full page height */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/images/log33.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.image_bkground {

}

.mainCompo {
  margin: 0 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

/* Media Queries */
@media (max-width: 1024px) {
  .mainCompo {
    margin: 20px 10px;
    padding: 15px;
  }
}

@media (max-width: 768px) {
  .mainCompo {
    margin: 10px;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .mainCompo {
    margin: 5px;
    padding: 5px;
  }
}
</style>
