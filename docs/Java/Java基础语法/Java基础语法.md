#	Java基础语法

##	引用类型变量的创建及使用
- - -

###	创建引用类型变量公式
* A: 创建引用类型变量公式
	* a: 我们要学的Scanner类是属于引用数据类型，我们先了解下引用数据类型。
	* b: 引用数据类型的定义格式
		* 与定义基本数据类型变量不同，引用数据类型的变量定义及赋值有一个相对固定的步骤或格式。
		* 数据类型  变量名  =  new 数据类型();
	* c: 引用数据类型的使用
		* 每种引用数据类型都有其功能，我们可以调用该类型实例的功能。
		* 变量名.方法名();
- - -		
	
###	Scanner类的使用
* A: Scanner类的使用
	* a: 导包import java.util.Scanner;
	* b：创建键盘录入对象 Scanner sc = new Scanner(System.in);
	* c: 读取键盘录入的一个整数
		* int enterNumber = sc.nextInt();
	* d: 读取键盘录入的字符串
		* String enterString = sc.next();
* B: 案例代码
	```java
		import java.util.Scanner;
		public class Demo05Scanner{
			public static void main(String[] args) 
			{
				Scanner sc = new Scanner(System.in);

				int enterNumber = sc.nextInt();
				System.out.println("用户输入的整数为"+enterNumber);

				String enterString = sc.next();
				System.out.println("用户输入的字符串为"+enterString);
			}
		}
	```	
- - -		
			
###	Random随机数类的使用_1
* A: Random随机数类的使用_1
	* a: 功能
		* 生成随机数需要使用到引用类型随机数Random类
	* b: 使用方式
		* import导包：所属包java.util. Random
		* 创建实例格式：Random  random = new Random ();
		* 调用方法
			* nextInt(int maxValue)	产生[0,maxValue)范围的随机数,包含0不包含maxValue
			* nextDouble()  产生[0,1)范围的随机数
			如：
			```java
				Random  random = new Random ();
				int  myNumber = random.nextInt(100);//结果为0-99的一个数
			```
* B: 案例代码
	```java
		import java.util.Random;
		public class RandomDemo{
			public static void main(String[] args){
			   Random ran = new Random();
			   // Random类中的,产生随机数的功能
			   int i = ran.nextInt(100);
			   System.out.println(i);
			   
			   //问题? 产生随机数,范围 1-100之间
			   // nextInt(100) 0-99 + 1
			}
		}
	```
- - -	

###	Random随机数类的使用_2
* A: Random随机数类的使用_2
	* a: 调用方法
		* nextDouble()  产生[0,1)范围的随机数
		如：
		```java
			Random  random = new Random ();
			int  myNumber = random.nextDouble();//结果为0.0-1.0之间的数(包括0.0不包括1.0)
		```
- - -

##	流程控制语句之选择语句
- - -

###	if语句格式第一种
* A: if语句格式第一种
	* a: 书写格式
	```java
		if(比较表达式) {
			语句体;
		}
	```	
	* b：执行流程：
		* 先计算比较表达式的值，看其返回值是true还是false。
		* 如果是true，就执行语句体；
		* 如果是false，就不执行语句体；
* B: 案例代码
	```java
		public class IfDemo{
			public static void main(String[] args){
				  int i = 5 ;
				  //对变量i进行if判断
				  if(i > 5){
					  System.out.println("if中的条件是true");
					  i++;
				  }
				  
				  System.out.println(i);
			}
		}
	```
- - -		

###	if语句格式第二种
* A: if语句格式第二种
	* a: 书写格式
	```java
		if(比较表达式) {
			语句体1;
		}else {
			语句体2;
		}
	```
	* b：执行流程：
		* 首先计算比较表达式的值，看其返回值是true还是false。
		* 如果是true，就执行语句体1；
		* 如果是false，就执行语句体2；
* B: 案例代码
	```java
		public class IfElseDemo{
			public static void main(String[] args){
			     int i = 16 ;
				 //判断变量,是奇偶数, 除以2,看余数是0还是1
				 if( i % 2 == 0 ){
					 System.out.println(i+" 是偶数");
				 }else{
					 System.out.println(i+" 是奇数");
				 }
		    }
		}
	```
- - -

###	if语句格式第三种
* A: if语句格式第三种
	* a: 书写格式
	```java
			if(比较表达式1) {
				语句体1;
			}else if(比较表达式2) {
				语句体2;
			}else if(比较表达式3) {
				语句体3;
			}
			...
			else {
				语句体n+1;
			}
	```		
	* b：执行流程：
		* 首先计算比较表达式1看其返回值是true还是false，
		* 如果是true，就执行语句体1，if语句结束。
		* 如果是false，接着计算比较表达式2看其返回值是true还是false，
			
		* 如果是true，就执行语句体2，if语句结束。
		* 如果是false，接着计算比较表达式3看其返回值是true还是false，
			
		* 如果都是false，就执行语句体n+1。
* B: 案例代码
	```java
		public class IfElseIfDemo{
			public static void main(String[] args){
				//成绩判断要求 ,成绩>80  成绩>70  成绩>60  不及格
				//定义变量,保存成绩
				int grade = 75;
				//使用if else if 语句对成绩判断
				if( grade > 80 ){
					System.out.println(grade+" 成绩是优");
				}else if ( grade > 70){
					System.out.println(grade+" 成绩是良");
				}else if ( grade > 60){
					System.out.println(grade+" 成绩是中");
				}else{
					System.out.println(grade+" 成绩是差");
				}
			 	
			}
		}
	```
- - -

###	if语句和三元运算符的互换			
* A: 三元运算符
	* a: 概念
		* 用来完成简单的选择逻辑，即根据条件判断，从两个选择中选择一种执行
	* b: 使用格式
		* (条件表达式)？表达式1：表达式2；
	* c: 运算规则
		* 1: 判断条件表达式，结果为一个布尔值	
		* 2: true，运算结果为表达式1
		* 3: false，运算结果为表达式2
* B: 案例代码
	```java
		public class IfElseDemo_1{
			public static void main(String[] args){
				int j = 6;
				int i = 15;
				//使用if语句,判断出最大值
				if(i>j){
				int j = 6;
					System.out.println(i+" 是最大值");
				}else{
					System.out.println(j+" 是最大值");
				}
				
				//使用三元运算实现
				int k = i>j ? i : j;
				System.out.println(k+" 是最大值");
			}
		}
	```

* C: 使用if语句还是三元表达式
	* 判断条件多,使用if
    * 三元,必须有结果的, if 可以没有结果的
- - -

##	流程控制语句之循环语句
- - -

###	while循环
* A: while循环结构
	* a: 使用格式
	```java
		初始化表达式；
		while(条件){
			循环体
		}
	```	
	* b: 执行顺序
		  当条件是true,就执行循环体,执行完循环体后
		  程序再次执行while中的条件,如果条件还是true,继续执行循环体
		  直到条件是false的时候,循环就结束
* B: 案例代码
	```java
		public class WhileDemo{
			public static void main(String[] args){
				//输出 1-4之间的整数
				//定义变量,整数类型, 循环的条件
				int i = 1;
				while( i < 5 ){
					System.out.println(i);
					i++;
				}
			}
		}
	```
- - -

###	for循环_1
* A: for循环_1
	* a: 使用格式
		 for(初始化变量 ; 条件 ; 增量){
			 循环体;
		 }
	* b: 各模块解释
		初始化变量: 定义变量,作用是用来控制循环的次数
	    条件: 当条件是true,执行循环体,条件是false,结束循环
	    增量: 变量自增情况 
* B: 案例代码
	```java
		public class ForDemo{
			public static void main(String[] args){
				//for循环,输出0-10
				for(int i = 0 ; i < 11 ; i++){
					System.out.println(i);
				}
			}
		}
	```
- - -

###	for循环_2
* A: for循环的执行流程
```java
	for（① ; ② ; ③）{
		④
	}
	第一步，执行①
	第二步，执行②，如果判断结果为true，执行第三步，如果判断结果为false，执行第五步
	第三步，执行④
	第四步，执行③，然后重复执行第二步
	第五步，退出循环
```	
- - -	

###	for循环_3
* A: 案例
	* a: 利用for循环,计算1+4的结果
* B: 案例代码
	```java
		public class ForDemo_1{
			public static void main(String[] args){
				// 定义变量,记录求和后的数据
				int sum = 0;
				// 利用循环,将变量从1变化到4
				for(int i = 1 ; i <= 4 ; i++){
					//对变量进行求和
					sum = sum + i;
				}
				System.out.println(sum);
			}
		}
	```
- - -

###	do_while循环
* A: do_while循环
	* a: 使用格式
	```java
		do{
		   循环体;
	    }while(条件);
	```	
	* b: 执行顺序
		先执行一次循环体，然后再判断条件，如果条件为true，继续执行循环体，
		如果条件为false，循环结束。
	* c: 特点
		* 无条件先执行一次
* B: 案例代码
	```java
		public class DoWhileDemo{
			public static void main(String[] args){
				int i = 0; 
				do{
					System.out.println(i);
					i++;
				}while( i <  5);
			}
		}
	```
- - -

###	死循环
* A: 死循环概述
	* 无限循环存在的原因是并不知道循环多少次，而是根据某些条件，来控制循环
* B: 死循环格式
	* while(true){}
	* for(;;){}
- - -

###	嵌套for循环_1
* A: 嵌套循环的概述
	* 嵌套循环是指在一个循环语句的循环体中再定义一个循环语句的语法结构。while、do…while、for循环语句都可以进行嵌套，并且它们之间也可以互相嵌套，如最常见的在for循环中嵌套for循环。
* B: 嵌套循环的格式
	```java
		for(初始化表达式; 循环条件; 操作表达式) {
			………
			for(初始化表达式; 循环条件; 操作表达式) {
				执行语句
				………
			}
			………
		}
	```	
* C: 各模块解释
	* 总的循环次数 =  内循环次数 * 外循环的次数
	* 内循环,是外循环的循环体
	   
	* 外循环,控制的是行数
	* 内循环,控制的是每行的个数
- - -

###	嵌套for循环_2
* A: 案例
	* a: 打印正三角形
* B: 案例代码
	```java
		public class ForForDemo{
			public static void main(String[] args){
				for(int i = 0 ; i < 9 ; i++){
					for(int j = 0; j < i+1 ;j++){
						System.out.print("* ");
					}
					System.out.println();
				}
			}
		}
	```
- - -

###	break语句
* A: break语句
	* a: 作用
		* 跳出所在的循环体
	* b: 书写位置
		* 必须出现在循环或选择结构内
	* c: 举例
	```java
			for(int i=0; i<10; i++) {
				if(i>5) {
				break;
			}
				System.out.println(“我爱Java”+i);
			}
			//会从0-5输出6次“我爱Java”
	```		
* B: break详细解释
	* a: 作用
		* 在loop/switch选择或者循环过程中，我们总是满足布尔表达条件才能执行对应的代码，然而在这些逻辑过程中，可以使用一些关键字直接跳出正在执行的代码，去执行后边或者指定位置的代码，这些关键字一旦出现就可以跳转语句执行顺序。
	* b: 使用方式
		* 无法单独使用，必须将break关键字置于switch或循环语句中
	* c: 运行规律
		* 不需要判断任何条件，只要遇到break变直接跳出执行后续代码。会完全跳出选择或者循环结构
		* 只能跳出最近的代码块，不能跨越多级代码块
	
* C：循环标号
	* a: 为什么使用循环标号
		* 当在双层循环或者循环内有switch选择语句时，我们发现，使用break或者continue所作用的对象均是内层语句，无法直接跳出外层循环，这时就需要使用标号语句跳转了.
	* b: 使用方式
		* 在外层循环外的某行前边，使用后边跟有冒号”:”的标识符，即定义完毕。
			  使用时当在内层循环使用break或continue时后边紧跟之前定义的标号即可
	* c: 运行规律
		* 当外层循环外定义了标号
		* 内层使用break，终止内外双层循环。
		* 内层使用continue，终止内层循环，继续外层循环。
- - -

###	continue语句
* A: continue语句
	* a: 作用
		* 提前结束本次循环，继续进行下次循环
	* b: 使用方式
		* 无法单独使用，必须将continue关键字置于循环语句中
	* c：运行规律
		* 不需要判断任何条件，只要遇到continue变直接跳出本轮循环进行下次循环
	* d：案例代码
	```java
			public class ContinueDemo{
				public static void main(String[] args){
					for(int i = 0 ; i < 10 ; i++){
						if(i%2==0){
							continue;
						}
						System.out.println(i);
					}
				}
			}
			//会把0-9之间所有的奇数打印到控制台上
	```		
- - -

##	循环高级
- - -

###	猜数字小游戏
* A: 猜数字小游戏		
	* a: 分析
		* 用户给的数可能大于、小于、或等于被猜的数，这样就会出现三种情况，用前面讲的三元运算符可以实现，
		但是得用三元运算符的嵌套，比较麻烦！可以用更简单的方式if条件判断，可以有三个以上的条件
	* b: 需求分析
		* 后台预先生成一个随机数1-100，用户键盘录入猜数字
		* 如果猜对了，打印“恭喜您，答对了”
		* 如果猜错了
		* 猜大了：打印“sorry，您猜大了!”
		* 猜小了：打印“sorry，您猜小了!”
				直到数字猜到为止
				最多只能猜5次，否则提示“sorry，您没有机会了!”
