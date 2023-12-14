var names = new Array();
names[0]="Hima";
names[1]="Sharmi";
names[2]="jyothi";
names[3]="Manoj";
names[4]="Pavan";
names[5]="Frank";
names[6]="Bhanu";
names[7]="Krishna";
names[8]="Priya";
names[9]="Jim";
for (var i = 0; i < names.length; i++) {
if (names[i].chartAt(0) === 'J' || names[i].chartAt(0) === 'j') {
    console.log("GoodBye "+ names[i])
}
    else {
        console.log("Hello "+ names[i])
   }
}



