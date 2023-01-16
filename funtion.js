function equation() {
    let a = 8;
    let b = 12;
    let c = -20;
    if (a != 0) {
        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            console.log("Phương trình vô nghiệm");
        }
        if (delta == 0) {
            let x = -b / (2 * a);
            console.log(x);
        }
        if (delta > 0) {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            console.log("x1 = " + x1);
            console.log("x2 = " + x2);
        }
    }
}
equation();


