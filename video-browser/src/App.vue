<template>
    <div>
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList :videos="videos"></VideoList>
    </div>
</template>

<script>
    import SearchBar from "./components/SearchBar";
    import axios from 'axios';
    import VideoList from "./components/VideoList";
    const API_KEY = 'AIzaSyCrFzAjyhHGpCWbPZU8HAm-BDHzDF4BP7s';
    export default {
        name: 'App',
        components: {
            VideoList,
            SearchBar
        },
        data() {
            return{
                videos: []
            };
        },
        methods: {
            onTermChange(searchTerm) {
                axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: API_KEY,
                        type: 'video',
                        part: 'snippet',
                        q: searchTerm
                    }
                }).then(response => {
                    this.videos = response.data.items;
                })
            }
        }
    }
</script>

<style scoped>

</style>