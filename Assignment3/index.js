function Calculate(planet){
    let input= document.getElementById("label1").value;
    if(input==""){
        alert("Enter Some Valid Number");
    }
    else{
    input=Number(input); // input is our enter value/weight
    if(planet=="mercury"){
        const mass = input/9.807; // 9.807 earth gravity -->mass s.i unit will be kg. 
        //we know our weight on earth through which we can find out the mass
        // which is constant throughout. 
        let var1= mass*3.7; // gravity on mercury is 3.7m/s2
        var1=var1.toFixed(2);
        document.getElementById("mercury").value=var1 +"kg"; 
    }
    else if (planet=="venus"){
        let mass = input/9.807;
        let var1= mass*8.87; // gravity on venus is 8.87 m/s2
        var1=var1.toFixed(2);
        document.getElementById("venus").value=var1 +"kg";
    }
    else if (planet=="mars"){
        let mass = input/9.807;
        let var1= mass*3.721; // gravity on mars is 3.721m/s2
        var1=var1.toFixed(2);
        document.getElementById("mars").value=var1 +"kg";
    }
    else if (planet=="juptier"){
        let mass = input/9.807;
        let var1= mass*24.79; // gravity on juptier is 24.79m/s2
        var1=var1.toFixed(2);
        document.getElementById("juptier").value=var1 +"kg";
    }
    else if (planet=="saturn"){
        let mass = input/9.807;
        let var1= mass*10.44; // gravity on saturn is 10.44m/s2
        var1=var1.toFixed(2);
        document.getElementById("saturn").value=var1 +"kg";
    }
    else if (planet=="uranus"){
        let mass = input/9.807;
        let var1= mass*8.87; // gravity on uranus is 8.87m/s2
        var1=var1.toFixed(2);
        document.getElementById("uranus").value=var1 +"kg";
    }
    else if (planet=="pluto"){
        let mass = input/9.807;
        let var1= mass*0.62; // gravity on neptune is 0.62m/s2 
        var1=var1.toFixed(2);
        document.getElementById("pluto").value=var1 +"kg";
    }
    else{
        let mass = input/9.807;
        let var1=mass*11.15; // gravity on neptune is 11.15m/s2 
        var1=var1.toFixed(2);
        document.getElementById("neptune").value=var1 + "kg";
    }
}
    // --------->Another way to present the answer------->
//     let mass = input/9.807; // 9.807 earth gravity -->mass s.i unit will be kg 
//     let var1= mass*3.7; // gravity on mercury is 3.7m/s2
//     let var2= mass*8.87; // gravity on venus is 8.87 m/s2
//     let var3= mass*9.807; // gravity on earth  is 9.807m/s2
//     let var4= mass*3.721 ; // gravity on mars is 3.721m/s2
//     let var5= mass*24.79 ; // gravity on juptier is 24.79m/s2
//     let var6= mass*10.44; // gravity on saturn is 10.44m/s2
//     let var7= mass*8.87; // gravity on uranus is 8.87m/s2
//     let var8= mass*11.15; // // gravity on neptune is 11.15m/s2 
//     var1=var1.toFixed(1);
//     var2=var2.toFixed(1);
//     var3=var3.toFixed(1);
//     var4=var4.toFixed(1);
//     var5=var5.toFixed(1);
//     var6=var6.toFixed(1);
//     var7=var7.toFixed(1);
//     var8=var8.toFixed(1);
//     document.getElementById("mercury").value=var1 +"kg";
//     document.getElementById("venus").value=var2 +"kg";  
//     document.getElementById("earth").value=var3 +"kg";
//     document.getElementById("mars").value=var4 +"kg";
//     document.getElementById("juptier").value=var5 +"kg";
//     document.getElementById("saturn").value=var6 +"kg";
//     document.getElementById("uranus").value=var7 +"kg";
//     document.getElementById("neptune").value=var8 +"kg";

// 
}