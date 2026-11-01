// - Type Inference and Annotation
{
  let a: string = "Anup";
  console.log(a);
  a = "ruii";

  a = "anup";
  console.log(a);
}

// Data Types

{
  let val: boolean = true;

  let val2: undefined = undefined;

  let val3: bigint = 12345354456465n;

  let val4: number = 45;

  let val5: string = "Anup";

  let val6: symbol = Symbol("Anup");

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
  let b: [number, boolean, string, undefined] = [25, true, "Deepak", undefined];

  let c: any[] = [{ name: "Ruii", class: "msc", id: 67 }];
}

{
  // Enums
  enum Role {
    ADMIN,
    SUP_ADMIN,
    USER,
  }

  let role: Role = Role.USER;

  // Union
  let yolo: string | number = "rahul";
  yolo = 90;

  // Literal Union
  let status: "pending" | "success" | "failed" = "pending";
}
