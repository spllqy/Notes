#	常用API

##	Object
- - - 

###	API概念
* A:API(Application Programming Interface) 
	* 应用程序编程接口
* B:Java API
	* 就是Java提供给我们使用的类，这些类将底层的实现封装了起来，
	* 我们不需要关心这些类是如何实现的，只需要学习这些类如何使用。
* C: 演示查看Object类中的相关方法
- - - 

###	Object类概述
* A:Object类概述
	* 类层次结构的根类
	* 所有类都直接或者间接的继承自该类
	* Object中描述的所有方法子类都可以使用
	* 所有类在创建对象的时候，最终找的父类就是Object。
* B:构造方法
	* public Object()
	* 回想面向对象中为什么说：
		* 子类的构造方法默认访问的是父类的无参构造方法
- - - 
			
###	equals方法比较内存地址
* A:equals方法比较内存地址
	* a: Object类中的equals方法
		* 用于比较两个对象是否相同，Object类中就是使用两个对象的内存地址在比较。
		* Object类中的equals方法内部使用的就是==比较运算符。
			
	* b: 案例代码
		```java
			public class Person extends Object{
				private String name;
				private int age;
				
				public Person(){}
				
				public Person(String name, int age) {
					this.name = name;
					this.age = age;
				}
				/*
				 * 将父类的equals方法写过来,重写父类的方法
				 * 但是,不改变父类方法的源代码, 方法equals 比较两个对象的内存地址
				 * 				
				 */
				public boolean equals(Object obj){					
					return this == obj;
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
			//测试代码
			public class TestEquals {
				public static void main(String[] args) {
					//Person类继承Object类,继承下来了父类的方法equals
					Person p1 = new Person("李四",20);
					Person p2 = new Person("张三",20);
					
				  
					//Person对象p1,调用父类的方法equals,进行对象的比较
					boolean b = p1.equals(p1);
					System.out.println(b);
					
				}
			}
		```
- - - 

###	重写equals方法
* A: 重写equals方法
	* a: 开发中要比较两个对象是否相同，经常会根据对象中的属性值进行比较			
	* b: 在开发经常需要子类重写equals方法根据对象的属性值进行比较。	
	* c: ==号和equals方法的区别
		* ==是一个比较运算符号,既可以比较基本数据类型,也可以比较引用数据类型,基本数据类型比较的是值,引用数据类型比较的是地址值
		* equals方法是一个方法,只能比较引用数据类型,所有的对象都会继承Object类中的方法,如果没有重写Object类中的equals方法,
		equals方法和==号比较引用数据类型无区别,重写后的equals方法比较的是对象中的属性
	* d: 案例代码
		```java
			public class Person extends Object{
				private String name;
				private int age;
				
				public Person(){}
				
				public Person(String name, int age) {
					this.name = name;
					this.age = age;
				}
				/*
				 * 重写父类的方法toString()
				 * 没有必要让调用者看到内存地址
				 * 要求: 方法中,返回类中所有成员变量的值
				 */
				public String toString(){
					return name + age;
				}
				
				
				/*
				 * 将父类的equals方法写过来,重写父类的方法
				 * 但是,不改变父类方法的源代码, 方法equals 比较两个对象的内存地址
				 * 
				 * 两个对象,比较地址,没有意义
				 * 比较两个对象的成员变量,age
				 * 两个对象变量age相同,返回true,不同返回false
				 * 
				 * 重写父类的equals,自己定义自己对象的比较方式
				 */
				public boolean equals(Object obj){
					if( this == obj){
						return true;
					}
					
					//对参数obj,非null判断
					if( obj == null){
						return false;
					}
					
					if( obj instanceof Person){
						// 参数obj接受到是Person对象,才能转型
						// 对obj参数进行类型的向下转型,obj转成Person类型
						Person p = (Person)obj;
						return this.age ==  p.age;
					}
					return false;
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
			//测试代码
			public class TestEquals {
				public static void main(String[] args) {
					//Person类继承Object类,继承下来了父类的方法equals
					Person p1 = new Person("李四",20);
					Person p2 = new Person("张三",20);
					
				  
					//Person对象p1,调用父类的方法equals,进行对象的比较
					boolean b = p1.equals(p1);
					System.out.println(b);
					
				}
			}			
		```
- - - 

###	重写toString方法
* A: 重写toString方法
	* a: 为什么要重写toString方法
		* toString方法返回该对象的字符串表示，其实该字符串内容就是对象的类型+@+内存地址值。
		* 由于toString方法返回的结果是内存地址，而在开发中，经常需要按照对象的属性得到相应的字符串表现形式，因此也需要重写它。
		* Object类中的toString的核心代码
			getClass().getName() + "@" + Integer.toHexString(hashCode()) 
		* 由于默认情况下的数据对我们来说没有意义，一般建议重写该方法。
	* b: 案例核心代码(重写Person类中的toString方法)
		```java
			/*
			 * 重写父类的方法toString()
			 * 没有必要让调用者看到内存地址
			 * 要求: 方法中,返回类中所有成员变量的值
			 */
			public String toString(){
				return name + age;
			}	
			//Eclipse中自动生成的toString
			@Override
			public String toString() {
				return "Person [name=" + name + ", age=" + age + "]";
			}
			//测试代码
			public class TestToString {
				public static void main(String[] args) {
					//调用Person类的方法toString()
					//输出语句中,写的是一个对象,默认调用对象的toString方法
					Person p = new Person("张三",20);
					String s = p.toString();
					System.out.println(p);
					System.out.println(s);
					/*
					 * System.out.println(p);
					 * System.out.println(p.toString());
					 */
					
					/*Random r = new Random();
					System.out.println(r.toString());
					
					Scanner sc = new Scanner(System.in);
					System.out.println(sc.toString());*/
				}
			}
		```
- - - 

##	String
- - - 

###	String类的概念和不变性
* A: String类的概念和不变性
	* a:String类
		* API中的String类的描述，发现String 类代表字符串
		* Java 程序中的所有字符串字面值（如 "abc" ）都作为此类的实例实现。
		* 字符串是常量,在创建之后不能更改
		* 其实就是说一旦这个字符串确定了，那么就会在内存区域中就生成了这个字符串。字符串本身不能改变，但str变量中记录的地址值是可以改变的。
		* 源码分析,String类底层采用的是字符数组:
		```java
			private final char value[]
			private 修饰说明value只能在String类内部使用,而且又没有提供get方法,所以外部无法获取value数组,就无法改变数组中元素的值
			final修饰说明value是常量,一旦创建,就不能被改变,value一旦被初始化成某个数组,将永远指向这个数组,不可能再指向其它的数组了
		```

	* b: 案例代码
		```java
			/*
			 *   String类特点:
			 *     一切都是对象,字符串事物 "" 也是对象
			 *     类是描述事物,String类,描述字符串对象的类
			 *     所有的 "" 都是String类的对象
			 *     
			 *     字符串是一个常量,一旦创建,不能改变
			 */
			public class StringDemo {
				public static void main(String[] args) {
					//引用变量str执行内存变化
					//定义好的字符串对象,不变
					String str = "itcast";
					System.out.println(str);
					str = "itheima";
					System.out.println(str);
					
					
				}
			}
		```
