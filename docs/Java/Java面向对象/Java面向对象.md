#	Java面向对象

##	面向对象思想
- - -

###	面向对象和面向过程的思想
* A: 面向过程与面向对象都是我们编程中，编写程序的一种思维方式
	* a: 面向过程的程序设计方式，是遇到一件事时，思考“我该怎么做”，然后一步步实现的过程。
	* b: 面向对象的程序设计方式，是遇到一件事时，思考“我该让谁来做”，然后那个“谁”就是对象，他要怎么做这件事是他自己的事，反正最后一群对象合力能把事就好就行了。
- - -

###	面向对象的思想的生活案例
* A: 买电脑（组装机）
	* a: 面向过程：自己该怎么做
	* b: 面向对象：找人帮我们做
- - -			
			
###	面向对象好处
* A: 面向对象好处
	* a: 面向对象思维方式是一种更符合人们思考习惯的思想
	* b: 面向过程思维方式中更多的体现的是执行者（自己做事情），面向对象中更多的体现是指挥者（指挥对象做事情）。
	* c: 面向对象思维方式将复杂的问题简单化。
- - -

###	大象装进冰箱的代码案例
* A: 需求：把大象装冰箱里
	* a: 面向过程 		
		* 自己打开冰箱门
		* 自己将大象装进去	
		* 自己关闭冰箱门	
	* b: 面向对象
		* 分析发现打开、装、关闭都是冰箱的功能。即冰箱对象具	备如下功能
		* 冰箱打开
		* 冰箱存储
		* 冰箱关闭

* B: 通过伪代码描述大象和冰箱
	* 描述大象：
		```
			class 大象
			{
			}
		```
	* 描述冰箱
		```
			class冰箱
			{
				void 打开(){}
				void 存储(大象){}
				void 关闭(){}
			}
		```
			
* C: 使用对象：
	* 1、创建冰箱的对象
		* 冰箱 bx = new 冰箱();  
	* 2、调用冰箱的功能
		* 对象.功能()；
		* bx.打开();
		* bx.存储(new 大象());
		* bx.关闭();
* D：总结：
	* 1、先按照名词提炼问题领域中的对象
	* 2、对对象进行描述，其实就是在明确对象中应该具备的属性和功能	
	* 3、通过new的方式就可以创建该事物的具体对象
	* 4、通过该对象调用它以后的功能。
- - -

###	定义小汽车类
* A: 分析小汽车的属性和功能
	* 属性
		* 颜色
		* 轮胎个数
	* 功能
		* 运行	

* B: 通过伪代码描述小汽车
	* 小汽车{
		* 颜色
		* 轮胎个数
		* 运行(){}
	* }

* C：通过JAVA代码描述小汽车
	```java
		public class Car {
			String color;
			int number;
		
			void run() {
				System.out.println(color + ":" + number);
			}
		}
	```
- - -

###	测试汽车类
* A: 创见对象的格式
	* a: 类名 变量名 = new 类名();
* B: 测试汽车类
	```java
		public class CarDemo {
			public static void main(String[] args) { 
				/*
				 测试：Car类中的run方法。
				 */
				// 1,创建Car的对象。给对象起个名字。
				Car c = new Car();// c是类类型的变量。c指向了一个具体的Car类型的对象。
				// 2,通过已有的对象调用该对象的功能。格式：对象.对象成员;
				// 3,可以该对象的属性赋值。
				c.color = "red";
				c.number = 4;
				c.run();
			}
		}
	```
- - -

##	类与对象的关系
- - -

###	类和对象的关系
* A: 类和对象的关系
	* 类是对某一类事物的抽象描述，而对象用于表示现实中该类事物的个体
* B: 举例
	* 可以将玩具模型看作是一个类，将一个个玩具看作对象，从玩具模型和玩具之间的关系便可以看出类与对象之间的关系
- - -

##	局部变量和成员变量的关系
- - -

###	成员变量和局部变量的区别
* 区别一：定义的位置不同
	* 定义在类中的变量是成员变量
	* 定义在方法中或者{}语句里面的变量是局部变量
* 区别二：在内存中的位置不同
	* 成员变量存储在对内存的对象中
	* 局部变量存储在栈内存的方法中
* 区别三：声明周期不同
	* 成员变量随着对象的出现而出现在堆中，随着对象的消失而从堆中消失
	* 局部变量随着方法的运行而出现在栈中，随着方法的弹栈而消失
* 区别四：初始化不同
	* 成员变量因为在堆内存中，所有默认的初始化值
	* 局部变量没有默认的初始化值，必须手动的给其赋值才可以使用。
- - -

##	封装思想
- - -

###	方法参数是基本数据类型和引用数据类型
* A.基本类型
	```java
		class Demo
		{
			public static void main(String[] args)
			{
				int x = 4;
				show(x);
				System.out.println("x="+x);
			}
			public static void show(int x)
			{
				x = 5;
				
			}
		}	 
	```
		基本类型作为参数传递时，其实就是将基本类型变量x空间中的值复制了一份传递给调用的方法show()，当在show()方法中x接受到了复制的值，再在show()方法中对x变量进行操作，这时只会影响到show中的x。当show方法执行完成，弹栈后，程序又回到main方法执行，main方法中的x值还是原来的值。

* B.引用类型
	```java
		class Demo 
		{
			int x ;
			public static void main(String[] args) 
			{
		
				Demo d = new Demo();
				d.x = 5;
				show(d);
				System.out.println("x="+d.x);
			}
			public static void show(Demo d)
			{
				d.x = 6;
			}
		}	 
	```	
		当引用变量作为参数传递时，这时其实是将引用变量空间中的内存地址(引用)复制了一份传递给了show方法的d引用变量。这时会有两个引用同时指向堆中的同一个对象。当执行show方法中的d.x=6时，会根据d所持有的引用找到堆中的对象，并将其x属性的值改为6.show方法弹栈。
		由于是两个引用指向同一个对象，不管是哪一个引用改变了引用的所指向的对象的中的值，其他引用再次使用都是改变后的值。

* C.结论
	* 对于基本类型形式参数改变不会影响到实际参数
	* 对于引用类型形式参数改变会影响到实际参数 
- - -

###	封装的概述
* A.面向对象三大特征
	* 封装、继承、多态
* B.封装表现
	* 1、方法就是一个最基本封装体
	* 2、类其实也是一个封装体	
* C.封装的好处
	* 1、提高了代码的复用性
	* 2、隐藏了实现细节，还要对外提供可以访问的方式。便于调用者的使用。这是核心之一，也可以理解为就是封装的概念
	* 3、提高了安全性	 
- - -

###	封装的生活中的举例
* A.封装的生活中的举例
	*	机箱：
		一台电脑，它是由CPU、主板、显卡、内存、硬盘、电源等部件组长，其实我们将这些部件组装在一起就可以使用电脑了，但是发现这些部件都散落在外面，很容造成不安全因素，于是，使用机箱壳子，把这些部件都装在里面，并在机箱壳上留下一些插口等，若不留插口，大家想想会是什么情况。
	*	总结：机箱其实就是隐藏了办卡设备的细节，对外提供了插口以及开关等访问内部细节的方式。
* B.总结
	* 机箱其实就是隐藏了办卡设备的细节，对外提供了插口以及开关等访问内部细节的方式
- - -

##	private,this关键字
- - -

###	private关键字
* A.private概述
	* private可以修饰成员内容包括成员方法和成员变量
	* 被private修饰的内容不能在其他类访问
* B.使用步骤
	* 1、通过private修饰属性
* C.完整代码 
	```java
		class Person {
			private int age;
			private String name;
		
			public void show() {
				System.out.println("age=" + age + ",name" + name);
			}
		}
	```
- - -

###	get和set方法
* A.get和set方法
	* 	年龄已被私有，错误的值无法赋值，可是正确的值也赋值不了，这样还是不行，那肿么办呢？按照之前所学习的封装的原理，隐藏后，还需要提供访问方式。只要对外提供可以访问的方法，让其他程序访问这些方法。同时在方法中可以对数据进行验证。
	*	一般对成员属性的访问动作：赋值(设置 set)，取值(获取 get)，因此对私有的变量访问的方式可以提供对应的 setXxx或者getXxx的方法。

	```java
		class Person {
			// 私有成员变量
			private int age;
			private String name;
		
			// 对外提供设置成员变量的方法
			public void setAge(int a) {
				// 由于是设置成员变量的值，这里可以加入数据的验证
				if (a < 0 || a > 130) {
					System.out.println(a + "不符合年龄的数据范围");
					return;
				}
				age = a; 
			}
		
			// 对外提供访问成员变量的方法
			public void getAge() {
				return age;
			}
		}
	```	
	* 总结
		* 类中不需要对外提供的内容都私有化，包括属性和方法。以后再描述事物，属性都私有化，并提供setXxx getXxx方法对其进行访问
		* 注意
			* 私有仅仅是封装的体现形式而已
- - -

###	私有化Person类带get,set
* 标准代码
	```java
		package cn.itcast.demo05;
		
		/*
		 *   类描述人:
		 *     属性: 姓名和年龄
		 *     方法: 说话
		 *   
		 *   私有化所有的属性 (成员变量) ,必须写对应的get/set方法
		 *   凡是自定义的类,自定义成员变量,应该私有化,提供get/set
		 *   
		 *   this关键字:
		 *     区分成员变量和局部变量同名情况
		 *     方法中,方位成员变量,写this.
		 */
		public class Person {
			private String name;
			private int age;
		
			// set方法,变量name,age赋值
			public void setAge(int age) {
				this.age = age;
			}
		
			public void setName(String name) {
				this.name = name;
			}
		
			// get方法,变量name,age获取值
			public int getAge() {
				return age;
			}
		
			public String getName() {
				return name;
			}
		
			public void speak() {
				String  name = "哈哈";
				int age = 16;
				
				System.out.println("人在说话  " + this.name + "..." + this.age);
			}
		}
	```	
	* 标准测试代码
	```java
		package cn.itcast.demo05;
		
		public class PersonTest {
			public static void main(String[] args) {
				Person p = new Person();
				//调用set方法,对成员变量赋值
				p.setAge(18);
				p.setName("旺财");
				p.speak();
				
				
				//调用get方法,获取成员变量的值
		//		System.out.println(p.getName());
		//		System.out.println(p.getAge());
			}
		}
	```
- - -

###	this关键字_区分成员变量和局部变量的同名
* A.什么时候用
	* 当类中存在成员变量和局部变量同名的时候为了区分，就需要使用this关键字
* B.代码
	```java
		class Person {
			private int age;
			private String name;
			
			public void speak() {
				this.name = "小强";
				this.age = 18;
				System.out.println("name=" + this.name + ",age=" + this.age);
			}
		}
		
		class PersonDemo {
			public static void main(String[] args) {
				Person p = new Person();
				p.speak();
			}
		}
	```
- - -

###	this的年龄比较
* A.需求：在Person类中定义功能，判断两个人是否是同龄人
* B.代码
	```java
		class Person {
			private int age;
			private String name;
			
			public int getAge() {
				return age;
			}
		
			public void setAge(int age) {
				this.age = age;
			}
		
			public String getName() {
				return name;
			}
		
			public void setName(String name) {
				this.name = name;
			}
		
			public void speak() {
				System.out.println("name=" + this.name + ",age=" + this.age);
			}
		
			// 判断是否为同龄人
			public boolean equalsAge(Person p) {
				// 使用当前调用该equalsAge方法对象的age和传递进来p的age进行比较
				// 由于无法确定具体是哪一个对象调用equalsAge方法，这里就可以使用this来代替
				/*
				 * if(this.age == p.age) { return true; } return false;
				 */
				return this.age == p.age;
			}
		}
	```
- - -

##	随机点名器
- - -

###	随机点名器案例重构
* A.需求：随机点名器，即在全班同学中随机的找出一名同学，打印这名同学的个人信息
	它具备以下3个内容：
	存储所有同学姓名
	总览全班同学姓名
	随机点名其中一人，打印到控制台
* B.代码
	```java
		import java.util.ArrayList;
		import java.util.Random;
		import java.util.Scanner;
		
		/**
		 * 思路：
		 * 第一步：存储全班同学信息
		 * 第二步：打印全班同学每一个人的信息
		 * 第三部：随机对学生点名，打印学生信息
		 */
		public class Test {
			public static void main(String[] args) {
				ArrayList<Student> list = new ArrayList<Student>(); //1.1创建一个可以存储多个同学名字的容器
				 //1.存储全班同学信息
				addStudent(list);
				 //2.打印全班同学每一个人的信息（姓名、年龄）
				printStudent(list);
				 //3.随机对学生点名，打印学生信息
				randomStudent(list);
			}
			public static void addStudent(ArrayList<Student> list) {
				//键盘输入多个同学名字存储到容器中
				Scanner sc = new Scanner(System.in);
				for (int i = 0; i < 3; i++) {
					//创建学生
					Student s = new Student();
					System.out.println("存储第"+i+"个学生姓名：");
					String name = sc.next();
					s.setName(name);
					System.out.println("存储第"+i+"个学生年龄：");
					int age = sc.nextInt();
					s.setAge(age);
					//添加学生到集合
					list.add(s);
				}
			}
			/**
			 2.打印全班同学每一个人的信息（姓名、年龄）
			 */
			public static void printStudent (ArrayList<Student> list) {
				for (int i = 0; i < list.size(); i++) {
					Student s = list.get(i);
					System.out.println("姓名："+s.getName() +",年龄："+s.getAge());
				}
			}
			/**
			 3.随机对学生点名，打印学生信息
			 */
			public static void randomStudent (ArrayList<Student> list) {
				//在班级总人数范围内，随机产生一个随机数
				int index = new Random().nextInt(list.size());
				//在容器（ArrayList集合）中，查找该随机数所对应的同学信息（姓名、年龄）
				Student s = list.get(index);
				System.out.println("被随机点名的同学："+s.getName() + "，年龄:" + s.getAge());
			}
		}

		/**
		 * 学生信息类
		 */
		public class Student {
			private String name; // 姓名
			private int age; // 年龄
		
			public String getName() {
				return name;
			}
		
			public void setName(String name) {
				this.name = name;
			}
		
			public int getAge() {
				return age;
			}
		
			public void setAge(int age) {
				this.age = age;
			}
		}	
	```
