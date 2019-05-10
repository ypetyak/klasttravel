<template>
    <div class="mainDiv">
        <div v-if="'RU' == language" class="textBox">
            <h1> О нас </h1>

            <div class="redLine"></div>
            <p> RU Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
		<div v-else class="textBox">
			<h1> Про нас </h1>

			<div class="redLine"></div>
			<p> UA Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
        <div class="imageBox">
            <img src="../assets/Klast.jpg" alt="Klast Travel Front" />
        </div>
    </div>
</template>

<script>

export default {
    name: "AboutUs",
	props: {
		language: ''
	}
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Forum');

* {
    font-family: 'Forum', cursive;
}

.mainDiv {
    width: 100%;
    height: 750px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

.textBox {
    width: 400px;
    margin-right: 20px;
}

.redLine {
    width: 400px;
    height: 3px;
    background-color: rgb(255,65,54);
    margin-bottom: 10px;
}

img {
    width: 600px;
    height: 500px;
    margin-left: 20px;
}

/*  Media Queries */

@media screen and (max-width: 415px) {

	.mainDiv {
		flex-direction: column;
	}

	.textBox {
		margin-left: 20px;
		width: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.redLine {
		width: 300px;
	}

	img {
		width: 300px;
	    height: 300px;
		margin-left: 0px;
	}

	.imageBox {
		width: 375px;
	    height: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}

</style>