- - - 

###	String类创建方式和比较
* A: String类创建方式和比较
	* a: 创建对象的数量比较
		* String s3 = "abc";
			* 在内存中只有一个对象。这个对象在字符串常量池中
		* String s4 = new String("abc");
			* 在内存中有两个对象。一个new的对象在堆中，一个字符串本身对象，在字符串常量池中
	* b: 案例代码
		```java
			public class StringDemo2 {
				public static void main(String[] args) {
					//字符串定义方式2个, 直接=  使用String类的构造方法
					String str1 = new String("abc");
					String str2 = "abc";
					System.out.println(str1);
					System.out.println(str2);
					
					System.out.println(str1==str2);//引用数据类型,比较对象的地址 false
					System.out.println(str1.equals(str2));//true
				}
			}
		```
- - - 

###	String类构造方法_1
* A: String类构造方法
	* a: 常见构造方法
		* public String():空构造
		* public String(byte[] bytes):把字节数组转成字符串
		* public String(byte[] bytes,int index,int length):把字节数组的一部分转成字符串			
		* public String(String original):把字符串常量值转成字符串
	* b: 案例代码
		```java
			public class StringDemo3 {
				public static void main(String[] args) {
					function_1();
				}
				/*
				 *  定义方法,String类的构造方法
				 *  String(byte[] bytes)  传递字节数组
				 *  字节数组转成字符串
				 *  通过使用平台的默认字符集解码指定的 byte 数组，构造一个新的 String。
				 *  平台 : 机器操作系统
				 *  默认字符集: 操作系统中的默认编码表, 默认编码表GBK
				 *  将字节数组中的每个字节,查询了编码表,得到的结果
				 *  字节是负数,汉字的字节编码就是负数, 默认编码表 ,一个汉字采用2个字节表示
				 *  
				 *  String(byte[] bytes, int offset, int length) 传递字节数组
				 *  字节数组的一部分转成字符串
				 *  offset 数组的起始的索引
				 *  length 个数,转几个   , 不是结束的索引
				 */
				public static void function(){
					byte[] bytes = {97,98,99,100};
					//调用String类的构造方法,传递字节数组
					String s = new String(bytes);
					System.out.println(s);
					
					byte[] bytes1 ={65,66,67,68,69};
					//调用String构造方法,传递数组,传递2个int值
					String s1 = new String(bytes1,1,3);
					System.out.println(s1);
				}
			}
		```
- - - 

###	String类构造方法_2
* A: String类构造方法
	* a: 常见构造方法
		* public String(char[] value):把字符数组转成字符串
		* public String(char[] value,int index,int count):把字符数组的一部分转成字符串
* B: 案例代码
	```java	
		 /*
		  *  String类构造方法
		  *  String类的构造方法,重载形式
		  * 
		  */
		public class StringDemo3 {
			public static void main(String[] args) {
				function_1();
			}
			/*
			 * String(char[] value) 传递字符数组
			 * 将字符数组,转成字符串, 字符数组的参数,不查询编码表
			 * 
			 * String(char[] value, int offset, int count) 传递字符数组
			 * 将字符数组的一部分转成字符串
			 * offset  数组开始索引
			 * count   个数
			 */
			public static void function_1(){
				char[] ch = {'a','b','c','d','e','f'};
				//调用String构造方法,传递字符数组
				String s = new String(ch);
				System.out.println(s);
				
				String s1 = new String(ch,1,4);
				System.out.println(s1);
			}
		}
	```
- - - 
		
###	String类的其他方法			
* A：String类的其他方法
	* a: 方法介绍
		* int length(): 返回字符串的长度
		* String substring(int beginIndex,int endIndex): 获取字符串的一部分
		* String substring(int beginIndex): 获取字符串的一部分
		* boolean startsWith(String prefix): 判断一个字符串是不是另一个字符串的前缀,开头
		* boolean endsWith(String prefix): 判断一个字符串是不是另一个字符串的后缀,结尾
		* boolean contains (String s): 判断一个字符串中,是否包含另一个字符串
		* int indexOf(char ch):  查找一个字符,在字符串中第一次出现的索引,被查找的字符不存在,返回-1
		* byte[] getBytes(): 将字符串转成字节数组,此功能和String构造方法相反,byte数组相关的功能,查询编码表
		* char[] toCharArray(): 将字符串转成字符数组,功能和构造方法相反
		* boolean equals(Object obj): 方法传递字符串,判断字符串中的字符是否完全相同,如果完全相同返回true
		* boolean equalsIgnoreCase(String s): 传递字符串,判断字符串中的字符是否相同,忽略大小写			
			
	* b: 案例代码
		```java
			public class StringDemo4 {
				public static void main(String[] args) {
					function_9();
				}
				/*
				 *  boolean equals(Object obj)
				 *  方法传递字符串,判断字符串中的字符是否完全相同,如果完全相同返回true
				 *  
				 *  boolean equalsIgnoreCase(String s)
				 *  传递字符串,判断字符串中的字符是否相同,忽略大小写
				 */
				public static void function_9(){
					String str1 = "Abc";
					String str2 = "abc";
					//分别调用equals和equalsIgnoreCase
					boolean b1 = str1.equals(str2);
					boolean b2 = str1.equalsIgnoreCase(str2);
					System.out.println(b1);
					System.out.println(b2);
				}
				
				/*
				 * char[] toCharArray() 将字符串转成字符数组
				 * 功能和构造方法相反
				 */
				public static void function_8(){
					String str = "itcast";
					//调用String类的方法toCharArray()
					char[] ch = str.toCharArray();
					for(int i = 0 ; i < ch.length ; i++){
						System.out.println(ch[i]);
					}
				}
				
				/*
				 *  byte[] getBytes() 将字符串转成字节数组
				 *  此功能和String构造方法相反
				 *  byte数组相关的功能,查询编码表
				 */
				public static void function_7(){
					String str = "abc";
					//调用String类方法getBytes字符串转成字节数组
					byte[] bytes = str.getBytes();
					for(int i = 0 ; i < bytes.length ; i++){
						System.out.println(bytes[i]);
					}
				}
				
				/*
				 *  int indexOf(char ch)
				 *  查找一个字符,在字符串中第一次出现的索引
				 *  被查找的字符不存在,返回-1
				 */
				public static void function_6(){
					String str = "itcast.cn";
					//调用String类的方法indexOf
					int index = str.indexOf('x');
					System.out.println(index);
				}
				
				/*
				 *  boolean contains (String s)
				 *  判断一个字符串中,是否包含另一个字符串
				 */
				public static void function_5(){
					String str = "itcast.cn";
					//调用String类的方法contains
					boolean b =str.contains("ac");
					System.out.println(b);
				}
				
				/*
				 * boolean endsWith(String prefix)
				 * 判断一个字符串是不是另一个字符串的后缀,结尾
				 * Demo.java
				 *     .java
				 */
				public static void function_4(){
					String str = "Demo.java";
					//调用String类方法endsWith
					boolean b = str.endsWith(".java");
					System.out.println(b);
				}
				
				/*
				 * boolean startsWith(String prefix)  
				 * 判断一个字符串是不是另一个字符串的前缀,开头
				 * howareyou
				 * hOw
				 */
				  public static void function_3(){
					  String str = "howareyou";
					  //调用String类的方法startsWith
					  boolean b = str.startsWith("hOw");
					  System.out.println(b);
				  }
				
				/*
				 *  String substring(int beginIndex,int endIndex) 获取字符串的一部分
				 *  返回新的字符串
				 *  包含头,不包含尾巴
				 *  
				 *  String substring(int beginIndex)获取字符串的一部分
				 *  包含头,后面的字符全要
				 */
				public static void function_2(){
					String str = "howareyou";
					//调用String类方法substring获取字符串一部分
					str= str.substring(1, 5);
					System.out.println(str);
					
					String str2 = "HelloWorld";
					str2 = str2.substring(1);
					System.out.println(str2);
				}
				
				/*
				 *  int length() 返回字符串的长度
				 *  包含多少个字符
				 */
				public static void function(){
					String str = "cfxdf#$REFewfrt54GT";
					//调用String类方法length,获取字符串长度
					int length = str.length();
					System.out.println(length);
				}
			}
		```