- - -	

###	总结
* A.类与对象
	* 类，用于描述多个对象的共同特征，它是对象的模板。
	* 对象，用于描述现实中的个体，它是类的实例。
	* 类的定义：使用关键字class来定义java中的类
	* 格式：
		```java
			class 类名 {
				//属性
				数据类型 变量名;
				…
				//方法
				修饰符 返回值类型 方法名(参数){   }
				…
			}
		```
* B.创建对象：
	* 格式：
	* 类名 对象名 = new 类名();

* C.封装（private关键字）
	* 封装，把对象的属性与方法的实现细节隐藏，仅对外提供一些公共的访问方式
	* 封装的体现：
	* 变量:使用 private 修饰，这就是变量的封装
	* 方法:也是一种封装，封装了多条代码
	* 类： 也是一种封装，封装了多个方法
* D.private关键字，私有的意思
	* 它可以用来修饰类中的成员(成员变量，成员方法)
	* private的特点：
	* private修饰的成员只能在当前类中访问，其他类中无法直接访问
* E.this关键字
	* this关键字，本类对象的引用
	* this是在方法中使用的，哪个对象调用了该方法，那么，this就代表调用该方法的对象引用
	* this什么时候存在的？当创建对象的时候，this存在的
	* this的作用：用来区别同名的成员变量与局部变量（this.成员变量）
	* public void setName(String name) {
	* 	this.name = name;
	* }
- - -

##	继承
- - - 

###	继承的概述
* A:继承的概念
    * a:继承描述的是事物之间的所属关系，通过继承可以使多种事物之间形成一种关系体系
    * b:在Java中，类的继承是指在一个现有类的基础上去构建一个新的类，
	    构建出来的新类被称作子类，现有类被称作父类
* B:继承关系的子类特点  
    * a:子类会自动拥有父类所有非private修饰的属性和方法
- - - 

###	继承的定义格式和使用
* A:继承的格式
    * class 子类 
	* extends 父类 {}
* B:雇员(Employee)与研发部员工(Developer)案例:
	```java
	    cn.itcast.demo01包下:
	    Employee.java:
			 /*
			 * 定义员工类Employee
			 */
			class Employee {
				String name; // 定义name属性
				
				public void work() {// 定义员工的工作方法
					System.out.println("尽心尽力地工作");
				}
			}
        Developer.java:
		    /*
			 * 定义研发部员工类Developer 继承 员工类Employee
			 * 继承了父类中所有非private修饰的成员变量
			 */
			class Developer extends Employee {
				// 定义一个打印name的方法
				public void printName() {
					System.out.println("name=" + name);
				}
			}
        测试员工类与研发部员工类:
            /*
 		     * 定义测试类
             */
			public class Example01 {
				public static void main(String[] args) {
					Developer d = new Developer(); // 创建一个研发部员工类对象
					d.name = "小明"; // 为该员工类的name属性进行赋值
					d.printName(); // 调用该员工的printName()方法
					d.work(); // 调用Developer类继承来的work()方法
				}
			}
        通过子类对象既可以调用自身的非private修饰的成员,也可以调用父类的非private修饰的成员
	```
- - - 

###	继承的好处
* A:继承的好处：
	* 1、继承的出现提高了代码的复用性，提高软件开发效率。
    * 2、继承的出现让类与类之间产生了关系，提供了多态的前提。
- - - 

###		继承的注意事项 
* A:继承的注意事项 
	* a:在Java中，类只支持单继承，不允许多继承，也就是说一个类只能有一个直接父类，例如下面这种情况是不合法的。
		```java	
		     class A{} 
		     class B{}
		     class C extends A,B{}  // C类不可以同时继承A类和B类
		  假如支持多继承例如:
             class A{
             	int a=3;
                public void method(){

                }
             } 
		     class B{
		     	int a=5;
		     	public void method(){

		     	}
		     }
		     class C extends A,B{
                
		     } 
		     class Demo{
		     	public static void main(String[] args){
		     		C c=new C();
		     		System.out.println(c.a);//到底是调用A的还是B的成员变量??无法确定
		     		c.method();//到底是调用A的还是B的成员方法??无法确定
		     	}	
		     }
		```

	* b:多个类可以继承一个父类，例如下面这种情况是允许的(就像你爹可以多个儿子,但是这些儿子都只有一个爹)
		```
		     class A{}
		     class B extends A{}
		     class C extends A{}   // 类B和类C都可以继承类A
		```

	* c:在Java中，多层继承是可以的，
	    * 即一个类的父类可以再去继承另外的父类，
	    * 例如: C类继承自B类，而B类又可以去继承A类，这时，C类也可称作A类的子类。下面这种情况是允许的。
		```
		     class A{}
		     class B extends A{}   // 类B继承类A，类B是类A的子类
		     class C extends B{}   // 类C继承类B，类C是类B的子类，同时也是类A的子类
		```

    * d:在Java中，子类和父类是一种相对概念，
            也就是说一个类是某个类父类的同时，也可以是另一个类的子类。
            例如上面的这种情况中，B类是A类的子类，同时又是C类的父类。
- - - 

###	继承的体系
* A:继承的体系:

						                  动物(吃)
						                    |
						           -------------------------
						           |                        |
						        猫科动物(吃,胎生)      爬行动物(吃,卵生)
						           |                            |
				 -------------------------------        -----------------      
			     |          			       |        |                |
				猫(吃,抓老鼠,胎生)   虎(吃,领地,胎生)  蛇(吃,冬眠,卵生)  鳄鱼(吃,潜水,卵生)
	    
	    
	    *a:动物体系是对每个具体事物共性的抽取,子类的共性抽取形成父类
	    *b:父类:具有所有子类的共性内容
	       子类:不但有共性还有自身特有的内容
	    *c:整个继承体系,越向上越抽象,越向下越具体
- - - 

###	继承后子类父类成员变量的特点 
* A:继承后子类父类成员变量的特点
	* a:子类的对象调用成员变量的时候,子类自己有,使用子类,子类自己没有调用的父类
		```java
		   class Fu{
				//Fu中的成员变量。
				int num = 5;
			}
			
			class Zi extends Fu{
				//Zi中的成员变量
				int num2 = 6;
				//Zi中的成员方法
				public void show()
				{
					//访问父类中的num
					System.out.println("Fu num="+num);
					//访问子类中的num2
					System.out.println("Zi num2="+num2);
				}
			}
			
			class Demo{
				public static void main(String[] args) 
				{
					Zi z = new Zi(); //创建子类对象
					z.show(); //调用子类中的show方法
				}
			}
		```

    * b:当子父类中出现了同名成员变量
 		```java
		class Fu{
			//Fu中的成员变量。
			int num = 5;
		}
		
		class Zi extends Fu{
			//Zi中的成员变量
			int num = 6;
			void show(){   
				//子类的局部变量
				int num=7
				
				//直接访问,遵循就近查找原则
                System.out.println(num);//7
				
				//子父类中出现了同名的成员变量时
				//在子类中需要访问父类中非私有成员变量时，需要使用super关键字
				//访问父类中的num
				System.out.println("Fu num="+super.num);//5
				

				//访问子类中的num2
				System.out.println("Zi num2="+this.num);//6
			}
		}
		
		class Demo5 {
			public static void main(String[] args) 
			{
				Zi z = new Zi(); //创建子类对象
				z.show(); //调用子类中的show方法
			}
		}
		```
- - - 

###	继承后子类父类成员方法的特性_子类重写父类方法 
* A:继承后子类父类成员方法的特性
	* a:子类的对象调用方法的时候,子类自己有,使用子类,子类自己没有调用的父类
	```java
	    class Fu{
			public void show(){
				System.out.println("Fu类中的show方法执行");
			}
		}
		class Zi extends Fu{
			public void show2(){
				System.out.println("Zi类中的show2方法执行");
			}
		}
		public  class Test{
			public static void main(String[] args) {
				Zi z = new Zi();
				z.show(); //子类中没有show方法，但是可以找到父类方法去执行
				z.show2();
			}
		}  
    ```

    * b:为什么要有重写?
	```java
         class Fu{
         	public void method(){
         		//上千行代码
                //Fu类中的方法最先存在,那么如果项目需求变了,该方法
                //功能不能够满足我们的需求,此时我们也不会去改这个方法
                //因为项目中可能有大量的功能已经使用到该方法,如果随意修改可能使调用该方法的功能出现问题
                //所以使用重写方式基于原有功能提供更强的功能
         	}   
         }
         class Zi extends Fu{
          
         }
	```

    * c:子类中出现与父类一模一样的方法时，会出现覆盖操作，也称为override重写、复写或者覆盖
	```java
       class Fu{
			public void show(){
				System.out.println("Fu show");
			}
       }
	   
	   class Zi extends Fu{
			//子类复写了父类的show方法
			public void show(){
				System.out.println("Zi show");
			}
		}
       public  class Test{
			public static void main(String[] args) {
				Zi z = new Zi();
				z.show(); //Zi show 子类有直接使用子类
			}
		}  
    ```
- - - 

###	方法覆盖的需求 
* A:方法覆盖的需求 
	* a:案例:比如手机，当描述一个手机时，它具有发短信，打电话，显示来电号码功能，
	    后期由于手机需要在来电显示功能中增加显示姓名和头像，
	    这时可以重新定义一个类描述智能手机，并继承原有描述手机的类。
	    并在新定义的类中覆盖来电显示功能，在其中增加显示姓名和头像功能

	* b:分析:我们不改装(破坏)原来的手机,而是再买一个新的智能手机,不但有原有的功能,而且还有特有功能
	    * 例:厂商发布新手机都是基于原有手机的升级,不会拿着原有的手机在卖,新产一款 
    		* 1:分析类的构建:
			```
	           手机类
	            属性(成员变量):无
	            行为(成员方法):
	               发短信
	               打电话
	               来电显示:显示来电号码
	          智能手机类:
	            属性(成员变量):无
	            行为(成员方法):
	              发短信
	              打电话
	              来电显示:显示来电号码,显示姓名和头像
	          
	          手机类和智能手机类有共性内容:
	              发短信
	              打电话
	              显示来电号码
			```
        	* 2:继承关系分析:
            	* 对于发短信和打电话功能,让智能手机直接沿用(继承)手机的就可以
            	但是在智能手机中的来电显示不但实现号码,还显示姓名和头像,同样的都是来电显示功能,智能手机的来电显示比手机的功能更加强大,我们考虑使用重写
- - - 

###	方法覆盖的手机案例实现 
```java
		//手机类
		class Phone{
			public void sendMessage(){
				System.out.println("发短信");
			}
			public void call(){
				System.out.println("打电话");
			}
			public void showNum(){
				System.out.println("来电显示号码");
			}
		}
		//智能手机类
		class NewPhone extends Phone{
			//覆盖父类的来电显示号码功能，并增加自己的显示姓名和图片功能
			//从现实生活角度考虑沿用原有的showNum方法名便于用户更快熟悉和接受,而不是再起个新的名字
			//用户还需要花费大量时间慢慢接受
			
			public void showNum(){
				//调用父类已经存在的功能使用super
                //如果不加super这是调用子类自身的showNum(),自己调用自己,递归
                //方法不断入栈导致内存溢出
				super.showNum();
				

				//增加自己特有显示姓名和图片功能
				System.out.println("显示来电姓名");
				System.out.println("显示头像");
			}
		}
		public class Test {
			public static void main(String[] args) {
				new NewPhone().showNum();//来电显示  显示来电姓名 显示头像
			}
		}
```			
- - - 

###	方法覆盖的注意事项 
* A:方法覆盖的注意事项 
    * a:权限:子类方法覆盖父类方法，必须要保证权限大于等于父类权限。
      	四大权限:public>默认=protected>private
	```java   
	   class Fu{	
			void show(){

			}
			public void method(){

			}
	    }
	    class Zi() extends Fu{
			public void show(){//编译运行没问题

			}  
			void method(){//编译错误

		    }     
	    }
	```	

	* b:方法定义:子类方法和要重写的父类的方法:方法的方法名和参数列表都要一样。
		* 关于方法的返回值:
	      * 如果是基本数据类型,子类的方法和重写的父类的方法返回值类型必须相同
	      * 如果是引用数据类型,子类的方法和重写的父类的方法返回值类型可以相同或者子类方法的返回值类型是父类方法返回值类型的子类
		```java  
	    class Fu{	
			int show(){

			}
			public Fu method(){

			}
			
			public Fu method2(){

			}
			
	    }
	    class Zi() extends Fu{
			public int show(){//返回值为基本类型的重写

			}  
			public Fu method(){//子类的方法和重写的父类的方法返回值类型可以相同

		    }     
		    public Zi method2(){//子类方法的返回值类型是父类方法返回值类型的子类

		    }     
	    }
		```

    * c:重载与重写对比:
        * 重载:
		    * 权限修饰符(public private 默认):无关
		    * 方法名:重载的两个方法的方法名必须相同
		    * 形参列表:
		      * 形参类型的顺序不同
		      * 形参的个数不同
		      * 形参的类型不同
		      * 三者至少满足一个
		    * 返回值类型:
		      * 重载与返回值类型无关

		* 重写:
		    * 权限修饰符(public private 默认): 
		      * 子类方法的权限>=父类的方法的权限
		    * 方法名: 
		      * 子类方法和父类方法必须相同
		    * 形参列表: 
		       * 子类方法和父类方法的形参列表必须相同
		    * 返回值类型:
		      * 基本类数据类型:
		        * 必须相同
		    * 引用数据类型:
		      * 子类方法的返回值类型和父类方法的返回值类型相同
		      * 或者
		        子类方法的返回值类型是父类方法的返回值类型的子类
- - - 

