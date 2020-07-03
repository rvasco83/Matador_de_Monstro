new Vue({
    el: '#app',
    data: {
        started: false,
        playerLife: 100,
        monsterLife: 100,
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.started = true
            this.playerLife = 100
            this.monsterLife = 100
        },        
        attack(especial) {
            this.hurt('monsterLife', 5, 10, especial)
            this.hurt('playerLife', 7, 12, false)
        },        
        hurt(prop,mim, max, especial) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(mim + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },


    },
    watch: {
        hasResult(value) {
            if (value) this.started = false
        }
    }
})