* B: 案例代码
	```java
		/*
			猜数字小游戏
			
			完成猜数字小游戏：
			1、产生随机数
			后台预先生成一个随机数1-100，用户键盘录入猜数字
			2、通过if语句对用户猜的数与随机数进行比较
			如果猜对了，打印“恭喜您，答对了”
			如果猜错了
			猜大了：打印“sorry，您猜大了!”
			猜小了：打印“sorry，您猜小了!”
			3、通过for循环完成用户猜数的循环
			直到数字猜到为止
			最多只能猜5次，否则提示“sorry，您没有机会了!”

		*/
		import java.util.Random;
		import java.util.Scanner;
		//通过*的方式可以一次导入该包下所有的类，但是不建议使用。建议使用哪个导哪个。
		//import java.util.*;
		public class GuessNumber{
			public static void main(String[] args) {
				//1、产生随机数
				//后台预先生成一个随机数1-100，用户键盘录入猜数字
				//创建随机数对象
				Random random = new Random();
				//产生一个1-100的随机数
				int randomNumber = random.nextInt(100)+1;
				//System.out.println("我产生的随机数是："+randomNumber+"你猜猜是多少？");  作弊专用

				//产生控制台录入的Scanner对象
				Scanner sc = new Scanner(System.in);
				//3、通过for循环完成用户猜数的循环
				//通过for循环完成猜数字逻辑
				for(int i=1; i<=5; i++){
					//提示用户输入要猜的数，用变量接收
					System.out.println();
					System.out.println("请您输入一个1-100的数：");
					int guessNumber = sc.nextInt();
					
					//2、通过if语句对用户猜的数与随机数进行比较
					//如果猜对了
					if(guessNumber==randomNumber) {
						//打印猜对后的提示
						System.out.println("恭喜您，猜对了！");
						//跳出循环，不用再猜了
						break;
					}else {//如果猜错了
						//如果猜大了
						if(guessNumber>randomNumber) {
							System.out.println("sorry，您猜大了!");
						}else {//如果猜小了
							System.out.println("sorry，您猜小了!");
						}
					}
					//如果猜到了最后的第5次仍然没有猜对就跳出循环
					if(i==5) {
						System.out.println("对不起，点太背，下次再来吧！");
						break;
					}
					//每次猜错后，都提示还有多少次机会
					System.out.println("请注意，您还有"+(5-i)+"次机会，请慎重作答！");
				}
			}
		}
	```
- - -

##	流程控制语句switch
- - - 

###	switch语句解构
*	A:switch语句解构
	* a:switch只能针对某个表达式的值作出判断，从而决定程序执行哪一段代码。

    * b:格式如下:
	```java
      	      swtich(表达式){
      			  case 常量1 :
      			    要执行的语句;
      			  break;
      			  
      			  case 常量2 :
      			    要执行的语句;
      			  break;
      			  
      			  case 常量3 :
      			    要执行的语句;
      			  break;
      			  
      			  default:
      			    要执行的语句;
      			  break;
      		  }
	```		  
    * c: 执行流程:  表达式,和case后面的常量进行比较和哪个case后的常量相同,就执行哪个case后面的程序,遇到break,就全结束
      	  
    * d: 关键字: switch case default break

	* e:举例
	```
		如果等于1，则输出星期一
		如果等于2，则输出星期二
		如果等于3，则输出星期三
		如果等于4，则输出星期四
		如果等于5，则输出星期五
		如果等于6，则输出星期六
		如果等于7，则输出星期天
	```
- - - 

###	switch语句的星期判断
*	A: switch语句的星期判断
	*	a: 明确需求
		需求:初始化int类型变量(1-7)代表星期几,使用switch语句进行判断,并打印出该整数对应的星期.

	* 	b: 代码实现
		```java	
			 public class SwitchDemo01 {
				public static void main(String[] args) {
					int week = 5;
					switch (week) {
					case 1:
						System.out.println("星期一");
						break;
					case 2:
						System.out.println("星期二");
						break;
					case 3:
						System.out.println("星期三");
						break;
					case 4:
						System.out.println("星期四");
						break;
					case 5:
						System.out.println("星期五");
						break;
					case 6:
						System.out.println("星期六");
						break;
					case 7:
						System.out.println("星期天");
						break;
					default:
						System.out.println("输入的数字不正确...");
						break;
					}
				}
			}
		```
- - - 
​			
###	switch语句接受的数据类型
*	A: switch语句接受的数据类型
	*	a:注意事项
	```
		switch语句中的表达式的数据类型,是有要求的
		JDK1.0 - 1.4  数据类型接受 byte short int char
		JDK1.5  	  数据类型接受 byte short int char enum(枚举)
		JDK1.7   	  数据类型接受 byte short int char enum(枚举), String
	```		
- - - 	

###	case穿透
*	A:case穿透
	*	a: 在使用switch语句的过程中，如果多个case条件后面的执行语句是一样的，则该执行语句只需书写一次即可，这是一种简写的方式。
	*	b: 例如，要判断一周中的某一天是否为工作日，同样使用数字1~7来表示星期一到星期天，当输入的数字为1、2、3、4、5时就视为工作日，否则就视为休息日。
- - - 
​		
##	数组
- - - 

###	数组的概述
*	A: 数组的概述
	*	a:数组的需求
		现在需要统计某公司员工的工资情况，例如计算平均工资、最高工资等。假设该公司有50名员工，
		用前面所学的知识完成，那么程序首先需要声明50个变量来分别记住每位员工的工资，这样做会显得很麻烦.
	*	b:数组的概述
	 		数组是指一组数据的集合，数组中的每个数据被称作元素。在数组中可以存放任意类型的元素，但同一个数组里存放的元素类型必须一致。
- - - 

###	数组的定义_1
*	A：数组的定义
	*	a:格式:
	数据类型[] 数组名 = new 数据类型[元素个数或数组长度];
	*	b:举例:
			int[] x = new int[100];
	*	c:要点说明
	```
	  	1)数据类型: 数组中存储元素的数据类型
		2) [] 表示数组的意思
		3) 变量名  自定义标识符  
		4) new  创建容器关键字
		5)数据类型: 数组中存储元素的数据类型
		6)[]  表示数组的意思
		7)元素个数,就是数组中,可以存储多少个数据 (恒定, 定长)
		  
		数组是一个容器: 存储到数组中的每个元素,都有自己的自动编号
		自动编号,最小值是0, 最大值,长度-1
		自动编号专业名次, 索引(index), 下标, 角标
		访问数组存储的元素,必须依赖于索引, 公式 数组名[索引]
		
		Java提供一个属性,操作索引的
		数组的一个属性,就是数组的长度, 属性的名字 length
		使用属性:  数组名.length  数据类型 int
		
		数组的最小索引是0, 最大索引数组.length-1
	```	
- - - 

###	JVM内存划分
*	A：内存划分
*	JVM对自己的内存划分为5个区域
	*	a: 寄存器:内存和CUP之间
	*	b: 本地方法栈: JVM调用了系统中的功能
	*	c: 方法和数据共享: 运行时期class文件进入的地方
	*	d: 方法栈:所有的方法运行的时候进入内存
	*	e: 堆:存储的是容器和对象
- - - 

###	数组的内存
*	A: 数组的内存
	*	int[] x;	            	// 声明一个int[]类型的变量
	*	x = new int[100];		// 创建一个长度为100的数组
	*	接下来，通过两张内存图来详细地说明数组在创建过程中内存的分配情况。
	*	第一行代码 int[] x; 声明了一个变量x，该变量的类型为int[]，即一个int类型的数组。变量x会占用一块内存单元，它没有被分配初始值
	*	第二行代码 x = new int[100]; 创建了一个数组，将数组的地址赋值给变量x。在程序运行期间可以使用变量x来引用数组，这时内存中的状态会发生变化
- - - 
​		
###	使用索引访问数组的元素
*	A: 使用索引访问数组的元素
	*	组中有100个元素，初始值都为0。数组中的每个元素都有一个索引(也可称为角标)，要想访问数组中的元素可以通过“x[0]、x[1]、……、x[98]、x[99]”的形式。
	*	需要注意的是，数组中最小的索引是0，最大的索引是“数组的长度-1”
​- - - 	

###	数组的length属性
*	A: lenth属性
	*	a 在Java中，为了方便我们获得数组的长度，提供了一个length属性，在程序中可以通过“数组名.length”的方式来获得数组的长度，即元素的个数。
	*	b 求数组的长度
	```java
		public class ArrayDemo01 {
			public static void main(String[] args) {
				int[] arr; // 声明变量
				arr = new int[3]; // 创建数组对象
				System.out.println("arr[0]=" + arr[0]); // 访问数组中的第一个元素
				System.out.println("arr[1]=" + arr[1]); // 访问数组中的第二个元素
				System.out.println("arr[2]=" + arr[2]); // 访问数组中的第三个元素
				System.out.println("数组的长度是：" + arr.length); // 打印数组长度			
			}​					
		}
	```	​		 		
- - - 

###	为数组的元素赋值
*	A: 为数组的元素赋值
	*	a: 如果在使用数组时，不想使用这些默认初始值，也可以显式地为这些元素赋值。
		*	赋值过的元素已经变为新的数值,没有赋值的元素默认初始化的数值	
	*	b: 案例
	```java
		public class ArrayDemo02 {
			public static void main(String[] args) {
				int[] arr = new int[4]; // 定义可以存储4个整数的数组
				arr[0] = 1; // 为第1个元素赋值1
				arr[1] = 2; // 为第2个元素赋值2
				// 下面的代码是打印数组中每个元素的值
				System.out.println("arr[0]=" + arr[0]);
				System.out.println("arr[1]=" + arr[1]);
				System.out.println("arr[2]=" + arr[2]);
				System.out.println("arr[3]=" + arr[3]);
				}
		}
	```	
- - - 

###	数组的定义_2
* A: 定义数组格式2
	* a: 数组初始化
	动态初始化 : 在定义数组时只指定数组的长度，由系统自动为元素赋初值的方式称作动态初始化。
	```
	1、类型[] 数组名 = new 类型[长度];
	int[] arr = new int[4];
	静态初始化: 在初始化数组时还有一种方式叫做静态初始化，就是在定义数组的同时就为数组的每个元素赋值。
	2、类型[] 数组名 = new 类型[]{元素，元素，……};
	int[] arr = new int[]{1,2,3,4};
	3、类型[] 数组名 = {元素，元素，元素，……};	 
	int[] arr = { 1, 2, 3, 4 };
	```
- - - 

###	遍历数组
* A:遍历数组
	* 在操作数组时，经常需要依次访问数组中的每个元素，这种操作称作数组的遍历
* B:练习
	```java
	public class ArrayDemo04 {
		public static void main(String[] args) {
			int[] arr = { 1, 2, 3, 4, 5 }; // 定义数组
			// 使用for循环遍历数组的元素
			for (int i = 0; i < arr.length; i++) {
				System.out.println(arr[i]); // 通过索引访问元素
				}
			}
		}
	```	
	上述代码中，定义一个长度为5的数组arr，数组的角标为0~4。由于for循环中定义的变量i的值在循环过程中为0~4，因此可以作为索引，依次去访问数组中的元素，并将元素的值打印出来
- - - 

###	数组中常见的异常
* A: 数组操作中,常见的两个异常
	*	数组的索引越界异常
	*	空指针异常

* B: 练习
	```java
		public class ArrayDemo_4{
			public static void main(String[] args){
				//数组的索引越界异常
				//int[] arr = {5,2,1};
				//数组中3个元素,索引 0,1,2
				//System.out.println(arr[3]);//java.lang.ArrayIndexOutOfBoundsException: 3
				
				//空指针异常
				int[] arr2 = {1,5,8};
				System.out.println(arr2[2]);
				arr2 = null; // arr2 不在保存数组的地址了
				System.out.println(arr2[2]);//java.lang.NullPointerException
			}
		}
	```
- - - 

###	数组最值
* A: 数组获取最值的原理思想
    * 定义数组的第一个元素arr[0]为最大值;循环arr数组,判断如果有比arr[0] 大的就交换,直到arr数组遍历完毕,那么arr[0]中就保存了最大的元素
- - - 

