export function $calc(type: string, ...nums: Array<number>) : number|void {
    console.log(type || false);
    type === "+" ? +["+", (nums: number) => nums] :
    type === "-" ? +["-", (nums: number) => nums] : 
    type === "*" ? +["*", (nums: number) => nums] : 0;
}

$calc!("*", 1, 2, 3);