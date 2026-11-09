function multiplyValue(value: number, multiplier: number = 2) {
    return value*multiplier;
}
console.log(multiplyValue(7, 0));

type inputType = string | number | boolean;
type outputType = string | number;
function processInput(value: inputType): outputType {
    switch(typeof value) {
        case "string": 
            return value.trim().toLowerCase();
        case "number": 
            return value*10;
        case "boolean":
            if(value) return "Active";
            return "Inactive";
    }
}

console.log(processInput(7));


function formatCoordinate(coordinate: readonly [number, number, string]): string {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));


function concatenateArrays <T> (...args: T[][]): T[] {
    return args.reduce((prev, cur) => prev.concat(cur));
}
console.log(concatenateArrays(["a", "b"], ["c", "d"], ["hello"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));



interface Course {
    title: string,
    students: number,
    isPublished: boolean
}
function getPopularCourses(courses: Course[], minStudents: number) {
    return courses.filter((x) => (x.isPublished && x.students >= minStudents));
}
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80));



function pluckValues<T,K extends keyof T>(items: T[], key: K) {
    return items.map((x) => x[key]);
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name")); 
console.log(pluckValues(users, "id"));



class Employee {
    constructor(
        protected name: string,
        private baseSalary: number
    ){}

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    private department: string

    constructor(
        name: string,
        baseSalary: number,
        department: string
    ){
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());