###	数组获取最值代码实现
* A: 代码实现
	```java
	public class ArrayDemo05 {
		public static void main(String[] args) {
			int[] arr = { 4, 1, 6, 3, 9, 8 }; 	// 定义一个数组
			int max = arr[0]; 					// 定义变量max用于记住最大数，首先假设第一个元素为最大值
			// 下面通过一个for循环遍历数组中的元素
			for (int x = 1; x < arr.length; x++) {
				if (arr[x] > max) { 			// 比较 arr[x]的值是否大于max
				max = arr[x]; 				// 条件成立，将arr[x]的值赋给max
				}
			}
			System.out.println("max=" + max); 	// 打印最大值
		}
	}
- - - 

###	二维数组的定义
 * A 二维数组的作用
	* 要统计一个学校各个班级学生的考试成绩，又该如何实现呢？
	* 这时就需要用到多维数组，多维数组可以简单地理解为在数组中嵌套数组。
* B 定义格式
	```java
    a 第一种定义格式:
		int[][] arr = new int[3][4];
		上面的代码相当于定义了一个3*4的二维数组，即二维数组的长度为3，二维数组中的每个元素又是一个长度为4的数组
	b 第二种定义格式
		int[][] arr = new int[3][];
		第二种方式和第一种类似，只是数组中每个元素的长度不确定
	c 第三种定义格式
		int[][] arr = {{1,2},{3,4,5,6},{7,8,9}};
		二维数组中定义了三个元素，这三个元素都是数组，分别为{1,2},{3,4,5,6},{7,8,9}
    ```
- - - 

###	二维数组元素的访问
* A: 二维数组的访问
	* 案例:
	```java
	class ArrayDemo08 {
		public static void main(String[] args){

			//定义二维数组的方式
			int[][] arr = new int[3][4];
			System.out.println( arr );
			System.out.println("二维数组的长度: " + arr.length);
			//获取二维数组的3个元素
			System.out.println( arr[0] );
			System.out.println( arr[1] );
			System.out.println( arr[2] );
			
			System.out.println("打印第一个一维数组的元素值");
			System.out.println( arr[0][0] );
			System.out.println( arr[0][1] );//访问的为二维数组中第1个一维数组的第2个元素
			System.out.println( arr[0][2] );
			System.out.println( arr[0][3] );
			
			System.out.println("打印第二个一维数组的元素值");
			System.out.println( arr[1][0] );
			System.out.println( arr[1][1] );
			System.out.println( arr[1][2] );
			System.out.println( arr[1][3] );
			
			System.out.println("打印第三个一维数组的元素值");
			System.out.println( arr[2][0] );
			System.out.println( arr[2][1] );
			System.out.println( arr[2][2] );
			System.out.println( arr[2][3] );
		}
	}
	```
- - - 

###	二维数组内存图
* A: 二维数组内存图
    ```java
    举例:int[][] arr = new int[3][2];
    外层数组长在内存开辟连续的3个大的内存空间,每一个内存空间都对应的有地址值
    每一个大内存空间里又开辟连续的两个小的内存空间.
    ```
- - - 

###	二维数组的定义和访问
* A: 二维数组的定义和访问
    ```java
    格式1: 
        int[][] arr = new int[3][]; 不推荐
    格式2
        int[][] arr = {{1,2,4},{4,7},{0,9,3}};
    ```
* B: 二维数组的访问
    ```java
    举例:int[][] arr = {{1,2,4},{5,8,7},{0,9,3}};  
	想要打印数组中7这个元素需要先找到大的元素索引{5,7} 索引为2 ,在找7在{5,7}中的索引2
	那么结果为 arr[2][2]  第一个[2]代表大数组中{5,8,7}这个元素索引
	第二个[2]代表{5,8,7}中7元素的索引
    ```
- - - 

###	二维数组的遍历
*   A:二维数组遍历
    ```java
		int[][] arr = {{1,2,4},{4,7},{0,9,3}};
  		先使用for循环遍历arr这个二维数组,得到每一个元素为arr[i]为一维数组
		再外层for循环中嵌套一个for循环遍历每一个一维数组arr[i],得到每一元素
    ```

*	B:举例:遍历二维数组
	```java
		public class ArrayArrayDemo_2{
			public static void main(String[] args){
				int[][] arr = { {1,2,3},{4,5},{6,7,8,9},{0} };
				
				//外循环,遍历二维数组
				for(int i = 0 ; i < arr.length ;i++){
					//内循环,遍历每个一维数组 arr[0] arr[1] arr[i]
					for(int j = 0 ; j < arr[i].length; j++){
						System.out.print(arr[i][j]);
					}
					System.out.println();
				}
			}
        }    
	```

*   C:二维数组累加求和
    ```java
	   class ArrayDemo09 {
			public static void main(String[] args){
			  	int[][] arr2 = { {1,2},{3,4,5},{6,7,8,9,10} };
				int sum2 = 0;
				for (int i=0; i<arr2.length; i++) {
					for (int j=0; j<arr2[i].length; j++) {
		                 //System.out.println(arr2[i][j])
						sum2 += arr2[i][j];
					}
				}
				System.out.println("sum2= "+ sum2);
			}
		}
	```
- - - 

###	二维数组的求和练习
* A 例如要统计一个公司三个销售小组中每个小组的总销售额以及整个公司的销售额。如下所示
	* 第一小组销售额为{11, 12}万元
	* 第二小组销售额为{21, 22, 23}万元
	* 第三小组销售额为{31, 32, 33, 34}万元。

* B 代码实现
	```java
	   	public class ArrayDemo10 {
	 		public static void main(String[] args) {
	 			int[][] arr = new int[3][]; 			// 定义一个长度为3的二维数组
				arr[0] = new int[] { 11, 12 }; 			// 为数组的元素赋值
	 			arr[1] = new int[] { 21, 22, 23 };
	 			arr[2] = new int[] { 31, 32, 33, 34 };		
	 			int sum = 0; 							// 定义变量记录总销售额
	 			for (int i = 0; i < arr.length; i++) { // 遍历数组元素
	 				int groupSum = 0; // 定义变量记录小组销售总额
	 			for (int j = 0; j < arr[i].length; j++) { // 遍历小组内每个人的销售额
	 					groupSum = groupSum + arr[i][j];
	 			}
	 				sum = sum + groupSum; 			// 累加小组销售额
	 				System.out.println("第" + (i + 1) + "小组销售额为：" + groupSum + " 万元");
	 			}
	 			System.out.println("总销售额为: " + sum + " 万元");
	 		}
	 	}
	```
- - - 

##	随机点名器案例
- - - 

###	随机点名器案例分析
* A 随机点名器案例分析

* B: 需求
	 * 随机点名器，即在全班同学中随机的打印出一名同学名字。
	  
* C:分析:
	 * 1)定义数组存数全班同学
	 * 2)生成随机数范围0 到 数组长度-1
	 * 3)根据这个索引找到数组中的同学名称
- - - 

###	随机点名器代码实现_1
* A: 分析
  * 随机点名器:
    * 1  存储姓名		 
    * 2	预览所有人的姓名​		 
    * 3	随机出一个人的姓名

* B 代码实现
	```java
		import java.util.Random;
		public class CallName{
			public static void main(String[] args){
				//存储姓名,姓名存储到数组中
				//数组存储姓名,姓名的数据类型,String
				String[] names = {"张三","李四","王五","李蕾","韩梅梅","小名","老王","小华","约翰逊","爱丽丝"};
				//预览: 遍历数组,打印所有姓名
				for(int i = 0 ; i < names.length ; i++){
					System.out.println(names[i]);
				}
				System.out.println("=============");
				
				//随机出一个人的名
				//利用随机数,生成一个整数,作为索引,到数组中找到对应的元素
				Random ran = new Random();
				//随机数,范围必须是0-数组的最大索引
				int index = ran.nextInt(names.length);//index 就是随机数,作为索引
				System.out.println(names[index]);
			}
		}
	```	
- - - 

###	随机点名器代码实现_2
* A 代码优化:
	```java
	import java.util.Random;
	public class CallName{
		public static void main(String[] args){
			String[] names = {"张三","李四","王五","李蕾","韩梅梅","小名","老王","小华","约翰逊","爱丽丝"};
			System.out.println(names[new Random().nextInt(names.length)]);
		}
	}
	```
- - -

##	方法基础知识
- - - 
	
###	方法的概述
* A: 为什么要有方法
	* 提高代码的复用性 
* B: 什么是方法
	* 完成特定功能的代码块。 
- - - 		
	
###	方法的定义格式
* A: 方法的格式
	```java
			修饰符 返回值类型 方法名(参数类型 参数名1,参数类型 参数名2...) {
				方法体语句;
				return 返回值; 
			} 
	```		
* B: 方法的格式说明
	* 修饰符：目前就用 public static。后面我们再详细的讲解其他的修饰符。
	* 返回值类型：就是功能结果的数据类型。
	* 方法名：符合命名规则即可。方便我们的调用。
	* 参数：
		* 实际参数：就是实际参与运算的。
		* 形式参数；就是方法定义上的，用于接收实际参数的。
	* 参数类型：就是参数的数据类型
	* 参数名：就是变量名
	* 方法体语句：就是完成功能的代码。
	* return：结束方法的。
	* 返回值：就是功能的结果，由return带给调用者。 
- - - 				
			
###	定义方法计算面积
* A: 定义方法计算面积
	```java
		public class MethodDemo{
	
			public static void main(String[] args){
				 //调用方法, 方法执行起来
				 // 在方法main中,调用方法 getArea
		
				 int area = getArea(5,6);
				 System.out.println("面积是: "+area);
				
			}
			/*
			   要求: 计算一个长方形的面积
			   定义方法解决这个要求
			   分析方法定义过程:
			      1.明确方法计算后的结果的数据类型 int  定义格式对应的就是返回值类型
				  2.方法计算过程中,有没有未知的数据, 宽和长, 未知数据的数据类型 int
				      未知数的变量,定义在方法的小括号内
			*/
			public static int  getArea(int w, int h){
				//实现方法的功能主体
				//int area = w * h;
				return w * h;
			}
		}
	```
- - - 

###	调用方法
* A: 调用方法
	* a: 在main函数中调用方法，让方法执行起来
	* b: 方法的形参
		* 方法要什么参数我们就给什么类型的参数。
	* c: 方法的返回值
		* 方法返回什么类型的值我们就用对应的数据类型的变量来接收
- - - 

###	调用方法执行流程
* A: 调用方法执行流程
	* a: 方法的定义是没有顺序的，写在main函数的上边或者下边都可以。
	* b: 方法的执行，是把实参传递给形参，从而来执行的。
	* c: 方法只有被调用才会执行。
- - - 

###	方法调用的内存图
* A: 方法调用的内存图
	* a: 参见\day05\day05(Java基础语法)\day05_source\方法内存图.JPG
- - - 

###	方法调用的练习
* A: 案例代码
	```java
		/*
		   方法的定义练习
		*/
		import java.util.Scanner;
		public class MethodDemo_1{
			public static void main(String[] args){
				//printRect();
				//int number = getNumber();
				//System.out.println(getNumber());
				//printRect2(3,5);
				double avg = getAvg(2,2,3);
				System.out.println(avg);
			}
		
			/*
			   定义有返回值有参数方法，如求三个数的平均值
			   明确方法计算后的数据类型, 返回值类型 double
			   明确方法未知数, 三个未知的整数
			*/
			public static double getAvg(double a, double b,double c){
				 return (a+b+c)/3;
			}
			
			/*
			    定义无返回值有参数方法，如打印指定M行，每行N个*号的矩形
				明确方法计算后结果,控制台输出图形,没有返回值的
				方法中有没有未知数,图形行数,和列数,是未知的, 数据类型整数int
			*/
			public static void printRect2(int m,int n){
				for(int i = 0 ; i < m ; i++){
					for(int j = 0 ; j < n ;  j++){
						System.out.print("*");
					}
					System.out.println();
				}
			}
		
			/*
			   定义有返回值无参数方法，如键盘录入得到一个整数
			   明确方法计算后结果的数据类型 int
			   明确有没有未知数,没
			*/
			public static int getNumber(){
				Scanner sc = new Scanner(System.in);
				//int number = sc.nextInt();
				return sc.nextInt();
			}
			
			/*
			   定义无返回值无参数方法，如打印3行，每行3个*号的矩形
			   为什么没有返回值:
			       打印矩形 ,输出效果,不需要将结果返回
				   明确未知数: 不需要未知数
			*/
			public static void printRect(){
				for(int i = 0 ; i < 3 ; i++){
					for(int j = 0 ; j < 3 ;j++){
						System.out.print("*");
					}
					System.out.println();
				}
			}
		}
	```
- - - 

###	方法的定义和使用的注意事项
* A: 方法的定义和使用的注意事项
	* a: 方法不能定义在另一个方法的里面
	* b: 写错方法名字
	* c: 写错了参数列表
	* d: 方法返回值是void,方法中可以省略return 不写
	     return 下面不能有代码
	* e 方法返回值类型,和return 后面数据类型必须匹配
	* f: 方法重复定义问题
	* g: 调用方法的时候,返回值是void, 不能写在输出语句中
- - - 

##	方法高级内容
- - - 

###	方法的重载
* A: 方法的重载	
	* 在同一个类中，方法名相同，参数列表不同。与返回值类型无关。
	
	* 参数列表不同：
		* A:参数个数不同
		* B:参数类型不同
		* C:参数的顺序不同(算重载,但是在开发中不用)

* B: 案例代码
	```java
		public static int getSum(int a,int b){
			System.out.println("两个int参数");
			return a+b;
		}
		public static int getSum(int a,int b,int c){
			System.out.println("三个int参数");
			return a+b+c;
		}
		public static double getSum(double a,double b){
			System.out.println("两个double参数");
			return a+b;
		}
	```
- - - 

###	方法重载注意事项
* A: 方法重载注意事项	
	* a: 参数列表必须不同
	* b: 重载和参数变量名无关
	* c: 重载和返回值类型无关
	* d: 重载和修饰符无关
    * e: 技巧: 重载看方法名和参数列表
- - - 

		
###	方法参数是基本数据类型
* A: 方法参数是基本数据类型
	* a: 方法参数是基本类型时，传递的是值。
- - - 


###	方法参数是引用数据类型
* A: 方法参数是引用数据类型
	* a: 方法参数是引用类型时，传递的是内存地址值。
- - - 

##	方法案例
- - - 

###	随机点名器
* A: 案例代码
	```java
		/*
		   实现随机点名器
		     1.存储所有学生姓名
			 2.预览所有学生姓名,遍历数组
			 3.随机数作为索引,到数组中找元素
			 
			将功能独立出来, 作成方法,调用方法即可
			
			定义三个功能, 用到同一个姓名数据
			姓名存储到数组中,三个方法,使用一个数组中的数据, 方法传递参数
		*/
		import java.util.Random;
		public class CallName{
			public static void main(String[] args){
				//定义数组,存储学生姓名
				String[] names = new String[8];
				//调用添加姓名方法
				addStudent(names);
				//调用遍历数组方法
				printStudentName(names);
				//调用随机姓名的方法
				String name = randomStudentName(names);
				System.out.println(name);
			}
			/*
			  定义方法,随机数,做索引,数组中找到学生姓名
			  返回值?  学生姓名
			  参数?  数组
			*/
			public static String randomStudentName(String[] names){
				Random ran = new Random();
				int index = ran.nextInt(names.length);
				return names[index];
			}
			
			/*
			   定义方法,遍历数组
			   返回值? 没有
			   参数? 数组
			*/
			public static void printStudentName(String[] names){
				for(int i = 0 ; i < names.length ;i++){
					System.out.println(names[i]);
				}
			}
			
			/*
			   定义方法,实现向数组中添加学生姓名
			   返回值? 没有,
			   参数?  参数就是数组
			*/
			public static void addStudent(String[] names){
				names[0] = "张三";
				names[1] = "李四";
				names[2] = "王五";
				names[3] = "李蕾";
				names[4] = "韩梅梅";
				names[5] = "小名";
				names[6] = "老王";
				names[7] = "小华";
			}
		}
	```
- - - 

###	库存案例代码实现_1
* A: 案例代码
	```java
		/*
		   实现商品的库存管理
		     功能:
			    1.展示用户选择功能清单
				2.根据选择的功能编号,进行不同的操作
				   A. 展示所有库存
				   B. 修改库存数量
				   
			  分析:
			    1.展示用户清单:
				   输出语句, 用户输入, 选择功能序号
				2.根据选择,调用不同的方法
				    switch语句
					  case 1 2 3
				
				   A  展示库存
				     将存储商品的数组,遍历
				   B  修改库存
				        
					  修改所有的库存数量
		*/
		import java.util.Scanner;
		public class Shopp{
			public static void main(String[] args){
				
			}
			
			/*
			   定义方法,展示所有的库存清单,遍历
			   返回值,没有
			   参数, 数组
			*/
			public static void printStore(String[] brand,double[] size,double[] price,int[] count){
				System.out.println("----------商场库存清单----------");
				System.out.println("品牌型号     尺寸    价格    库存数");
				//定义变量,计算总库存数,和总价格
				int totalCount = 0;
				int totalMoney = 0;
				//遍历数组,将数组中所有的商品信息打印出来
				for(int i = 0 ; i < brand.length ; i++){
					System.out.println(brand[i]+"   "+size[i]+"    "+price[i]+"   "+count[i]);
					totalCount += count[i];
					totalMoney += count[i]*price[i];
				}
				System.out.println("总库存数: "+totalCount);
				System.out.println("商品库存总金额: "+totalMoney);
			}
			
			/*
			  定义方法,实现用户的选择功能,功能的需要返回来
			  返回值, int
			  参数, 没有
			*/
			public static int chooseFunction(){
				System.out.println("-------------库存管理------------");
				System.out.println("1.查看库存清单");
				System.out.println("2.修改商品库存数量");
				System.out.println("3.退出");
				System.out.println("请输入要执行的操作序号：");
				//接受键盘输入
				Scanner sc = new Scanner(System.in);
				int chooseNumber = sc.nextInt();
				return chooseNumber;
			}
		}
	```	 
- - - 

###	库存案例代码实现_2
* A: 案例代码
	```java
		/*
		  定义方法,修改所有商品的库存
		    用户输入1个,修改1个
			返回值,没有
			参数, 库存数的数组, 品名数组
		*/
		public static void update(String[] brand, int[] count){
			//遍历数组,遍历到一个,修改一个
			//接受键盘输入
			Scanner sc = new Scanner(System.in);
			//遍历数组
			for(int i = 0; i < brand.length ; i++){
				System.out.println("请输入"+brand[i]+"的库存数");
				//键盘输入,录入库存, 存储到库存的数组中
				int newCount = sc.nextInt();
				count[i] = newCount;
			}
			//int chooseNumber = sc.nextInt();
		}
	```
- - - 

###	库存案例代码测试
* A: 案例
	```java
		/*
		   实现商品的库存管理
		     功能:
			    1.展示用户选择功能清单
				2.根据选择的功能编号,进行不同的操作
				   A. 展示所有库存
				   B. 修改库存数量
				   
			  分析:
			    1.展示用户清单:
				   输出语句, 用户输入, 选择功能序号
				2.根据选择,调用不同的方法
				    switch语句
					  case 1 2 3
				
				   A  展示库存
				     将存储商品的数组,遍历
				   B  修改库存
				        
					  修改所有的库存数量
		*/
		import java.util.Scanner;
		public class Shopp{
			public static void main(String[] args){
				//使用数组,保存商品的信息
				//品名,尺寸,价格,库存数, 定义5个数组
				String[] brand = {"MacBookAir","ThinkpadT450"};
				double[] size = {13.3,15.6};
				double[] price = {9998.97,6789.56};
				int[] count = {0,0};
				while(true){
					int choose = chooseFunction();
					switch(choose){
						case 1:
						  //调用查看库存清单方法
						  printStore(brand,size,price,count);
						break;
						
						case 2:
						  //调用修改库存的方法
						  update(brand,count);
						break;
						
						case 3:
						 return ;
						default:
						  System.out.println("没有这个功能");
						break;
					}
				}
			}
			/*
			  定义方法,修改所有商品的库存
			    用户输入1个,修改1个
				返回值,没有
				参数, 库存数的数组, 品名数组
			*/
			public static void update(String[] brand, int[] count){
				//遍历数组,遍历到一个,修改一个
				//接受键盘输入
				Scanner sc = new Scanner(System.in);
				//遍历数组
				for(int i = 0; i < brand.length ; i++){
					System.out.println("请输入"+brand[i]+"的库存数");
					//键盘输入,录入库存, 存储到库存的数组中
					int newCount = sc.nextInt();
					count[i] = newCount;
				}
				//int chooseNumber = sc.nextInt();
			}
			
			/*
			   定义方法,展示所有的库存清单,遍历
			   返回值,没有
			   参数, 数组
			*/
			public static void printStore(String[] brand,double[] size,double[] price,int[] count){
				System.out.println("----------商场库存清单----------");
				System.out.println("品牌型号     尺寸    价格    库存数");
				//定义变量,计算总库存数,和总价格
				int totalCount = 0;
				int totalMoney = 0;
				//遍历数组,将数组中所有的商品信息打印出来
				for(int i = 0 ; i < brand.length ; i++){
					System.out.println(brand[i]+"   "+size[i]+"    "+price[i]+"   "+count[i]);
					totalCount += count[i];
					totalMoney += count[i]*price[i];
				}
				System.out.println("总库存数: "+totalCount);
				System.out.println("商品库存总金额: "+totalMoney);
			}
			
			/*
			  定义方法,实现用户的选择功能,功能的需要返回来
			  返回值, int
			  参数, 没有
			*/
			public static int chooseFunction(){
				System.out.println("-------------库存管理------------");
				System.out.println("1.查看库存清单");
				System.out.println("2.修改商品库存数量");
				System.out.println("3.退出");
				System.out.println("请输入要执行的操作序号：");
				//接受键盘输入
				Scanner sc = new Scanner(System.in);
				int chooseNumber = sc.nextInt();
				return chooseNumber;
			}
		}
	```
- - -

##	自定义类型的定义及使用
- - -
	
###	引用数据类型_类
* A: 数据类型
	* a: java中的数据类型分为：基本类型和引用类型
* B: 引用类型的分类
	* a: Java为我们提供好的类，比如说：Scanner,Random等。
	* b: 我们自己创建的类，按照类的定义标准，可以在类中包含多个方法与属性，来供我们使用。 
- - -		
	
###	自定义类的概述
* A: 自定义类的概述
	* java代码映射成现实事物的过程就是定义类的过程。
	* 举例：
		我们就拿一部手机进行分析，它能用来做什么呢？它可以打电话，上网，聊微信等，这些就是手机所提供的功能，也就是方法；手机也有它的特征，如颜色、尺寸大小、品牌型号等，这些就是手机的特征，也就是属性
	* 目前，我们只关注类中的属性，类中的方法在面向对象部分再进行学习。
- - -				
			
###	自定义类的格式
* A: 自定义类的格式
	* a: 使用类的形式,对现实中的事物进行描述。
	* b: 事物由方法和属性两部分组成。
		* 方法: 这个事物具备的功能。
		* 属性: 这个事物具备的特征。
	* c: 格式
	```java
			public class 类名{
				属性定义
				  修饰符 数据类型 变量名 = 值
				
				方法定义
				  修饰符 返回值类型  方法名(参数列表){
					  
				  }
			}
	```
- - -

###	自定义的手机类
* A: 自定义的手机类
	* a: 案例代码
	```java
			public class Phone{
				/*
				    定义手机的属性
				*/
				String color ;
				String brand ;
				double size ; 
			}
	```
- - -

###	测试手机类
* A: 调用方法执行流程
	* a: 实现引用类型的步骤
		* 1: 导入包 , 类都是在同一个文件夹,不需要导入包
		* 2: 创建引用类型的变量
		* 3: 变量.类型中的功能
	* b: 案例代码
	```java
			public class TestPhone{
				public static void main(String[] args){
					// 2: 创建引用类型的变量
					Phone p = new Phone();
					//System.out.println(p);  //输出内存的地址
				
			     	//3: 变量.类型中的功能
					//变量 p.的方式,调用类中的属性
					//属性就是变量 , 赋值和获取值
					p.color = "土豪金";
					p.brand = "爱立信";
					p.size = 5.0;
					
					//获取属性值
					System.out.println(p.color+"  "+p.brand+"  "+p.size);
				}
			}
	```
- - -

##	自定义类的内存图
- - -

###	自定义类的内存图_1
* A: 自定义类的内存图_1
	* a: 参见\day06\day06(面向对象\day06_source\对象内存图.JPG
- - -

###	自定义类的内存图_2
* A: 自定义类的内存图_1
	* a: 参见\day06\day06(面向对象\day06_source\对象内存图.JPG
- - -

###	两个引用类型变量内存图
* A: 自定义类的内存图_1
	* a: 参见\day06\day06(面向对象\day06_source\两个引用变量内存图.JPG
- - -

###	自定义类的练习
* A: 实体类的代码
	```java
		/*
		    电饭锅，包含属性（品牌、容量大小、颜色等）
			定义类,描述事物,电饭锅
			  属性: 品牌,大小 ,颜色
			
			定义类,类名字,电饭锅
			类的范围,定义三个属性
		*/
		public class DianFanGuo{
			//定义三个属性
			String brand ;
		    double size ;
			String color ;
		}
		
		/*
		   汽车，包含属性（品牌、排量、类型等）
		   定义类,类名 Car
		     属性 品牌 排量 类型
		 */
		public class Car{
			//定义汽车三个属性
			String brand ;
			double paiLiang ;
			String type;
		}
		
		 /*
		   学生，包含属性（姓名，年龄，性别等）
		   定义类,类名Student
		     三个属性: 姓名,年龄,性别 (char)
		*/
		public class Student{
			String name;
			int age ;
			char sex ;
		}
	```

* B: 测试类的代码
	```java
		/*
		   定义的测试类
		   同时测试,电饭锅,汽车,学生
		*/
		public class Test{
			public static void main(String[] args){
				//创建电饭锅引用类型
				DianFanGuo dfg = new DianFanGuo();
				
				dfg.brand = "特斯拉";
				dfg.color = "红色";
				dfg.size = 30;
				
				System.out.println(dfg.brand+"  "+dfg.color+"  "+dfg.size);
				
				//创建汽车引用类型
				Car c = new Car();
				c.brand = "巨力";
				c.type = "拖拉机";
				c.paiLiang = 0.5;
				
				System.out.println(c.brand+"  "+c.type+"  "+c.paiLiang);
				
				//创建学生引用类型
				Student stu = new Student();
				stu.name = "张三";
				stu.age = 20;
				stu.sex = '男';
				System.out.println(stu.name+"  "+stu.age+"  "+stu.sex);
				
			}
		}
	```
- - -

##	ArrayList集合的基本功能
- - -

###	ArrayList创建变量的步骤
* A: ArrayList创建变量的步骤
	* a: 导入包 java.util包中
	* b: 创建引用类型的变量
		数据类型< 集合存储的数据类型>  变量名 = new 数据类型<集合存储的数据类型>();
   		集合存储的数据类型: 要将数据存储到集合的容器中
   		创建集合引用变量的时候,必须要指定好,存储的类型是什么
	* c: 变量名.方法 
    	注意: 集合存储的数据,8个基本类型对应8个引用类型
 		存储引用类型,不存储基本类型
- - -

###	ArrayList创建变量举例
* A: ArrayList创建变量的示例代码
	```java
		import java.util.ArrayList;
		public class ArrayListDemo{
			public static void main(String[] args){
				//创建集合容器,指定存储的数据类型
				//存储字符串
				ArrayList<String> array = new ArrayList<String>();
				
				//创建集合容器,存储整数
				ArrayList<Integer> array2 = new ArrayList<Integer>();
				
				//创建集合容器,存储手机类型
				ArrayList<Phone> array3 = new ArrayList<Phone>();
			}
		}
	```
- - -

###	ArrayList的常见方法
* A: ArrayList的常见方法
	* a: add(参数) 向集合中添加元素
	* b: get(int index) 取出集合中的元素,get方法的参数,写入索引
	* c: size() 返回集合的长度, 集合存储元素的个数
* B: 案例代码
	```java
		import java.util.ArrayList;
		public class ArrayListDemo_1{
			public static void main(String[] args){
				//定义集合,存储字符串元素
				ArrayList<String> array = new ArrayList<String>();
				//调用集合方法add存储元素
				array.add("abc");
				array.add("itcast");
			    array.add("love");
				array.add("java");
				//输出集合的长度,调用集合方法size, size方法的返回值类型 int
				int size = array.size();
				System.out.println(size);
				
				//获取出集合中的一个元素,获取1索引的元素
				//集合的方法get, 获取元素后结果数据类型
				String s = array.get(1);
				System.out.println(s);
				
				
				System.out.println(array.get(0));
				System.out.println(array.get(1));
				System.out.println(array.get(2));
				System.out.println(array.get(3));
			}
		}
	```
- - -

###	ArrayList集合的遍历
* A: 案例代码
	```java
		/*
		   集合的遍历
		   实现思想也是索引思想
		   集合的索引从0开始,到 size()-1
		   方法get(int index)
		*/
		import java.util.ArrayList;
		public class ArrayListDemo_2{
			public static void main(String[] args){
				ArrayList<Integer> array = new ArrayList<Integer>();
				array.add(121);
				array.add(125);
				array.add(123);
				array.add(120);
				array.add(128);
				
				//对集合进行遍历
				//使用方法 size+get组合进行遍历
				for(int i = 0 ; i < array.size(); i++){
					System.out.println( array.get(i) );
				}
			}
		}
	```
- - -

###	ArrayList补充方法
* A: ArrayList补充方法
	* a: add(int 索引,存储的元素) 	将元素添加到指定的索引上
	* b: set(int 索引,修改后的元素) 	将指定索引的元素,进行修改
	* c: remove(int 索引) 			删除指定索引上的元素
	* d: clear() 					清空集合中的所有元素
* B: 案例代码
	```java
		import java.util.ArrayList;
		public class ArrayListDemo_3{
			public static void main(String[] args){
				
				ArrayList<Integer> array = new ArrayList<Integer>();
				array.add(1);
				array.add(2);
				array.add(3);
				array.add(4);
				
				//在索引2上,添加元素7
				array.add(2,7);
				
				//将0索引上的元素,修改成10
				array.set(0,10);
				
				//将4索引上的元素,删除
				array.remove(4);
				
				array.clear();
				
				//使用方法 size+get组合进行遍历
				for(int i = 0 ; i < array.size(); i++){
					System.out.println( array.get(i) );
				}
			}
		}
	```		 
- - -

##	随机点名器案例及库存案例代码优化
- - -

###	随机点名器案例分析
* A: 随机点名器案例分析
	```
	全班同学中随机的找出一名同学，打印这名同学的个人信息。
	我们对本案例进行分析，得出如下分析结果：
		1.存储全班同学信息（姓名、年龄）
		将容器换成集合，集合中存的是Student类型
		2.打印全班同学每一个人的信息（姓名、年龄）
		遍历集合
		3.在班级总人数范围内，随机产生一个随机数，查找该随机数所对应的同学信息（姓名、年龄）
		随机点名器明确地分为了三个功能。如果将多个独立功能的代码写到一起，则代码相对冗长，我们可以针对不同的功能可以将其封装到一个方法中，将完整独立的功能分离出来。
		而在存储同学姓名时，如果对每一个同学都定义一个变量进行姓名存储，则会出现过多孤立的变量，很难一次性将全部数据持有。此时，我们采用ArrayList集合来解决多个学生信息的存储问题
	```	
- - -

###	随机点名器代码实现
* A: 随机点名器案例代码
	```java
		/*
		   随机点名器,集合改进 (学生的姓名和年龄)
		   现实中有学生这个事物,使用定义类的形式,描述学生事物
		   属性: 姓名,年龄
		   
		   姓名存储了数组, 将容器换成是集合
		   String[] s = {"",""};
		   集合中,存储的是学生的姓名吗?  应该存储Student类型
		   
		   存储学生:
		      学生类型,存储到集合中
		   总览: 遍历集合
		   随机: 随机数,作为索引,到集合中找到元素
		   三个功能,共享的数据,集合容器,
		   定义三个方法,必须参数传递集合
		*/
		import java.util.ArrayList;
		import java.util.Random;
		public class CallName{
			public static void main(String[] args){
				//定义集合,存储的是StudentName类型变量
				ArrayList <StudentName> array = new ArrayList<StudentName>();
				//调用添加方法
				add (array);
				//调用遍历集合
				printArrayList(array);
				
				randomStudentName(array);
			}
			/*
			  随机数,当作集合的索引,到集合中找到元素
			*/
			public static void randomStudentName(ArrayList<StudentName> array ){
				Random r = new Random();
				int number = r.nextInt( array.size());
				//随机数,索引,到集合中get
				StudentName s = array.get(number);
				System.out.println( s.name +"  "+s.age);
			}
			
			/*
			    总览学生的信息,遍历集合
			*/
			public static void printArrayList(ArrayList<StudentName> array){
				for(int i = 0 ; i < array.size();i++){
					//存储集合的时候, 集合.add(sn1)  sn1 是StudentName类型变量
					//获取的时候,集合.get方法,获取出来的是什么, 还是StudentName类型变量
					StudentName s = array.get(i);
					System.out.println(s.name+"  "+s.age);
				}
			}
			
			/*
			   定义方法,实现存储学生的姓名和年龄
			   创建StudentName类型变量,存储到集合中
			*/
			public static void add (ArrayList<StudentName> array){
				//创建StudentName类型变量
				StudentName sn1 = new StudentName();
				StudentName sn2 = new StudentName();
				StudentName sn3 = new StudentName();
				StudentName sn4 = new StudentName();
				StudentName sn5 = new StudentName();
				
				sn1.name = "张三1";
				sn1.age = 201;
				
				sn2.name = "张三2";
				sn2.age = 202;
				
				sn3.name = "张三3";
				sn3.age = 203;
				
				sn4.name = "张三4";
				sn4.age = 204;
				
				sn5.name = "张三5";
				sn5.age = 205;
				
				//将StudentName变量,存储到集合中
				array.add(sn1);
				array.add(sn2);
				array.add(sn3);
				array.add(sn4);
				array.add(sn5);
			}
		}
	```
- - -

###	库存案例添加商品信息
* A: 案例代码
	```java
		/*
		   定义,.描述商品的类
		   商品 4个属性
		     商品名字  大小     价格    库存
			  String    double   double  int
			  
			定义类,类名Goods
			这个类型的变量,存储到集合中
		*/
		public class Goods{
			//定义商品名字
			String brand ;
			//大小属性
			double size ;
			// 价格属性
			double price ;
			//库存属性
			int count ;
		}

		/*
		    实现库存管理案例:
			  1.存储商品信息
			    存储商品类型变量
				将商品类型的变量,存储到集合中
		*/
		//import java.util.ArrayList;
		import java.util.*;
		public class Shopp{
			public static void main(String[] args){
				//创建ArrayList集合,存储Goods类型
				ArrayList<Goods> array = new ArrayList<Goods>();
				//调用添加商品信息的方法
				addGoods(array);
			}
			
			/*
			   定义方法,将商品的信息存储到集合中
			   集合是所有方法的共享数据,参数传递
			*/
			public static void addGoods (ArrayList<Goods> array){
				//创建商品类型变量 Goods类型的变量
				Goods g1 = new Goods();
				Goods g2 = new Goods();
				g1.brand = "MacBook";
				g1.size = 13.3;
				g1.price = 9999.99;
				g1.count = 3;
				
				g2.brand = "Thinkpad";
				g2.size = 15.6;
				g2.price = 7999.99;
				g2.count = 1;
				
				//Goods类型的变量,存储到集合中
				array.add(g1);
				array.add(g2);
			}
		}
	```
- - -

###	库存案例查看库存清单
* A: 案例代码
	```java
		/*
		    实现库存管理案例:
			  1.存储商品信息
			    存储商品类型变量
				将商品类型的变量,存储到集合中
				
		      2.查看库存清单
			    将集合进行遍历, 获取出集合中存储的Goods类型变量
				输出每一个Goods类型的属性
				计算求和: 总库存,总金额
		*/
		//import java.util.ArrayList;
		import java.util.*;
		public class Shopp{
			public static void main(String[] args){
				//创建ArrayList集合,存储Goods类型
				ArrayList<Goods> array = new ArrayList<Goods>();
				//调用添加商品信息的方法
				addGoods(array);
			}
		
			/*
			   定义方法,查看库存清单,遍历集合
			*/
			public static void printStore(ArrayList<Goods> array){
				//输出表头
				System.out.println("----------商场库存清单----------");
				System.out.println("品牌型号     尺寸    价格    库存数");
				//定义变量,保存总库存数,和总金额
				int totalCount = 0 ;
				double totalMoney = 0;
				//遍历集合
				for(int i = 0 ; i < array.size(); i++){
					//get(索引)获取出集合中的元素,存储的是Goods类,获取的也是Goods类型
					//使用Goods类型变量,接受get方法结果
					Goods g = array.get(i);
					System.out.println(g.brand+"   "+g.size+"    "+g.price+"    "+g.count);
					totalCount = totalCount+g.count;
					totalMoney = totalMoney + g.count*g.price;
				}
				System.out.println("总库存数: "+totalCount);
				System.out.println("商品库存总金额: "+totalMoney);
			}
			
			/*
			   定义方法,将商品的信息存储到集合中
			   集合是所有方法的共享数据,参数传递
			*/
			public static void addGoods (ArrayList<Goods> array){
				//创建商品类型变量 Goods类型的变量
				Goods g1 = new Goods();
				Goods g2 = new Goods();
				g1.brand = "MacBook";
				g1.size = 13.3;
				g1.price = 9999.99;
				g1.count = 3;
				
				g2.brand = "Thinkpad";
				g2.size = 15.6;
				g2.price = 7999.99;
				g2.count = 1;
				
				//Goods类型的变量,存储到集合中
				array.add(g1);
				array.add(g2);
			}
		}
	```
- - -

###	库存案例修改库存清单及测试代码的实现
* A: 案例代码
	```java
		/*
		    实现库存管理案例:
			  1.存储商品信息
			    存储商品类型变量
				将商品类型的变量,存储到集合中
				
		      2.查看库存清单
			    将集合进行遍历, 获取出集合中存储的Goods类型变量
				输出每一个Goods类型的属性
				计算求和: 总库存,总金额
			
		     3.修改商品的库存
			    集合遍历 ,获取出集合中存储的Goods类型变量
				变量调用Goods类的属性count,值进行修改 (键盘输入)
		*/
		//import java.util.ArrayList;
		import java.util.*;
		public class Shopp{
			public static void main(String[] args){
				//创建ArrayList集合,存储Goods类型
				ArrayList<Goods> array = new ArrayList<Goods>();
				//调用添加商品信息的方法
				addGoods(array);
				//进入死循环中
				while(true){
					//调用选择功能的方法,获取到用户输入的功能序号
					int number = chooseFunction();
					//对序号判断,如果=1 进入查看库存功能  = 2 进入修改库存功能  =3 结束
					switch(number){
						case 1:
						//进入查看库存,调用查看库存的方法,传递存储商品信息的集合
						printStore(array);
						break;
						
						case 2:
						//进入修改库存功能,调用修改库存的方法,传递集合
						update(array);
						break;
						
						case 3:
						return ;
						
						default:
						 System.out.println("无此功能");
						 break;
					}
				}
			}
			/*
			  方法定义,修改库存
			  键盘的输入,将Goods中的属性值,修改
			*/
			public static void update(ArrayList<Goods> array){
				Scanner sc = new Scanner(System.in);
				//遍历集合,获取集合中的每个元素
				for(int i = 0 ;  i < array.size(); i++){
					//集合方法get获取的是集合的元素,元素类型Goods
					Goods g = array.get(i);
					System.out.println("请输入"+g.brand+"的库存数");
					//Goods属性,count进行修改
					g.count = sc.nextInt();
				}
			}
			/*
			   定义方法,实现选择菜单,用户根据功能选择菜单
			*/
			public static int chooseFunction(){
				System.out.println("-------------库存管理------------");
				System.out.println("1.查看库存清单");
				System.out.println("2.修改商品库存数量");
				System.out.println("3.退出");
				System.out.println("请输入要执行的操作序号：");
				Scanner sc = new Scanner(System.in);
				int number = sc.nextInt();
				return number;
			}
			
			/*
			   定义方法,查看库存清单,遍历集合
			*/
			public static void printStore(ArrayList<Goods> array){
				//输出表头
				System.out.println("----------商场库存清单----------");
				System.out.println("品牌型号     尺寸    价格    库存数");
				//定义变量,保存总库存数,和总金额
				int totalCount = 0 ;
				double totalMoney = 0;
				//遍历集合
				for(int i = 0 ; i < array.size(); i++){
					//get(索引)获取出集合中的元素,存储的是Goods类,获取的也是Goods类型
					//使用Goods类型变量,接受get方法结果
					Goods g = array.get(i);
					System.out.println(g.brand+"   "+g.size+"    "+g.price+"    "+g.count);
					totalCount = totalCount+g.count;
					totalMoney = totalMoney + g.count*g.price;
				}
				System.out.println("总库存数: "+totalCount);
				System.out.println("商品库存总金额: "+totalMoney);
			}
			
			/*
			   定义方法,将商品的信息存储到集合中
			   集合是所有方法的共享数据,参数传递
			*/
			public static void addGoods (ArrayList<Goods> array){
				//创建商品类型变量 Goods类型的变量
				Goods g1 = new Goods();
				Goods g2 = new Goods();
				g1.brand = "MacBook";
				g1.size = 13.3;
				g1.price = 9999.99;
				g1.count = 3;
				
				g2.brand = "Thinkpad";
				g2.size = 15.6;
				g2.price = 7999.99;
				g2.count = 1;
				
				//Goods类型的变量,存储到集合中
				array.add(g1);
				array.add(g2);
			}
		}
	```	
- - - 

##	循环练习
- - - 

###	奇数求和练习
* A: 奇数求和练习
	* a: 题目分析
		* 为了记录累加和的值，我们需要定义一个存储累加和的变量
		* 我们要获取到1-100范围内的数
		* 判断当前数是否为奇数，是奇数，完成累加和操作
		* 累加完毕后，最终显示下累加和的值

	* b: 解题步骤
		* 定义一个用来记录累加和的变量
		* 使用for循环语句，完成1-100之间每个数的获取
		* 使用if条件语句，判断当前数是否是奇数，是奇数，进行累加和操作
		* 使用输出语句，打印累加和变量的值

	* c: 案例代码
		```java
			public class Test01 {
				public static void main(String[] args) {
					int sum = 0;
					for (int i = 0; i < 100; i++) {
						if (i%2==1) {
							sum += i;
						}
					}
					System.out.println("累加和的值 " + sum);
				}
			}
		```
- - - 

###	水仙花练习功能实现
* A: 水仙花练习功能实现
	* a: 题目分析
		* 明确什么样的数就是水仙花数。水仙花数是指一个3位数（100-999之间），其每位数字立方之和等于该3位数本身。
			如153 = 1*1*1 + 3*3*3 + 5*5*5，即 3位数本身 = 百位数立方 + 十位数立方 + 个位数立方;
		* 获取水仙花范围内的所有3位数（100-999之间的每个3位数）
		* 判断该3位数是否满足水仙花数，满足，打印该3位数
			
	* b: 解题步骤
		* 使用for循环，得到100-999之间的每个3位数
		* 获取3位数中百位数字、十位数字、个位数字
		* 使用if条件语句，判断该3位数是否满足水仙花数，满足，使用输出语句，打印该3位数
			
	* c: 案例代码
		```java
			public class Test02 {
				public static void main(String[] args) {
					for (int i = 100; i < 1000; i++) {
						int bai = i/100%10;
						int shi = i/10%10;
						int ge = i%10;
						
						if (i == bai*bai*bai + shi*shi*shi + ge*ge*ge) {
							System.out.println(i);
						}
					}
				}
			}			
		```
- - - 

###	ASCII编码表
* A: ASCII编码表
	* a: 英文全称
		* American Standard Code for Information Interchange，美国标准信息交换代码
	* b: ASCII编码表由来
		* 计算机中，所有的数据在存储和运算时都要使用二进制数表示
		* a、b、c、d这样的52个字母（包括大写）、以及0、1等数字还有一些常用的符号, 在计算机中存储时也要使用二进制数来表示
		* 具体用哪些二进制数字表示哪个符号，当然每个人都可以约定自己的一套（这就叫编码）
		* 大家如果要想互相通信而不造成混乱，那么大家就必须使用相同的编码规则，于是美国有关的标准化组织就出台了ASCII编码，统一规定了上述常用符号用哪些二进制数来表示。
	* c: 中文编码表
		* GB2312
		* UNICODE
	* d: 字符中重要的ASCII码对应关系
		* a : 97
		* A : 65
		* 0 : 48
- - - 				

###	char类型的存储
* A: char类型的存储
	* a: 取值范围
		* short:占两个字节,是有符号数据,取值范围-32768-32767
		* char: 占两个字节,是无符号数据,取值范围0-65536
			
	* b: 类型转换
		* char类型的数据参加运算时要线程程int数据类型
			
	* c: 案例代码
		```java
			/*
				ASCII编码表演示
				字符Java 数据类型,char
				整数Java 数据类型,int
				
				int 类型和 char 数据类型转换
				char  两个字节, int 四个字节
				
				char转成int类型的时候,类型自动提示,char数据类型,会查询编码表,得到整数
				int转成char类型的时候,强制转换,会查询编码表
				
				char存储汉字,查询Unicode编码表
				
				char可以和int计算,提示为int类型, 内存中两个字节
				char取值范围是0-65535, 无符号的数据类型
			*/
			public class ASCIIDemo{
				public static void main(String[] args){
					char c = 'a';
					int i = c + 1;
					System.out.println(i);
					
					int j = 90;
					char h = (char)j;
					System.out.println(h);
					
					System.out.println( (char)6 );
					
					char k = '你';
					System.out.println(k);
					
					
					char m = -1;
				}
			}	
		```
- - - 

###	输出所有英文字母
* A: 输出所有英文字母
	* a: 题目分析
		* 一共26个大小写字母，那么，可以考虑循环26次。在每次循环中，完成指定字母的大小写打印
		* 找出ABCDEFG…XYZ这些字母之间的变化规律
			通过ASCII表发现，后面的字母比它前面的字母，ASCII值大1
			下一个字母 = 上一个字母 + 1
			如： A	B	C	D
				65	66	67	68
		* 在每次循环中打印上一个字母大小写，并指定下一个字母

	* b: 解题步骤
		* 定义初始化大写变量，值为’A’； 初始化小写变量，值为’a’
		* 使用for循环，进行26次循环
		* 在每次循环中，打印大写字母、小写字母。
		    每次打印完成后，更新大写字母值、小写字母值

	* c: 案例代码
		```java
			public class Test04 {
				public static void main(String[] args) {
					char da = 'A';
					char xiao = 'a';
					for (int i = 0; i < 26; i++) {
						System.out.println("大写字母 "+da+" ,小写字母 "+xiao);
						da++; //更新大写字母值
						xiao++; //更新小写字母值
					}
				}
			}
		```
- - - 
		
###	99乘法表的分析
* A: 99乘法表的分析
	```
	* a: 打印格式
		1*1=1
		1*2=2  2*2=4
		1*3=3  2*3=6  3*3=9
	* b: 题目分析
		通过观察发现，如果把1*1=1这样的内容 看做一颗*的话，那么打印结果就成了如下效果：
		*
		**
		***
		****
		…
		这样，就是打印9行星，每行打印星的个数与当前行数相等。
		再观察“1*3=3 2*3=6 3*3=9”得出它们如下的变化规律：
				每行第n次 +"*"+ 行号 +"="+ 每行第n次 * 行号
			如:	1	+"*"+  2    +"="+   1*2; // 相当于1*2=2
				2	+"*"+  2    +"="+   2*2; // 相当于2*2=4	

	* c: 解题步骤
		* 定义一个外层for循环，初始值从1开始，循环9次。用来控制打印的行数
		* 在外层for循环内部，定义一个for循环，初始值从1开始，循环次数与当前行数相等。用来完成每行打印指定次数的乘法公式 如1*1=1
		* 在内层for循环中，完成每行指定次数的乘法公式打印 如1*1=1
			System.out.print(k +"*"+ j +"="+ j*k +"\t");
			// 变量k代表：每行中的第n次
			// 变量j代表：行号
		* 在外循环中，当每行指定次数的乘法公式打印完毕后，通过System.out.println()切换到下一行。
			这样，再次打印乘法公式时，就在下一行输出打印了
