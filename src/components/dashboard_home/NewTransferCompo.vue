<template>
  <div class="row">
    <div class="col-8">
      <div class="card mainCompo bg-body-secondary">
        <div class="card-body">
          <div class="row">
            <div class="col-6">
                <label for="edtxtNameBeneficiary" class="form-label custom-font-size">{{ $t('name_beneficiary') }}</label>
                <input type="text" class="form-control" id="edtxtNameBeneficiary">
            </div><!--name_beneficiary-->
            <div class="col-6">
                <label for="edtxtPhoneBeneficiary" class="form-label custom-font-size">{{ $t('phone_beneficiary') }}</label>
                <input type="text" class="form-control" id="edtxtPhoneBeneficiary">
            </div><!--phone_beneficiary-->
          </div>

          <div class="mb-3">
            <label for="selectEntityToSend" class="form-label custom-font-size">{{$t('entity_to_send')}}</label>
            <input type="text" class="form-control" id="selectEntityToSend" list="datalistEntityToSend" :placeholder="$t('type_to_search')">
            <datalist id="datalistEntityToSend">
              <option value="sd3f2"></option>
              <option value="s56df"></option>
              <option value="s3d2f13ds2"></option>
              <option value="s63dfa1s2d"></option>
              <option value="s5dfsdf"></option>
            </datalist>
          </div> <!--entity to send-->

          <div class="row">
            <div class="col-6">
              <label for="selectCurrencySend" class="form-label custom-font-size">{{$t('currency_send')}}</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> <!--currency send-->
            <div class="col-6">
                <label for="edtxtAmountSend" class="form-label custom-font-size">{{ $t('amount_send') }}</label>
                <input type="text" class="form-control" id="edtxtAmountSend">
            </div> <!--amount send-->
          </div>
          <div class="row">
            <div class="col-6">
              <label for="selectCurrencyReceive" class="form-label custom-font-size">{{$t('currency_receive')}}</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div> <!--currency receive-->
            <div class="col-6">
                <label for="edtxtAmountReceive" class="form-label custom-font-size">{{ $t('amount_receive') }}</label>
                <input type="text" class="form-control" id="edtxtAmountReceive" disabled>
            </div><!--amount receive-->
          </div>
          <div class="row">
            <div class="col-6">
                <label for="edtxtwages" class="form-label custom-font-size">{{ $t('wages') }}</label>
                <input type="text" class="form-control" value="0" id="edtxtwages" disabled>
            </div><!--wages-->
            <div class="col-6">
                <label for="edtxtexchange" class="form-label custom-font-size">{{ $t('exchange') }}</label>
                <input type="text" class="form-control" value="1" id="edtxtexchange" disabled>
            </div><!--exchange-->
          </div>

          <div class="mb-3">
            <label for="edtxtNote" class="form-label custom-font-size">{{$t('note')}}</label>
            <input type="text" class="form-control" id="edtxtNote">

          </div> <!--note-->

          <div class="row">
            <div class="col-9">
              <label for="edtxtNote" class="form-label custom-font-size">{{$t('address')}}</label>
              <input type="text" class="form-control" id="edtxtNote">
            </div><!--address-->
            <div class="col-3 mt-4">
              <div class="btn btn-primary"><i class="fa-regular fa-copy"></i> {{ $t('copy') }}</div>
            </div><!--exchange-->
          </div> <!--copy address-->

          <div class="mt-3">
            <button class="btn btn-primary form-control">{{ $t('send') }} <i class="fa-solid fa-paper-plane"></i></button>
          </div> <!--send-->

        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card mainCompo">
        <div class="card-body">
          <h3>I am card Body</h3>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>


</script>

<style lang="css" scoped>

.mainCompo{
  margin: 10px 20px 0 20px;
}

@media (max-width: 1024px) {

}


@media (max-width: 768px) {

}

@media (max-width: 480px) {

}


</style>