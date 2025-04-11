<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr' ">
    <router-view/>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import {computed, ref} from "vue";
import {useStore} from "vuex";
import Cookies from "js-cookie";
import {redirectTo} from "@/services/redirectTo";


// Reactive variables for dynamic styles
const sideNavWidth = ref("17%");
const mainLeftMargin = ref("17%");
const navWidth = ref("83%");

const store = useStore();
const { locale } = useI18n()

// Function to open the side navigation
// Determine the layout direction
const isRtl = computed(() => locale.value === 'ar');
const mainDirection = computed(() => (isRtl.value ? 'marginRight' : 'marginLeft'));
const logout = ()=>{
  removeAllCookies();
  redirectTo(store, 'SignIn')
}

function removeAllCookies() {
  // Get all cookies
  const cookies = Cookies.get();  // Get all cookies as an object

  // Loop through all cookies and remove each one
  Object.keys(cookies).forEach(cookieName => {
    // Remove each cookie (no need for domain or path here)
    Cookies.remove(cookieName);
  });
}
const openCloseNav = ()=>{

  if (sideNavWidth.value === "17%" && mainLeftMargin.value === "17%"){
    sideNavWidth.value = "0";
    mainLeftMargin.value = "0";
    navWidth.value = "100%";
  }else {
    sideNavWidth.value = "17%";
    mainLeftMargin.value = "17%";
    navWidth.value = "83%"
  }

}


// Create a computed property for the current language state
// Computed property to get the current language
const isEnglish = computed(() => store.getters.currentLanguage === 'en');

// Method to switch language
const switchLanguage = (lang) => {
  if (lang === 'en') {
    if (!isEnglish.value) store.dispatch('changeLanguage'); // Toggle to English
    locale.value = 'en'; // Update i18n locale
  } else {
    if (isEnglish.value) store.dispatch('changeLanguage'); // Toggle to Arabic
    locale.value = 'ar'; // Update i18n locale
  }
};

/*

// Remove the cookie 'tokenOfUser' with path
Cookies.remove('tokenOfUser', { path: '' });

// Remove the cookie 'tokenOfUser' with domain
Cookies.remove('tokenOfUser', { domain: 'example.com' });

// Usage: Call this function to remove all cookies
removeAllCookies();


*/

</script>

<style lang="css" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* General Reset */
body {
  margin: 0;
  background-color: #42b983;
}

/* Navbar Styles */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2581C4;
  color: white;
  padding: 10px 20px;
  position: fixed;
  width: 87%;
  top: 0;
  z-index: 1000;
  transition: 0.5s;

}

.navbar-title {
  margin: 0;
}

.menu-icon {
  cursor: pointer;
  font-size: 20px;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.navbar-links a {
  color: #E9BE46;
  text-decoration: none;
}

.navbar-links a:hover {
  text-decoration: underline;
}

/* Side Navigation Bar */
.sidenav-ltr {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #2581C4;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  color: white;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.sidenav-rtl {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #2581C4;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  color: white;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.sidenav-ltr::-webkit-scrollbar {
  display: none;
}

.sidenav-rtl::-webkit-scrollbar {
  display: none;
}

/* Side navigation links */
.sidenav-rtl a{
  padding: 8px 10px 8px 8px;
  text-decoration: none;
  font-size: 18px;
  color: #E9BE46;
  display: block;
  transition: 0.3s;
}

.sidenav-ltr a{
  padding: 8px 8px 8px 10px;
  text-decoration: none;
  font-size: 18px;
  color: #E9BE46;
  display: block;
  transition: 0.3s;
}

.sidenav-ltr a:hover,
.sidenav-rtl a:hover{
  background-color: #23B9D7;
}

.sidenav-ltr .closebtn,
.sidenav-rtl .closebtn {
  position: absolute;
  top: 0;
  font-size: 36px;
}

.sidenav-ltr .closebtn {
  right: 25px;
}

.sidenav-rtl .closebtn {
  left: 25px;
}

/* Main Content */
/*#main {
  transition: margin-left 0.5s; !* Smooth transition *!
  margin-top: 60px; !* Adjust for navbar height *!
}*/

#main {
  transition: margin 0.5s; /* Smooth transition for margin changes */
  margin-top: 60px; /* Adjust for navbar height */
}

.custom-font-awesome{
  color: white;
  cursor: pointer;
}

@media (max-width: 1024px) {

}

/* Tablet Screen*/
@media (max-width: 768px) {

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2581C4;
    color: #E9BE46;
    padding: 10px 20px;
    position: fixed;
    width: 87%;
    top: 0;
    z-index: 1000;
    transition: 0.5s;

  }

  /* Side Navigation Bar */
  .sidenav-ltr {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    color: white;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .sidenav-rtl {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 10%;
    background-color: #2581C4;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    color: white;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .sidenav-ltr::-webkit-scrollbar {
    display: none;
  }

  .sidenav-rtl::-webkit-scrollbar {
    display: none;
  }

  /* Side navigation links */
  .sidenav-rtl a{
    padding: 8px 10px 8px 8px;
    text-decoration: none;
    font-size: 18px;
    color: black;
    display: block;
    transition: 0.3s;
  }

  .sidenav-ltr a{
    padding: 8px 8px 8px 10px;
    text-decoration: none;
    font-size: 18px;
    color: #E9BE46;
    display: block;
    transition: 0.3s;
  }

  .sidenav-ltr .closebtn,
  .sidenav-rtl .closebtn {
    position: absolute;
    top: 0;
    font-size: 36px;
  }

  .sidenav-ltr .closebtn {
    right: 25px;
  }

  .sidenav-rtl .closebtn {
    left: 25px;
  }


}
/* End Tablet Screen*/

/* Phone Screen*/
@media (max-width: 480px) {

}
/* End Phone Screen*/




</style>