- - - 

###	99乘法表的功能实现
* A: 99乘法表的功能实现
	* a: 案例代码
		```java
			/*
				利用嵌套for循环,实现99乘法表示
				实现步骤:
				  1. 定义外循环控制行数
				  2. 内循环控制个数,个数,每次都在递增
				  3. 循环中输出,乘法表的格式   1*3=3
			*/
			
			public class Test05 {
				public static void main(String[] args) {
					for (int j = 1; j < 10; j++) {
						for (int k = 1; k <= j; k++) {
							System.out.print(k +"*"+ j +"="+ j*k +"\t");
						}
						System.out.println();
					}
				}
			}
		```
- - - 

##	数组方法练习

###	实现数组的遍历
* A: 实现数组的遍历
	* a: 题目分析
		* 通过循环，我们可以完成数组中元素的获取，数组名[索引]
		* 观察发现，每个数组元素之间加入了一个逗号”,”进行分隔；并且，整个数组的前后有一对中括号”[]”包裹数组所有元素。
			
	* b: 解题步骤
		* 使用输出语句完成打印 左边的中括号”[”
		* 使用循环，输出数组元素值。输出元素值分为两种情况，如下：
			* 最后一个数组元素，加上一个右边的中括号”]”
			* 非最后一个数组元素，加上一个逗号”,”
				
	* c: 案例代码
		```java
			/*
				定义方法,实现数组的遍历
				遍历中,输出结果  [11,33,565,66,78,89]
				int[] arr = {3,4,45,7};
				结果包含字符串, [  ]  ,
				实现步骤:
				  1. 定义方法实现数组的遍历
				  2. 先打印[ 中括号
				  3. 遍历数组
					输出数组的元素和逗号
					判断是否遍历到了数组的最后一个元素,如果是最后一个元素,输出]中括号
			*/
			public class ArrayMethodTest{
				public static void main(String[] args){
					int[] arr = {11,44,55,33,66};
					printArray(arr);
					
					int[] arr2 = {22,88,99,33,66};
					printArray(arr2);
					
				}
				/*
				   定义方法,实现功能
				   返回值: void
				   方法参数: 数组
				*/
				public static void printArray(int[] arr){
					//输出一半中括号,不要换行打印
					System.out.print("[");
					//数组进行遍历
					for(int i = 0 ; i < arr.length ; i++){
						//判断遍历到的元素,是不是数组的最后一个元素
						//如何判断 循环变量 到达 length-1
						if( i == arr.length-1 ){
							//输出数组的元素和]
							System.out.print(arr[i]+"]");
						}else{
						//不是数组的最后一个元素,输出数组元素和逗号
							System.out.print(arr[i]+",");
						}
					}
					System.out.println();
				}
			}
		```	