##	抽象类
- - - 

###	抽象类的产生 
* A:抽象类的产生
    * a:分析事物时，发现了共性内容，就出现向上抽取。会有这样一种特殊情况，就是方法功能声明相同，但方法功能主体不同。那么这时也可以抽取，但只抽取方法声明，不抽取方法主体。那么此方法就是一个抽象方法。
- - - 

###	抽象类的定义格式 
* A:抽象方法定义的格式：
	```java
	   a:public abstract 返回值类型 方法名(参数);
	     抽象类定义的格式：
		 abstract class 类名 {
			
		  }
	    b:抽象类示例代码：
		   /*
			 *  定义类开发工程师类
			 *    EE开发工程师 :  工作
			 *    Android开发工程师 : 工作
			 *    
			 *    根据共性进行抽取,然后形成一个父类Develop
			 *    定义方法,工作: 怎么工作,具体干什么呀
			 *    
			 *    抽象类,不能实例化对象, 不能new的
			 *    不能创建对象的原因:  如果真的让你new了, 对象.调用抽象方法,抽象方法没有主体,根本就不能运行
			 *    抽象类使用: 定义类继承抽象类,将抽象方法进行重写,创建子类的对象
			 */
			public abstract class Develop {
			   //定义方法工作方法,但是怎么工作,说不清楚了,讲不明白
				//就不说, 方法没有主体的方法,必须使用关键字abstract修饰
				//抽象的方法,必须存在于抽象的类中,类也必须用abstract修饰
				public abstract void work();
			}
	```
- - - 

###	抽象类的使用方式
* A:抽象类的使用方式
	```java
	 /*
	 *  定义类,JavaEE的开发人员
	 *  继承抽象类Develop,重写抽象的方法
	 */
	public class JavaEE extends Develop{
		//重写父类的抽象方法
		//去掉abstract修饰符,加上方法主体
		public void work(){
			System.out.println("JavaEE工程师在开发B/S 软件");
		
		}
	}
	/*
	 *  定义Android类,继承开发人员类
	 *  重写抽象方法
	 */
	public class Android extends Develop{
	     public void work(){
	    	 System.out.println("Android工程师开发手机软件");
	     }
	}

	/*
	 *  测试抽象类
	 *    创建他的子类的对象,使用子类的对象调用方法
	 */
	public class Test {
		public static void main(String[] args) {
			 JavaEE ee = new JavaEE();
			 ee.work();//"JavaEE工程师在开发B/S 软件"
			 
			 Android and = new Android();
			 and.work();//"Android工程师开发手机软件"
		}
	}
	```        
- - - 

###	抽象类特点
* A:抽象类的特点
    * a:抽象类和抽象方法都需要被abstract修饰。抽象方法一定要定义在抽象类中。
    * b:抽象类不可以直接创建对象，原因：调用抽象方法没有意义。
    * c:只有覆盖了抽象类中所有的抽象方法后，其子类才可以创建对象。否则该子类还是一个抽象类。
    之所以继承抽象类，更多的是在思想，是面对共性类型操作会更简单。
	```java
      abstract class A{
      	public abstract void func();
      	public abstract void func2();
      }
      class A2 extends A{//A2把A中的两个抽象方法都重写掉了
      	                 //A2类不再是抽象类
      	 public void func(){}
      	 public void func2(){}
      }

      abstract class A3 extends A{//含有抽象方法的类一定是抽象类
      	 public void func(){

      	 }
      	 //public abstract void func2();//func2相当于被继承下来
      }
	```
- - - 

###	抽象类的设计思想 4:40
* A:抽象类的设计思想
    * a:抽象类的作用:继承的体系抽象类,强制子类重写抽象的方法
        抽象员工:
	```	
          规定一个方法,work工作
          EE员工,Android员工 
           
           Develop类 抽象类
           abstract work();
                  |
    	    -------------
    	   |             |
    	  EE            Android  //是我开发的一员必须工作
    	  work(){}       work(){}
	```
- - - 


###	抽象类的细节
* A:抽象类的细节
    * a:抽象类一定是个父类？	
        是的，因为不断抽取而来的。
    * b:抽象类中是否可以不定义抽象方法?
       是可以的，那这个抽象类的存在到底有什么意义呢？不让该类创建对象,方法可以直接让子类去使用
       (适配器设计模式)
	   ```java
        /*
		 *   抽象类,可以没有抽象方法,可以定义带有方法体的方法
		 *   让子类继承后,可以直接使用
		 */
		public  abstract class Animal {
		     public void sleep(){
		    	 System.out.println("动物睡觉");
		     }
		    
		}
		public class Cat extends Animal{

        }     
        
        public class Test {
			public static void main(String[] args) {
				//Cat c = new Cat();
				new Cat().sleep();//不让该类创建对象,方法可以直接让子类去使用
			}
        }
		```

    * c:抽象关键字abstract不可以和哪些关键字共存？	
		* 1:private：私有的方法子类是无法继承到的，也不存在覆盖，
                 而abstract和private一起使用修饰方法，abstract既要子类去实现这个方法,
                 而private修饰子类根本无法得到父类这个方法。互相矛盾。 
        ```java
        /*
		 *   抽象类,可以没有抽象方法,可以定义带有方法体的方法
		 *   让子类继承后,可以直接使用
		 */
		public  abstract class Animal {
		 
		     // private abstract void show();
		     //抽象方法,需要子类重写, 如果父类方法是私有的,子类继承不了,也就没有了重写
		}
	 	```
		* 2:final，暂时不关注，后面学
		* 3:static，暂时不关注，后面学
- - - 

##	综合案例---员工类系列定义
- - - 

###	员工案例分析
* A:员工案例分析:
    * a:需求描述:
		* 某IT公司有多名员工，按照员工负责的工作不同，进行了部门的划分（研发部员工、维护部员工）。
		  研发部根据所需研发的内容不同，又分为JavaEE工程师、Android工程师；
		  维护部根据所需维护的内容不同，又分为网络维护工程师、硬件维护工程师。

		* 公司的每名员工都有他们自己的员工编号、姓名，并要做它们所负责的工作。
		*	工作内容:
			*	JavaEE工程师：员工号为xxx的 xxx员工，正在研发淘宝网站
			*	Android工程师：员工号为xxx的 xxx员工，正在研发淘宝手机客户端软件
			*	网络维护工程师：员工号为xxx的 xxx员工，正在检查网络是否畅通
			*	硬件维护工程师：员工号为xxx的 xxx员工，正在修复打印机

  	* b:继承体系:
	```	
    		                    员工
    		                     |
    		   --------------------------------------------
    		   |                                          |
    		 研发部员工                                 维护部员工
    		   |                                          |
		   -------------                              -----------
		   |            |                             |         |
		JavaEE工程师   Android工程师         网络维护工程师    硬件维护工程师
	```

    * c:详细描述:
		* 根据员工信息的描述，确定每个员工都有员工编号、姓名、要进行工作。
     	则，把这些共同的属性与功能抽取到父类中（员工类），
     	关于工作的内容由具体的工程师来进行指定。
	  * 工作内容:
		*	JavaEE工程师：员工号为xxx的 xxx员工，正在研发淘宝网站
		*	Android工程师：员工号为xxx的 xxx员工，正在研发淘宝手机客户端软件
		*	网络维护工程师：员工号为xxx的 xxx员工，正在检查网络是否畅通
		*	硬件维护工程师：员工号为xxx的 xxx员工，正在修复打印机
		*	创建JavaEE工程师对象，完成工作方法的调用
- - - 

###	员工案例Employee类的编写
* A:员工案例Employee类的编写:按照分析的继承体系来逐个实现
	```java
		 /*
		 *  定义员工类
		 *    内容,都是所有子类的共性抽取
		 *      属性: 姓名,工号
		 *      方法: 工作
		 */
	   public abstract class Employee {
			private String id;// 员工编号
			private String name; // 员工姓名

			public String getId() {
				return id;
			}
			public void setId(String id) {
				this.id = id;
			}
			public String getName() {
				return name;
			}
			public void setName(String name) {
				this.name = name;
			}
			
			//工作方法（抽象方法）
			public abstract void work(); 
	 }
	```
- - - 

###	员工案例的子类的编写
* B:员工案例的子类的编写:
	```java
     /*
	 *  定义研发员工类
	 *    属于员工中的一种, 继承员工类 
	 *    抽象类Develop 给自己的员工定义自己有的属性
	 */
	public abstract class Develop extends Employee{

	}

	/*
	 *  描述JavaEE开发工程师类
	 *    工号,姓名 工作方法
	 *  其他的员工,也具备这些共性,抽取到父类中,自己就不需要定义了
	 *  是研发部员工的一种,继承研发部类
	 */
	public class JavaEE extends Develop{
		//重写他父类的父类的抽象方法
		public void work(){
			//调用父类的get方法,获取name,id值
			System.out.println("JavaEE的工程师开发淘宝"+ super.getName()+".."+super.getId());
		}
	}
	/*
	*定义Android工程师 继承 研发部员工类，重写工作方法
	*/
    public class Android extends Developer {
	  @Override
	   public void work() {
		System.out.println("员工号为 " + getId() + " 的 " + getName() + " 员工，正在研发淘宝手机客户端软件");
	  }
    }
  

    /*
	 *   定义维护员工类,属于员工中的一种
	 *   继承员工类
	 *   抽象类Maintainer 给自己的员工定义自己有的属性
	 */
	public abstract class Maintainer extends Employee{

	}
    
    /*
	 *  描述的是网络维护工程师
	 *  属于维护部的员工,继承维护部类
	 */
	public class Network extends Maintainer{
		public void work(){
			System.out.println("网络工程师在检查网络是否畅通"+super.getName()+"..."+super.getId());
		}
	}

    /*
     *定义Hardware硬件维护工程师 继承 维护部员工类，重写工作方法
     */
	public class Hardware extends Maintainer {
		@Override
		public void work() {
			System.out.println("员工号为 " + getId() + " 的 " + getName() + " 员工，正在修复打印机");
		}
	}
	```
- - - 

## 接口
- - -

###	接口的概念
* A:接口的概念
	*   接口是功能的集合，同样可看做是一种数据类型，是比抽象类更为抽象的”类”。
		接口只描述所应该具备的方法，并没有具体实现，具体的实现由接口的实现类(相当于接口的子类)来完成。这样将功能的定义与实现分离，优化了程序设计。
	*	请记住：一切事物均有功能，即一切事物均有接口。
- - -

###	接口的定义
* A: 接口的定义
	*	与定义类的class不同，接口定义时需要使用interface关键字。
		定义接口所在的仍为.java文件，虽然声明时使用的为interface关键字的编译后仍然会产生.class文件。这点可以让我们将接口看做是一种只包含了功能声明的特殊类。
								
	* B : 定义格式
		```java
			public interface 接口名 {
				抽象方法1;
				抽象方法2;
				抽象方法3;
			}
		```

	* C: 定义步骤
		*	使用interface代替了原来的class，其他步骤与定义类相同：
			*	接口中的方法均为公共访问的抽象方法
			*	接口中无法定义普通的成员变量
- - -
			
###	接口的实现类
* A: 类与接口的关系
	* 类与接口的关系为实现关系，即类实现接口。实现的动作类似继承，只是关键字不同，实现使用	implements。
	其他类(实现类)实现接口后，就相当于声明：”我应该具备这个接口中的功能”。实现类仍然需要重写方法以实现具体的功能。
* B: 类实现接口的格式
	```java
			class 类 implements 接口 {
				重写接口中方法
			} 
	```		
* C:注意事项
	* 在类实现接口后，该类就会将接口中的抽象方法继承过来，此时该类需要重写该抽象方法，完成具体的逻辑。
	接口中定义功能，当需要具有该功能时，可以让类实现该接口，只声明了应该具备该方法，是功能的声明。
	在具体实现类中重写方法，实现功能，是方法的具体实现。
- - -

###	接口中成员变量的特点
* A:成员变量特点
	 * a 接口中可以定义变量，但是变量必须有固定的修饰符修饰，public static final 所以接口中的变量也称之为常量，其值不能改变。后面我们会讲解static与final关键字
			
* B:案例
	```java
			interface Demo { ///定义一个名称为Demo的接口。
				public static final int NUM = 3;// NUM的值不能改变
			}
	```		
- - -

### 	接口中成员方法的特点
* A: 成员方法特点
	* a 接口中可以定义方法，方法也有固定的修饰符，public abstract
	* b 子类必须覆盖掉接口中所有的抽象方法后，子类才可以实例化。否则子类是一个抽象类。

* B: 案例
	```java
			interface Demo { ///定义一个名称为Demo的接口。
				public abstract void show1();
				public abstract void show2();
			}
			
			//定义子类去覆盖接口中的方法。类与接口之间的关系是 实现。通过 关键字 implements
			class DemoImpl implements Demo { //子类实现Demo接口。
				//重写接口中的方法。
				public void show1(){}
				public void show2(){}
			}
	```
- - -

###	实现类还是一个抽象类
* A: 接口的实现类
	* 一个类如果实现类接口,有两种操作方法:
		* 第一:实现类是非抽象类,就需要重写接口中所有的抽象方法.
		* 第二:实现类也声明为抽象类,那么实现类可以不重写接口中的抽象方法。
- - -

###	类和接口的多实现	
* A：接口的多实现
	了解了接口的特点后，那么想想为什么要定义接口，使用抽象类描述也没有问题，接口到底有啥用呢？
	接口最重要的体现：解决多继承的弊端。将多继承这种机制在java中通过多实现完成了。
		
* B 多实现的优点
	* 怎么解决多继承的弊端呢？
	* 弊端：多继承时，当多个父类中有相同功能时，子类调用会产生不确定性。
	* 其实核心原因就是在于多继承父类中功能有主体，而导致调用运行时，不确定运行哪个主体内容。
	* 为什么多实现能解决了呢？
	* 因为接口中的功能都没有方法体，由子类来明确。

