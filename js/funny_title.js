/* source/js/funny_title.js */
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // 离开标签页时
        document.title = '👀 跑哪里去了~';
        clearTimeout(titleTime);
    } else {
        // 回到标签页时
        document.title = '🐷 抓到你啦！';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000); // 2秒后恢复原标题
    }
});