- - - 

###	数组逆序原理
* A: 数组逆序原理
	* a: 题目分析(图解见day07_source/数组的逆序原理.JPG)
		* 通过观察发现，本题目要实现原数组元素倒序存放操作。即原数组存储元素为{11,22,33,44}，
			逆序后为原数组存储元素变为{44,33,22,11}。
		* 通过图解发现，想完成数组元素逆序，其实就是把数组中索引为start与end的元素进行互换。
		* 每次互换后，start索引位置后移，end索引位置前移，再进行互换
		* 直到start位置超越了end位置，互换结束，此时，数组元素逆序完成。
			
	* b: 解题步骤
		* 定义两个索引变量start值为0，变量end值为数组长度减去1（即数组最后一个元素索引）
		* 使用循环，完成数组索引start位置元素与end位置元素值互换。
		* 在循环换过程中，每次互换结束后，start位置后移1，end位置前移1
		* 在循环换过程中，最先判断start位置是否超越了end位置，若已超越，则跳出循环
- - - 			
		
###	数组逆序功能实现			
* A：案例代码
	```java
		/*
		   数组的逆序:
			 数组中的元素,进行位置上的交换
			 逆序 不等于 反向遍历
			 就是数组中最远的两个索引,进行位置交换,实现数组的逆序
			 使用的是数组的指针思想,就是变量,思想,可以随时变换索引
			 反转 reverse
			 实现步骤:
			   1. 定义方法,实现数组的逆序
			   2. 遍历数组
				 实现数组的最远索引换位置
				 使用临时的第三方变量
		*/
		public class ArrayMethodTest_1{
			public static void main(String[] args){
				int[] arr = {3,5,7,1,0,9,-2};
				//调用数组的逆序方法
				reverse(arr);
				//看到数组的元素,遍历
				printArray(arr);
			}
			
			/*
			   定义方法,实现数组的逆序
			   返回值: 没有返回值
			   参数:   数组就是参数
			*/
			public static void reverse(int[] arr){
				//利用循环,实现数组遍历,遍历过程中,最远端换位
				//for的第一项,定义2个变量, 最后,两个变量++ --
				for( int min = 0 , max = arr.length-1 ; min < max  ; min++,max--){
					//对数组中的元素,进行位置交换
					//min索引和max索引的元素交换
					//定义变量,保存min索引
					int temp = arr[min];
					//max索引上的元素,赋值给min索引
					arr[min] =  arr[max];
					//临时变量,保存的数据,赋值到max索引上
					arr[max] = temp;
				}
			}
		}
	```
