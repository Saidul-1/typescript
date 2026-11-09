function multiplyValue(value: number, multiplier: number = 2): number {
    return value*multiplier;
}



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



function formatCoordinate(coordinate: readonly [number, number, string]): string {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}



function concatenateArrays <T> (...args: T[][]): T[] {
    return args.reduce((prev, cur) => prev.concat(cur));
}




interface Course {
    title: string,
    students: number,
    isPublished: boolean
}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    return courses.filter((x) => (x.isPublished && x.students >= minStudents));
}




function pluckValues<T,K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map((x) => x[key]);
}




class Employee {
    constructor(
        protected name: string,
        private baseSalary: number
    ){}

    getDetails(): string {
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
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}




async function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if(age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}