* C :案例演示
	```java
		interface Fu2{
			void show2();
		}
		class Zi implements Fu1,Fu2 {    // 多实现。同时实现多个接口。
			public void show1(){}
			public void show2(){}
		}
	```
- - -

###	类在继承类的同时实现多接口
* A: 继承的同时实现接口
	* 接口和类之间可以通过实现产生关系，同时也学习了类与类之间可以通过继承产生关系。当一个类已经继承了一个父类，它又需要扩展额外的功能，这时接口就派上用场了。
	* 子类通过继承父类扩展功能，通过继承扩展的功能都是子类应该具备的基础功能。如果子类想要继续扩展其他类中的功能呢？这时通过实现接口来完成。
	* 接口的出现避免了单继承的局限性。父类中定义的事物的基本功能。接口中定义的事物的扩展功能。
		
* B: 代码演示
	```java
	    class Fu {
			public void show(){}
		}
		interface Inter {
			pulbic abstract void show1();
		}
		class Zi extends Fu implements Inter {
			public void show1() {
			}
		}
	```
	* 接口的出现避免了单继承的局限性。父类中定义的事物的基本功能。接口中定义的事物的扩展功能。
- - -

###	接口的多继承
* A: 接口的多继承
	* 学习类的时候，知道类与类之间可以通过继承产生关系，接口和类之间可以通过实现产生关系，那么接口与接口之间会有什么关系。
	* 多个接口之间可以使用extends进行继承。
		
* B 代码演示
	```java
		 interface Fu1{
			void show();
		}
		interface Fu2{
			void show1();
		}
		interface Fu3{
			void show2();
		}
		interface Zi extends Fu1,Fu2,Fu3{
			void show3();
		}
	```
	*	在开发中如果多个接口中存在相同方法，这时若有个类实现了这些接口，那么就要实现接口中的方法，由于接口中的方法是抽象方法，子类实现后也不会发生调用的不确定性。
- - -

###	接口思想
* A:接口的思想
	* 前面学习了接口的代码体现，现在来学习接口的思想，接下里从生活中的例子进行说明。
	* 举例：我们都知道电脑上留有很多个插口，而这些插口可以插入相应的设备，这些设备为什么能插在上面呢？
	* 主要原因是这些设备在生产的时候符合了这个插口的使用规则，否则将无法插入接口中，更无法使用。发现这个插口的出现让我们使用更多的设备。
	
* B: 接口的好处	
	* 总结：接口在开发中的它好处
	* 1、接口的出现扩展了功能。
	* 2、接口其实就是暴漏出来的规则。
	* 3、接口的出现降低了耦合性，即设备与设备之间实现了解耦。
		
	* 接口的出现方便后期使用和维护，一方是在使用接口（如电脑），一方在实现接口（插在插口上的设备）。例如：笔记本使用这个规则（接口），电脑外围设备实现这个规则（接口）。
- - -

###	接口和抽象类的区别
* A: 明白了接口思想和接口的用法后，接口和抽象类的区别是什么呢？接口在生活体现也基本掌握，那在程序中接口是如何体现的呢？
	通过实例进行分析和代码演示抽象类和接口的用法。

* B: 举例：
	```
	犬：
			行为：
			吼叫；
			吃饭；
	缉毒犬：
			行为：
			吼叫；
			吃饭；
			缉毒；
	```

* C:思考：
	* 由于犬分为很多种类，他们吼叫和吃饭的方式不一样，在描述的时候不能具体化，也就是吼叫和吃饭的行为不能明确。
	* 当描述行为时，行为的具体动作不能明确，这时，可以将这个行为写为抽象行为，那么这个类也就是抽象类。
	* 可是当缉毒犬有其他额外功能时，而这个功能并不在这个事物的体系中。这时可以让缉毒犬具备犬科自身特点的同时也有其他额外功能，可以将这个额外功能定义接口中。

* D: 代码演示
	```java
		interface 缉毒{
			public abstract void 缉毒();
		}
		//定义犬科的这个提醒的共性功能
		abstract class 犬科{
		public abstract void 吃饭();
		public abstract void 吼叫();
		}
		// 缉毒犬属于犬科一种，让其继承犬科，获取的犬科的特性，
		//由于缉毒犬具有缉毒功能，那么它只要实现缉毒接口即可，这样即保证缉毒犬具备犬科的特性，也拥有了缉毒的功能
		class 缉毒犬 extends 犬科 implements 缉毒{
		
			public void 缉毒() {
			}
			void 吃饭() {
			}
			void 吼叫() {
			}
		}
		class 缉毒猪 implements 缉毒{
			public void 缉毒() {
			}
		}
	```

* E: 接口和抽象类区别总结
	* 相同点:
		都位于继承的顶端,用于被其他类实现或继承;
		都不能直接实例化对象;
		都包含抽象方法,其子类都必须覆写这些抽象方法;
    * 区别:
		抽象类为部分方法提供实现,避免子类重复实现这些方法,提高代码重用性;接口只能包含抽象方法;
		一个类只能继承一个直接父类(可能是抽象类),却可以实现多个接口;(接口弥补了Java的单继承)
		抽象类是这个事物中应该具备的你内容, 继承体系是一种 is..a关系
		接口是这个事物中的额外内容,继承体系是一种 like..a关系
		
	* 二者的选用:
		优先选用接口,尽量少用抽象类;
		需要定义子类的行为,又要为子类提供共性功能时才选用抽象类;
- - -		

##  多态
- - -

###	多态概述
* A: 多态概述
	* 多态是继封装、继承之后，面向对象的第三大特性。
	* 现实事物经常会体现出多种形态，如学生，学生是人的一种，则一个具体的同学张三既是学生也是人，即出现两种形态。	
	* Java作为面向对象的语言，同样可以描述一个事物的多种形态。如Student类继承了Person类，一个Student的对象便既是Student，又是Person。
	* Java中多态的代码体现在一个子类对象(实现类对象)既可以给这个子类(实现类对象)引用变量赋值，又可以给这个子类(实现类对象)的父类(接口)变量赋值。
	* 如Student类可以为Person类的子类。那么一个Student对象既可以赋值给一个Student类型的引用，也可以赋值给一个Person类型的引用。
	* 最终多态体现为父类引用变量可以指向子类对象。
	* 多态的前提是必须有子父类关系或者类实现接口关系，否则无法完成多态。
	* 在使用多态后的父类引用变量调用方法时，会调用子类重写后的方法。
- - -

###	多态调用的三种格式
* A:多态的定义格式：
	* 就是父类的引用变量指向子类对象
	```java
			 父类类型  变量名 = new 子类类型();
			 变量名.方法名();
	```
* B: 普通类多态定义的格式
	```java
			父类 变量名 = new 子类();
			举例：	
				class Fu {}
				class Zi extends Fu {}
				//类的多态使用
				Fu f = new Zi();
	```
* C: 抽象类多态定义格式		
	```java	
			抽象类 变量名 = new 抽象类子类();
			举例：	
			abstract class Fu {
			         public abstract void method();
				     }
			class Zi extends Fu {
			public void method(){
					      System.out.println(“重写父类抽象方法”);
			}
			}
			//类的多态使用
			Fu fu= new Zi();
	```
* D: 接口多态定义的格式
	```java
			接口 变量名 = new 接口实现类();
			如： interface Fu {
					     public abstract void method();
			}
			class Zi implements Fu {
					     public void method(){
			              System.out.println(“重写接口抽象方法”);
			}
			}
			//接口的多态使用
			Fu fu = new Zi();
	```
* E: 注意事项
	```java
			同一个父类的方法会被不同的子类重写。在调用方法时，调用的为各个子类重写后的方法。
			如 Person p1 = new Student();
			   Person p2 = new Teacher();
			   p1.work(); //p1会调用Student类中重写的work方法
			   p2.work(); //p2会调用Teacher类中重写的work方法
			当变量名指向不同的子类对象时，由于每个子类重写父类方法的内容不同，所以会调用不同的方法。
	```		
- - -

###	多态成员方法的特点
* A: 掌握了多态的基本使用后，那么多态出现后类的成员有啥变化呢？前面学习继承时，我们知道子父类之间成员变量有了自己的特定变化，
	* 那么当多态出现后，成员变量在使用上有没有变化呢？
	* 多态出现后会导致子父类中的成员变量有微弱的变化

* B: 代码演示
	```java
		class Fu {
			int num = 4;
		}
		class Zi extends Fu {
			int num = 5;
		}
		class Demo {
			public static void main(String[] args) 	{
				Fu f = new Zi();
				System.out.println(f.num);
				Zi z = new Zi();
				System.out.println(z.num);
			}
		}
	```
* C: 多态成员变量
	* 当子父类中出现同名的成员变量时，多态调用该变量时：
		* 编译时期：参考的是引用型变量所属的类中是否有被调用的成员变量。没有，编译失败。
		* 运行时期：也是调用引用型变量所属的类中的成员变量。
		* 简单记：编译和运行都参考等号的左边。编译运行看左边。
	
* D: 多态出现后会导致子父类中的成员方法有微弱的变化。看如下代码
	```java
		class Fu {
			int num = 4;
			void show()	{
				System.out.println("Fu show num");
			}
		}
		class Zi extends Fu {
			int num = 5;
			void show()	{
				System.out.println("Zi show num");
			}
		}
		class Demo {
			public static void main(String[] args) 	{
				Fu f = new Zi();
				f.show();
			}
		}
	```

* E: 多态成员方法
	* 编译时期：参考引用变量所属的类，如果没有类中没有调用的方法，编译失败。
	* 运行时期：参考引用变量所指的对象所属的类，并运行对象所属类中的成员方法。
	* 简而言之：编译看左边，运行看右边。
- - -

###	instanceof关键字
* A: 作用
	 可以通过instanceof关键字来判断某个对象是否属于某种数据类型。如学生的对象属于学生类，学生的对象也属于人类

* 格式:
	boolean  b  = 对象  instanceof  数据类型;

* 举例:
```java
	Person p1 = new Student(); // 前提条件，学生类已经继承了人类
	boolean flag = p1 instanceof Student; //flag结果为true
	boolean flag2 = p2 instanceof Teacher; //flag结果为false
```	
- - -

###	多态-向上转型
* A: 多态的转型分为向上转型与向下转型两种：
		
* B: 向上转型：当有子类对象赋值给一个父类引用时，便是向上转型，多态本身就是向上转型的过程。
```java
	使用格式：
	父类类型  变量名 = new 子类类型();
	如：Person p = new Student();
```	
- - -

###	多态-向下转型
* A: 向下转型：一个已经向上转型的子类对象可以使用强制类型转换的格式，将父类引用转为子类引用，这个过程是向下转型。如果是直接创建父类对象，是无法向下转型的！
	```java
		使用格式：
		子类类型 变量名 = (子类类型) 父类类型的变量;
		如:Student stu = (Student) p;  //变量p 实际上指向Student对象
	```
- - -

###	多态的好处和弊端
* A: 多态的好处和弊端
	* 当父类的引用指向子类对象时，就发生了向上转型，即把子类类型对象转成了父类类型。
	  向上转型的好处是隐藏了子类类型，提高了代码的扩展性。
	* 但向上转型也有弊端，只能使用父类共性的内容，而无法使用子类特有功能，功能有限制。
		
* B: 看如下代码
	```java
		//描述动物类，并抽取共性eat方法
		abstract class Animal {
			abstract void eat();
		}
		 
		// 描述狗类，继承动物类，重写eat方法，增加lookHome方法
		class Dog extends Animal {
			void eat() {
				System.out.println("啃骨头");
			}
		
			void lookHome() {
				System.out.println("看家");
			}
		}
		
		// 描述猫类，继承动物类，重写eat方法，增加catchMouse方法
		class Cat extends Animal {
			void eat() {
				System.out.println("吃鱼");
			}
		
			void catchMouse() {
				System.out.println("抓老鼠");
			}
		}
		
		public class Test {
			public static void main(String[] args) {
				Animal a = new Dog(); //多态形式，创建一个狗对象
				a.eat(); // 调用对象中的方法，会执行狗类中的eat方法
				// a.lookHome();//使用Dog类特有的方法，需要向下转型，不能直接使用
				
				// 为了使用狗类的lookHome方法，需要向下转型
		// 向下转型过程中，可能会发生类型转换的错误，即ClassCastException异常
				// 那么，在转之前需要做健壮性判断 
				if( !a instanceof Dog){ // 判断当前对象是否是Dog类型
				 		System.out.println("类型不匹配，不能转换"); 
				 		return; 
				} 
				Dog d = (Dog) a; //向下转型
				d.lookHome();//调用狗类的lookHome方法
			}
		}
	```

* C 多态总结:
	```java
		什么时候使用向上转型：
			当不需要面对子类类型时，通过提高扩展性，或者使用父类的功能就能完成相应的操作，这时就可以使用向上转型。
			如：Animal a = new Dog();
			    a.eat();
		什么时候使用向下转型
			当要使用子类特有功能时，就需要使用向下转型。
				如：Dog d = (Dog) a; //向下转型
				    d.lookHome();//调用狗类的lookHome方法
				向下转型的好处：可以使用子类特有功能。
				弊端是：需要面对具体的子类对象；在向下转型时容易发生ClassCastException类型转换异常。在转换之前必须做类型判断。
			如：if( !a instanceof Dog){…}
	```
- - -