- - - 

###	String类练习_1
* A: 获取指定字符串中，大写字母、小写字母、数字的个数
	* a: 题目分析
		* 为了统计大写字母、小写字母、数字的个数。创建3个计数的变量。
		* 为了获取到字符串中的每个字符，进行字符串的遍历，得到每个字符。
		* 对得到的字符进行判断，如果该字符为大写字母，则大写字母个数+1；如果该字符为小写字母，则小写字母个数+1；如果该字符为数字，则数字个数+1。
		* 显示大写字母、小写字母、数字的个数

	* b: 解题步骤
		```java
		* 案例代码
			public class StringTest {
				public static void main(String[] args) {
					getCount("A%A3eBr1FFy");					
				}
				
				/*
				 * 获取指定字符串中，大写字母、小写字母、数字的个数。
				 * 思想:
				 *   1. 计数器,就是int变量,满足一个条件 ++
				 *   2. 遍历字符串, 长度方法length() + charAt() 遍历
				 *   3. 字符判断是大写,是小写,还是数字
				 */
				public static void getCount(String str){
					//定义三个变量,计数
					int upper = 0;
					int lower = 0;
					int digit = 0;
					//对字符串遍历
					for(int i = 0 ; i < str.length() ; i++){
						//String方法charAt,索引,获取字符
						char c = str.charAt(i);
						//利用编码表 65-90  97-122  48-57
						if(c >='A' && c <=90){
							upper++;
						}else if( c >= 97 && c <= 122){
							lower++;
						}else if( c >= 48 && c <='9'){
							digit++;
						}
					}
					System.out.println(upper);
					System.out.println(lower);
					System.out.println(digit);
				}
			}
		```
- - - 

###	String类练习_2
* A: 将字符串中，第一个字母转换成大写，其他字母转换成小写，并打印改变后的字符串。
	* a: 题目分析
		* 把字符串分为两个部分，第一部分为字符串中第一个字母，第二部分为剩下的字符串。
		* 把第一部分字符串转换成大写字母，把第二部分字符串转换成小写字母
		* 把两部分字符串连接在一起，得到一个完整的字符串
	
	* b: 案例代码
		```java
			public class StringTest {
				public static void main(String[] args) {
					
					System.out.println(toConvert("aBc5%4dEF"));
					
				}
				
				/*
				 *  将字符串的首字母转成大写,其他内容转成小写
				 *  思想:
				 *    获取首字母, charAt(0)  substring(0,1)
				 *    转成大写 toUpperCase()
				 *    
				 *    获取剩余字符串, substring(1)  toLowerCase()
				 */
				public static String toConvert(String str){
					//定义变量,保存首字母,和剩余字符
					String first = str.substring(0,1);
					String after = str.substring(1);
					//调用String类方法,大写,小写转换
					first = first.toUpperCase();
					after = after.toLowerCase();
					return first+after;
				}
			}
		```
- - - 

###	String类练习_3
* A: 查询大字符串中，出现指定小字符串的次数
	* a: 题目分析
		* 在大串中，查找小串出现的位置，出现了就次数+1
		* 在上次小串出现位置的后面继续查找，需要更改大串的内容为上次未查询到的字符串。
		* 回到第一步，继续查找小串出现的位置，直到大串中查询不到小串为止

	* b: 案例代码	
		```java
			package cn.itcast.demo02;

			public class StringTest {
				public static void main(String[] args) {		
					System.out.println(getStringCount("hellojava,nijavahaojava,javazhenbang", "java"));
				}
				/*
				 *  获取一个字符串中,另一个字符串出现的次数
				 *  思想:
				 *    1. indexOf到字符串中到第一次出现的索引
				 *    2. 找到的索引+被找字符串长度,截取字符串
				 *    3. 计数器++
				 */
				public static int getStringCount(String str, String key){
					//定义计数器
					int count = 0;
					//定义变量,保存indexOf查找后的索引的结果
					int index = 0;
					//开始循环找,条件,indexOf==-1 字符串没有了
					while(( index = str.indexOf(key) )!= -1){
						count++;
						//获取到的索引,和字符串长度求和,截取字符串
						str = str.substring(index+key.length());
					}
					return count;
				}
			}
		```
- - - 

##	StringBuilder
- - - 

###	StringBuffer特点可变字符数组
* A:StringBuffer类概述
	* 通过JDK提供的API，查看StringBuffer类的说明
	* 线程安全的可变字符序列 
	* 底层采用字符数组实现,初始容量为16
* B:StringBuffer和String的区别
	* String是一个不可变的字符序列
	* StringBuffer是一个可变的字符序列
- - - 

