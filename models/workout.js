let titleDate = new Date();
titleDefault = titleDate.toString();
let titleDefaultArr = titleDefault.split(" ");
let titleDafaultString =  titleDefaultArr[2] + "/" + titleDefaultArr[1] + "/" + titleDefaultArr[3] + " "  + titleDefaultArr[4];



class Workout {
    constructor(id, title = titleDafaultString){
        this.id = id;
        this.title = title;
    }
}

export default Workout;