<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoDetail :video="selectVideo"></VideoDetail>
        <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
    </div>
</template>

<script>
    import axios from 'axios';
    import VideoDetail from "./components/VideoDetail";
    import SearchBar from "./components/SearchBar";
    import VideoList from "./components/VideoList";
    const API_KEY = 'AIzaSyCuFH1TLn3UFykPwfY3huG-O2lSGdRHJTc';
    export default {
        name: 'App',
        components: {
            VideoList,
            SearchBar,
            VideoDetail
        },
        data() {
            return{
                videos: [],
                selectVideo: null
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
            },
            onVideoSelect(video) {
                this.selectVideo = video;
            }
        }
    }
</script>

<style scoped>
    input {
        width: 75%;
    }
    div {
        text-align: center;
        margin: 20px;
    }
</style>