- - - 

###	选择排序原理
* A: 选择排序原理
	* a: 题目分析(图解见day07_source/选择排序原理.JPG)
		* 通过观察发现，本题目要实现把数组元素{13,46,22,65,3}进行排序
		* 提到数组排序，就要进行元素值大小的比较，通过上图发现，我们想完成排序要经过若干次的比较才能够完成。
		* 上图中用每圈要比较的第一个元素与该元素后面的数组元素依次比较到数组的最后一个元素，把小的值放在第一个数组元素中，数组循环一圈后，则把最小元素值互换到了第一个元素中。
		* 数组再循环一圈后，把第二小的元素值互换到了第二个元素中。按照这种方式，数组循环多圈以后，就完成了数组元素的排序。这种排序方式我们称为选择排序。

			
	* b: 解题步骤
		* 使用for循环（外层循环），指定数组要循环的圈数（通过图解可知，数组循环的圈数为数组长度 - 1）
		* 在每一圈中，通过for循环（内层循环）完成数组要比较的第一个元素与该元素后面的数组元素依次比较到数组的最后一个元素，把小的值放在第一个数组元素中
		* 在每一圈中，要参与比较的第一个元素由第几圈循环来决定。如上图所示
			* 进行第一圈元素比较时，要比较的第一个元素为数组第一个元素，即索引为0的元素
			* 进行第二圈元素比较时，要比较的第一个元素为数组第二个元素，即索引为1的元素
			* 依次类推，得出结论：进行第n圈元素比较时，要比较的第一个元素为数组第n个元素，即数组索引为n-1的元素
- - - 

###	选择排序功能实现
* A: 案例代码
	```java
		/*
		  数组的排序: 一般都是升序排列,元素,小到大的排列
		  
		  两种排序的方式
			 选择排序: 数组的每个元素都进行比较
			 冒泡排序: 数组中相邻元素进行比较
			 规则: 比较大小,位置交换
		*/
		public class ArrayMethodTest_2{
			public static void main(String[] args){
				int[] arr  = {3,1,4,2,56,7,0};
				//调用选择排序方法
				//selectSort(arr);
				printArray(arr);
			}
			/*
				定义方法,实现数组的选择排序
				返回值: 没有
				参数:  数组
				实现步骤:
				  1.嵌套循环实现排序
					外循环,控制的是一共比较了多少次
					内循环,控制的是每次比较了多少个元素
				  2. 判断元素的大小值
					小值,存储到小的索引
			*/
			public static void selectSort(int[] arr){
				for(int i = 0 ; i < arr.length - 1; i++){
					//内循环,是每次都在减少,修改变量的定义
					for(int j = i+1 ; j < arr.length ; j++){
						//数组的元素进行判断
						if(arr[i] > arr[j]){
							//数组的换位
							int temp = arr[i];
							arr[i] = arr[j];
							arr[j] = temp; 
						}
					}
				}
			}
			
			/*
			   定义方法,实现功能
			   返回值: void
			   方法参数: 数组
			*/
			public static void printArray(int[] arr){
				//输出一半中括号,不要换行打印
				System.out.print("[");
				//数组进行遍历
				for(int i = 0 ; i < arr.length ; i++){
					//判断遍历到的元素,是不是数组的最后一个元素
					//如何判断 循环变量 到达 length-1
					if( i == arr.length-1 ){
						//输出数组的元素和]
						System.out.print(arr[i]+"]");
					}else{
					//不是数组的最后一个元素,输出数组元素和逗号
						System.out.print(arr[i]+",");
					}
				}
				System.out.println();
			}
		}
	```
- - - 

