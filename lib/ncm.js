function isMobile(){
    if(document.body.clientWidth <= 680) {
     return true; // 移动端
    }else{
     return false; // PC端
    }
}
// control bar
if(isMobile()){
    document.querySelectorAll('#sidebar-root-mobile #ncm-switch div').forEach((el, key) => {
        el.addEventListener('touchend', () => {
            const activeEl = document.querySelector('#sidebar-root-mobile #ncm-switch div.active');
            activeEl.classList.remove('active');
            el.classList.add('active');
            if(el.id == 'ncm-player-btn'){
                const list = document.querySelector('#sidebar-root-mobile #ncm-root ul.ncm-list-widget');
                list.classList.remove('active-widget');
                const widget = document.querySelector('#sidebar-root-mobile #ncm-root div.ncm-player-widget');
                widget.classList.add('active-widget');
            }else{
                const widget = document.querySelector('#sidebar-root-mobile #ncm-root div.ncm-player-widget');
                widget.classList.remove('active-widget');
                const list = document.querySelector('#sidebar-root-mobile #ncm-root ul.ncm-list-widget');
                list.classList.add('active-widget');
            }
        })
    })
    // audio control btn
    document.querySelector('#sidebar-root-mobile div#ncm-control').addEventListener('click', function(){
        // change backgournd    
        // audio pause or start
        // stop animation or play
        let state = this.getAttribute('data-state');
        let audioDOM = document.querySelector('#sidebar-root-mobile audio#ncm-audio');
        let cd = document.querySelector('#sidebar-root-mobile div.ncm-cover-background');
        let info = document.querySelector('#sidebar-root-mobile div#ncm-info');
        if(audioDOM.getAttribute('src') == null || audioDOM.getAttribute('src') == undefined){
            info.setAttribute('style', 'display: block');
            info.innerHTML = '当前暂无歌曲可播放';
            return;
        }
        if(state == 'play'){
            this.setAttribute('style', 'background-image: url(https://static.xiaoblogs.cn/img/play2.png)');
            audioDOM.pause();
            cd.classList.remove('widget-animation-play');
            this.setAttribute('data-state', 'stop');
        }else if(state == 'stop'){
            this.setAttribute('style', 'background-image: url(https://static.xiaoblogs.cn/img/stop1.png)');
            audioDOM.play();
            cd.classList.add('widget-animation-play');
            this.setAttribute('data-state', 'play');
        }
    })
    //play music
    document.querySelectorAll('#sidebar-root-mobile li#ncm-list-item').forEach((el, key) => {
        el.addEventListener('click', () => {
            let cd = document.querySelector('#sidebar-root-mobile div.ncm-cover-background');
            let control = document.querySelector('#sidebar-root-mobile div#ncm-control');
            let audio = document.querySelector('#sidebar-root-mobile audio#ncm-audio');
            let cover = document.querySelector('#sidebar-root-mobile div#ncm-cover-img');
            let state = control.getAttribute('data-state');
            let info = document.querySelector('#sidebar-root-mobile div#ncm-info');
            info.setAttribute('style', 'display: none');

            audio.pause();
            audio.setAttribute('src', el.getAttribute('data-musicUrl'));
            audio.load();

            cover.setAttribute('style', 'background-image: url('+ el.getAttribute('data-imgUrl') +')');

            
            if(state == 'play'){
                control.setAttribute('style', 'background-image: url(https://static.xiaoblogs.cn/img/play2.png)');
                cd.classList.remove('widget-animation-play');
                control.setAttribute('data-state', 'stop');

            }else if(state == 'stop'){
                control.setAttribute('style', 'background-image: url(https://static.xiaoblogs.cn/img/stop1.png)');
                audio.play();
                cd.classList.add('widget-animation-play');
                control.setAttribute('data-state', 'play');

            }
        })
    })
}else{
    document.querySelectorAll('#sidebar-root #ncm-switch div').forEach((el, key) => {
        el.addEventListener('click', () => {
            const activeEl = document.querySelector('#sidebar-root #ncm-switch div.active');
            activeEl.classList.remove('active');
            el.classList.add('active');
            if(el.id == 'ncm-player-btn'){
                const list = document.querySelector('#sidebar-root #ncm-root ul.ncm-list-widget');
                list.classList.remove('active-widget');
                const widget = document.querySelector('#sidebar-root #ncm-root div.ncm-player-widget');
                widget.classList.add('active-widget');
            }else{
                const widget = document.querySelector('#sidebar-root #ncm-root div.ncm-player-widget');
                widget.classList.remove('active-widget');
                const list = document.querySelector('#sidebar-root #ncm-root ul.ncm-list-widget');
                list.classList.add('active-widget');
            }
        })
    })
    // audio control btn
    document.querySelector('#sidebar-root div#ncm-control').addEventListener('click', function(){
        // change backgournd    
        // audio pause or start
        // stop animation or play
        let state = this.getAttribute('data-state');
        let audioDOM = document.querySelector('#sidebar-root audio#ncm-audio');
        let cd = document.querySelector('#sidebar-root div.ncm-cover-background');
        let info = document.querySelector('#sidebar-root div#ncm-info');
        if(audioDOM.getAttribute('src') == null || audioDOM.getAttribute('src') == undefined){
            info.setAttribute('style', 'display: block');
            info.innerHTML = '当前暂无歌曲可播放';
            return;
        }
        if(state == 'play'){
            this.setAttribute('style', 'background-image: url(https://static.xiaoblogs.cn/img/play2.png)');
            audioDOM.pause();
            cd.classList.remove('widget-animation-play');
            this.setAttribute('data-state', 'stop');
        }else if(state == 'stop'){
            this.setAttribute('style', 'background-image: url(https://static.xiaoblogs.cn/img/stop1.png)');
            audioDOM.play();
            cd.classList.add('widget-animation-play');
            this.setAttribute('data-state', 'play');
        }
    })
    //play music
    document.querySelectorAll('#sidebar-root li#ncm-list-item').forEach((el, key) => {
        el.addEventListener('click', () => {
            let cd = document.querySelector('#sidebar-root div.ncm-cover-background');
            let control = document.querySelector('#sidebar-root div#ncm-control');
            let audio = document.querySelector('#sidebar-root audio#ncm-audio');
            let cover = document.querySelector('#sidebar-root div#ncm-cover-img');
            let state = control.getAttribute('data-state');
            let info = document.querySelector('#sidebar-root div#ncm-info');
            info.setAttribute('style', 'display: none');
            audio.pause();
            audio.setAttribute('src', el.getAttribute('data-musicUrl'));
            audio.load();

            cover.setAttribute('style', 'background-image: url('+ el.getAttribute('data-imgUrl') +')');
            
            if(state == 'play'){
                control.setAttribute('style', 'background-image: url(https://static.xiaoblogs.cn/img/play2.png)');
                cd.classList.remove('widget-animation-play');
                control.setAttribute('data-state', 'stop');

            }else if(state == 'stop'){
                control.setAttribute('style', 'background-image: url(https://static.xiaoblogs.cn/img/stop1.png)');
                audio.play();
                cd.classList.add('widget-animation-play');
                control.setAttribute('data-state', 'play');

            }
        })
    })
}



