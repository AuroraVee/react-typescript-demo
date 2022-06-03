interface Info {
  name: string
  age: number
}

export type NewInfo = keyof Info // "name" | "age"

const a: NewInfo = 'age'

const sem = { name: 'semlinker', age: 30 }

// typeof用于获取一个变量或者属性的类型，结果是TS做出的类型推断
type Sem = typeof sem // {name:string,age:number}

const SemDemo: Sem = {
  name: 'wjx',
  age: 18,
}

const kakuqo = {
  name: 'kakuqo',
  age: 30,
  address: {
    province: '福建',
    city: '厦门',
  },
}

type Kakuqo = typeof kakuqo
//等价于
/*
 type Kakuqo = {
    name: string;
    age: number;
    address: {
        province: string;
        city: string;
    };
}
*/

// 获取函数对象的类型
function toArray(x: number): Array<number> {
  return [x]
}

type Func = typeof toArray // -> (x: number) => number[]

// keyof 和typeof 联合使用
const bmw = { name: 'BMW', power: '1000hp' }
type CarLiteralType = keyof typeof bmw

let carPropertyLiteral: CarLiteralType
carPropertyLiteral = 'name' // OK
carPropertyLiteral = 'power' // OK

// 在 enum 上使用 keyof typeof
enum ColorsEnum {
  white = '#ffffff',
  black = '#000000',
}
type Colors = keyof typeof ColorsEnum // "white"|"black"

// 将T中的可选属性变为必选
type Required<T> = {
  [P in keyof T]-?: T[P]
}
interface IPerson {
  name?: string
  age?: number
  height?: number
}

const people: Required<IPerson> = {
  name: '',
  age: 18,
  height: 300,
}

// type Extract<T, U> = T extends U ? T : never;
type T0 = Extract<'a' | 'b' | 'c', 'a'>
// "a"
type T1 = Extract<'a' | 'b' | 'c', 'a' | 'b'>
// "a"|"b"
type T2 = Extract<string | number | (() => void), Function>
// (() => void)

// type Exclude<T, U> = T extends U ? never : T;
type T0_ = Exclude<'a' | 'b' | 'c', 'a'>
// "b" | "c"
type T1_ = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
// "c"
type T2_ = Exclude<string | number | (() => void), Function>
// string | number

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface IPerson2 {
  name: string
  age: number
  height: number
}
const person1: Pick<IPerson2, 'name' | 'age'> = {
  //挑选出自己需要的选项
  name: 'zgc',
  age: 1,
}
//不能有height属性

interface IPerson3 {
  name: string
  age: number
  height: number
}
const person3: Omit<IPerson3, 'age' | 'height'> = {
  //剔除自己不需要的选项
  name: 'zgc',
}

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T
}
interface IPerson4 {
  name: string
  age: number
  height: number
}
type IPage = 'home' | 'about' | 'contact'
//const page: Record<K, T> = {
//const page: Record<属性名, 属性值> = {
//其中k需要满足约束“string | number | symbol”。
const page: Record<IPage, IPerson4> = {
  about: { name: 'zgc', age: 1, height: 1 },
  contact: { name: 'wf', age: 1, height: 1 },
  home: { name: 'wlc', age: 1, height: 1 },
}

function foo(type: number): boolean {
  return type === 0
}
// 使用 typeof 是为了获取 foo 的函数签名
type FooType = ReturnType<typeof foo>
const a_: FooType = true

function foo2() {
  return {
    a: 1,
    b: 2,
    subInstArr: [1, 2],
  }
}
// 类型可以索引返回子属性类型
type SubIsntType2 = ReturnType<typeof foo2>['subInstArr'][0]
const baz2: SubIsntType2 = 1
console.log(baz2)

//
type T00 = NonNullable<string | number | undefined>
//  type T0 = string | number

type T11 = NonNullable<string[] | null | undefined>
//  type T1 = string[]

enum Status {
  Off,
  On,
}
interface Light {
  status: Status // Status.Off | Status.On
}
enum Animal {
  Dog = 1,
  Cat = 2,
}
// const light1: Light = {
//   status: Animal.Dog // error 不能将类型“Animal.Dog”分配给类型“Status”
// };
const light2: Light = {
  status: Status.Off,
}
const light3: Light = {
  status: Status.On,
}

interface IResponse<T> {
  message: string
  result: T
  success: boolean
}
async function getResponse(): Promise<IResponse<number[]>> {
  return {
    message: '获取成功',
    result: [1, 2, 3],
    success: true,
  }
}
getResponse().then((response) => {
  console.log(response.result)
})
