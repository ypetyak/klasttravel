<template>
    <div class="mainDiv">
        <AppHeader :language="language" @languageChange="languageChange"></AppHeader>
        <div>
            <router-view :language="language"></router-view>
        </div>
        <div>
            <AppFooter :language="language"></AppFooter>
        </div>

    </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter"

export default {
    name: 'App',
    components: {
        AppHeader,
        AppFooter
    },
	data() {
		return {
			language: 'UA'
		}
	},
	methods: {
		languageChange() {
			if (this.language === 'RU') {
				this.language = 'UA'
			} else {
				this.language = 'RU'
			}
		}
	}

}
</script>

<style>

body {
	margin: 0px;
}

.mainDiv {
    background-color: snow;
}

</style>
