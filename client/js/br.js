var app = new Vue({
    el: "#app",
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios
            .get("/api/Hours/sunday/lauds")
            .then(response => this.info = response)
            .catch(error => console.log(error))
    }
})
