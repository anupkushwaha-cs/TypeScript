"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// - Type Inference and Annotation
{
    let a = "Anup";
    console.log(a);
    a = "ruii";
    a = "anup";
    console.log(a);
}
// Data Types
{
    let val = true;
    let val2 = undefined;
    let val3 = 12345354456465n;
    let val4 = 45;
    let val5 = "Anup";
    let val6 = Symbol("Anup");
    console.log(val);
    console.log(val2);
    console.log(val3);
    console.log(val4);
    console.log(val5);
    console.log(val6);
}
// tupple
// This is as like array but define everythings before putting the value
{
    let b = [25, true, "Deepak", undefined];
    let c = [{ name: "Ruii", class: "msc", id: 67 }];
}
{
    // Enums
    let Role;
    (function (Role) {
        Role[Role["ADMIN"] = 0] = "ADMIN";
        Role[Role["SUP_ADMIN"] = 1] = "SUP_ADMIN";
        Role[Role["USER"] = 2] = "USER";
    })(Role || (Role = {}));
    let role = Role.USER;
    // Union
    let yolo = "rahul";
    yolo = 90;
    // Literal Union
    let status = "pending";
}
//# sourceMappingURL=index.js.map