window.onload = function() {
    const bodyStyles = document.body.style;
    const svgPaths = document.getElementsByClassName('st0');

    var c = document.getElementById('canvas'),
        ctx = c.getContext("2d");

    var isMobile = window.innerWidth <= 400 ? true : false;

    var fontBig = isMobile ? 180 : 300,
        fontMed = isMobile ? 100 : 100;

    var leftMargin = isMobile ? 1 : 50;

    var nameY = isMobile ? 80 : 100;

    var sectionsY = isMobile ? 260 : 400,
        sectionsSpacing = isMobile ? 200 : 300;

    // var feedbackAngle = 

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    fontBig += 'px';
    fontMed += 'px';

    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

    console.log(height)

    c.width = window.innerWidth * 2;
    c.height = height * 2;
    c.style.width = "100%"
    c.style.height = height + 'px'

    var name = document.getElementById('name'),
        work = document.getElementById('work'),
        blog = document.getElementById('blog'),
        about = document.getElementById('about'),
        sections = document.getElementsByClassName('sections')[0];

    var textName = name.innerText;

    function jText(str, size, x, y, colorOne, colorTwo) {
        colorOne = colorOne == undefined ? 'blue' : colorOne;
        colorTwo = colorTwo == undefined ? '#f60' : colorTwo;
        ctx.font = size + " Helvetica";
        ctx.fillStyle = colorOne;
        ctx.fillText(str, x, y)
        ctx.fillStyle = colorTwo;
        ctx.fillText(str, x, y)
    }

    function drawCircle(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        // ctx.stroke();
        ctx.fill();
    }

    function drawRect(x, y, w, h) {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fill();
    }

    var r = 200,
        g = 80,
        b = 235,
        a = 1;

    var sino = 1;

    var c_x = 1,
        c_y = 1,
        sxc = (3000/2)-(c_x/2);
        syc = (1920/2)-(c_y/2);

        var t = 0;

        function calculateDSett(fac) {
            return (sizeDifference/fac)*-1;
        }

        var sizeDifference = 1,
            dSett = (sizeDifference*10)*-1,
            offsetDistanceX = 3,
            offsetDistanceY = 2,
            offsetFactor = isMobile ? 1 : 5,
            sizeDifferenceDivisor = 2;

        let mousex = undefined
        let mousey = undefined

        window.addEventListener('mousemove', (e) => {
        mousex = e.x
        mousey = e.y
        // console.log(e);
        })

        var targetAreaName = {top: 10, left: 10, width: 280, height: 40}
        targetAreaName = name.children[0].getBoundingClientRect();


    function canvasHover(targetArea, hoverColor, defaultColor) {

        if (mousex > targetArea.left && mousex < targetArea.left+targetArea.width) {
            if (mousey > targetArea.top && mousey < targetArea.top+targetArea.height) {
                return hoverColor;
            } else {
                return defaultColor
            }
        } else {
            return defaultColor
        }

    }

    ctx.fillStyle = '#ffff'
    drawRect(0, 0, 800, 120);

    // this.setTimeout(function() {
    setInterval(function() {
        changeColor = "rgba(" + r + ", " + 219 + ", " + 239 + ", " + 1 + ")";
        nameColorDark = "rgba(" + r + ", " + 12 + ", " + 130 + ", " + 1 + ")";
        offsetDistanceX = isMobile ? 0 + Math.sin(t/256): Math.sin(t/256);
        offsetDistanceY = isMobile ? 1 + Math.cos(t/256) : 1 + Math.sin(t/256);

        sizeDifference = isMobile ? 1 : 5;

        nameColor = changeColor;
        workColor = changeColor;
        aboutColor = changeColor;
        blogColor = changeColor;

        jText(textName, fontMed, leftMargin, nameY, '#ff0026', nameColor);

        //canvas feedback
        
        ctx.drawImage(c, offsetDistanceX, offsetDistanceY, c.width+sizeDifference, c.height+sizeDifference);
        
        t++;

    },10)
    // }, 2000)

}