###	StringBuffer类的方法
* A: StringBuffer类的方法
	* a: 方法介绍
		* StringBuffer append(), 将任意类型的数据,添加缓冲区
			*  append 返回值,写return this
			*  调用者是谁,返回值就是谁
		* delete(int start,int end): 删除缓冲区中字符
			*  开始索引包含,结尾索引不包含
		* insert(int index, 任意类型): 将任意类型数据,插入到缓冲区的指定索引上
		* replace(int start,int end, String str): 将指定的索引范围内的所有字符,替换成新的字符串
		* reverse(): 将缓冲区中的字符反转
		* String toString(): 继承Object,重写toString()
			*   将缓冲区中的所有字符,变成字符串
	* b: 案例代码
		```java
			public class StringBufferDemo {
				public static void main(String[] args) {
					function_5();
				}
				/*
				 *  StringBuffer类的方法
				 *   String toString() 继承Object,重写toString()
				 *   将缓冲区中的所有字符,变成字符串
				 */
				public static void function_5(){
					StringBuffer buffer = new StringBuffer();
					buffer.append("abcdef");
					buffer.append(12345);
					
					//将可变的字符串缓冲区对象,变成了不可变String对象
					String s = buffer.toString();
					System.out.println(s);
				}
				
				/*
				 *  StringBuffer类的方法
				 *    reverse() 将缓冲区中的字符反转
				 */
				public static void function_4(){
					StringBuffer buffer = new StringBuffer();
					buffer.append("abcdef");
					
					buffer.reverse();
					
					System.out.println(buffer);
				}
				
				/*
				 *  StringBuffer类方法
				 *    replace(int start,int end, String str)
				 *    将指定的索引范围内的所有字符,替换成新的字符串
				 */
				public static void function_3(){
					StringBuffer buffer = new StringBuffer();
					buffer.append("abcdef");
					
					buffer.replace(1, 4, "Q");
					
					System.out.println(buffer);
				}
				
				/*
				 *  StringBuffer类方法 insert
				 *    insert(int index, 任意类型)
				 *  将任意类型数据,插入到缓冲区的指定索引上
				 */
				 public static void function_2(){
					 StringBuffer buffer = new StringBuffer();
					 buffer.append("abcdef");	 
					 
					 buffer.insert(3, 9.5);
					 System.out.println(buffer);
				 }
				
				/*
				 * StringBuffer类方法
				 *   delete(int start,int end) 删除缓冲区中字符
				 *   开始索引包含,结尾索引不包含
				 */
				public static void function_1(){
					StringBuffer buffer = new StringBuffer();
					buffer.append("abcdef");
					
					buffer.delete(1,5);
					System.out.println(buffer);
				}
				
				/*
				 *  StringBuffer类方法
				 *   StringBuffer append, 将任意类型的数据,添加缓冲区
				 *   append 返回值,写return this
				 *   调用者是谁,返回值就是谁
				 */
				public static void function(){
					StringBuffer buffer = new StringBuffer();
					//调用StringBuffer方法append向缓冲区追加内容
					buffer.append(6).append(false).append('a').append(1.5);
					System.out.println(buffer);
				}
			}
		```
- - - 

###	StringBuilder类
* A:StringBuilder的概述
	* 通过查看API了解一下StringBuilder类
* B:面试题
	* String,StringBuffer,StringBuilder的区别
		* StringBuffer和StringBuilder的区别
			* StringBuffer是jdk1.0版本的,是线程安全的,效率低
			* StringBuilder是jdk1.5版本的,是线程不安全的,效率高

		* String和StringBuffer,StringBuilder的区别
			* String是一个不可变的字符序列
			* StringBuffer,StringBuilder是可变的字符序列
- - - 	
		
###	StringBuffer类案例拼接数组
* A: StringBuffer类案例拼接数组
	* a: 题目分析
		* 定义StringBuffer对象
		* 遍历数组,按照格式要求拼接处新的字符串,追加到StringBuffer容器中
		* 将StringBuffer中的内容以String的形式返回

	* b: 案例代码	
		```java
			public class StringBufferTest {
				public static void main(String[] args) {
					int[] arr = {4,1,4,56,7,8,76};
					System.out.println(toString(arr));
				}
			   /*
				* int[] arr = {34,12,89,68};将一个int[]中元素转成字符串 
				* 格式 [34,12,89,68]
				* String s = "["
				* 数组遍历
				*   s+= arr[i];
				*  s+"]"
				*  StringBuffer实现,节约内存空间, String + 在缓冲区中,append方法
				*/
				public static String toString(int[] arr){
					//创建字符串缓冲区
					StringBuffer buffer = new StringBuffer();
					buffer.append("[");
					//数组遍历
					for(int i = 0 ; i < arr.length;i++){
						//判断是不是数组的最后一个元素
						if(i == arr.length-1){
							buffer.append(arr[i]).append("]");
						}else{
							buffer.append(arr[i]).append(",");
						}
					}
					return buffer.toString();
				}
			}
		```
- - - 

##	正则表达式的定义及使用
- - - 

###	正则表达式的概念和作用
* A: 正则表达式的概念和作用
	* a: 正则表达式的概述
		* 正则表达式也是一个字符串，用来定义匹配规则，在Pattern类中有简单的规则定义。
		  可以结合字符串类的方法使用。
		* 简单记：正则表达式是具有特殊含义的字符串。
	* b: 正则表达式的作用
		* 比如注册邮箱,邮箱有用户名和密码,一般会对其限制长度,这个限制长度的事情就是正则表达式做的
- - - 
		
###	正则表达式语法规则
* A: 正则表达式语法规则
	* a: 字符
		* x  代表的是字符x
		* \\ 代表的是反斜线字符'\'
		* \t 代表的是制表符
		* \n 代表的是换行符
		* \r 代表的是回车符
	* b: 字符类
		* [abc]    a、b 或 c（简单类）
		* [^abc]   任何字符，除了 a、b 或 c（否定）
		* [a-zA-Z] a到 z 或 A到 Z，两头的字母包括在内（范围） 
		* [0-9]    0到9的字符都包括
		* [a-zA-Z_0-9] 代表的字母或者数字或者下划线(即单词字符)
	* c: 预定义字符类
		* . 任何字符。
		* \d 数字：[0-9]
		* \w 单词字符：[a-zA-Z_0-9]如"com.itheima.tests"/finish
	* d: 边界匹配器
		* ^  代表的是行的开头
		* $  代表的是行的结尾
		* \b 代表的是单词边界
	* e: 数量词
		* X?     X，一次或一次也没有
		* X*     X，零次或多次
		* X+     X，一次或多次
		* X{n}   X，恰好 n 次 
		* X{n,}  X，至少 n 次 
		* X{n,m} X，至少 n 次，但是不超过 m 次
- - - 

###	正则表达式练习和相关的String类方法
* A: 正则表达式练习和相关的String类方法
	* a: boolean matches(String 正则的规则)
		* "abc".matches("[a]")  
		* 匹配成功返回true
	* b: String[] split(String 正则的规则)
		* "abc".split("a")  
		* 使用规则将字符串进行切割
	* c: String replaceAll( String 正则规则,String 字符串)
		* "abc0123".repalceAll("[\\d]","#")	
		* 按照正则的规则,替换字符串
- - - 
	
