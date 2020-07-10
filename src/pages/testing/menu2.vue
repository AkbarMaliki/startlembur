<template>
  <div>
    <b-menu class="pl-2">
      <b-menu-list label="Menu">
        <b-menu-item icon="information-outline" label="Info"></b-menu-item>
        <!-- ONE MENU -->
        <b-menu-item icon="settings" active>
          <template slot="label" slot-scope="props">
            <span class="typcn typcn-user"></span>
            Administrator
            <span class="float-right" v-if="props.expanded">UP</span>
            <span class="float-right" v-else>Down</span>
          </template>
          <!-- MENU EXPAND -->
          <b-menu-item icon="account" label="Users"></b-menu-item>
          <b-menu-item icon="cellphone-link" label="Devices"></b-menu-item>
          <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
          <!-- MENU EXPAND END -->
        </b-menu-item>
        <!--  -->
        <b-menu-item icon="settings" active>
          <template slot="label" slot-scope="props">
            <span class="typcn typcn-user"></span>
            Acount
            <span class="float-right" v-if="props.expanded">UP</span>
            <span class="float-right" v-else>Down</span>
          </template>
          <b-menu-item icon="account" label="Uang"></b-menu-item>
        </b-menu-item>
        <!--  -->
      </b-menu-list>
      <b-menu-list>
        <b-menu-item label="Back" @click="$router.push('../')"></b-menu-item>
      </b-menu-list>
      <b-menu-list label="Actions">
        <b-menu-item label="Logout"></b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>