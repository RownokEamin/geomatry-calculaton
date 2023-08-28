function calculatetrianglearea() {

    const basefield = document.getElementById('triangle-base');
    const basevaluetext = basefield.value;
    const base = parseFloat(basevaluetext);
    console.log(base);


    const heightfield = document.getElementById('triangle-height');
    const heightvaluetext = heightfield.value;
    const height = parseFloat(heightvaluetext);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area)

    const areaspan = document.getElementById('triangle-area');
    areaspan.innerText = area


}

function calculateRectangleearea() {

    const basefield = document.getElementById('Rectangle-width');
    const widthvaluetext = basefield.value;
    const width = parseFloat(widthvaluetext);
    console.log(width);


    const heightfield = document.getElementById('Rectangle-length');
    const lengthvaluetext = heightfield.value;
    const length = parseFloat(lengthvaluetext);
    console.log(length);

    const area = width * length;
    console.log(area)

    const areaspan = document.getElementById('Rectangle-area');
    areaspan.innerText = area


}

function calculateparallelogramarea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);

    const height = getInputValue('parallelogram-height')
    console.log(height)

    if(isNaN(base) || isNaN(height)){
        alert('please insert number');
        return
    }

    const area = base * height;
    setelementinnertext('parallelogram-area', area);

    // add to calculation entry 
    addtocalculationentry('parallelogram', area);

}
function getInputValue(fieldid) {
    const inputfield = document.getElementById(fieldid);
    const inputvaluetext = inputfield.value;
    const value = parseFloat(inputvaluetext);
    return value;
}

function setelementinnertext(elementid, area){

    const element = document.getElementById(elementid);
    element.innerText =  area;
 

}
// add to calculation entrey

function addtocalculationentry(areatype, area){
    console.log(areatype+ '' + area)
    const calculationentry = document.getElementById('calculation-id');
    const count = calculationentry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areatype} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-sucess">convert</button>`

    calculationentry.appendChild(p);
}

// function calculateellipseleearea(){
//     const majorradious = getinputvalue('Ellipse-major');
//     const minorradious = getinputvalue('Ellipse-minor')
//     const area = 3.1416 * majorradious * minorradious;
//     setEle('Ellipse-area',area);
//   }

