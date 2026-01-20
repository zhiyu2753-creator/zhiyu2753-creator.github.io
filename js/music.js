/* source/js/music.js */
document.addEventListener('DOMContentLoaded', function () {
    var ap = new APlayer({
        container: document.getElementById('aplayer-test'),
        fixed: true,
        autoplay: false,
        theme: '#409EFF',
        loop: 'all',
        order: 'list',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: true,

        mini: true,        
        audio: [
            {
                name: '晴天',
                artist: '周杰伦',
                // 👇 注意这里换成了 fastly 域名
                url: 'https://fastly.jsdelivr.net/gh/zhiyu2753-creator/my-music-library/晴天.mp3',
                // 👇 封面图如果还是加载不出来，可以暂时换成这个通用的
                cover: 'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'
            }
        ]
    });
});