###	多态举例
* A: 毕老师和毕姥爷的故事
	* 案例:
	```java
	  /*
		描述毕老师和毕姥爷，
		毕老师拥有讲课和看电影功能
		毕姥爷拥有讲课和钓鱼功能
	  */
		class 毕姥爷 {
			void 讲课() {
				System.out.println("政治");
			}
		
			void 钓鱼() {
				System.out.println("钓鱼");
			}
		}
		
		// 毕老师继承了毕姥爷，就有拥有了毕姥爷的讲课和钓鱼的功能，
		// 但毕老师和毕姥爷的讲课内容不一样，因此毕老师要覆盖毕姥爷的讲课功能
		class 毕老师 extends 毕姥爷 {
			void 讲课() {
				System.out.println("Java");
			}
		
			void 看电影() {
				System.out.println("看电影");
			}
		}
		
		public class Test {
			public static void main(String[] args) {
				// 多态形式
				毕姥爷 a = new 毕老师(); // 向上转型
				a.讲课(); // 这里表象是毕姥爷，其实真正讲课的仍然是毕老师，因此调用的也是毕老师的讲课功能
				a.钓鱼(); // 这里表象是毕姥爷，但对象其实是毕老师，而毕老师继承了毕姥爷，即毕老师也具有钓鱼功能
		
				// 当要调用毕老师特有的看电影功能时，就必须进行类型转换
				毕老师 b = (毕老师) a; // 向下转型
				b.看电影();
			}
		}	
	```	
- - -

###	笔记本电脑案例
* A:案例介绍
	* 定义USB接口（具备开启功能、关闭功能），笔记本要使用USB设备，即笔记本在生产时需要预留可以插入USB设备的USB接口，即就是笔记本具备使用USB设备的功能，
	* 但具体是什么USB设备，笔记本并不关心，只要符合USB规格的设备都可以。鼠标和键盘要想能在电脑上使用，那么鼠标和键盘也必须遵守USB规范，不然鼠标和键盘的生产出来无法使用
	* 进行描述笔记本类，实现笔记本使用USB鼠标、USB键盘
		USB接口，包含开启功能、关闭功能
		笔记本类，包含运行功能、关机功能、使用USB设备功能
		鼠标类，要符合USB接口
		键盘类，要符合USB接口

* B: 案例分析
	* 阶段一：
		使用笔记本，笔记本有运行功能，需要笔记本对象来运行这个功能
	* 阶段二：
		想使用一个鼠标，又有一个功能使用鼠标，并多了一个鼠标对象。
	* 阶段三：
		还想使用一个键盘 ，又要多一个功能和一个对象
	* 问题：每多一个功能就需要在笔记本对象中定义一个方法，不爽，程序扩展性极差。
		降低鼠标、键盘等外围设备和笔记本电脑的耦合性。
- - -

###	笔记本电脑案例代码实现
* A: 代码实现
	```java
		定义鼠标、键盘，笔记本三者之间应该遵守的规则
		interface USB {
			void open();// 开启功能
		
			void close();// 关闭功能
		}
		
			鼠标实现USB规则
		class Mouse implements USB {
			public void open() {
				System.out.println("鼠标开启");
			}
		
			public void close() {
				System.out.println("鼠标关闭");
			}
		}
		
			键盘实现USB规则
		class KeyBoard implements USB {
			public void open() {
				System.out.println("键盘开启");
			}
		
			public void close() {
				System.out.println("键盘关闭");
			}
		}
		
			定义笔记本
		class NoteBook {
			// 笔记本开启运行功能
			public void run() {
				System.out.println("笔记本运行");
			}
		
			// 笔记本使用usb设备，这时当笔记本对象调用这个功能时，必须给其传递一个符合USB规则的USB设备
			public void useUSB(USB usb) {
				// 判断是否有USB设备
				if (usb != null) {
					usb.open();
					usb.close();
				}
			}
		
			public void shutDown() {
				System.out.println("笔记本关闭");
			}
		}
		
		public class Test {
			public static void main(String[] args) {
				// 创建笔记本实体对象
				NoteBook nb = new NoteBook();
				// 笔记本开启
				nb.run();
		
				// 创建鼠标实体对象
				Mouse m = new Mouse();
				// 笔记本使用鼠标
				nb.useUSB(m);
		
				// 创建键盘实体对象
				KeyBoard kb = new KeyBoard();
				// 笔记本使用键盘
				nb.useUSB(kb);
		
				// 笔记本关闭
				nb.shutDown();
			}
		}
	```
- - - 

## 构造方法
- - -

###	构造方法引入
* A:构造方法的引入
	    在开发中经常需要在创建对象的同时明确对象的属性值，比如员工入职公司就要明确他的姓名、年龄等属性信息。
		那么，创建对象就要明确属性值，那怎么解决呢？也就是在创建对象的时候就要做的事情，当使用new关键字创建对象时，怎么给对象的属性初始化值呢？
		这就要学习Java另外一门小技术，构造方法。
* B: 那什么是构造方法呢？
 		从字面上理解即为构建创造时用的方法，即就是对象创建时要执行的方法。既然是对象创建时要执行的方法，那么只要在new对象时，
		知道其执行的构造方法是什么，就可以在执行这个方法的时候给对象进行属性赋值。
- - -
	
###	构造方法作用
* A: 构造方法的作用:
		在new的同时给成员变量赋值,给对象属性进行初始化。
* B: 举例:
		Perons p = new Person("张三",23); 在new 的时候给p对象的name属性和age属性进行赋值,使这个对象的属性有值。
- - -
			
###	构造方法的定义和运行特点
* A: 构造方法定义

		构造方法的格式：
		修饰符 构造方法名(参数列表)
		{
		}

* B: 构造方法的体现：

		构造方法没有返回值类型。也不需要写返回值。因为它是为构建对象的，对象创建完，方法就执行结束。
		构造方法名称必须和类型保持一致。
		构造方法没有具体的返回值。
		构造方法的代码体现：

* C: 构造方法举例
	```java
			class Person {
				// Person的成员属性age和name
				private int age;
				private String name;
			
				// Person的构造方法，拥有参数列表
				Person(int a, String nm) {
					// 接受到创建对象时传递进来的值，将值赋给成员属性
					age = a;
					name = nm;
				}
			}
	```

* D: 构造方法运行特点:
	在new 对象的时候自动调用执行。
- - -

###	默认添加的构造方法
* A: 每一class类都必须有一个构造方法，构造方法不写也有。
	 编译的时候，javac，系统会自动检查类中是否有构造方法，如果没有编译器就会自动添加一个构造方法
	 比如Person类， 编译器添加一个无参构造 public Person(){}
- - -
		
###	构造方法的调用赋值
* A: 理解构造方法的格式和基本功能之后，现在就要研究构造方法是怎么执行的呢？在创建对象的时候是如何初始化的呢？
	构造方法是专门用来创建对象的，也就是在new对象时要调用构造方法。现在来看看如何调用构造方法。

* B: 案例
	```java
			class Person {
				// Person的成员属性age和name
				private int age;
				private String name;
			
				// Person的构造方法，拥有参数列表
				Person(int a, String nm) {
					// 接受到创建对象时传递进来的值，将值赋给成员属性
					age = a;
					name = nm;
				}
			
				public void speak() {
					System.out.println("name=" + name + ",age=" + age);
				}
			}
			
			class PersonDemo {
				public static void main(String[] args) {
					// 创建Person对象，并明确对象的年龄和姓名
					Person p2 = new Person(23, "张三");
					p2.speak();
				}
			}
	```
		上述代码演示了创建对象时构造方法的调用。即在创建对象时，会调用与参数列表对应的构造方法
- - -

###	构造方法的内存
*	A:内存加载的过程
	有一个Person类, 创建Person 对象new Person()
	*	1、首先会将main方法压入栈中，执行main方法中的 new Person(23,"张三"); 
	*	2、在堆内存中分配一片区域，用来存放创建的Person对象，这片内存区域会有属于自己的内存地址（0x88）。
		然后给成员变量进行默认初始化（name=null，age=0）。
	*	3、执行构造方法中的代码（age = a ; name = nm;）,将变量a对应的23赋值给age，将变量nm对应的”张三赋值给name，这段代码执行结束后，成员变量age和name的值已经改变。执行结束之后构造方法弹栈，Person对象创建完成。将Person对象的内存地址0x88赋值给p2。
- - -

###	构造方法的重载			
* A：当在描述事物时，要不要在类中写构造方法呢？这时要根据描述事物的特点来确定，当描述的事物在创建其对象时就要明确属性的值，这时就需要在定义类的时候书写带参数的构造方法。
*    若创建对象时不需要明确具体的数据，这时可以不用书写构造方法（不书写也有默认的构造方法）。
```
		构造方法的细节：
		1、一个类中可以有多个构造方法，多个构造方法是以重载的形式存在的
		2、构造方法是可以被private修饰的，作用：其他程序无法创建该类的对象。
```		
* B: 举例
	```java
		class Person {
			private int age;
			private String name;
		
			// 私有无参数的构造方法，即外界不能通过new Person();语句创建本类对象
			private Person() {
			}
		
			// 多个构造方法是以重载的形式存在
			Person(int a) {
				age = a;
			}
		
			Person(String nm, int a) {
				name = nm;
				age = a;
			}
		}
	```
- - -		

###	构造方法和一般方法区别
* A: 目前为止，学习两种方法，分别为构造方法和一般方法，那么他们之间有什么异同呢？
	```java
		1.格式不同
		 构造方法 : 修饰符  类名(参数类型 参数 ...){
			初始化成员变量
		}
		一般方法: 需要有返回值类型
		2.作用不同
		构造方法一般用来给成员变量初始化;
		一般方法根据需求而定;
		3.调用方式不同
		构造方法创建对象时调用, 或者this() super() 语句调用
		普通方法需要对象调用或者静态方法直接调用静态方法.
		4.执行不同
		构造方法在对象创建时就执行了，而且只执行一次。
		一般方法是在对象创建后，需要使用时才被对象调用，并可以被多次调用。
	```	
- - -

## this关键字
- - -

###	this在构造方法之间的调用
* A: 在之前学习方法之间调用时，可以通过方法名进行调用。可是针对构造方法，无法通过构造方法名来相互调用。
	
		构造方法之间的调用，可以通过this关键字来完成。
		构造方法调用格式：
		this(参数列表);

* B:调用构造方法的案例
	```java
		class Person {
			// Person的成员属性
			private int age;
			private String name;
		
			// 无参数的构造方法
			Person() {
			}
		
			// 给姓名初始化的构造方法
			Person(String nm) {
				name = nm;
			}
		
			// 给姓名和年龄初始化的构造方法
			Person(String nm, int a) {
				// 由于已经存在给姓名进行初始化的构造方法 name = nm;因此只需要调用即可
				// 调用其他构造方法，需要通过this关键字来调用
				this(nm);
				// 给年龄初始化
				age = a;
			}
		}
	```
- - -

###	this在构造方法调用的内存图
* A: 被加载的代码
	```java
		class Person {
			private int age;
			private String name;

			Person() {
			}
			Person(String nm) {
				name = nm;
			}
			Person(String nm, int a) {
				this(nm);
				age = a;
			}
		}

		class PersonDemo {
			public static void main(String[] args) {
				Person p = new Person("张三", 23);
			}
		}
	```
	
* B: 构造方法调用的原理图
	* 1、先执行main方法，main方法压栈，执行其中的new Person(“张三”,23);
	* 2、堆内存中开辟空间，并为其分配内存地址0x33，，紧接着成员变量默认初始化（name=null  age = 0）；
	* 3、拥有两个参数的构造方法（Person（String nm , int a））压栈，在这个构造方法中有一个隐式的this，因为构造方法是给对象初始化的，那个对象调用到这个构造方法，this就指向堆中的那个对象。
	* 4、由于Person（String nm , int a）构造方法中使用了this(nm);构造方法Person(String nm)就会压栈，并将“张三”传递给nm。在Person（String nm , int a）构造方法中同样也有隐式的this，this的值同样也为0x33，这时会执行其中name = nm，即把“张三”赋值给成员的name。当赋值结束后Person（String nm , int a）构造方法弹栈。
	* 5、程序继续执行构造方法（Person（String nm , int a）中的age = a；这时会将23赋值给成员属性age。赋值结束构造方法（Person（String nm , int a）弹栈。
	* 6、当构造方法（Person（String nm , int a）弹栈结束后，Person对象在内存中创建完成，并将0x33赋值给main方法中的p引用变量。
	* 注意：
		* this到底代表什么呢？this代表的是对象，具体代表哪个对象呢？哪个对象调用了this所在的方法，this就代表哪个对象。
		* 调用其他构造方法的语句必须定义在构造方法的第一行，原因是初始化动作要最先执行。
- - -

###	this简易应用
* A: 当在方法中出现了局部变量和成员变量同名的时候，那么在方法中怎么区别局部变量成员变量呢？可以在成员变量名前面加上this.来区别成员变量和局部变量
* B: 举例1
	```java
		class Person {
			private int age;
			private String name;
		
			// 给姓名和年龄初始化的构造方法
			Person(String name, int age) {
				// 当需要访问成员变量是，只需要在成员变量前面加上this.即可
				this.name = name;
				this.age = age;
			}
		
			public void speak() {
				System.out.println("name=" + this.name + ",age=" + this.age);
			}
		}
		
		class PersonDemo {
			public static void main(String[] args) {
				Person p = new Person("张三", 23);
				p.speak();
			}
		}
	```

* C: 举例2
	```java
		学习完了构造方法、this的用法之后，现在做个小小的练习。
		需求：在Person类中定义功能，判断两个人是否是同龄人
		class Person {
			private int age;
			private String name;
		
			// 给姓名和年龄初始化的构造方法
			Person(String name, int age) {
				// 当需要访问成员变量是，只需要在成员变量前面加上this.即可
				this.name = name;
				this.age = age;
			}
		
			public void speak() {
				System.out.println("name=" + this.name + ",age=" + this.age);
			}
		
			// 判断是否为同龄人
			public boolean equalsAge(Person p) {
				// 使用当前调用该equalsAge方法对象的age和传递进来p的age进行比较
				// 由于无法确定具体是哪一个对象调用equalsAge方法，这里就可以使用this来代替
				/*
				 * if(this.age == p.age) { return true; } return false;
				 */
				return this.age = p.age;
			}
		}
	```
- - -

## super关键字
- - -

###	super关键字_1
* A: 子父类中构造方法的调用
	在创建子类对象时，父类的构造方法会先执行，因为子类中所有构造方法的第一行有默认的隐式super();语句。
* B: 格式：

		调用本类中的构造方法
		this(实参列表);
		调用父类中的空参数构造方法
		super();
		调用父类中的有参数构造方法
		super(实参列表);
