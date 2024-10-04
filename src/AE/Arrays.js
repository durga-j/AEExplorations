export default function Arrays(){
    
    const colors = ["red", "yellow", "blue"];
    colors.push("purple");
    colors[4]="green";
    colors.push("orange");
    const iterator = colors.keys();

    for (const key of iterator) {
        console.log(`${key}: ${colors[key]}`);
    }

    const newColors = colors.toReversed();

    console.log("new colors",newColors);

    console.log("Sorted ",colors.sort());

    const[a,b, ...c] = colors;
    console.log("A",a," B",b," C",c);

}