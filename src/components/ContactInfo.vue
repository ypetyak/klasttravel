<template>
    <div class="mainContactDiv">
        <div v-if="'RU' == language" class="contactInfoAndMap">
            <div class="contactInfoDiv">
                <div class="infoBox">
                    <h2> Адрес: </h2>
                    <div class="redLine"></div>
                    <p> Свободы 55, Хмельницкий </p>
                </div>
                <div class="infoBox">
                    <h2> Телефон: </h2>
                    <div class="redLine"></div>
                    <p> +380111111 </p>
                </div>
                <div class="infoBox">
                    <h2> Email: </h2>
                    <div class="redLine"></div>
                    <p> klast@mail.com </p>
                </div>
            </div>
            <div class="contactMap">
                <iframe class="google-map" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJM6sDeVcGMkcR6OB898zPaug&key=AIzaSyCJSa-GZOuKsfP7yC6FKcehDPlUsre81sI" allowfullscreen></iframe>
            </div>
        </div>
		<div v-else class="contactInfoAndMap">
            <div class="contactInfoDiv">
                <div class="infoBox">
                    <h2> Адреса: </h2>
                    <div class="redLine"></div>
                    <p> Свободи 55, Хмельницький </p>
                </div>
                <div class="infoBox">
                    <h2> Телефон: </h2>
                    <div class="redLine"></div>
                    <p> +380111111 </p>
                </div>
                <div class="infoBox">
                    <h2> Email: </h2>
                    <div class="redLine"></div>
                    <p> klast@mail.com </p>
                </div>
            </div>
            <div class="contactMap">
                <iframe class="google-map" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJM6sDeVcGMkcR6OB898zPaug&key=AIzaSyCJSa-GZOuKsfP7yC6FKcehDPlUsre81sI" allowfullscreen></iframe>
            </div>
        </div>
        <div class="contactForm">
            <ContactForm :language="language"></ContactForm>
        </div>
    </div>
</template>

<script>

import ContactForm from "./ContactForm";

export default {
    name: 'ContactInfo',
	props: {
		language: ''
	},
    components: {
        ContactForm
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Forum');

* {
    font-family: 'Forum', cursive;
}

.mainContactDiv {
    display: flex;
    flex-direction: column;
    background: snow;
}

.contactInfoAndMap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 750px;
}

.contactInfoDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 750px;
}

.redLine {
    width: 300px;
    height: 3px;
    background-color: rgb(255,65,54);
}


.contactMap {
    display: flex;
    width: 100%;
    height: 750px;
    justify-content: center;
    align-items: center;
}

.google-map {
	width: 600px;
	height: 450px;
}
/*  Media Queries */

@media screen and (max-width: 415px) {
	.contactInfoAndMap {
	    flex-direction: column;
	    height: 850px;
	}

	.contactMap {
	    height: 350px;
	}

	.google-map {
		width: 350px;
		height: 300px;
	}
}


</style>

        <!-- <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJM6sDeVcGMkcR6OB898zPaug&key=AIzaSyCJSa-GZOuKsfP7yC6FKcehDPlUsre81sI" allowfullscreen></iframe> -->
