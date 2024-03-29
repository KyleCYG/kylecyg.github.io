
    /* 检测mobile/PC */
    function isMobile() { 
        return ('ontouchstart' in document.documentElement); 
    }

    /* 获取cards数组 */
    const card = document.getElementsByClassName('card');
    var x = null;
    var y = null;

    /* 打印cards数组 */
    // console.log(card);

    /* 判断mobile/PC */
    var isMobile = isMobile();
    // console.log(isMobile);
    
    if (isMobile) {
        
        /* 遍历cards, 添加监听 */
        for (let i = 0; i < card.length; i++) {
            const cardy = card[i];
            var rect = 0;

            /* 添加touchmove监听 */
            cardy.addEventListener('touchmove', e => {

                // 得到相对坐标
                rect = cardy.getBoundingClientRect();

                /* 防止滚动 */
                e.preventDefault();

                /* 遍历每个touch点 */
                for (let i = 0; i < e.touches.length; i++) {

                    x = e.touches[i].clientX - rect.left;
                    y = e.touches[i].clientY - rect.top;
                    
                    /* 为card添加渐变spotlight */
                    cardy.style.setProperty("background", "radial-gradient(180px 180px at " + x + "px " + y + "px , rgba(255, 230, 214, 0.2), rgba(255, 255, 255, 0.03))");

                }
            });

            /* 添加touchend监听 */
            cardy.addEventListener('touchend', e => {

                /* 移除spotlight */
                cardy.style.removeProperty("background", "radial-gradient(180px 180px at " + x + "px " + y + "px , rgba(255, 230, 214, 0.2), rgba(255, 255, 255, 0.03))");
        
            });
        }

    }else{

        /* 遍历cards, 添加mouse监听 */
        for (let i = 0; i < card.length; i++) {
            const cardy = card[i];
            var rect = 0;

            /* 添加mousemove监听 */
            cardy.addEventListener('mousemove', e => {
                rect = cardy.getBoundingClientRect();
                x = e.clientX - rect.left;
                y = e.clientY - rect.top;
        
                /* 打印鼠标位置 */
                // console.log('------------');
                // console.log('x = ' + x);
                // console.log('y = ' + y);
                // console.log('------------');
                
                /* 为card添加渐变spotlight */
                cardy.style.setProperty("background", "radial-gradient(180px 180px at " + x + "px " + y + "px , rgba(255, 230, 214, 0.2), rgba(255, 255, 255, 0.03))");
        
            });

            /* 添加mouseout监听 */
            cardy.addEventListener('mouseout', e => {
        
                /* 移除spotlight */
                cardy.style.removeProperty("background", "radial-gradient(180px 180px at " + x + "px " + y + "px , rgba(255, 230, 214, 0.2), rgba(255, 255, 255, 0.03))");
        
            });
        }

    }
