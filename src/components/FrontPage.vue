<template>
    <div>
        <div v-if="'RU' == language" class="firstBlock">
            <div class="layer">
                <h1 class="firstHeader">
                    Мы поможем вам посетить самые лучшие места на планете
                </h1>
            </div>
        </div>
		<div v-else class="firstBlock">
            <div class="layer">
                <h1 class="firstHeader">
                    Ми допоможемо вам відвідати найкращі місця на планеті
                </h1>
            </div>
        </div>
        <div v-if="'RU' == language" class="ourOfferings">
            <h1 class="offeringHeader"> Наши предложения </h1>
            <div class="oneOffering leftOffering">
                <img class="icon" src="../assets/globeIcon.png" alt="Globe Icon" />
                <h2 class="offeringText"> Туры по всему миру </h2>
            </div>
            <div class="oneOffering rightOffering">
				<img class="icon" src="../assets/planeIcon.png" alt="Plane Icon" />
                <h2 class="offeringText"> Доступные билеты на самолет </h2>

            </div>
            <div class="oneOffering leftOffering">
                <img class="icon" src="../assets/shipIcon.png" alt="Ship Icon" />
                <h2 class="offeringText"> Круизы по экзотическим морям </h2>
            </div>
            <div class="oneOffering rightOffering">
				<img class="icon" src="../assets/passportIcon.png" alt="Passport Icon" />
                <h2 class="offeringText"> Оформление документов </h2>
            </div>
            <h1> И многое другое... </h1>
        </div>
		<div v-else class="ourOfferings">
            <h1 class="offeringHeader"> Наші пропозиції </h1>
            <div class="oneOffering leftOffering">
                <img class="icon" src="../assets/globeIcon.png" alt="Globe Icon" />
                <h2 class="offeringText"> Тури по всьому світу </h2>
            </div>
            <div class="oneOffering rightOffering">
				<img class="icon" src="../assets/planeIcon.png" alt="Plane Icon" />
                <h2 class="offeringText"> Доступні авіаквитки </h2>
            </div>
            <div class="oneOffering leftOffering">
                <img class="icon" src="../assets/shipIcon.png" alt="Ship Icon" />
                <h2 class="offeringText"> Круїзи по екзотичним морям </h2>
            </div>
            <div class="oneOffering rightOffering">
				<img class="icon" src="../assets/passportIcon.png" alt="Passport Icon" />
                <h2 class="offeringText"> Оформлення документів </h2>
            </div>
            <h1> Та багато іншого... </h1>
        </div>
        <div v-if="'RU' == language" class="secondBlock">
            <h1 class="secondHeader"> Наши туристы побывали в 123 странах мира. Присоединяйся! </h1>
            <div class="redLine"></div>
            <img class="mapImage" src="../assets/mymap4.jpg" alt="world map" />
        </div>
		<div v-else class="secondBlock">
            <h1 class="secondHeader"> Наші туристи відвідали 123 країни. Приєднуйся! </h1>
            <div class="redLine"></div>
            <img class="mapImage" src="../assets/mymap4.jpg" alt="world map" />
        </div>
        <div v-if="'RU' == language" class="socialMediaPromo">
            <div class="layer">
                <div class="teamInstagram">
                    <h2 class="socialFont"> Посмотри на мир глазами наших туристов... </h2>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img class="socialIcon" src="../assets/instagram.png" alt="instagram" />
                    </a>
                </div>
                <div class="teamFacebook">
                    <h2 class="socialFont"> ...и присоединяйся к нам на Facebook </h2>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img class="socialIcon" src="../assets/facebook.png" alt="facebook" />
                    </a>
                </div>
            </div>
        </div>
		<div v-else class="socialMediaPromo">
			<div class="layer">
				<div class="teamInstagram">
					<h2 class="socialFont"> Подивись на світ очима наших туристів... </h2>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
						<img class="socialIcon" src="../assets/instagram.png" alt="instagram" />
					</a>
				</div>
				<div class="teamFacebook">
					<h2 class="socialFont"> ...та приєднуйся до нас на Facebook </h2>
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
						<img class="socialIcon" src="../assets/facebook.png" alt="facebook" />
					</a>
				</div>
			</div>
		</div>
        <div class="thirdBlock">
            Поиск Тура
        </div>
        <div class="thirdBlock">
            <ContactForm :language="language"></ContactForm>
        </div>
    </div>