- - -

###	super关键字_2
* A:子类构造方法,有一个默认添加的构造方法
	```java
		public class Student extends Person {
			 public Student(){
			 	super();
			 }
		}
	```	
* B :为什么子类对象创建都要访问父类中的构造方法？因为子类继承了父类的内容，所以创建对象时，必须要先看父类是如何对其内容进行初始化的，看如下程序
	```java
		public class Test {
			public static void main(String[] args) {
				new Zi();
			}
			
		}
		class Fu{
			int num ;
			Fu(){
				System.out.println("Fu构造方法"+num);
				num = 4;
			}
		}
		class Zi extends Fu{
			Zi(){
		         //super(); 调用父类空参数构造方法
				System.out.println("Zi构造方法"+num);
			}
		}

		执行结果：
		Fu构造方法0
		Zi构造方法4
	```
	* 通过结果发现，子类构造方法执行时中，调用了父类构造方法，这说明，子类构造方法中有一句super()。
		那么，子类中的构造方法为什么会有一句隐式的super()呢？
	* 原因：子类会继承父类中的内容，所以子类在初始化时，必须先到父类中去执行父类的初始化动作。这样，才可以使用父类中的内容。
		当父类中没有空参数构造方法时，子类的构造方法必须有显示的super语句，指定要访问的父类有参数构造方法。
- - -

###	super关键字_3
* A: 创建子类对象的时候会必须调用父类的构造方法。
   子类默认会调用父类的无参构造， 但如果父类没有无参构造，子类的构造方法继续调用父类的无参构造就会报错。
   因此子类构造方法的第一行需要调用父类的构造方法，既可以调用父类的无参构造，也可以调用父类的有参构造，这样语法上就不会报错。
- - -		

###	super关键字_4
* A: 构造方法第一行,写this()还是super()
	*  this() 是调用本类的构造方法,super()是调用父类的构造方法, 且两条语句不能同时存在
	*  保证子类的所有构造方法调用到父类的构造方法即可
	
* B: 小结:
	* 无论如何,子类的所有构造方法,直接或间接必须调用到父类构造方法;
	* 子类的构造方法什么都不写,默认的构造方法第一行super()
- - -
		
###	创建子类对象过程的细节
* A 创建子类对象过程的细节
	* 如果子类的构造方法第一行写了this调用了本类其他构造方法，那么super调用父类的语句还有吗？
	* 这时是没有的，因为this()或者super(),只能定义在构造方法的第一行，因为初始化动作要先执行。
	* 父类构造方法中是否有隐式的super呢？
	* 也是有的。记住：只要是构造方法默认第一行都是super();
	* 父类的父类是谁呢？super调用的到底是谁的构造方法呢？
	* Java体系在设计，定义了一个所有对象的父类Object

	* 注意：
		类中的构造方法默认第一行都有隐式的super()语句，在访问父类中的空参数构造方法。所以父类的构造方法既可以给自己的对象初始化，也可以给自己的子类对象初始化。
		如果默认的隐式super()语句在父类中没有对应的构造方法，那么必须在构造方法中通过this或者super的形式明确要调用的构造方法。
- - -

###	super的应用
* A: 练习：描述学生和工人这两个类，将他们的共性name和age抽取出来存放在父类中，并提供相应的get和set方法，同时需要在创建学生和工人对象就必须明确姓名和年龄
	* 案例:
	```java
		//定义Person类，将Student和Worker共性抽取出来
		class Person {
			private String name;
			private int age;
			public Person(String name, int age) {
				// super();
				this.name = name;
				this.age = age;
			}
			public String getName() {
				return name;
			}
			public void setName(String name) {
				this.name = name;
			}
			public int getAge() {
				return age;
			}
			public void setAge(int age) {
				this.age = age;
			}
		}
		class Student extends Person {
			// Student类的构造方法
			Student(String name, int age) {
				// 使用super关键字调用父类构造方法，进行相应的初始化动作
				super(name, age);
			}
			public void study() {// Studnet中特有的方法
				System.out.println(this.getName() + "同学在学习");
			}
		}
		class Worker extends Person {
			Worker(String name, int age) {
				// 使用super关键字调用父类构造方法，进行相应的初始化动作
				super(name, age);
			}
			public void work() {// Worker 中特有的方法
				System.out.println(this.getName() + "工人在工作");
			}
		}
		public class Test {
			public static void main(String[] args) {
				Student stu = new Student("小明",23);
		stu.study();
				
		Worker w = new Worker("小李",45);
		w.work();
			}
		}
	```
- - -

##  综合案例
- - -

###	完整员工案例分析
* A: 项目介绍
	某IT公司有多名员工，按照员工负责的工作不同，进行了部门的划分（研发部员工、维护部员工）。研发部根据所需研发的内容不同，又分为JavaEE工程师、Android工程师；维护部根据所需维护的内容不同，又分为网络维护工程师、硬件维护工程师。
	公司的每名员工都有他们自己的员工编号、姓名，并要做它们所负责的工作。
	* 工作内容
		* JavaEE工程师：员工号为xxx的 xxx员工，正在研发淘宝网站
		* Android工程师：员工号为xxx的 xxx员工，正在研发淘宝手机客户端软件
		* 网络维护工程师：员工号为xxx的 xxx员工，正在检查网络是否畅通
		* 硬件维护工程师：员工号为xxx的 xxx员工，正在修复打印机
		* 请根据描述，完成员工体系中所有类的定义，并指定类之间的继承关系。进行XX工程师类的对象创建，完成工作方法的调用。

* B: 案例分析
	* 根据上述部门的描述，得出如下的员工体系图
	 
	* 根据员工信息的描述，确定每个员工都有员工编号、姓名、要进行工作。则，把这些共同的属性与功能抽取到父类中（员工类），关于工作的内容由具体的工程师来进行指定。
	* 工作内容
		* JavaEE工程师：员工号为xxx的 xxx员工，正在研发淘宝网站
		* Android工程师：员工号为xxx的 xxx员工，正在研发淘宝手机客户端软件
		* 网络维护工程师：员工号为xxx的 xxx员工，正在检查网络是否畅通
		* 硬件维护工程师：员工号为xxx的 xxx员工，正在修复打印机
		* 创建JavaEE工程师对象，完成工作方法的调用
- - -

###	案例代码实现
* A:定义员工类(抽象类)
	```java
		public abstract class Employee {
			private String id;// 员工编号
			private String name; // 员工姓名
			
			//空参数构造方法
			public Employee() {
				super();
			}
			//有参数构造方法
			public Employee(String id, String name) {
				super();
				this.id = id;
				this.name = name;
			}
			public String getId() {
				return id;
			}
			public void setId(String id) {
				this.id = id;
			}
			public String getName() {
				return name;
			}
			public void setName(String name) {
				this.name = name;
			}
			//工作方法（抽象方法）
			public abstract void work(); 
		}
		
		* B :	定义研发部员工类Developer 继承 员工类Employee
		public abstract class Developer extends Employee {
			//空参数构造方法
			public Developer() {
				super();
			}
			//有参数构造方法
			public Developer(String id, String name) {
				super(id, name);
			}
		}
		
		* C:	定义维护部员工类Maintainer 继承 员工类Employee
		public abstract class Maintainer extends Employee {
			//空参数构造方法
			public Maintainer() {
				super();
			}
			//有参数构造方法
			public Maintainer(String id, String name) {
				super(id, name);
			}
		}
		
		* D:	定义JavaEE工程师 继承 研发部员工类，重写工作方法
		public class JavaEE extends Developer {
			//空参数构造方法
			public JavaEE() {
				super();
			}
			//有参数构造方法
			public JavaEE(String id, String name) {
				super(id, name);
			}
		
			@Override
			public void work() {
				System.out.println("员工号为 " + getId() + " 的 " + getName() + " 员工，正在研发淘宝网站");
			}
		}
		
		* E:	定义Android工程师 继承 研发部员工类，重写工作方法
		public class Android extends Developer {
			//空参数构造方法
			public Android() {
				super();
			}
			//有参数构造方法
			public Android(String id, String name) {
				super(id, name);
			}
		
			@Override
			public void work() {
				System.out.println("员工号为 " + getId() + " 的 " + getName() + " 员工，正在研发淘宝手机客户端软件");
			}
		}
		
		* F:	定义Network网络维护工程师 继承 维护部员工类，重写工作方法
		public class Network extends Maintainer {
			//空参数构造方法
			public Network() {
				super();
			}
			//有参数构造方法
			public Network(String id, String name) {
				super(id, name);
			}
		
			@Override
			public void work() {
				System.out.println("员工号为 " + getId() + " 的 " + getName() + " 员工，正在检查网络是否畅通");
			}
		}
		
		* G:	定义Hardware硬件维护工程师 继承 维护部员工类，重写工作方法
		public class Hardware extends Maintainer {
			//空参数构造方法
			public Hardware() {
				super();
			}
			//有参数构造方法
			public Hardware(String id, String name) {
				super(id, name);
			}
		
			@Override
			public void work() {
				System.out.println("员工号为 " + getId() + " 的 " + getName() + " 员工，正在修复打印机");
			}
		}
		
		* H:	在测试类中，创建JavaEE工程师对象，完成工作方法的调用
		public class Test {
			public static void main(String[] args) {
				//创建JavaEE工程师员工对象，该员工的编号000015，员工的姓名 小明
				JavaEE ee = new JavaEE("000015", "小明");
				//调用该员工的工作方法
				ee.work();
			}
		}
	```
- - - 

##	final 关键字
- - - 

###	final关键字概念
* A: 概述
	* 继承的出现提高了代码的复用性，并方便开发。但随之也有问题，有些类在描述完之后，不想被继承，
		或者有些类中的部分方法功能是固定的，不想让子类重写。可是当子类继承了这些特殊类之后，
		就可以对其中的方法进行重写，那怎么解决呢？
	* 要解决上述的这些问题，需要使用到一个关键字final，final的意思为最终，不可变。
		final是个修饰符，它可以用来修饰类，类的成员，以及局部变量。
- - - 
	
###	final修饰类义
* A: final 修饰类
	* final修饰类不可以被继承，但是可以继承其他类。
* B: 案例

		class Yy {}
		final class Fu extends Yy{} //可以继承Yy类
		class Zi extends Fu{} //不能继承Fu类
- - - 
			
###	final修饰方法
* A: final修饰方法
	* final修饰的方法不可以被覆盖,但父类中没有被final修饰方法，子类覆盖后可以加final。
* B: 案例
	```java	
	 		class Fu {
				// final修饰的方法，不可以被覆盖，但可以继承使用
				public final void method1(){}
				public void method2(){}
			}
			class Zi extends Fu {
				//重写method2方法
				public final void method2(){}
			}
	```
- - - 

###	final修饰局部变量
* A:修饰基本数据类型变量
	* final修饰的变量称为常量，这些变量只能赋值一次
		
* B:案例1

		final int i = 20;
		i = 30; //赋值报错，final修饰的变量只能赋值一次
			
* C: 修饰引用数据类型
	*	引用类型的变量值为对象地址值，地址值不能更改，但是地址内的对象属性值可以修改
	
* D: 修饰引用数据类型

			final Person p = new Person();
			Person p2 = new Person();
			p = p2; //final修饰的变量p，所记录的地址值不能改变
			p.name = "小明";//可以更改p对象中name属性值
			p不能为别的对象，而p对象中的name或age属性值可更改。
- - - 
	
###	final修饰成员变量
* A: 修饰成员变量
	*	修饰成员变量，需要在创建对象前赋值，否则报错。(当没有显式赋值时，多个构造方法的均需要为其赋值。)

* B: 案例
	```java
			class Demo {
				//直接赋值
				final int m = 100;
				
				//final修饰的成员变量，需要在创建对象前赋值，否则报错。
				final int n; 
				public Demo(){
					//可以在创建对象时所调用的构造方法中，为变量n赋值
					n = 2016;
				}
			}
	```
- - - 

##	static 关键字
- - - 

###	static的概念
* A：概念
	* 当在定义类的时候，类中都会有相应的属性和方法。而属性和方法都是通过创建本类对象调用的。
	* 当在调用对象的某个方法时，这个方法没有访问到对象的特有数据时，方法创建这个对象有些多余。
	* 可是不创建对象，方法又调用不了，这时就会想，那么我们能不能不创建对象，就可以调用方法呢？
	* 可以的，我们可以通过static关键字来实现。static它是静态修饰符，一般用来修饰类中的成员。
- - - 

### static修饰的对象特有数据			
* A：特点1:
		被static修饰的成员变量属于类，不属于这个类的某个对象。
		（也就是说，多个对象在访问或修改static修饰的成员变量时，其中一个对象将static成员变量值进行了修改，
		其他对象中的static成员变量值跟着改变，即多个对象共享同一个static成员变量）
* B: 代码演示
	```java
			class Demo {
				public static int num = 100;
			}

			class Test {
				public static void main(String[] args) {
					Demo d1 = new Demo();
					Demo d2 = new Demo();
					d1.num = 200;
					System.out.println(d1.num); //结果为200
					System.out.println(d2.num); //结果为200
				}
			}
	```
- - - 
		
###	static注意事项_静态不能直接调用非静态
* A: 注意事项
	* 被static修饰的成员可以并且建议通过类名直接访问。
			
* B: 访问静态成员的格式：

		类名.静态成员变量名
		类名.静态成员方法名(参数)
		对象名.静态成员变量名     		------不建议使用该方式，会出现警告
		对象名.静态成员方法名(参数) 	------不建议使用该方式，会出现警告
			
* C: 代码演示
	```java
			class Demo {
				//静态成员变量
				public static int num = 100;
				//静态方法
				public static void method(){
					System.out.println("静态方法");
				}
			}
			class Test {
				public static void main(String[] args) {
					System.out.println(Demo.num);
					Demo.method();
				}
			}
	```
- - - 		

