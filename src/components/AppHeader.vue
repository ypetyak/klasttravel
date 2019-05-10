<template>
    <div class="appHeader" v-bind:class="{ sticky: isActive }">
        <div class="logoHeader">
            <img src="../assets/LogoRed.png" />
        </div>
        <div class="phonesHeader">
            +3802345678
        </div>
        <div v-if="'RU' == language" class="menuHeader">
            <div class="linkBox">
                <router-link to="/" class="linkElement"> Главная </router-link>
            </div>
            <div class="linkBox">
                <router-link to="/searchTour" class="linkElement"> Поиск Тура </router-link>
            </div>
            <div class="linkBox">
                <router-link to="/about" class="linkElement"> О нас </router-link>
            </div>
            <div class="linkBox">
                <router-link to="/contactInformation" class="linkElement"> Контакты </router-link>
            </div>
        </div>
		<div v-else class="menuHeader">
            <div class="linkBox">
                <router-link to="/" class="linkElement"> Головна</router-link>
            </div>
            <div class="linkBox">
                <router-link to="/searchTour" class="linkElement"> Пошук Туру </router-link>
            </div>
            <div class="linkBox">
                <router-link to="/about" class="linkElement"> Про нас </router-link>
            </div>
            <div class="linkBox">
                <router-link to="/contactInformation" class="linkElement"> Контакти </router-link>
            </div>
        </div>
		<div v-if="'RU' == language" class="language-box">
			<h1  class="language-select" @click="languageChange"> UA </h1>
		</div>
		<div v-else class="language-box">
			<h1 class="language-select" @click="languageChange"> RU </h1>
		</div>
    </div>
</template>



<script>

export default {
    name: "AppHeader",
	props: {
		language: ''
	},

    data() {
        return {
            isActive: false
        }
    },
    methods: {
        handleScroll(event) {
            this.isActive = true;
        },

		languageChange() {
			this.$emit('languageChange', this.language)
		}
    },
    created () {
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Forum');

* {
    font-family: 'Forum', cursive;
}

.appHeader {
    display: flex;
    width: 100%;
    height: 75px;
    align-items: center;
    justify-content: space-between;
    background-color: #FF4136;
    opacity: 1;
	z-index: 1;
}

.logoHeader {
    margin-left: 50px;

}

.sticky {
	position: fixed;
   top: 0;
   left: 0;
   right: 0;
   transition: 0.2s transform cubic-bezier(.3,.73,.3,.74);
}

img {
    height: 70px;
    width: 100px;
}

.phonesHeader {
    font-size: 25px;
    margin: 10px;
    color: white;
}

.menuHeader {
    margin-right: 50px;
    display: flex;
    flex-direction: row;
}

.linkBox {
    width: 150px;
    height: 75px;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.linkBox:hover {
    background-color: black;
    opacity: 0.2;
}

.linkElement {
    display: block;
    width: 150px;
    height: 75px;
    font-size: 25px;
    margin-top: 20px;
    color: snow;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
}

.language-select {
	color: snow;
	margin-right: 20px;
	border: 2px solid snow;
	padding: 5px;
	font-size: 20px;
}

.language-select:hover {
	opacity: 0.8;
	cursor: pointer;
}

/* .linkElement:hover {
    opacity: 0.3;
    cursor: pointer;
    background-color: black;
} */

/*  Media Queries here */

@media screen and (max-width: 415px) {


	.appHeader {
	    display: grid;
		grid-template-columns: 20% 20% 20% 20% 20%;
  		grid-template-rows: 75px 75px;
	    width: 100%;
	    height: 150px;
	    background-color: #FF4136;
	    opacity: 1;
		z-index: 1;
	}

	.sticky {
		position: relative;
	}

	.logoHeader {
		display: flex;
		align-items: center;
		justify-content: center;
	    margin-left: 5px;
		width: 100%;
		height: 75px;
		grid-column: 1 / span 2;
  		grid-row: 1;

	}

	img {
	    height: 75px;
	    width: 100px;
	}

	.phonesHeader {
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 75px;
	    font-size: 15px;
	    color: white;
		grid-column: 3;
  		grid-row: 1;
	}

	.menuHeader {
	    margin-right: 0px;
	    display: flex;
	    flex-direction: row;
		grid-column: 1 / span 5;
  		grid-row: 2;
	}

	.linkBox {
		display: flex;
		align-items: center;
		justify-content: center;
	    width: 100%;
	    height: 75px;

	}

	.linkElement {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 15px;
		width: 100%;
		height: 75px;
	    font-size: 15px;
	    color: snow;
	}

	.language-box {
		grid-column: 5;
  		grid-row: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.language-select {
		width: 24px;
		color: snow;
		border: 2px solid snow;
		padding: 5px;
		font-size: 20px;
	}

}

</style>
