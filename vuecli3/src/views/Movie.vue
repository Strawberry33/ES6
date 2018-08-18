<template>
    <div>
        <h1>电影列表</h1>
        <ul>
            <li v-for="movie in movieList" :key="movie.id">
               <router-link :to="'/moviedetail/' + movie.id">
                    {{movie.name}}
               </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            movieList:[
                {
                    id:1,
                    name:'电影1'
                },
                {
                    id:2,
                    name:'电影2'
                },
                {
                    id:3,
                    name:'电影3'
                },
                {
                    id:4,
                    name:'电影4'
                },
                {
                    id:5,
                    name:'电影5'
                },
                
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