###	static静态的使用场景
* A: 使用场景
	* static可以修饰成员变量和成员方法。	
	* 什么时候使用static修饰成员变量？
		* 加static修饰成员的时候，这个成员会被类的所有对象所共享。一般我们把共性数据定义为静态的变量
	* 什么时候使用static修饰成员方法？
		* 静态的方法只能访问静态的成员，如果静态方法中引用到了静态的其他成员，那么这个方法需要声明为静态的方法。
- - - 

###	对象中的静态调用
* A: 对象的静态调用
	* 在多态中，非静态编译看父类，运行看子类，父类没有编译失败。
	* 但多态中的静态方法,编译看父类,运行仍然看父类。因为静态和对象没有关系，属于静态绑定。

* B: 举例
	```java
		public class Test{
			public static void main(String[] args){
				Fu f = new Zi();
				f.show();   //父类的引用和父类的方法绑定,和对象无关,不会在运行时动态的执行子类特有的方法。
			}
		}
	```
- - - 

###	定义静态常量
* A: 静态常量
	开发中，我们想在类中定义一个静态常量，通常使用public static final修饰的变量来完成定义。
	此时变量名用全部大写，多个单词使用下划线连接。
* B: 定义格式：

	public static final 数据类型 变量名 = 值;
	
* C: 如下演示：
	```java
		class Company {
			public static final String COMPANY_NAME = "传智播客";
			public static void method(){
				System.out.println("一个静态方法");
			}
		}

		当我们想使用类的静态成员时，不需要创建对象，直接使用类名来访问即可。
		System.out.println(Company.COMPANY_NAME); //打印传智播客
		Company.method(); // 调用一个静态方法
	```
* D: 注意：
	```java
		接口中的每个成员变量都默认使用public static final修饰。
		所有接口中的成员变量已是静态常量，由于接口没有构造方法，所以必须显示赋值。可以直接用接口名访问。
		interface Inter {
			public static final int COUNT = 100;
		}
			访问接口中的静态变量
		Inter.COUNT
	```	
- - - 

##	匿名对象
- - - 

###	匿名对象
* A:匿名对象的概述
	* 匿名对象是指创建对象时，只有创建对象的语句，却没有把对象地址值赋值给某个变量。
* B:案例
	```java
		public class Person{
			public void eat(){
				System.out.println();
		}
		}

		创建一个普通对象
		Person p = new Person();
		创建一个匿名对象
		new Person();
	```

* C: 匿名对象的特点
	* a:创建匿名对象直接使用，没有变量名。
		* new Person().eat()  //eat方法被一个没有名字的Person对象调用了。
	* b:匿名对象在没有指定其引用变量时，只能使用一次。
		* new Person().eat(); 创建一个匿名对象，调用eat方法
		* new Person().eat(); 想再次调用eat方法，重新创建了一个匿名对象		
	* c:匿名对象可以作为方法接收的参数、方法返回值使用
		```java
			class Demo {
				public static Person getPerson(){
					//普通方式
					//Person p = new Person();	
					//return p;
					
					//匿名对象作为方法返回值
					return new Person(); 
				}
				
				public static void method(Person p){}
			}

			class Test {
				public static void main(String[] args) {
					//调用getPerson方法，得到一个Person对象
					Person person = Demo.getPerson();
					
					//调用method方法
					Demo.method(person);
					//匿名对象作为方法接收的参数
					Demo.method(new Person());
				}
			}
		```
- - - 

##	内部类
- - - 

###	内部类
* A: 内部类的概述
	* 将类写在其他类的内部，可以写在其他类的成员位置和局部位置，这时写在其他类内部的类就称为内部类。
	  其他类也称为外部类。
* B: 什么时候使用内部类
	* 在描述事物时，若一个事物内部还包含其他可能包含的事物，比如在描述汽车时，汽车中还包含这发动机，
	  这时发动机就可以使用内部类来描述。
	```java
		class 汽车 { //外部类
			class 发动机 { //内部类
			}
		}
	```	
* C: 内部类的分类
	* 内部类分为成员内部类与局部内部类。
	  我们定义内部类时，就是一个正常定义类的过程，同样包含各种修饰符、继承与实现关系等。
	  在内部类中可以直接访问外部类的所有成员。
- - - 

###	成员内部类的调用格式
* A: 格式
	成员内部类，定义在外部类中的成员位置。与类中的成员变量相似，可通过外部类对象进行访问
* B: 定义格式
	```java
		class 外部类 { 
			修饰符 class 内部类 {
				//其他代码
			}
		}
	```
* C: 访问方式

	外部类名.内部类名 变量名 = new 外部类名().new 内部类名();

* D: 成员内部类代码演示
	```java
		class Body {//外部类，身体
			 private boolean life= true; //生命状态
			 public class Heart { //内部类，心脏
				 public void jump() {
					 System.out.println("心脏噗通噗通的跳")
						System.out.println("生命状态" + life); //访问外部类成员变量
				}
			}
		}

		访问内部类
		public static void main(String[] args) {
			//创建内部类对象
			Body.Heart bh = new Body().new Heart();
			//调用内部类中的方法
			bh.jump();
		}
	```
- - - 

###	成员内部类的同名变量调用
* A: 代码实现
	```java
		public class Outer {
			int i  = 1;
			class Inner {
				int i  = 2;
				public void inner(){
					int i = 3;
					System.out.println(Outer.this.i);
				}
			}
		}
	```
- - - 

###	局部内部类
* A 局部内部类，定义在外部类方法中的局部位置。与访问方法中的局部变量相似，可通过调用方法进行访问.
* B 定义格式
	```java
		class 外部类 { 
			修饰符 返回值类型 方法名(参数) {
				class 内部类 {
					//其他代码
				}
			}
		}
	```	
* C 访问方式
	* 在外部类方法中，创建内部类对象，进行访问

* D 局部内部类代码演示
	```java
		定义类
		class Party {//外部类，聚会
			public void puffBall(){// 吹气球方法
				class Ball {// 内部类，气球
					  public void puff(){
						System.out.println("气球膨胀了");
					  }
				}
				//创建内部类对象，调用puff方法
				new Ball().puff();
			}
		}
		访问内部类
		public static void main(String[] args) {	
			//创建外部类对象
			Party p = new Party();
			//调用外部类中的puffBall方法
			p.puffBall();
		}
	```
- - - 

###	匿名内部类
* A: 概述
	* 内部类是为了应对更为复杂的类间关系。查看源代码中会涉及到，而在日常业务中很难遇到，这里不做赘述。
	最常用到的内部类就是匿名内部类，它是局部内部类的一种。
	* 定义的匿名内部类有两个含义：
		* 临时定义某一指定类型的子类
		* 定义后即刻创建刚刚定义的这个子类的对象

* B: 本质
	* 匿名内部类的本质是一个实现了接口或继承了某个类的子类匿名对象.
	 
* C: 案例
	```java
	public interface Smoking {
		public abstract void smoking();
		}
		/*
		 *  实现类,实现接口 重写接口抽象方法,创建实现类对象
		 *  class XXX implements Smoking{
		 *      public void smoking(){
		 *      
		 *      }
		 *  }
		 *  XXX x = new XXX();
		 *  x.smoking(); 
		 *  Smoking s = new XXX();
		 *  s.smoking();
		 *  
		 *  匿名内部类,简化问题:  定义实现类,重写方法,建立实现类对象,合为一步完成
		 */

	测试类:
	public class Test {
		public static void main(String[] args) {
			//使用匿名内部类
			/*
			 *  定义实现类,重写方法,创建实现类对象,一步搞定
			 *  格式:
			 *    new 接口或者父类(){
			 *       重写抽象方法
			 *    };
			 *    从 new开始,到分号结束
			 *    创建了接口的实现类的对象
			 */
			new Smoking(){
				public void smoking(){
					System.out.println("人在吸烟");
				}
			}.smoking();
		}
	}
	```
- - - 

###	匿名内部类_2
* A: 匿名内部类案例演示
	```java
		public abstract class Animal {
			public abstract void eat();
			public abstract void sleep();
		}

	测试代码
	/*
	 *    new Animal(){
				public void eat(){
					System.out.println("在吃饭");
				} 
				public void sleep(){
					System.out.println("在睡觉");
				}
			 };
		以上代码,就是Animal的子类的对象
		多态性, 父类引用 = 子类的对象

	 */
	public class Test2 {
		public static void main(String[] args) {
			Animal a= new Animal(){
				public void eat(){
					System.out.println("在吃饭");
				} 
				public void sleep(){
					System.out.println("在睡觉");
				}
			 };
			 a.eat();
			 a.sleep();
		}
	}
	```
- - - 

##	包的声明与访问
- - - 

###	包的概念 
* A: 概念
	* java的包，其实就是我们电脑系统中的文件夹，包里存放的是类文件。
	* 当类文件很多的时候，通常我们会采用多个包进行存放管理他们，这种方式称为分包管理。
	* 在项目中，我们将相同功能的类放到一个包中，方便管理。并且日常项目的分工也是以包作为边界。
	* 类中声明的包必须与实际class文件所在的文件夹情况相一致，即类声明在a包下，则生成的.class文件必须在a文件夹下，否则，程序运行时会找不到类。
	
* B 声明格式
	```java
		通常使用公司网址反写，可以有多层包，包名采用全部小写字母，多层包之间用”.”连接
			类中包的声明格式： 
		package 包名.包名.包名…;
			如：黑马程序员网址itheima.com那么网址反写就为com.itheima
				传智播客 itcast.cn  那么网址反写就为 cn.itcast
			注意：声明包的语句，必须写在程序有效代码的第一行（注释不算）
		代码演示：
		package cn.itcast; //包的声明，必须在有效代码的第一行
		
		import java.util.Scanner;
		import java.util.Random;

		public class Demo {}
	```

* C: 包的访问
	```java
		在访问类时，为了能够找到该类，必须使用含有包名的类全名（包名.类名）。
		包名.包名….类名
		如： java.util.Scanner
			 java.util.Random
			cn.itcast.Demo
		带有包的类，创建对象格式：包名.类名 变量名 = new包名.类名();
			 cn.itcast.Demo d = new cn.itcast.Demo();
			前提：包的访问与访问权限密切相关，这里以一般情况来说，即类用public修饰的情况。

			类的简化访问
		当我们要使用一个类时，这个类与当前程序在同一个包中（即同一个文件夹中），或者这个类是java.lang包中的类时通常可以省略掉包名，直接使用该类。
		如：cn.itcast包中有两个类，PersonTest类，与Person类。我们在PersonTest类中，访问Person类时，由于是同一个包下，访问时可以省略包名，即直接通过类名访问 Person。
		类名 变量名 = new类名();
		Person p = new Person();

			当我们要使用的类，与当前程序不在同一个包中（即不同文件夹中），要访问的类必须用public修饰才可访问。
		package cn.itcst02;
		public class Person {}
	```
- - - 
		
###	导入包
* A:导入包
	* 我们每次使用类时，都需要写很长的包名。很麻烦，我们可以通过import导包的方式来简化。
	可以通过导包的方式使用该类，可以避免使用全类名编写（即，包类.类名）。
	```java
		导包的格式：
		import 包名.类名;

			当程序导入指定的包后，使用类时，就可以简化了。演示如下
		//导入包前的方式
		//创建对象
		java.util.Random r1 = new java.util.Random();
		java.util.Random r2 = new java.util.Random();
		java.util.Scanner sc1 = new java.util.Scanner(System.in);
		java.util.Scanner sc2 = new java.util.Scanner(System.in);

		//导入包后的方式
		import java.util.Random;
		import java.util.Scanner;
		//创建对象
		Random r1 = new Random();
		Random r2 = new Random();
		Scanner sc1 = new Scanner(System.in);
		Scanner sc2 = new Scanner(System.in);
		import导包代码书写的位置：在声明包package后，定义所有类class前，使用导包import包名.包名.类名;
	```
- - - 

##	访问修饰符
- - - 

###	权限修饰符
* A 权限修饰符有哪些

		在Java中提供了四种访问权限，使用不同的访问权限时，被修饰的内容会有不同的访问权限，
		以下表来说明不同权限的访问能力：
		    		            public			protected	  default		private
		同一类中	              √	               √	         √	           √
		同一包中(子类与无关类)	  √	               √	         √	
		不同包的子类	          √	               √		
		不同包中的无关类	      √			
	
* B: 小结
	* 归纳一下：在日常开发过程中，编写的类、方法、成员变量的访问
	* 要想仅能在本类中访问使用private修饰；
	* 要想本包中的类都可以访问不加修饰符即可；
	* 要想本包中的类与其他包中的子类可以访问使用protected修饰
	* 要想所有包中的所有类都可以访问使用public修饰。
	* 注意：如果类用public修饰，则类名必须与文件名相同。一个文件中只能有一个public修饰的类。
- - - 

##	代码块
- - - 


###	代码块
* A: 概述:
	程序中用大括号括起来的代码叫代码块
* B: 分类
    局部代码块  构造代码块  静态代码块  同步代码块
	 
* C 局部代码块:
```java
	局部代码块是定义在方法或语句中
	特点：
		以”{}”划定的代码区域，此时只需要关注作用域的不同即可
		方法和类都是以代码块的方式划定边界的

		  class Demo{
				public static void main(String[] args)	{
					{
							 int x = 1;
							 System.out.println("普通代码块" + x);
					}
					int x = 99;
					System.out.println("代码块之外" + x);
				}
		  }
		  结果：
			普通代码块1
			代码块之外99
		  局部代码块作用:可以限定变量的声明周期.
```

* D: 构造代码块
```java
		构造代码块是定义在类中成员位置的代码块
		特点：
			优先于构造方法执行，构造代码块用于执行所有对象均需要的初始化动作
			每创建一个对象均会执行一次构造代码块。
		public class Person {
			private String name;
			private int age;
			
			 //构造代码块
			{
				System.out.println("构造代码块执行了");
			}
			Person(){
				System.out.println("Person无参数的构造函数执行");
			}
			Person(int age){
				this.age = age;
				System.out.println("Person（age）参数的构造函数执行");
			}
		}
		class PersonDemo{
			public static void main(String[] args)	{
				Person p = new Person();
				Person p1 = new Person(23);
			}
		}
```

