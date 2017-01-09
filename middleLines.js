var middleLineArray = [];

function middleLinesNumber() {

    var lines = int( canvasHeight / ( lineHeight + linePadding ) );

    return lines;

}

function showMiddleLines() {
    for( var i = 0; i < numberOfLines; i++) {
        middleLineArray[i] = [];
        startLineX = int(canvasWidth/2);
        endLineX = startLineX;

        startLineY = ( i * lineHeight ) + ( i * linePadding ) + linePadding;
        endLineY = startLineY + lineHeight;

        middleLineArray[i]['x1'] = startLineX;
        middleLineArray[i]['y1'] = startLineY;

        middleLineArray[i]['x2'] = endLineX;
        middleLineArray[i]['y2'] = endLineY;


        showLineAt( startLineX, startLineY, endLineX, endLineY) ;
        stroke(133);

    }
}

function showLineAt(x1,y1,x2,y2) {
    line(x1,y1,x2,y2);
    stroke(133);
}

function moveMiddleLines() {
        for( var i = 0; i < middleLineArray.length; i++) {

            middleLineArray[i]['y1'] += lineHeight;
            middleLineArray[i]['y2'] += lineHeight;

            if( middleLineArray[i]['y2'] > canvasHeight ) {

                middleLineArray[i]['y1'] = 0;
                middleLineArray[i]['y2'] = 0.1;
            }
            showLineAt(middleLineArray[i]['x1'], middleLineArray[i]['y1'],
                        middleLineArray[i]['x2'], middleLineArray[i]['y2'] );
        }
}