###	正则表达式匹配练习
* A: 正则表达式匹配练习
	* a: 案例代码
	```java
			public class RegexDemo {
				public static void main(String[] args) {
					checkTel();
				}
				
				
				/*
				 *  检查手机号码是否合法
				 *  1开头 可以是34578  0-9 位数固定11位
				 */
				public static void checkTel(){
					String telNumber = "1335128005";
					//String类的方法matches
					boolean b = telNumber.matches("1[34857][\\d]{9}");
					System.out.println(b);
				}
				
				/*
				 *  检查QQ号码是否合法
				 *  0不能开头,全数字, 位数5,10位
				 *  123456 
				 *  \\d  \\D匹配不是数字
				 */
				public static void checkQQ(){
					String QQ = "123456";
					//检查QQ号码和规则是否匹配,String类的方法matches
					boolean b = QQ.matches("[1-9][\\d]{4,9}");
					System.out.println(b);
				}
			}
	```
- - - 

###	正则表达式切割练习
* A: 正则表达式切割练习
	* a: 案例代码
		```java
			public class RegexDemo1 {
				public static void main(String[] args) {
					split_1();
					split_2();
					split_3();

				}
				
				/*
				 * String类方法split对字符串进行切割
				 * 192.168.105.27 按照 点切割字符串
				 */
				public static void split_3(){
					String ip = "192.168.105.27";
					String[] strArr = ip.split("\\.");
					System.out.println("数组的长度"+strArr.length);
					for(int i = 0 ; i < strArr.length ; i++){
						System.out.println(strArr[i]);
					}
				}
				
				/*
				 * String类方法split对字符串进行切割
				 * 18 22 40 65 按照空格切割字符串
				 */
				public static void split_2(){
					String str = "18    22     40          65";
					String[] strArr = str.split(" +");
					System.out.println("数组的长度"+strArr.length);
					for(int i = 0 ; i < strArr.length ; i++){
						System.out.println(strArr[i]);
					}
				}
				
				/*
				 *  String类方法split对字符串进行切割
				 *  12-25-36-98  按照-对字符串进行切割
				 */
				public static void split_1(){
					String str = "12-25-36-98";
					//按照-对字符串进行切割,String类方法split
					String[] strArr = str.split("-");
					System.out.println("数组的长度"+strArr.length);
					for(int i = 0 ; i < strArr.length ; i++){
						System.out.println(strArr[i]);
					}
				}
			}		
		```
- - - 

###	正则表达式替换练习
* A: 正则表达式替换练习
	* a: 案例代码
		```java
			public class RegexDemo1 {
				public static void main(String[] args) {
					replaceAll_1();
				}
				
				/*
				 * "Hello12345World6789012"将所有数字替换掉
				 * String类方法replaceAll(正则规则,替换后的新字符串)
				 */
				public static void replaceAll_1(){
					String str = "Hello12345World6789012";
					str = str.replaceAll("[\\d]+", "#");
					System.out.println(str);
				}
			}
		```	
- - - 

###	正则表达式邮箱地址验证
* A: 正则表达式邮箱地址验证
	* a: 案例代码
		```java
			public class RegexDemo2 {
				public static void main(String[] args) {
					checkMail();
				}
				/*
				 *  检查邮件地址是否合法
				 *  规则:
				 *   1234567@qq.com
				 *   mym_ail@sina.com
				 *   nimail@163.com
				 *   wodemail@yahoo.com.cn    
				 *   
				 *   @: 前  数字字母_ 个数不能少于1个
				 *   @: 后  数字字母     个数不能少于1个
				 *   .: 后面 字母 
				 *     
				 */
				public static void checkMail(){
					String email ="abc123@sina.com";
					boolean b = email.matches("[a-zA-Z0-9_]+@[0-9a-z]+(\\.[a-z]+)+");
					System.out.println(b);
				}
			}
		```
- - - 

##	Date类的用法
- - - 

###	毫秒值概念 
* A: 毫秒值概念
	* a: 时间和日期类
		* java.util.Date
	* b: 毫秒概念
		* 1000毫秒=1秒
	* c: 毫秒的0点
		 * System.currentTimeMillis() 返回值long类型参数
		 * 获取当前日期的毫秒值   3742769374405    
		 * 时间原点; 公元1970年1月1日,午夜0:00:00 英国格林威治  毫秒值就是0
		 * 时间2088年8月8日    
		 * 时间和日期的计算，必须依赖毫秒值
- - - 

###	Date类的构造方法
* A: Date类的构造方法
	* a: 空参构造
		* public Date()
	* b: 带参构造
		* public Date(long times)
- - - 
		
###	Date类的get和set方法			
* A：Date类的get和set方法
	* public long getTime()	
		* 将当前的日期对象，转为对应的毫秒值
	* public void setTime(long times);
		* 根据给定的毫秒值，生成对应的日期对象
- - - 

###	日期格式化SimpleDateFormat
* A: 日期格式化SimpleDateFormat
	* a: 对日期进行格式化(自定义)
		* 对日期格式化的类 java.text.DateFormat 抽象类, 普通方法,也有抽象的方法
		* 实际使用是子类 java.text.SimpleDateFormat 可以使用父类普通方法,重写了抽象方法
	* b: 对日期进行格式化的步骤
		* 1: 创建SimpleDateFormat对象
			* 在类构造方法中,写入字符串的日期格式 (自己定义)
		* 2: SimpleDateFormat调用方法format对日期进行格式化
			* public String format(Date date) 传递日期对象,返回字符串
			* 日期模式:
			* yyyy    年份
			* MM      月份
			* dd      月中的天数
			* HH       0-23小时
			* mm      小时中的分钟
			* ss      秒
			* yyyy年MM月dd日 HH点mm分钟ss秒  汉字修改,: -  字母表示的每个字段不可以随便写
- - - 
				
###	字符串转成日期对象
* A: 字符串转成日期对象
	* a: 使用步骤
		* 1: 创建SimpleDateFormat的对象
			* 构造方法中,指定日期模式
		* 2: 子类对象,调用方法 parse 传递String,返回Date
			* 注意: 时间和日期的模式yyyy-MM-dd, 必须和字符串中的时间日期匹配
- - - 

##	Calendar类的用法
- - - 

###	Calendar类_1
* A: Calendar类_1
	* a: 日历类(抽象类)
		* java.util.Calendar
	* b: 创建对象
		* Calendar类写了静态方法 getInstance() 直接返回了子类的对象
		* 不需要直接new子类的对象,通过静态方法直接获取
- - - 

###	Calendar类_2
* A: Calendar类_2
	* a: 成员方法
		* getTime() 把日历对象,转成Date日期对象
		* get(日历字段) 获取指定日历字段的值
	* b: 代码演示
		```java
			Calendar c = Calendar.getInstance();
			// 获取年份
			int year = c.get(Calendar.YEAR);
			// 获取月份
			int month = c.get(Calendar.MONTH) + 1;
			// 获取天数
			int day = c.get(Calendar.DAY_OF_MONTH);
			System.out.println(year + "年" + month + "月" + day + "日");
		```
