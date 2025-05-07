interface Student {
    [key:string] : string | number | number[] | undefined,
    name: string,
    GPA: number,
    classes?: number[]
}

const matheus: Student = {
    name: "Matheus",
    GPA: 6.5,
    classes: [200, 350]
}

console.log(matheus);