###	冒泡排序功能实现
* A: 冒泡排序功能实现
	* a: 题目分析
		* 通过观察发现，本题目要实现把数组元素{13,46,22,65,3}进行排序
		* 提到数组排序，就要进行元素值大小的比较，通过上图发现，我们想完成排序要经过若干次的比较才能够完成。
		* 上图中相邻的元素值依次比较，把大的值放后面的元素中，数组循环一圈后，则把最大元素值互换到了最后一个元素中。	数组再循环一圈后，把第二大的元素值互换到了倒数第二个元素中。按照这种方式，数组循环多圈以后，就完成了数组元素的排序。这种排序方式我们称为冒泡排序。
					
	* b: 解题步骤
		* 使用for循环（外层循环），指定数组要循环的圈数（通过图解可知，数组循环的圈数为数组长度 - 1）			
		* 在每一圈中，通过for循环（内层循环）完成相邻的元素值依次比较，把大的值放后面的元素中
		* 每圈内层循环的次数，由第几圈循环来决定。如上图所示
			* 进行第一圈元素比较时，内层循环次数为数组长度 - 1
			* 进行第二圈元素比较时，内层循环次数为数组长度 - 2	
			* 依次类推，得出结论：进行第n圈元素比较时，内层循环次数为数组长度 - n
					
	* c: 案例代码	
		```java
				/*
				  数组的排序: 一般都是升序排列,元素,小到大的排列
				  
				  两种排序的方式
					 选择排序: 数组的每个元素都进行比较
					 冒泡排序: 数组中相邻元素进行比较
					 规则: 比较大小,位置交换
				*/
				public class ArrayMethodTest_2{
					public static void main(String[] args){
						int[] arr  = {3,1,4,2,56,7,0};
						//调用选择排序方法
						//selectSort(arr);
						
						//调用冒泡排序方法
						bubbleSort(arr);
						printArray(arr);
					}
					/*
					   定义方法,实现数组的冒泡排序
					   返回值: 没有
						参数:  数组
					*/
					public static void bubbleSort(int[] arr){
						for(int i = 0 ; i < arr.length - 1; i++){
							//每次内循环的比较,从0索引开始, 每次都在递减
							for(int j = 0 ; j < arr.length-i-1; j++){
								//比较的索引,是j和j+1
								if(arr[j] > arr[j+1]){
									int temp = arr[j];
									arr[j] = arr[j+1];
									arr[j+1] = temp;
								}
							}
						}
					}
					
					/*
					   定义方法,实现功能
					   返回值: void
					   方法参数: 数组
					*/
					public static void printArray(int[] arr){
						//输出一半中括号,不要换行打印
						System.out.print("[");
						//数组进行遍历
						for(int i = 0 ; i < arr.length ; i++){
							//判断遍历到的元素,是不是数组的最后一个元素
							//如何判断 循环变量 到达 length-1
							if( i == arr.length-1 ){
								//输出数组的元素和]
								System.out.print(arr[i]+"]");
							}else{
							//不是数组的最后一个元素,输出数组元素和逗号
								System.out.print(arr[i]+",");
							}
						}
						System.out.println();
					}
				}
		```
- - - 

###	数组的折半查找原理
* A: 数组的折半查找原理(图解见day07_source/折半查找原理.JPG)
	* a: 题目分析
		* 通过观察发现，本题目要实现查找指定数值在元素有序的数组中存储的位置（索引），返回该位置（索引）。
		* 我们使用数组最中间位置的元素值与要查找的指定数值进行比较，若相等，返回中间元素值的索引
		* 最中间位置的元素值与要查找的指定数值进行比较，若不相等，则根据比较的结果，缩小查询范围为上次数组查询范围的一半；
			再根据新的查询范围，更新最中间元素位置，然后使用中间元素值与要查找的指定数值进行比较
			*	比较结果相等，返回中间元素值的索引
			*	比较结果不相等，继续缩小查询范围为上次数组查询范围的一半，更新最中间元素位置，继续比较，依次类推。
			*   当查询范围缩小到小于0个元素时，则指定数值没有查询到，返回索引值-1。
				
	* b: 解题步骤
		* 定义3个用来记录索引值的变量，变量min记录当前范围最小索引值，初始值为0；变量max记录当前范围最大索引值，初始值为数组长度-1；变量mid记录当前当前范围最中间元素的索引值，初始值为(min+max) / 2
		* 使用循环，判断当前范围下，最中间元素值与指定查找的数值是否相等
		*	若相等，结束循环，返回当前范围最中间元素的索引值mid
		*	若不相等，根据比较结果，缩小查询范围为上一次查询范围的一般
		*	中间元素值 比 要查询的数值大，说明要查询的数值在当前范围的最小索引位置与中间索引位置之间，此时，更新查询范围为:
			*	范围最大索引值 = 上一次中间索引位置 -1；
		*	中间元素值 比 要查询的数值小，说明要查询的数值在当前范围的最大索引位置与中间索引位置之间，此时，更新查询范围为:
			*	范围最小索引值 = 上一次中间索引位置 +1；
		*	在新的查询范围中，更新中间元素值的位置，再次使用最中间元素值与指定查找的数值是否相等。
			*	中间索引值 = (范围最小索引值 +范围最大索引值) / 2;
		* 每次查询范围缩小一半后，使用if语句判断，查询范围是否小于0个元素，若小于0个元素，则说明指定数值没有查询到，返回索引值-1。
- - - 
				
###	数组的折半查找代码实现
* A: 案例代码
	```java
		/*
		   数组的查找功能
			 在一个数组中,找一个元素,是否存在于数组中,如果存在,就返回索引
			 
			 普通查询:
			   找到元素在数组中出现的索引,如果没有这个 元素,结果就是负数
				
		*/
		public class ArrayMethodTest_3{
			 public static void main(String[] args){
				 int[] arr = {1,3,5,7,9,11,15};
				 int index = binarySearch(arr,10);
				 System.out.println(index);
				 
			 }
			 
			 /*
				 定义方法,实现,折半查找
				 返回值: 索引
				 参数: 数组,被找的元素 
				 实现步骤:
				   1. 需要的变量定义
					  三个,三个指针
					  
				   2. 进行循环折半
					  可以折半的条件  min <= max
				   
				   3. 让被找元素,和中间索引元素进行比较
					   元素 > 中间索引  小指针= 中间+1
					   元素 < 中间索引  大指针= 中间-1
					   元素 == 中间索引  找到了,结束了,返回中间索引
					   
					4. 循环结束,无法折半
					  元素没有找到 ,返回-1
			 */
			 public static int binarySearch(int[] arr, int key){
				 //定义三个指针变量
				 int min = 0 ;
				 int max = arr.length -1 ;
				 int mid = 0;
				 //循环折半,条件 min<=max
				 while( min <= max){
					 //公式,计算中间索引
					 mid = (min+max)/2;
					 //让被找元素,和中间索引元素进行比较
					 if(key > arr[mid]){
						 min = mid + 1;
					 }else if (key < arr[mid]){
						 max = mid - 1;
					 }else{
						 //找到元素,返回元素索引
						 return mid;
					 }
				 }
				 return -1;
			 }
			 
			/*
			   定义方法,实现数组的普通查询
			   返回值: 索引
			   参数:   数组, 被找的元素
			   
			   实现步骤:
				 1. 遍历数组
				 2. 遍历过程中,使用元素和数组中的元素进行比较
					如果相同,返回元素在数组中的索引
					如果不同,返回负数
			*/
			public static int search(int[] arr, int key){
				//遍历数组
				for(int i = 0 ; i < arr.length ; i++){
					//数组元素,被查找的元素比较
					if(arr[i] == key){
						//返回索引
						return i;
					}
				}
				return -1;
			}
		}
	```		
- - -

##	Eclipse开发工具
- - -

###	Eclipse的下载安装
* A: Eclipse的下载安装		
	* a: 下载
		* http://www.eclipse.org
	* b: 安装
		* 只需要解压后就能使用
	* c: 卸载
		* 只需要将文件夹删除就可以了
	* d: 注意 
		* 开发软件的安装目录中，尽量不要出现空格与中文
* B: Eclipse的特点
	* a: 免费
	* b: 纯Java语言编写
	* c: 免安装
	* d: 扩展性强
- - -

###	Eclipse的工作空间和新建工程
* A: Eclipse的工作空间和新建工程
	* a: 工作空间
		*  其实就是我们写的源代码所在的目录						
	* b: 创建工程(项目)
		* 右键/Package Explore 空白区/new /Java Project/输入项目名称如day08/			
	* c: 创建包(后面讲包的概念)
		*　打开上面建立的day08项目/右键/new/package/在弹出的对话框的name中输入报名如"com.itheima.tests"/finish
	* d: 创建类
		* 创建一个java类:右击包名/new/class/在对话框的name中输入类名/finish
* B: 编译与执行
	* a: 编译
		* 自动编译，当java代码保存的时候，自动 编译class文件
	* b: 运行
		* 方式1：点击菜单工具栏中的 绿色带有三角形的 run按钮 运行
		* 方式2：点击菜单栏中Run， 点击Run 运行  快捷键是 ctrl+F11
		* 方式3：选中要运行的java文件，或者在编写代码的空白区域，右键选择 Run As --> 运行java程序
- - -
			
###	Eclipse的HelloWorld编写
* A:HelloWorld编写
	* a: 编写过程(参照上个知识点)
		* 建立day08项目
		* 建立包结构(包的概念还没有学到,不建立包的话,使用默认包结构default)
		* 创建HelloWorld类(自动生成main方法)
	* b: 案例代码
		```java
			public class HelloWorld {
				public static void main(String[] args) {
					System.out.println("Hello World");
				}
			}
		```		
- - -	

###	Eclipse的字体设置
* A: Eclipse的字体设置
	* a: 修改编译环境和运行环境
		* 编译环境：Window -- Preferences – Java - Compiler
		* 运行环境：Window -- Preferences – Java - Installed JREs
			
	* b: 显示行号与隐藏行号
		* 显示：在代码区域的左边空白区域，右键 -- Show Line Numbers
		* 隐藏：将上面的操作再做一遍
			
	* c: 更改字体大小与颜色
		* Java代码区域的字体大小和颜色：
			* window -- Preferences -- General -- Appearance -- Colors And Fonts --Java修改 -- Java Edit Text Font--edit进行修改
		* 控制台
			* window -- Preferences -- General -- Appearance -- Colors And Fonts -- Debug -- Console font
		* 其他文件
			* window -- Preferences -- General -- Appearance -- Colors And Fonts -- Basic -- Text Font
- - -				

###	Eclipse的窗口设置
* A: 窗口设置
	* a: 显示的窗口乱了，还原默认显示模式
		* Window – Perspective -- Reset Prespective
	* b: 显示控制台
		* Window--Show View—Console		
- - -

###	Eclipse的去掉多余的注释
* A: Eclipse的去掉多余的注释
	* a:如何去掉默认注释
		* Window -- Preferences -- Java -- Code Style -- Code Templates -- Comments – Methods，点击Edit ，将注释部分删除 (不建议删除)
		* Window -- Preferences -- Java -- Code Style -- Code Templates -- Code -- Method body，点击Edit ，将注释部分删除
	* b: 切换工作空间
		* File – Switch Workspace – 指定工作空间 – ok
- - -

###	Eclipse的快捷键
* A: Eclipse的快捷键
	* a: 内容辅助键  Alt+/
		* 自动补齐main方法  main 然后 Alt+/
		* 自动补齐输出语句  syso 然后 Alt+/
	* b: 格式化代码
		* Ctrl+Shift+f
		* 代码区域右键 -- Source – Format
	* c: 自动导包
		* Ctrl+Shift+o
		* 如果当前类在多个包中都存在，这时候，使用Ctrl+shift+o,进行选择一个包导入即可。
	* d: 注释
		* 单行注释
		* 加注释： 先选中需要注释的内容，然后 Ctrl+/
		* 取消注释：先选中需要取消注释的内容， 然后 Ctrl+/
		* 多行注释
		* 加注释： 先选中需要注释的内容，然后 Ctrl+Shift+/
		* 取消注释：先选中需要取消注释的内容， 然后 Ctrl+Shift+\
	* e: 补充
		* 代码上下移动
			* 选中代码alt+上/下箭头
		* 查看源码
			* 选中类名(F3或者Ctrl+鼠标点击)
		* 查找具体的类 
			* ctrl + shift + t，输入要查找的类的名称-->确定
		* 查找具体类的具体方法 
			* ctrl + o
		* 给建议 
			* ctrl+1,根据右边生成左边的数据类型,生成方法
		* 删除代码 
			* ctrl + d
		* 抽取方法
			* alt + shift + m 
		* 改名
			* alt + shift + r（类名，方法名，变量名）
- - -

###	Eclipse的断点调试
* A:断点调试(又称为Debug调试)的作用
	* 调试程序
	* 查看程序执行流程
* B:如何查看程序执行流程		
	* 什么是断点：
		* 就是一个标记，从哪里开始。
			
	* 如何设置断点：
		* 你想看哪里的程序，你就在那个有效程序的左边双击即可。
			
	* 在哪里设置断点：
		* 哪里不会点哪里。
		* 目前：我们就在每个方法的第一条有效语句上都加。
			
	* 如何运行设置断点后的程序：
		* 右键 -- Debug as -- Java Application
			
	* 看哪些地方：
		* Debug：断点测试的地方
			* 在这个地方，记住F6，或者点击也可以。一次看一行的执行过程。
		* Variables：查看程序的变量变化
		* ForDemo：被查看的源文件
		* Console：控制台
			
	* 如何去断点：
		* a:再次双击即可
		* b:找到Debug视图，Variables界面，找到Breakpoints，并点击，然后看到所有的断点，最后点击那个双叉		
- - -

###	Eclipse的工程删除和导入
* A:删除项目
	* 选中项目 – 右键 – 删除
		* 从项目区域中删除
		* 从硬盘上删除
* B:导入项目
	* 在项目区域右键找到import
	* 找到General，展开，并找到
	* Existing Projects into Workspace
	* 点击next,然后选择你要导入的项目
	* 注意：这里选择的是项目名称
- - -

##	超市库存管理系统
- - -
		