- - - 
			
###	Calendar类_3
* A: Calendar类_3
	* a: 成员方法
		* set(int field,int value)  设置指定的时间
	* b: 代码演示
		```java
			/*
			 * Calendar类的set方法 设置日历 set(int field,int value) field 设置的是哪个日历字段 value
			 * 设置后的具体数值
			 * 
			 * set(int year,int month,int day) 传递3个整数的年,月,日
			 */
			public static void function_1() {
				Calendar c = Calendar.getInstance();
				// 设置,月份,设置到10月分
				// c.set(Calendar.MONTH, 9);
		
				// 设置年,月,日
				c.set(2099, 4, 1);
		
				// 获取年份
				int year = c.get(Calendar.YEAR);
				// 获取月份
				int month = c.get(Calendar.MONTH) + 1;
				// 获取天数
				int day = c.get(Calendar.DAY_OF_MONTH);
				System.out.println(year + "年" + month + "月" + day + "日");
			}
		```
- - - 

###	Calendar类_4
* A: Calendar类_4
	* a: 成员方法
		* add(int field, int value) 进行整数的偏移
		* int get(int field) 获取指定字段的值
	* b: 案例演示
		```java	
			/*
			 * Calendar类方法add 日历的偏移量,
			 * 可以指定一个日历中的字段,
			 * 进行整数的偏移 add(int field, int value)
			 */
			public static void function_2() {
				Calendar c = Calendar.getInstance();
				// 让日历中的天数,向后偏移280天
				c.add(Calendar.DAY_OF_MONTH, -280);
				// 获取年份
				int year = c.get(Calendar.YEAR);
				// 获取月份
				int month = c.get(Calendar.MONTH) + 1;
				// 获取天数
				int day = c.get(Calendar.DAY_OF_MONTH);
				System.out.println(year + "年" + month + "月" + day + "日");
			}
		```
- - - 

###	日期练习_活了多少天
* A: 日期练习_活了多少天
	* a: 案例代码
		```java
			/*
			 *  计算活了多少天
			 *   生日  今天的日期
			 *   两个日期变成毫秒值,减法
			 */
			public static void function() throws Exception {
				System.out.println("请输入出生日期 格式 YYYY-MM-dd");
				//获取出生日期,键盘输入
				String birthdayString = new Scanner(System.in).next();
				//将字符串日期,转成Date对象
				//创建SimpleDateFormat对象,写日期模式
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				//调用方法parse,字符串转成日期对象
				Date birthdayDate = sdf.parse(birthdayString);
				
				//获取今天的日期对象
				Date todayDate = new Date();
				
				//将两个日期转成毫秒值,Date类的方法getTime
				long birthdaySecond = birthdayDate.getTime();
				long todaySecond = todayDate.getTime();
				long secone = todaySecond-birthdaySecond;
				
				if(secone < 0){
					System.out.println("还没出生呢");
				}
				else{
				System.out.println(secone/1000/60/60/24);
				}
				
			}
		```
- - - 

###	日期练习_闰年计算
* A: 日期练习_闰年计算
	* a: 案例代码
		```java
			/*
			 *  闰年计算
			 *  2000 3000
			 *  高级的算法: 日历设置到指定年份的3月1日,add向前偏移1天,获取天数,29闰年
			 */
			public static void function_1(){
				Calendar c = Calendar.getInstance();
				//将日历,设置到指定年的3月1日
				c.set(2088, 2, 1);
				//日历add方法,向前偏移1天
				c.add(Calendar.DAY_OF_MONTH, -1);
				//get方法获取天数
				int day = c.get(Calendar.DAY_OF_MONTH);
				System.out.println(day);
			}
		```
- - - 

##	基本类型包装类
- - - 

###	基本数据类型对象包装类概述
* A:基本数据类型对象包装类概述
	* a.基本类型包装类的产生
        * 在实际程序使用中，程序界面上用户输入的数据都是以字符串类型进行存储的。而程序开发中，我们需要把字符串数据，根据需求转换成指定的基本数据类型，如年龄需要转换成int类型，考试成绩需要转换成double类型等
    * b.八种基本类型对应的包装类
		```	
           char    Character
           int     Integer
           byte    Byte
           short   Short
           long    Long
           float   Float
           double  Double
           boolean Boolean
		```
- - - 

###	Integer类parseInt方法
* A:Integer类parseInt方法:
	* a:parseInt()
	    int i = Integer.parseInt("12");
	    System.out.println(i/2);//6
		 
	* b:parseInt(String s, int radix)
		```java
		    /*
		 	 * Integer类静态方法parseInt(String s, int radix)
		 	 * radix基数,进制
		 	 * "110",2 含义 前面的数字是二进制的,但是方法parseInt运行结果都是十进制
		 	 *  指定进制的字符串转换为十进制的整数
		 	 */
		 	public static void function_1(){
		 		int i = Integer.parseInt("110", 2);
		 		System.out.println(i);
		 	}
		```
- - - 

###	Integer类int转成字符串 
* A:Integer类int转成字符串:
    * a:使用+与字符串拼接
	```
        int i = 3;
     	String s = i+"";
      	System.out.println(s+1);//"31"
	```
	* b:toString(int ,int 进制),任意进制整数转成任意进制的字符串 (了解)
	```	
          	String s1 = Integer.toString(5,2);
          	System.out.println(s1);
	```
- - - 

###	Integer类构造方法
* A:Integer类构造方法
	```java
	    /*
	     *  Integer类构造方法
	     *   Integer (String s)
	     *   将数字格式的字符串,传递到Integer类的构造方法中
	     *   创建Integer对象,包装的是一个字符串
	     *   将构造方法中的字符串,转成基本数据类型,调用方法,非静态的, intValue()
	     */
	    public static void function_3(){
	    	Integer in = new Integer("100");
	    	int i = in.intValue();
	    	System.out.println(--i);//99
	    }
	```
- - - 

###	Integer类其他方法
* A:Integer类其他方法
	```java
	     /*
		 * Integer类的3个静态方法
		 * 做进制的转换
		 * 十进制转成二进制  toBinarString(int)
		 * 十进制转成八进制  toOctalString(int)
		 * 十进制转成十六进制 toHexString(int)
		 * 三个方法,返回值都是以String形式出现
		 */
	      a:十进制转二,八,十六进制
	          public static void function_1(){
	        		System.out.println(Integer.toBinaryString(99));
	        		System.out.println(Integer.toOctalString(99));
	        		System.out.println(Integer.toHexString(999));
	          }
	      b:获取int的最大值和最小值
	      /*
	       *   Integer类的静态成员变量
	       *   MAX_VALUE
	       *   MIN_VALUE
	       */
	      public static void function(){
	      	System.out.println(Integer.MAX_VALUE);
	      	System.out.println(Integer.MIN_VALUE);
	      }
	```
- - - 

