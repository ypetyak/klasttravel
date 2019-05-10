<template>
    <div class="formDiv">
        <div class="layer">
            <form v-if="'RU' == language" class="contactForm" action="https://formspree.io/ypetyak@gmail.com" method="POST">
                <h1 class="contactHeader font-input"> Форма для связи: </h1>
                <div class="redLine"></div>
                <h2 class="inputNames font-input"> Имя </h2>
              <input class="inputField" type="text" name="name" required>
              <h2 class="inputNames font-input"> Телефон </h2>
              <input class="inputField" type="number" name="phone" required>
              <h2 class="inputNames font-input"> Email </h2>
              <input class="inputField" type="email" name="email" required>
			  <textarea @input='onInput' class="textField" rows="10" cols="70"></textarea>
			  <input class="textField" type="hidden" name="text" :value="inputValue">
              <input class="buttonForm" type="submit" value="Отправить">
            </form>
			<form v-else class="contactForm" action="https://formspree.io/ypetyak@gmail.com" method="POST">
				<h1 class="contactHeader font-input"> Форма для зв'язку:</h1>
				<div class="redLine"></div>
				<h2 class="inputNames font-input"> Ім'я </h2>
			  <input class="inputField" type="text" name="name" required>
			  <h2 class="inputNames font-input"> Телефон </h2>
			  <input class="inputField" type="number" name="phone" required>
			  <h2 class="inputNames font-input"> Email </h2>
			  <input class="inputField" type="email" name="email" required>
			  <textarea @input='onInput' class="textField" rows="10" cols="70"></textarea>
			  <input class="textField" type="hidden" name="text" :value="inputValue">
			  <input class="buttonForm" type="submit" value="Відправити">
			</form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
	props: {
            inputValue: '',
			language: ''
        },
	methods: {
        onInput: function (event) {
            // console.log(event.target.value);
			this.inputValue = event.target.value;
        }
    }
}
</script>

<style scoped>



.formDiv {
    background-image: url("../assets/travelPhoto2.jpg");
    background-size: 100% 850px;
    display: flex;
    width: 100%;
    height: 850px;
    align-items: center;
    justify-content: center;
}

.layer {
   background-color: rgba(0, 0, 0, 0.3);
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}

.contactForm {
 display: flex;
 flex-direction: column;
 align-items: center;
}

.contactHeader {
    align-self: center;
    color: snow;
}

.redLine {
    width: 400px;
    height: 3px;
    background-color: rgb(255,65,54);
    margin-bottom: 10px;
}


.inputNames {
    margin: 0px;
    font-size: 30px;
    color: white;
}

.inputField {
    margin-bottom: 10px;
    margin-top: 10px;
    width: 400px;
    height: 40px;
    outline: none;
    border: 2px solid rgb(255,65,54);
    background: rgba(251,65,54, 0.6);
    text-align: center;
    font-size: 20px;
}

.inputField:hover {
    background: rgba(251,65,54, 0.9)
}

.textField {
    font-size: 20px;
    margin-top: 20px;
    width: 400px;
    height: 200px;
    outline: none;
    padding: 0px;
    border: 2px solid rgb(255,65,54);
    background: rgba(251,65,54, 0.6);
	word-break: break-word;
}

.textField:hover {
    background: rgba(251,65,54, 0.9)
}

.buttonForm {
    outline: none;
    width: 404px;
    padding: 1px;
    margin-top: 10px;
    background: rgba(251,65,54, 0.6);
    border: 2px solid rgb(255,65,54);
    cursor: pointer;
    height: 40px;
    color: white;
    font-size: 20px;
}

.buttonForm:hover {
    background: rgba(251,65,54, 0.9);
    border: 2px solid rgba(251,65,54, 1);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05)
    /* border: 1px solid rgb(86, 180, 239); */
    /* box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05) inset,
        5px 5px 25px rgba(82, 168, 236, 0.6);
    /* background-color: SkyBlue; */
    /* opacity: 1;
    box-shadow: 0 0 5px; */
    /* border: none ; */
}

/*  Media Queries */

@media screen and (max-width: 415px) {

	.formDiv {
	    background: snow;
	}

	.layer {
	   background: snow;
	}

	.font-input {
		color: black;
	}

	.redLine {
	    width: 300px;
	}

	.inputField {
	    width: 300px;
	}

	.buttonForm {
	    width: 303px;
		color: black;
	}

	.textField {
	    width: 300px;
	    height: 300px;

	}
}

</style>