</template>

<script>

import ContactForm from "./ContactForm";

export default {
    name: 'FrontPage',
    components: {
        ContactForm
    },
	props: {
		language: ''
	}
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Lobster');

@import url('https://fonts.googleapis.com/css?family=Forum');

* {
    font-family: 'Forum', cursive;
}

.firstBlock {
    width: 100%;
    height: 800px;
    background-image: url("../assets/travelPhoto1.jpg");
    background-size: 100% 800px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.layer {
background-color: rgba(0, 0, 0, 0.3);
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}

.firstHeader {
    font-family: 'Lobster', cursive;
    color: snow;
    font-weight: bold;
    font-size: 40px;


}

.ourOfferings{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 800px;
    background-color: snow;
}

.offeringHeader {
    font-size: 40px;
}

.oneOffering {
    width: 700px;
    height: 75px;
    margin: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.leftOffering {
    align-self: flex-start;
    border-right: 3px solid rgb(255,65,54);
}

.rightOffering {
    align-self: flex-end;
    border-left: 3px solid rgb(255,65,54);
}

.offeringText {
    margin-left: 50px;
    margin-right: 50px;
}

.icon {
    width: 75px;
    height: 75px;
}

.redLine {
    width: 300px;
    height: 3px;
    background-color: rgb(255,65,54);
}


.secondBlock {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 700px;
    background-color: snow;
}

.mapImage {
    width: 100%;
    height: 600px;
}

.secondHeader {
    margin-bottom: 5px;
}


.socialMediaPromo {
    width: 100%;
    height: 850px;
    background-image: url("../assets/travelPhoto.jpg");
    background-size: 100% 850px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.socialFont {
    color: white;
    font-size: 25px;
}

.socialIcon {
    opacity: 0.7;
    height: 300px;
    width: 300px;
}

.socialIcon:hover {
    opacity: 1;
}

.teamInstagram {
    margin-right: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
	text-align: center;
}

.teamFacebook {
    margin-left: 150px;
	display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   text-align: center;
}

.redLine {
    width: 900px;
    height: 3px;
    background-color: rgb(255,65,54);
    margin-bottom: 10px;
    margin-top: 0px;
}

.thirdBlock {
    display: flex;
    width: 100%;
    height: 850px;
    background: snow;
    justify-content: center;
    align-items: center;
}

/*  Media Queries */

@media screen and (max-width: 415px) {

	.firstBlock {
		width: 100%;
		height: 300px;
		background-size: 100% 300px;
		text-align: center;
	}

	.firstHeader {
	    font-size: 30px;
		padding: 5px;
	}

	.oneOffering {
		display: flex;
	    align-items: center;
	    justify-content: center;
	    flex-direction: column;
	    width: 100%;
	    height: 1000px;
	    background-color: snow;
	}

	.leftOffering {
		align-self: center;
		border-right: 0px solid rgb(255,65,54);
	}

	.rightOffering {
	    align-self: center;
	    border-left: 0px solid rgb(255,65,54);
	}

	.offeringText {
	    margin-left: 0px;
	    margin-right: 0px;
	}

	.icon {
	    width: 75px;
	    height: 75px;
	}

	.secondBlock {
	    height: 500px;
	}

	.mapImage {
	    width: 100%;
	    height: 200px;
	}

	.secondHeader {
	    margin-bottom: 5px;
		font-size: 30px;
		text-align: center;
	}

	.redLine {
		width: 300px;
	}

	.socialMediaPromo {
	    height: 300px;
	    background-image: url("../assets/travelPhoto.jpg");
	    background-size: 100% 300px;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}

	.socialFont {
	    font-size: 15px;
	}

	.socialIcon {
	    height: 50px;
	    width: 50px;
	}

	.teamInstagram {
	    margin-right: 20px;
		margin-left: 20px;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    flex-direction: column;
	}

	.teamFacebook {
	    margin-left: 20px;
		margin-right: 20px;
	}
}

</style>