###	超市管理系统功能介绍			
* A：超市管理系统功能介绍
	* a: 显示主菜单
	```
	
		============欢迎光临ItCast超市============
		1: 货物 清单   2: 添加货物   3: 删除货物   4: 修改货物  5: 退出
		请您输入要操作的功能序号
	```

	* b: 货物清单
	```
		输入1:货物清单
		================商品库存清单================
		商品编号         商品名称                商品单价
		9527   			少林寺酥饼核桃        	   12.7
		9008   			尚康杂粮牡丹饼       	   5.6
		9879   			新疆原产哈密瓜             599.6
	```

	* c: 添加新货物
	```
		输入2:添加新货物	
		
		请输入新商品的编号:9523
		请输入新商品的名字:斯柯达苹果醋
		请输入新商品的单价:19.9
		商品添加成功
	```

	* d: 删除货物
	```
		输入3:删除货物
		
		选择的是删除功能
		请输入商品的编号:9523
		货物信息删除完毕
	```

	* e: 修改货物
	```
		输入4:修改货物
		
		选择的是修改功能
		请输入您要修改的商品的编号:9527
		输入新的商品编号:100
		输入新的商品名字:味道好凤梨干
		输入新的商品价格:6.5
		商品修改成功
	```	
	* f: 输入5:退出系统
- - -

###	超市管理系统案例分析
* A: 超市管理系统案例分析
	* 完成超市商品初始化。创建商品，将商品添加到集合
	* 显示来到超市能做的操作，也就是显示主菜单
	* 根据接收到的功能选项，执行对应的功能
	* 库存货物查询
	* 添加新货物	
	* 删除货物
	* 修改货物
	* 退出系统,结束main方法的运行
	* 循环，回到 2.显示主菜单
- - -
				
###	自定义商品类
* A: 自定义商品类
	* a: 目的
		* 每种库存商品都拥有多项商品信息，为了方便管理每种商品的信息，我们对商品信息进行封装，编写FruitItem.java文件
	* b：案例代码
		```java
			public class FruitItem {
				int  ID;			//商品编号
				String  name;		//商品名称
				double  price;		//商品单价
				double  number;		//商品数量
				double  money;		//商品金额
			}
		```

	* 补充
		* 上述代码中，对商品信息（编号、名称、单价、数量、金额）进行了封装。这样做的好处在于以后只要找到这个商品，就能够知道该商品的每项信息了。
- - -

###	初始化商品属性
* A: 初始化商品属性
	* a: 案例代码
		```java
			import java.util.ArrayList;
			import java.util.Scanner;

			/*
			 *   超市管理系统主
			 *   实现:
			 *     1. 商品数据的初始化
			 *     2. 用户的菜单选择
			 *     3. 根据选择执行不同的功能
			 *       3.1 Read    查看商品
			 *       3.2 Create  添加商品
			 *       3.3 Delete  删除商品
			 *       3.4 Update  修改商品
			 *       
			 *       
			 *   所有功能 ,必须定义方法实现
			 *   主方法main  调用作用
			 */
			public class Shopp {

				public static void main(String[] args) {
					//创建ArrayList集合,存储商品类型,存储数据类型FruitItem类型
					ArrayList<FruitItem> array = new ArrayList<FruitItem>();
					//调用商品初始化方法,传递集合
					init(array);
					
					}
				}	
				/*
				 * 定义方法,实现商品数据的初始化
				 * 先将一部分数据,存储集合中
				 * 返回值: 无
				 * 参数 : 集合
				 * 方法名: init
				 */
				public static void init(ArrayList<FruitItem> array){
					//创建出多个FruitItem类型,并且属性赋值
					FruitItem f1 = new FruitItem();
					f1.ID = 9527;
					f1.name = "少林寺酥饼核桃";
					f1.price = 12.7;
					
					FruitItem f2 = new FruitItem();
					f2.ID = 9008;
					f2.name = "尚康杂粮牡丹饼";
					f2.price = 5.6;
					
					FruitItem f3 = new FruitItem();
					f3.ID = 9879;
					f3.name = "新疆原产哈密瓜";
					f3.price = 599.6;
					
					//创建的3个FruitItem类型变量,存储到集合中
					array.add(f1);
					array.add(f2);
					array.add(f3);
				}
		```
- - -

###	主菜单功能
* A: 主菜单功能
	* a: 案例代码
		```java
			import java.util.ArrayList;
			import java.util.Scanner;
			/*
			 *   超市管理系统主
			 *   实现:
			 *     1. 商品数据的初始化
			 *     2. 用户的菜单选择
			 *     3. 根据选择执行不同的功能
			 *       3.1 Read    查看商品
			 *       3.2 Create  添加商品
			 *       3.3 Delete  删除商品
			 *       3.4 Update  修改商品
			 *       
			 *       
			 *   所有功能 ,必须定义方法实现
			 *   主方法main  调用作用
			 */
			public class Shopp {

				public static void main(String[] args) {
					//创建ArrayList集合,存储商品类型,存储数据类型FruitItem类型
					ArrayList<FruitItem> array = new ArrayList<FruitItem>();
					//调用商品初始化方法,传递集合
					init(array);
					while(true){
						//调用菜单方法
						mainMenu();			
					}
				}	
				/*
				 * 定义方法,实现主菜单
				 * 提示用户哪些选择 让选择序号
				 * 返回值: 无
				 * 参数: 无
				 */
				public static void mainMenu(){
					System.out.println();
					System.out.println("============欢迎光临ItCast超市============");
					System.out.println("1: 货物 清单   2: 添加货物   3: 删除货物   4: 修改货物  5: 退出");
					System.out.println("请您输入要操作的功能序号");
				}
				
				/*
				 * 定义方法,实现商品数据的初始化
				 * 先将一部分数据,存储集合中
				 * 返回值: 无
				 * 参数 : 集合
				 * 方法名: init
				 */
				public static void init(ArrayList<FruitItem> array){
					//创建出多个FruitItem类型,并且属性赋值
					FruitItem f1 = new FruitItem();
					f1.ID = 9527;
					f1.name = "少林寺酥饼核桃";
					f1.price = 12.7;
					
					FruitItem f2 = new FruitItem();
					f2.ID = 9008;
					f2.name = "尚康杂粮牡丹饼";
					f2.price = 5.6;
					
					FruitItem f3 = new FruitItem();
					f3.ID = 9879;
					f3.name = "新疆原产哈密瓜";
					f3.price = 599.6;
					
					//创建的3个FruitItem类型变量,存储到集合中
					array.add(f1);
					array.add(f2);
					array.add(f3);
				}
				
			}				
		```
- - -
		
###	用户选择功能
* A: 用户选择功能
	* a: 案例代码
		```java
			import java.util.ArrayList;
			import java.util.Scanner;

			/*
			 *   超市管理系统主
			 *   实现:
			 *     1. 商品数据的初始化
			 *     2. 用户的菜单选择
			 *     3. 根据选择执行不同的功能
			 *       3.1 Read    查看商品
			 *       3.2 Create  添加商品
			 *       3.3 Delete  删除商品
			 *       3.4 Update  修改商品
			 *       
			 *       
			 *   所有功能 ,必须定义方法实现
			 *   主方法main  调用作用
			 */
			public class Shopp {

				public static void main(String[] args) {
					//创建ArrayList集合,存储商品类型,存储数据类型FruitItem类型
					ArrayList<FruitItem> array = new ArrayList<FruitItem>();
					//调用商品初始化方法,传递集合
					init(array);
					while(true){
						//调用菜单方法
						mainMenu();
						//调用用户选择序号方法
						int choose = chooseFunction();
						switch (choose) {
						case 1:
							//调用1: 货物 清单
							showFruitList(array);
						break;
						
						case 2:
							//2: 添加货物
							addFruit(array);
						break;
						
						case 3:
							//3: 删除货物
							deleteFruit(array);
						break;
						
						case 4:
							//4: 修改货物
							updateFruit(array);
						break;
						
						case 5:
							return ;

						default:
							System.out.println("输入的序号没有");
							break;
						}
					}
				}	
				/*
				 *  定义方法,实现接受用户的键盘输入
				 *  返回编号
				 */
				public static int chooseFunction(){
					Scanner sc = new Scanner(System.in);
					return sc.nextInt();
				}
				
				/*
				 * 定义方法,实现主菜单
				 * 提示用户哪些选择 让选择序号
				 * 返回值: 无
				 * 参数: 无
				 */
				public static void mainMenu(){
					System.out.println();
					System.out.println("============欢迎光临ItCast超市============");
					System.out.println("1: 货物 清单   2: 添加货物   3: 删除货物   4: 修改货物  5: 退出");
					System.out.println("请您输入要操作的功能序号");
				}
				
				/*
				 * 定义方法,实现商品数据的初始化
				 * 先将一部分数据,存储集合中
				 * 返回值: 无
				 * 参数 : 集合
				 * 方法名: init
				 */
				public static void init(ArrayList<FruitItem> array){
					//创建出多个FruitItem类型,并且属性赋值
					FruitItem f1 = new FruitItem();
					f1.ID = 9527;
					f1.name = "少林寺酥饼核桃";
					f1.price = 12.7;
					
					FruitItem f2 = new FruitItem();
					f2.ID = 9008;
					f2.name = "尚康杂粮牡丹饼";
					f2.price = 5.6;
					
					FruitItem f3 = new FruitItem();
					f3.ID = 9879;
					f3.name = "新疆原产哈密瓜";
					f3.price = 599.6;
					
					//创建的3个FruitItem类型变量,存储到集合中
					array.add(f1);
					array.add(f2);
					array.add(f3);
				}
				
			}
		```
- - -

###	商品的清单功能
* A: 商品的清单功能
	* a: 案例代码
		```java
        显示商品清单的showFruitList(ArrayList<FruitItem>)方法的代码如下:
			/*
			 *  定义方法,实现显示货物清单功能
			 *  返回值: 无
			 *  参数: 集合
			 *  遍历集合,获取集合中的每个FruitItem变量,变量,调用属性
			 */
			public static void showFruitList(ArrayList<FruitItem> array){
				System.out.println();
				System.out.println("================商品库存清单================");
				System.out.println("商品编号         商品名称                商品单价");
				//遍历集合
				for(int i = 0 ; i < array.size(); i++){
					//集合get方法,获取出每个FruitItem变量,可以使用FruitItem接受get结果
					FruitItem item = array.get(i);
					//变量item调用类中属性
					System.out.println(item.ID+"   "+item.name+"        "+item.price);
				}
			}
		```	
- - -

###	商品的添加功能
* A: 商品的添加功能
	* a: 案例代码
		```java
        商品添加功能的addFruit(ArrayList<FruitItem>)方法的代码如下:
			/*
			 * 定义方法,实现商品的添加功能
			 * 返回值:无
			 * 参数: 集合
			 * 提示用户选择的是添加商品的功能
			 * 
			 * 提示用户输入的是什么
			 * 
			 * 创建FruitItem变量,变量调用的属性
			 * 将输入的每个商品属性进行赋值
			 */
			public static void addFruit(ArrayList<FruitItem> array){
				System.out.println("选择的是添加商品功能");
				//创建Scanner变量
				Scanner sc = new Scanner(System.in);
				System.out.print("请输入新商品的编号:");
				//输入商品的编号
				int ID = sc.nextInt();
				//输入商品的名字
				System.out.print("请输入新商品的名字:");
				String name = sc.next();
				//输入商品的单价
				System.out.print("请输入新商品的单价:");
				double price = sc.nextDouble();
				//创建FruitItem变量
				FruitItem item = new FruitItem();
				//item.属性赋值
				item.ID = ID;
				item.name = name;
				item.price = price;
				array.add(item);
				System.out.println("商品添加成功");
			}
		```
- - -

###	商品的删除功能
* A: 商品的删除功能
	* a: 案例代码
		```java
        删除商品deleteFruit(ArrayList<FruitItem>)方法的代码如下:
			/*
			 *  定义方法,实现商品的删除功能
			 *  返回值:　无
			 *  参数：　集合
			 *  
			 *  删除依靠的是商品的编号
			 *  提示用户选择的是删除功能
			 *  键盘输入商品的编号
			 *  遍历集合，获取集合中的每个FruitItem变量
			 *  变量调用属性　ID， 和用户的输入的编号,对比,相同就删除
			 */
			public static void deleteFruit(ArrayList<FruitItem> array){
				System.out.println("选择的是删除功能");
				System.out.print("请输入商品的编号:");
				Scanner sc = new Scanner(System.in);
				
				int ID = sc.nextInt();
				//遍历集合
				for(int i = 0 ; i < array.size(); i++){
					//获取到每个FruitItem变量
					FruitItem item = array.get(i);
					//变量,调用属性ID,和用户输入的编号比较
					if( item.ID == ID){
						//移除集合中的元素
						//集合的方法remove实现
						array.remove(i);
						System.out.println("删除成功");
						return;
					}
				}
				System.out.println("你输入的编号不存在");
			}
		```
- - -
			
###	商品的修改功能
* A: 商品的修改功能
	* a: 案例代码
		```java
        修改商品updateFruit(ArrayList<FruitItem>)方法的代码如下:
			/*
			 *  定义方法,实现商品的修改功能
			 *  返回值:　无
			 *  参数：　集合
			 *  
			 *  提示用户选择的是修改功能
			 *  提示用户输入需要修改的商品编号
			 *  遍历集合,获取每个FruitItem变量
			 *  变量调用ID属性,属性和用户输入的编号比较
			 *  如果相同:
			 *    修改调FruitItem中的属性值
			 *    键盘输入
			 */
			public static void updateFruit(ArrayList<FruitItem> array){
				System.out.println("选择的是修改功能");
				System.out.print("请输入您要修改的商品的编号:");
				
				Scanner sc = new Scanner(System.in);
				int ID = sc.nextInt();
				//遍历集合,获取每个FruitItem变量
				for(int i = 0 ; i < array.size(); i++){
					FruitItem item = array.get(i);
					//获取FruitItem的属性ID,和用户输入的ID比较
					if(item.ID == ID){
						System.out.print("输入新的商品编号:");
						item.ID = sc.nextInt();
						
						System.out.print("输入新的商品名字:");
						item.name = sc.next();
						
						System.out.print("输入新的商品价格:");
						item.price = sc.nextDouble();
						System.out.println("商品修改成功");
						return ;
					}
				}
				System.out.println("输入的编号不存在");
			}
		```