* E: 静态代码块
```java
		静态代码块是定义在成员位置，使用static修饰的代码块。
		特点：
			它优先于主方法执行、优先于构造代码块执行，当以任意形式第一次使用到该类时执行。
			该类不管创建多少对象，静态代码块只执行一次。
			可用于给静态变量赋值，用来给类进行初始化。
			public class Person {
				private String name;
				private int age;
				 //静态代码块
				static{
					System.out.println("静态代码块执行了");
				}
			}
```			

* F: 同步代码块(多线程学习)
- - -

##	Eclipse常用快捷键操作
- - - 

###	eclipse快捷键
* A: 	Ctrl+T：查看所选中类的继承树
	例如，在下面代码中，选中Teacher类名，然后按Ctrl+T，就会显示出Teacher类的继承关系

* B:	查看所选中方法的源代码
	Ctrl+滑动鼠标点击方法名，或者选中方法名后，按F3键查看所选中方法的源代码。
- - - 

##	Eclipse文档注释导出帮助文档
- - - 

###	java中的文档注释和制作
* A: 在eclipse使用时，可以配合文档注释，导出对类的说明文档，从而供其	     他人阅读学习与使用。
	通过使用文档注释，将类或者方法进行注释用@简单标注基本信息。如@author 作者、@version代码版本、@param方法参数、@return方法返回值等。
- - - 

##	Eclipse项目的jar包导出与使用jar包	
- - - 

###	eclipse生成jar包
- - - 

###	JAVA_HOME配置
- - - 

###	导入jar包	
* A: 	导入jar包：即把指定的jar包，加入到指项目中，提供给项目使用。

		导入jar包的过程是将jar包加入到项目的.classpath文件中去，让项目识别，便可以使用jar包中所有的.class文件类。
		以下是加入步骤：
		1：项目根文件夹下创建lib文件夹，用于同一管理所有的jar文件
		2：把jar文件复制到lib文件夹中
		3：右键点击jar文件，点击Build Path，选择Add to Build Path，此时查看项目根文件夹下的.classpath文件，发现新加入的jar包路径被配置到了该文件中。说明可以使用jar包中所有类了。

		注意：
		Jar包加入后，必须Add to Build Path才能使用
		Jar包加入后，加入的类也必须导包，如果加入的类其包名与现有类包名相同，则视作在同一个包下。(不常见)
- - - 

##	不同修饰符混合使用细节				
- - - 

###	不同修饰符使用细节
```java	
	A: 常用来修饰类、方法、变量的修饰符如下：
		public 权限修饰符，公共访问, 类,方法,成员变量
		protected 权限修饰符，受保护访问, 方法,成员变量
		默认什么也不写 也是一种权限修饰符，默认访问, 类,方法,成员变量
		private 权限修饰符，私有访问, 方法,成员变量
		static 静态修饰符  方法,成员变量
		final 最终修饰符   类,方法,成员变量,局部变量
		abstract 抽象修饰符  类 ,方法

	B: 不能同时使用的修饰符
		同时，abstract与private不能同时使用；
		同时，abstract与static不能同时使用；
		同时，abstract与final不能同时使用。

	C: 修饰类能够使用的修饰符：
		修饰类只能使用public、默认的、final、abstract关键字
		使用最多的是 public关键字

		a:代码案例
			public class Demo {} //最常用的方式
			class Demo2{}
			public final class Demo3{}
			public abstract class Demo4{}

	D:修饰成员变量能够使用的修饰符：
		public : 公共的
		protected : 受保护的
			: 默认的
		private ：私有的
		final : 最终的
		static : 静态的
		使用最多的是 private

		a: 代码案例
			public int count = 100;
			protected int count2 = 100;
			int count3 = 100;
			private int count4 = 100; //最常用的方式
			public final int count5 = 100;
			public static int count6 = 100;


	E:修饰构造方法能够使用的修饰符：
		public : 公共的
		protected : 受保护的
			: 默认的
		private ：私有的
		使用最多的是 public

		a:代码案例
			public Demo(){} //最常用的方式
			protected Demo(){}
			Demo(){}
			private Demo(){}

			修饰成员方法能够使用的修饰符：
				public : 公共的
				protected : 受保护的
					: 默认的
				private ：私有的
				final : 最终的
				static : 静态的
				abstract : 抽象的
				使用最多的是 public
			public void method1(){}//最常用的方式
			protected void method2(){}
			void method3(){}
			private void method4(){}
			public final void method5(){}
			public static void method6(){}//最常用的方式
			public abstract void method7();//最常用的方式
```
- - - 

## 	辨析何时定义变量为成员变量
- - - 

###	局部变量和成员变量解析
* A：程序编译
```java
	数学工具类
	public class MathTool {
		//求两个数的和的二倍
		public double sum2times(int number,int number2) {
			return (number+number2)*2;
		}
		//求两个数的积
		public double area(int number,int number2) {
			return number*number2;
		}
	}

	长方形类
	public class CFX {
		//因为长与宽，在现实事物中属于事物的一部分，所以定义成员变量
		private int chang;
		private int kuan;
		
		public CFX(int chang, int kuan) {
			this.chang = chang;
			this.kuan = kuan;
		}
		
		//求长与宽的周长
		public double zhouChang() {
			return (chang+kuan)*2;
		}
		//求长与宽的面积
		public double mianJi() {
			return chang*kuan;
		}
		public int getChang() {
			return chang;
		}
		public void setChang(int chang) {
			this.chang = chang;
		}
		public int getKuan() {
			return kuan;
		}
		public void setKuan(int kuan) {
			this.kuan = kuan;
		}
	}
```
- - - 

##	类、抽象类、接口作为方法参数
- - - 

###	类作为方法的参数			
* A：	类作为方法参数
```java
	在编写程序中，会经常碰到调用的方法要接收的是一个类类型的情况，那么这时，要向方法中传入该类的对象。

		如下代码演示：
			class Person{
				public void show(){
					System.out.println("show方法执行了");
				}
			}
			//测试类
			public class Test {
				public static void main(String[] args) {
					//创建Person对象
					Person p = new Person();
					//调用method方法
					method(p);
				}
				
			//定义一个方法method，用来接收一个Person对象，在方法中调用Person对象的show方法
			public static void method(Person p){
				p.show();
			}
```
- - - 

##	类、抽象类、接口作为方法返回值
- - - 

###	抽象类作为方法参数与返回值
* A: 	抽象类作为方法参数
```java
	今后开发中，抽象类作为方法参数的情况也很多见。当遇到方法参数为抽象类类型时，要传入一个实现抽象类所有抽象方法的子类对象。如下代码演示：
		//抽象类
		abstract class Person{
			public abstract void show();
		}
		class Student extends Person{
			@Override
			public void show() {
				System.out.println("重写了show方法");
			}
		}
		//测试类
		public class Test {
			public static void main(String[] args) {
				//通过多态的方式，创建一个Person类型的变量，而这个对象实际是Student
				Person p = new Student();
				//调用method方法
				method(p);
			}
			
			//定义一个方法method，用来接收一个Person类型对象，在方法中调用Person对象的show方法
			public static void method(Person p){//抽象类作为参数
				//通过p变量调用show方法,这时实际调用的是Student对象中的show方法
				p.show();	
		}
		}
```

* B:	抽象类作为方法返回值
```java
	抽象类作为方法返回值的情况，也是有的，这时需要返回一个实现抽象类所有抽象方法的子类对象。如下代码演示：
		//抽象类
		abstract class Person{
			public abstract void show();
		}
		class Student extends Person{
			@Override
			public void show() {
				System.out.println("重写了show方法");
			}
		}
		//测试类
		public class Test {
			public static void main(String[] args) {
				//调用method方法，获取返回的Person对象
				Person p = method();
				//通过p变量调用show方法,这时实际调用的是Student对象中的show方法
				p.show();
			}
			
			//定义一个方法method，用来获取一个Person对象，在方法中完成Person对象的创建
			public static Person method(){
				Person p = new Student();
				return p;
			}
		}
```
- - - 

###	接口作为方法参数与返回值
* A: 	接口作为方法参数
```java	
	接口作为方法参数的情况是很常见的，经常会碰到。当遇到方法参数为接口类型时，那么该方法要传入一个接口实现类对象。如下代码演示。
		//接口
		interface Smoke{
			public abstract void smoking();
		}
		class Student implements Smoke{
			@Override
			public void smoking() {
				System.out.println("课下吸口烟，赛过活神仙");
			}
		}
		//测试类
		public class Test {
			public static void main(String[] args) {
				//通过多态的方式，创建一个Smoke类型的变量，而这个对象实际是Student
				Smoke s = new Student();
				//调用method方法
				method(s);
			}
			
			//定义一个方法method，用来接收一个Smoke类型对象，在方法中调用Smoke对象的show方法
			public static void method(Smoke sm){//接口作为参数
				//通过sm变量调用smoking方法，这时实际调用的是Student对象中的smoking方法
				sm.smoking();
			}
		}
```

* B:	接口作为方法返回值
```java	
	接口作为方法返回值的情况，在后面的学习中会碰到。当遇到方法返回值是接口类型时，那么该方法需要返回一个接口实现类对象。如下代码演示。

		//接口
		interface Smoke{
			public abstract void smoking();
		}
		class Student implements Smoke{
			@Override
			public void smoking() {
				System.out.println("课下吸口烟，赛过活神仙");
			}
		}
		//测试类
		public class Test {
			public static void main(String[] args) {
				//调用method方法，获取返回的会吸烟的对象
				Smoke s = method();
				//通过s变量调用smoking方法,这时实际调用的是Student对象中的smoking方法
				s.smoking();
			}
			
			//定义一个方法method，用来获取一个具备吸烟功能的对象，并在方法中完成吸烟者的创建
			public static Smoke method(){
				Smoke sm = new Student();
				return sm;
			}
		}
```
- - - 	

###	星级酒店案例
* A: 	

根据“某五星级酒店，资金雄厚……都有自己的工作要做。”分析出，该题		目中包含酒店，可以把它封装成类，多名员工）。

```java
		class 员工 {
		     属性：姓名
		属性：工号
		方法：工作
		}
		class 厨师 extends 员工{}
		class 服务员 extends 员工{}
		class 经理 extends 员工 {
		     属性：奖金
		}

		员工的类型有经理、厨师、服务员，它们有共同的属性（姓名、工号、），经理额外属性（奖金）。

			根据“向酒店中，增加多名员工（其中包含1名经理，1名厨师、2名服务员）”。分析出，要创建一个酒店对象，并添加4名员工到酒店对象的员工集合中。
		酒店员工集合添加新员工： 经理对象
		酒店员工集合添加新员工： 厨师对象
		酒店员工集合添加新员工： 服务员对象
		酒店员工集合添加新员工： 服务员对象

			根据“获取酒店幸运员工”。分析出，从酒店员工集合随机得到一名员工对象。
		1. 从酒店员工集合长度范围内，随机产生一个随机数
		2. 使用该随机数作为集合的索引，返回该索引处对应的员工对象

			根据“酒店开设VIP服务，酒店的厨师与服务员可以提供VIP服务。（厨师做菜加量、服务员给顾客倒酒）”。分析出，这是要增加一个VIP的接口，接口中提供个VIP服务的方法。让厨师与服务员实现该接口。
		interface VIP服务{
		     抽象方法：服务
		}
		class 厨师 extends 员工 implements VIP服务{ 重写服务方法 }
		class 服务员 extends 员工 implements VIP服务{ 重写服务方法 }
```

*	B:
```java	
		VIP服务
public interface VIP {
     public abstract void server(); //服务
}

	员工
/*
 * 	员工：
		 姓名 String
		 工号 String
	
 */
public abstract class YuanGong {
	// 成员变量
	private String xingMing;
	private String gongHao;
	// 构造方法
	public YuanGong() {
		super();
	}
	public YuanGong(String xingMing, String gongHao) {
		super();
		this.xingMing = xingMing;
		this.gongHao = gongHao;
	
	}
	// 抽象方法
	public abstract void work();
	
	// getters与setters
	public String getXingMing() {
		return xingMing;
	}
	public void setXingMing(String xingMing) {
		this.xingMing = xingMing;
	}
	public String getGongHao() {
		return gongHao;
	}
	public void setGongHao(String gongHao) {
		this.gongHao = gongHao;
	}
	
}

	服务员
/*
 * 定义员工的子类 服务员类
 */
public class FuWuYuan extends YuanGong implements VIP {
	public FuWuYuan() {
		super();
	}

	public FuWuYuan(String xingMing, String gongHao) {
		super(xingMing, gongHao);
	}
	@Override
	public void work() {
		System.out.println("亲，全身心为您服务，记得给好评哦");
	}
	@Override
	public void server() {
		System.out.println("给顾客倒酒");
	}
}

	经理
/*
 * 经理在员工的基础上，添加了奖金成员
 */
public class JingLi extends YuanGong {
	private double jiangJin;

	public JingLi() {
		super();
	}
	public JingLi(String xingMing, String gongHao, double jiangJin) {
		super(xingMing, gongHao);
		this.jiangJin = jiangJin;
	}

	public double getJiangJin() {
		return jiangJin;
	}
	public void setJiangJin(double jiangJin) {
		this.jiangJin = jiangJin;
	}

	@Override
	public void work() {
		System.out.println("哪个员工让顾客不满意，我扣谁钱");
	};
}

	厨师
/*
 * 定义员工的子类 厨师类
 */
public class ChuShi extends YuanGong implements VIP{
	public ChuShi() {
		super();
	}
	public ChuShi(String xingMing, String gongHao) {
		super(xingMing, gongHao);
	}

	@Override
	public void work() {
		System.out.println("我做饭，放心吃吧，包您满意");
	}
	@Override
	public void server() {
		System.out.println("做菜加量加料");
	}
}
```
