<template>
  <div>
    <social-sharing :url="`${URLfull}`" 
    :title="title" 
    :description="description" 
    :quote="quotenya"
    :hashtags="hashtags"
    :twitter-user="twitterUser"
    inline-template>
      <div>
        <div class="flex flex-wrap flex-row">
          <network network="facebook" class="btns btns-xs mr-1 bg-blue text-black hover:bg-white rounded-lg text-sm font-times cursor-pointer"
            style="border:none">
            <span class="typcn typcn-social-facebook-circular" style="font-size:19px;"></span> Facebook
          </network>
          <network network="googleplus" class="btns btns-xs mr-1 bg-red-light text-black hover:bg-white rounded-lg text-sm font-times cursor-pointer"
            style="border:none">
            <span class="typcn typcn-social-google-plus" style="font-size:19px;"></span> Google +
          </network>
          <network network="linkedin" class="btns btns-xs mr-1 bg-blue-dark text-black hover:bg-white rounded-lg text-sm font-times cursor-pointer"
            style="border:none">
            <span class="typcn typcn-social-linkedin-circular" style="font-size:19px;"></span> LinkedIn
          </network>
          <network network="twitter" class="btns btns-xs mr-1 bg-blue-light text-black hover:bg-white rounded-lg text-sm font-times cursor-pointer"
            style="border:none">
            <span class="typcn typcn-social-twitter-circular" style="font-size:19px;"></span> Twitter
          </network>
          <div class="d-sm-none">
            <network network="line" class="btns btns-xs mr-1 bg-green-light text-black hover:bg-white rounded-lg text-sm font-times cursor-pointer p-2"
              style="border:none">
              <i class="fa fa-line"></i> Line
            </network>
            <network network="telegram" class="btns btns-xs mr-1 bg-white text-black hover:bg-white rounded-lg text-sm font-times cursor-pointer p-2"
              style="border:1px solid grey">
              <i class="fa fa-telegram"></i> Telegram
            </network>
            <network network="whatsapp" class="btns btns-xs mr-1 bg-green text-black hover:bg-white rounded-lg text-sm font-times cursor-pointer p-2"
              style="border:none">
              <i class="fa fa-whatsapp"></i> Whatsapp
            </network>
          </div>
        </div>
      </div>
    </social-sharing>
    <!-- <network network="reddit" class="btns btns-xs mr-1 bg-orange text-black rounded-lg text-sm font-times cursor-pointer" style="border:none">
        <i class="fa fa-reddit"></i> Reddit
    </network> -->
    <!-- <network network="email" class="btns btns-sm bg-blue text-black">
            <span class="typcn typcn-mail" style="font-size:19px;"></span> Email
        </network> -->
    <!-- <network network="odnoklassniki" class="btns btns-sm bg-blue text-black">
          <i class="fa fa-odnoklassniki"></i> Odnoklassniki
        </network> -->
    <!-- <network network="pinterest" class="btns btns-sm bg-blue text-black">
          <span class="typcn typcn-social-pinterest-circular" style="font-size:19px;"></span>  Pinterest
        </network> -->
    <!-- <network network="skype" class="btns btns-sm bg-blue text-black">
          <span class="typcn typcn-social-skype" style="font-size:19px;"></span>  Skype
        </network> -->
    <!-- <network network="sms" class="btns btns-sm bg-blue text-black">
          <i class="fa fa-commenting-o"></i> SMS
        </network> -->
    <!-- <network network="vk" class="btns btns-sm bg-blue text-black">
          <i class="fa fa-vk"></i> VKontakte
        </network> -->
    <!-- <network network="weibo" class="btns btns-sm bg-blue text-black">
          <i class="fa fa-weibo"></i> Weibo
        </network> -->
  </div>
</template>
<script>
export default {
  computed: {
    URLfull() {
      return this.$store.state.url + this.$route.fullPath
    },
    quotenya() {
      return this.quote.toUpperCase()
    }
  },
  props: {
    description: { type: String, required: true },
    title: { type: String, required: true },
    quote: { type: String, required: true },
    hashtags: { type: String, required: true },
    twitterUser: { type: String, required: true }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>