###	自动装箱和自动拆箱 
* A:自动装箱与自动拆箱:
```java	
    //JDK1.5新特性
	//自动装箱,拆箱的 好处: 基本类型和引用类直接运算
    //自动装箱:使用Integer.valueOf(整数值)返回一个封装了该整数值的Integer对象
    //自动拆箱:使用Integer对象.intValue()返回Integer对象中封装的整数值
	public static void function(){
		//引用类型 , 引用变量一定指向对象
		//自动装箱, 基本数据类型1, 直接变成了对象
		
		Integer in = 1; // Integer in = new Integer(1)
		//in 是引用类型,不能和基本类型运算, 自动拆箱,引用类型in,转换基本类型
		
		//in+1  ==> in.inValue()+1 = 2    
		//in = 2    自动装箱
		in = in + 1;
		
		System.out.println(in);
		
	}
```
- - - 
  

###	自动装箱和自动拆箱练习题 
* A:自动装箱与自动拆箱:
	```java
	    Integer i = new Integer(1);
	 	Integer j = new Integer(1);
	 	System.out.println(i==j);// false 对象地址
	 	System.out.println(i.equals(j));// true  继承Object重写equals,比较的对象数据
	 	
	 	System.out.println("===================");
	 	
	 	Integer a = 500;//Integer integer=Integer.valueOf(500)
	 	                //integer=new Integer(500);
	 	Integer b = 500;
	 	System.out.println(a==b);//false
	 	System.out.println(a.equals(b));//true
	 	
	 	System.out.println("===================");
	 	
	 	
	 	//数据在byte(-128~127)范围内,JVM不会从新new对象
	 	Integer aa = 127; // Integer aa = new Integer(127)
	 	Integer bb = 127; // Integer bb = aa;
	 	System.out.println(aa==bb); //true
	 	System.out.println(aa.equals(bb));//true
    ```  
- - - 

##	System类
- - - 

###	System类方法currentTimeMillis 
* A:System类方法currentTimeMillis():用于计算程序的执行时间
	```java
        /*
      	 *  获取系统当前毫秒值
      	 *  static long currentTimeMillis()
      	 *  对程序执行时间测试
      	 */
      	public static void function(){
      		long start = System.currentTimeMillis();//当前时间x-1970年1月1日零时零分零秒
      		for(int i = 0 ; i < 10000; i++){
      			System.out.println(i);
      		}
      		long end = System.currentTimeMillis();//当前时间y-1970年1月1日零时零分零秒
      		System.out.println(end - start);//当前时间y-当前时间x 
      	}
	```
- - - 

###	System类方法exit 
* A:System类方法exit()方法
	```java
		     /*
		 	 *  退出虚拟机,所有程序全停止
		 	 *  static void exit(0)
		 	 */
		 	public static void function_1(){
		 		while(true){
		 			System.out.println("hello");
		 			System.exit(0);//该方法会在以后的finally代码块中使用(讲到再说)
		 		}
		 	}
	```
- - - 

###	System类方法gc 
* A:System类方法gc
	```java
        public class Person {
        	public void finalize(){
        		System.out.println("垃圾收取了");
        	}
        }

        /*
     	 *  JVM在内存中,收取对象的垃圾
     	 *  当没有更多引用指向该对象时,会自动调用垃圾回收机制回收堆中的对象
     	 *  同时调用回收对象所属类的finalize方法()
     	 *  static void gc()
     	 */
     	public static void function_2(){
     		new Person();
     		new Person();
     		new Person();
     		new Person();
     		new Person();
     		new Person();
     		new Person();
     		new Person();
     		System.gc();
     	}
	```
- - - 

###	System类方法getProperties 
* A:System类方法getProperties(了解)
	```java
     /*
      *  获取当前操作系统的属性:例如操作系统名称,
      *  static Properties getProperties() 
      */
     public static void function_3(){
     	System.out.println( System.getProperties() );
     }
    ```
- - - 

###	System类方法arraycopy
* A:System类方法arraycopy：
	```java
	  /*
	   * System类方法,复制数组
	   * arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
	   * Object src, 要复制的源数组
	   * int srcPos, 数组源的起始索引
	   * Object dest,复制后的目标数组
	   * int destPos,目标数组起始索引 
	   * int length, 复制几个
	   */
	  public static void function_4(){
	  	int[] src = {11,22,33,44,55,66};
	  	int[] desc = {77,88,99,0};
	  	
	  	System.arraycopy(src, 1, desc, 1, 2);//将src数组的1位置开始(包含1位置)的两个元素,拷贝到desc的1,2位置上
	  	for(int i = 0 ;  i < desc.length ; i++){
	  		System.out.println(desc[i]);
	  	}
	  }
	```
- - - 

##	Math类
- - - 

###	Math类的方法_1
* A:Math类中的方法
```java   
    /*
   	 * static double sqrt(double d)
   	 * 返回参数的平方根
   	 */
   	public static void function_4(){
   		double d = Math.sqrt(-2);
   		System.out.println(d);
   	}
   	
   	/*0
   	 * static double pow(double a, double b)
   	 * a的b次方
   	 */
   	public static void function_3(){
   		double d = Math.pow(2, 3);
   		System.out.println(d);
   	}
   	
   	/*
   	 * static double floor(double d)
   	 * 返回小于或者等于参数d的最大整数
   	 */
   	public static void function_2(){
   		double d = Math.floor(1.5);
   		System.out.println(d);
   	}
   	
   	/*
   	 *  static double ceil(double d)
   	 *  返回大于或者等于参数d的最小整数
   	 */
   	public static void function_1(){
   		double d = Math.ceil(5.1);
   		System.out.println(d);
   	}
   	
   	/*
   	 *  static int abs(int i)
   	 *  获取参数的绝对值
   	 */
   	 public static void function(){
   		int i = Math.abs(0);
   		System.out.println(i);
   	 }
```
- - - 

###	Math类的方法_2
* A:Math类的方法_2
```java 
  /*
   *  static double round(doubl d)
   *  获取参数的四舍五入,取整数
   */
  public static void function_6(){
  	double d = Math.round(5.4195);
  	System.out.println(d);
  }
  
  /*
   *  static double random() 返回随机数 0.0-1.0之间
   *  来源,也是Random类
   */
  public static void function_5(){
  	for(int i = 0 ; i < 10 ;i++){
  		double d = Math.random();
  		System.out.println(d);
  	}
  }
```
- - - 

##	Arrays类
- - - 

