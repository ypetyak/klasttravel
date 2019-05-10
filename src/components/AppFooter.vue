<template>
	<div>
    <div class="appFooter">
        <div v-if="'RU' == language" class="address">
			<p> Свободы 55 </p>
			<p> г. Хмельницкий
			<p> тел. +3802345678 </p>
        </div>
		<div v-else class="address">
			<p> Свободи 55 </p>
			<p> м. Хмельницький
			<p> тел. +3802345678 </p>
        </div>
        <div v-if="'RU' == language" class="scrollToTop">
            <button class="button-footer" v-on:click="scrollToTop()"> Вернуться к началу </button>
        </div>
		<div v-else class="scrollToTop">
            <button class="button-footer" v-on:click="scrollToTop()"> Повернутися до початку </button>
        </div>
        <div class="socialMediaBox">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img class="icon" src="../assets/instagram.png" alt="instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img class="icon" src="../assets/facebook.png" alt="instagram" />
            </a>

        </div>

    </div>
		<h2 class="klast-travel-copyright"> Klast Travel	&copy; 2019 </h2>
	</div>
</template>

<script>
export default {
    name: 'AppFooter',
	props: {
		language: ''
	},
    methods: {
        scrollToTop() {
                window.scrollTo(0,0);
           }
    }
}
</script>

<style scoped>



.appFooter {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    background-color: #FF4136;
}

.address {
	color: snow;
	margin-left: 50px;
	margin-top: 20px;
}

.icon {
    width: 50px;
    height: 50px;
	margin-right: 20px;
	margin-left: 20px;
}

.icon:hover {
	opacity: 0.8;
}

.button-footer {
    outline: none;
    width: 300px;
    padding: 1px;
    margin-top: 10px;
    background: transparent;
    border: 2px solid snow;
    cursor: pointer;
    height: 40px;
    color: white;
    font-size: 20px;
}

.button-footer:hover {
    opacity: 0.8;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05)

}

.klast-travel-copyright {
	text-align: center;
	background-color: #FF4136;
	color: snow;
	margin: 0px;
	font-size: 20px;
	padding: 5px;
}

/* Media Queries */

@media screen and (max-width: 415px) {

	.appFooter {
		flex-direction: column;
		justify-content: center;
		height: 300px;
	}

	.address {
		margin-left: 0px;
		margin-top: 0px;
	}

	.button-footer {
	    margin-bottom: 10px;
	}

	.socialMediaBox {
		margin-top: 20px;
	}

}

</style>