###	Arrays工具类 
* A:Arrays工具类:
```java
    public class ArraysDemo {
    	public static void main(String[] args) {
    		function_2();
    		int[] arr = {56,65,11,98,57,43,16,18,100,200};
    		int[] newArray = test(arr);
    		System.out.println(Arrays.toString(newArray));
    	}
    	/*
    	 *  定义方法,接收输入,存储的是10个人考试成绩
    	 *  将最后三个人的成绩,存储到新的数组中,返回新的数组
    	 */
    	public static int[] test(int[] arr){
    		//对数组排序
    		Arrays.sort(arr);
    		//将最后三个成绩存储到新的数组中
    		int[] result = new int[3];
    		//成绩数组的最后三个元素,复制到新数组中
    	//	System.arraycopy(arr, 0, result, 0, 3);
    		for(int i = 0 ;  i < 3 ;i++){
    			result[i] = arr[i];
    		}
    		return result;
    	}
    	
    	/*
    	 *  static String toString(数组)
    	 *  将数组变成字符串
    	 */
    	public static void function_2(){
    		int[] arr = {5,1,4,6,8,9,0};
    		String s = Arrays.toString(arr);
    		System.out.println(s);
    	}
    	
    	/*
    	 *  static int binarySearch(数组, 被查找的元素)
    	 *  数组的二分搜索法
    	 *  返回元素在数组中出现的索引
    	 *  元素不存在, 返回的是  (-插入点-1)
    	 */
    	public static void function_1(){
    		int[] arr = {1,4,7,9,11,15,18};
    	    int index =  Arrays.binarySearch(arr, 10);
    	    System.out.println(index);
    	}
    	
    	/*
    	 *  static void sort(数组)
    	 *  对数组升序排列
    	 */
    	public static void function(){
    		int[] arr = {5,1,4,6,8,9,0};
    		Arrays.sort(arr);
    		for (int i = 0; i < arr.length; i++) {
    			System.out.println(arr[i]);
    		}
    	}
    }
```
- - - 

###	数组复制练习
* A:数组复制练习:
```java
	    public static void main(String[] args) {
	    		int[] arr = {56,65,11,98,57,43,16,18,100,200};
	    		int[] newArray = test(arr);
	    		System.out.println(Arrays.toString(newArray));
	    	}
	    	/*
	    	 *  定义方法,接收输入,存储的是10个人考试成绩
	    	 *  将最后三个人的成绩,存储到新的数组中,返回新的数组
	    	 */
	    	public static int[] test(int[] arr){
	    		//对数组排序
	    		Arrays.sort(arr);
	    		//将最后三个成绩存储到新的数组中
	    		int[] result = new int[3];
	    		//成绩数组的最后三个元素,复制到新数组中
	    	    //System.arraycopy(arr, 0, result, 0, 3);
	    		for(int i = 0 ;  i < 3 ;i++){
	    			result[i] = arr[i];
	    		}
	    		return result;
	    	}
```
- - - 

##	大数据运算
- - - 

###	BigInteger类概述和构造方法   
* A:BigInteger类概述和构造方法
```java
   public static void main(String[] args) {
   		function();
   	}
    /*
   	 * BigInteger类的构造方法
   	 * 传递字符串,要求数字格式,没有长度限制
   	 */
   	public static void function(){
   		BigInteger b = new BigInteger("8465846668464684562385634168451684568645684564564");
   		System.out.println(b);
   		BigInteger b1 = new BigInteger("5861694569514568465846668464684562385634168451684568645684564564");
   		System.out.println(b1);
   	}
```
- - - 

###	BigInteger类四则运算  
* A:BigInteger类四则运算
```java
    public static void main(String[] args) {
   		function_1();
   	}
	/*
	 * BigInteger对象的四则运算
	 * 调用方法计算,计算结果也只能是BigInteger对象
	 */
	 public static void function_1(){
		 BigInteger b1 = new BigInteger("5665464516451051581613661405146");
		 BigInteger b2 = new BigInteger("965855861461465516451051581613661405146");
		 
		 //计算 b1+b2对象的和,调用方法 add
		 BigInteger bigAdd = b1.add(b2);//965855867126930032902103163227322810292
		 System.out.println(bigAdd);
		 
		 //计算b1-b2对象的差,调用方法subtract
		 BigInteger bigSub = b1.subtract(b2);
		 System.out.println(bigSub);
		 
		 //计算b1*b2对象的乘积,调用方法multiply
		 BigInteger bigMul = b1.multiply(b2);
		 System.out.println(bigMul);
		 
		 //计算b2/b1对象商,调用方法divied
		 BigInteger bigDiv = b2.divide(b1);
		 System.out.println(bigDiv);
	 }
```
- - - 

###	员工案例的子类的编写
* A:BigDecimal类概述 
```java
    /*
     * 计算结果,未知
     * 原因: 计算机二进制中,表示浮点数不精确造成
     * 超级大型的浮点数据,提供高精度的浮点运算, BigDecimal
    System.out.println(0.09 + 0.01);//0.09999999999999999
    System.out.println(1.0 - 0.32);//0.6799999999999999
    System.out.println(1.015 * 100);//101.49999999999999
    System.out.println(1.301 / 100);//0.013009999999999999 
    */
```
- - - 

###	BigDecimal类实现加法减法乘法  
* A:BigDecimal类实现加法减法乘法
```java
    /*
  	 *  BigDecimal实现三则运算
  	 *  + - *
  	 */
  	public static void function(){
  		BigDecimal b1 =  new BigDecimal("0.09");
  		BigDecimal b2 =  new BigDecimal("0.01");
  		//计算b1+b2的和,调用方法add
  		BigDecimal bigAdd = b1.add(b2);
  		System.out.println(bigAdd);
  		
  		BigDecimal b3 = new BigDecimal("1");
  		BigDecimal b4 = new BigDecimal("0.32");
  		//计算b3-b2的差,调用方法subtract
  		BigDecimal bigSub = b3.subtract(b4);
  		System.out.println(bigSub);
  		
  		BigDecimal b5 = new BigDecimal("1.015");
  		BigDecimal b6 = new BigDecimal("100");
  		//计算b5*b6的成绩,调用方法 multiply
  		BigDecimal bigMul = b5.multiply(b6);
  		System.out.println(bigMul);
  	}
```
- - - 

###	BigDecimal类实现除法
* A:BigDecimal类实现除法
```java
	 /*
	  * BigDecimal实现除法运算
	  * divide(BigDecimal divisor, int scale, int roundingMode) 
	  * int scale : 保留几位小数
	  * int roundingMode : 保留模式
	  * 保留模式 阅读API文档
	  *   static int ROUND_UP  向上+1
	  *   static int ROUND_DOWN 直接舍去
	  *   static int ROUND_HALF_UP  >= 0.5 向上+1
	  *   static int ROUND_HALF_DOWN   > 0.5 向上+1 ,否则直接舍去
	  */
	 public static void function_1(){
	 	BigDecimal b1 = new BigDecimal("1.0301");
	 	BigDecimal b2 = new BigDecimal("100");
	 	//计算b1/b2的商,调用方法divied
	 	BigDecimal bigDiv = b1.divide(b2,2,BigDecimal.ROUND_HALF_UP);//0.01301
	 	System.out.println(bigDiv);
	 }
```
