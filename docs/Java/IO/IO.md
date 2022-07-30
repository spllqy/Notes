#   IO

##  File
- - - 

###  IO技术概述
* A:IO技术概述
	* a: Output
		* 把内存中的数据存储到持久化设备上这个动作称为输出（写）Output操作
	* b: Input
		* 把持久设备上的数据读取到内存中的这个动作称为输入（读）Input操作
	* c: IO操作
		* 把上面的这种输入和输出动作称为IO操作
- - - 

###  File类的概述和作用
* A:File类的概述和作用
	* a: File的概念
		* File类是文件和目录路径名的抽象表示形式
		* Java中把文件或者目录（文件夹）都封装成File对象
		* 我们要去操作硬盘上的文件，或者文件夹只要找到File这个类即可
- - - 

###  File类静态的成员变量
* A:File类静态的成员变量
	* a: pathSeparator
		* 与系统有关的路径分隔符，为了方便，它被表示为一个字符串
	* b: separator
		* 与系统有关的默认名称分隔符，为了方便，它被表示为一个字符串
			
	* c: 案例代码
		```java
			/*
			 *  java.io.File
			 *    将操作系统中的,文件,目录(文件夹),路径,封装成File对象
			 *    提供方法,操作系统中的内容
			 *    File与系统无关的类
			 *    文件 file
			 *    目录 directory
			 *    路径 path
			 */
			public class FileDemo {
				public static void main(String[] args) {
					//File类静态成员变量
					//与系统有关的路径分隔符
					String separator = File.pathSeparator;
					System.out.println(separator);// 是一个分号,目录的分割(window中环境变量配置各个路径用分号分割，表示一个完整的路径结束)  Linux中是冒号 :
					
					//与系统有关的默认名称分隔符
					separator = File.separator;
					System.out.println(separator);// 向右 \  目录名称分割  Linux / 
				}
			}
        ```
- - - 	

###  File类构造方法_1
* A: File类构造方法_1
	* a: File(String pathname)
		* 通过将给定路径名字符串转换为一个File对象,之后可以使用File中的方法
		* windows中的路径或文件名不区分大小写
	* d: 案例代码
        ```java
			public class FileDemo1 {
				public static void main(String[] args) {
					function();
				}
				/*
				 *  File(String pathname)
				 *  传递路径名: 可以写到文件夹,可以写到一个文件
				 *  c:\\abc   c:\\abc\\Demo.java
				 *  将路径封装File类型对象
				 */
				public static void function(){
					File file = new File("d:\\eclipse");
					System.out.println(file);
				}
			}
        ```
- - - 

###  相对路径和绝对路径
* A: 相对路径和绝对路径
	* a: 绝对路径
		* 绝对路径是一个固定的路径,从盘符开始
	* b: 相对路径
		* 相对路径相对于某个位置,在eclipse下是指当前项目下	
	* c: 路径

				绝对路径
					在系统中具有唯一性
					c:\\windows\\system32
				相对路径
					表示路径之间的关系
					D:\\develop\\Java\\jdk1.7.0_72\\bin
					D:\\develop\\Java\\jre7
					路径之间关系
						Java 父目录是D:\\develop
						Java 子目录是：jdk1.7.0_72
					父路径是 唯一性
					子目录是可以多个
- - - 
			
###  File类的构造方法_2
* A: File类的构造方法_2
	* a:File(String parent, String child) 
		* 根据 parent 路径名字符串和 child 路径名字符串创建一个新 File 对象
						
	* b: File(File parent, String child)
	
	* c: 案例代码
        ```java
		public class FileDemo1 {
			public static void main(String[] args) {
				function_2();
			}
			/*
			 *  File(File parent,String child)
			 *  传递路径,传递File类型父路径,字符串子路径
			 *  好处: 父路径是File类型,父路径可以直接调用File类方法
			 */
			public static void function_2(){
				File parent = new File("d:");
				File file = new File(parent,"eclipse");
				System.out.println(file);
			}
			
			/*
			 *  File(String parent,String child)
			 *  传递路径,传递字符串父路径,字符串子路径
			 *  好处: 单独操作父路径和子路径
			 */
			public static void function_1(){
				File file = new File("d:","eclipse");
				System.out.println(file);
			}
		}
        ```
- - - 

###  File类创建文件功能
* A: File类创建文件功能
	* a: public boolean createNewFile()
		* 创建文件 如果存在这样的文件，就不创建了
				
	* b: 案例代码
        ```java
			public class FileDemo2 {
				public static void main(String[] args)throws IOException {
					function();
				}						
				/*
				 *  File创建文件的功能
				 *  boolean createNewFile()
				 *  创建的文件路径和文件名,在File构造方法中给出
				 *  文件已经存在了,不在创建
				 */
				public static void function()throws IOException{
					File file = new File("c:\\a.txt");
					boolean b = file.createNewFile();
					System.out.println(b);
				}
			}
        ```
- - - 

###  File类创建目录功能
* A: File类创建目录功能
	* a: 创建目录
		* public boolean mkdir():创建文件夹 如果存在这样的文件夹，就不创建了
		* public boolean mkdirs():创建文件夹,如果父文件夹不存在，会帮你创建出来
	* b: 案例代码
        ```java
			public class FileDemo2 {
				public static void main(String[] args)throws IOException {
					function_1();
				}
				/*
				 *  File创建文件夹功能
				 *  boolean mkdirs() 创建多层文件夹
				 *  创建的路径也在File构造方法中给出
				 *  文件夹已经存在了,不在创建
				 */
				public static void function_1(){
					File file = new File("c:\\abc");
					boolean b = file.mkdirs();
					System.out.println(b);
				}				
			}
        ```
- - - 

###  File类删除功能
* A: File类删除功能
	* a: 删除功能
		* public boolean delete():删除文件或者文件夹
* B: 案例代码
    ```java
		public class FileDemo2 {
			public static void main(String[] args)throws IOException {
				function_2();
			}
			/*
			 *  File类的删除功能
			 *  boolean delete()
			 *  删除的文件或者是文件夹,在File构造方法中给出
			 *  删除成功返回true,删除失败返回false
			 *  删除方法,不走回收站,直接从硬盘中删除
			 *  删除有风险,运行需谨慎
			 */
			public static void function_2(){
				File file = new File("c:\\a.txt");
				boolean b = file.delete();
				System.out.println(b);
			}			
		}
	```
- - - 

###  File类获取功能			
* A：File类获取功能
	* a: 方法介绍
		* String getName(): 返回路径中表示的文件或者文件夹名
				* 获取路径中的最后部分的名字
		* long length(): 返回路径中表示的文件的字节数
		* String getAbsolutePath(): 获取绝对路径,返回String对象
		* File   getAbsoluteFile() : 获取绝对路径,返回File对象
			* eclipse环境中,写一个相对路径,绝对位置工程根目录
		* String getParent(): 获取父路径,返回String对象
		* File getParentFile(): 获取父路径,返回File对象
					
	* b: 案例代码
		```java
			public class FileDemo3 {
				public static void main(String[] args) {
					function_3();
				}
				/*
				 * File类的获取功能
				 * String getParent() 返回String对象
				 * File getParentFile()返回File对象
				 * 获取父路径
				 */
				public static void function_3(){
					File file = new File("d:\\eclipse\\eclipse.exe");
					File parent = file.getParentFile();
					System.out.println(parent);
				}
				
				/*
				 * File类获取功能
				 * String getAbsolutePath() 返回String对象
				 * File   getAbsoluteFile() 返回File对象
				 * 获取绝对路径
				 * eclipse环境中,写的是一个相对路径,绝对位置工程根目录
				 */
				public static void function_2(){
					File file = new File("src");
					File absolute = file.getAbsoluteFile();
					System.out.println(absolute);
				}
				
				/*
				 * File类获取功能
				 * long length()
				 * 返回路径中表示的文件的字节数
				 */
				public static void function_1(){
					File file = new File("d:\\eclipse\\eclipse.exe");
					long length = file.length();
					System.out.println(length);
				}
				
				/*
				 *  File类的获取功能
				 *  String getName()
				 *  返回路径中表示的文件或者文件夹名
				 *  获取路径中的最后部分的名字
				 */
				public static void function(){
					File file = new File("d:\\eclipse\\eclipse.exe");
					String name = file.getName();
					System.out.println(name);
					
					/*String path = file.getPath();
					System.out.println(path);*/
			//		System.out.println(file);
				}
			}
        ```
- - - 

###  File类判断功能
* A: File类判断功能
	* a: 方法介绍
		* boolean exists(): 判断File构造方法中封装路径是否存在
			* 存在返回true,不存在返回false
		* boolean isDirectory(): 判断File构造方法中封装的路径是不是文件夹
			* 如果是文件夹,返回true,不是文件返回false
		* boolean isFile(): 判断File构造方法中封装的路径是不是文件
			* 如果是文件,返回true,不是文件返回false
	
	* b: 案例代码
        ```java
			public class FileDemo4 {
				public static void main(String[] args) {
					function_1();
				}
				/*
				 *  File判断功能
				 *  boolean isDirectory()
				 *  判断File构造方法中封装的路径是不是文件夹
				 *  如果是文件夹,返回true,不是文件返回false
				 *  
				 *  boolean isFile()
				 *  判断File构造方法中封装的路径是不是文件
				 */
				public static void function_1(){
					File file = new File("d:\\eclipse\\eclipse.exe");
					if(file.exists()){
						boolean b = file.isDirectory();
						System.out.println(b);
					}
				}
				
				/*
				 *  File判断功能
				 *  boolean exists()
				 *  判断File构造方法中封装路径是否存在
				 *  存在返回true,不存在返回false
				 */
				public static void function(){
					File file = new File("src");
					boolean b = file.exists();
					System.out.println(b);
				}
			}
        ```
- - - 

###  File类list获取功能
* A: File类list获取功能
	* a: 方法介绍
		* String[] list()：获取到File构造方法中封装的路径中的文件和文件夹名 (遍历一个目录)
			* 返回只有名字
		* File[] listFiles()：获取到,File构造方法中封装的路径中的文件和文件夹名 (遍历一个目录)
			* 返回的是目录或者文件的全路径
		* static File[] listRoots(): 列出可用的文件系统根 
		
	* b: 案例代码
        ```java
			public class FileDemo {
				public static void main(String[] args) {
					function_2();
				}
				public static void function_2(){
					//获取系统中的所有根目录
					File[] fileArr = File.listRoots();
					for(File f : fileArr){
						System.out.println(f);
					}
				}
				
				/*
				 *  File类的获取功能
				 *  File[] listFiles()
				 *  获取到,File构造方法中封装的路径中的文件和文件夹名 (遍历一个目录)
				 *  返回的是目录或者文件的全路径
				 */
				public static void function_1(){
					File file = new File("d:\\eclipse");
					File[] fileArr = file.listFiles();
					for(File f : fileArr){
						System.out.println(f);
					}
				}
				
				/*
				 *  File类的获取功能
				 *  String[] list()
				 *  获取到,File构造方法中封装的路径中的文件和文件夹名 (遍历一个目录)
				 *  返回只有名字
				 */
				public static void function(){
					File file = new File("c:");
					String[] strArr = file.list();
					System.out.println(strArr.length);
					for(String str : strArr){
						System.out.println(str);
					}
				}
			}
        ```
- - - 

###  文件过滤器
* A: 文件过滤器
	* a: 作用
		* 过滤一个目录下的指定扩展名的文件，或者包含某些关键字的文件夹
			
	* b: 方法介绍
		* public String[] list(FilenameFilter filter)
		* public File[] listFiles(FileFilter filter)
			
	* C: 案例代码	
        ```java
			/*
			 *  自定义过滤器
			 *  实现FileFilter接口,重写抽象方法
			 */
			public class MyFilter implements FileFilter{
				public boolean accept(File pathname)  {
					/*
					 * pathname 接受到的也是文件的全路径
					 * c:\\demo\\1.txt
					 * 对路径进行判断,如果是java文件,返回true,不是java文件,返回false
					 * 文件的后缀结尾是.java
					 */
					//String name = pathname.getName();
					return pathname.getName().endsWith(".java");
					
				}
			}
			
			/*
			 *  File类的获取,文件获取过滤器
			 *  遍历目录的时候,可以根据需要,只获取满足条件的文件
			 *  遍历目录方法 listFiles()重载形式
			 *  listFiles(FileFilter filter)接口类型
			 *  传递FileFilter接口的实现类
			 *  自定义FileFilter接口实现类,重写抽象方法,
			 *  接口实现类对象传递到遍历方法listFiles
			 */
			public class FileDemo1 {
				public static void main(String[] args) {
					File file = new File("c:\\demo");
					File[] fileArr = file.listFiles(new MyFilter());
					for(File f : fileArr){
						System.out.println(f);
					}
				}
			}
		```
- - - 

###  文件过滤器_原理分析
* A:文件过滤器_原理分析
	* listFiles()遍历目录的同时，获取到了文件名全路径，调用过滤器的方法accept，将获取到的路径传递给accept方法的参数pathname
	* accept方法接收了参数pathname，参数是listFiles传递来的
	* 在accept方法中，进行判断，如果这个路径是Java文件，返回true，走着返回false
	* 一旦方法返回了true
	* listFiles将路径保存到File数组中
- - - 

##  递归
- - - 

###  递归遍历全目录
* A: 递归遍历全目录
	* a: 案例代码
        ```java
			/*
			 *  对一个目录的下的所有内容,进行完全的遍历
			 *  编程技巧,方法的递归调用,自己调用自己
			 */
			public class FileDemo {
				public static void main(String[] args) {
					File dir = new File("d:\\eclipse");
					getAllDir(dir);
				}
				/*
				 *  定义方法,实现目录的全遍历
				 */
				public static void getAllDir(File dir){
					System.out.println(dir);
					//调用方法listFiles()对目录,dir进行遍历
					File[] fileArr = dir.listFiles();
					for(File f : fileArr){
						//判断变量f表示的路径是不是文件夹
						if(f.isDirectory()){
							//是一个目录,就要去遍历这个目录
							//本方法,getAllDir,就是给个目录去遍历
							//继续调用getAllDir,传递他目录
							getAllDir(f);
						}else{
							System.out.println(f);
						}
					}
				}
			}
        ```
- - - 
		
###  递归概念和注意事项
* A:递归概念和注意事项
	* a: 递归概念
		* 递归，指在当前方法内调用自己的这种现象
		* 递归分为两种，直接递归和间接递归
		* 直接递归称为方法自身调用自己。间接递归可以A方法调用B方法，B方法调用C方法，C方法调用A方法
	* b: 注意事项
		* 递归一定要有出口, 必须可以让程序停下
		* 递归次数不能过多
		* 构造方法,禁止递归
- - - 

###  递归求和计算
* A: 递归求和计算
	* a: 题目分析
		* 1+2+3+...+(n-1)+n:求1到n的和
		* 总结规律：1到n的和等于1到(n-1)的和再加n
		* getSum(n-1)+ n
		* 递归出口：getSum(1) return 1;
		
	* b: 案例代码	
        ```java
			/*
			 *  方法的递归调用
			 *    方法自己调用自己
			 *  适合于,方法中运算的主体不变,但是运行的时候,参与运行的方法参数会变化
			 *  注意:
			 *     递归一定要有出口, 必须可以让程序停下
			 *     递归次数不能过多
			 *     构造方法,禁止递归
			 */
			public class DiGuiDemo {
				public static void main(String[] args) {
					int sum = getSum(3);
					System.out.println(sum);
				}

						
				/*
				 *  计算 1+2+3+100和 = 5050
				 *  计算规律:
				 *    n+(n-1)+(n-2)
				 *    100+(100-1)+(99-1)+...1
				 */
				public static int getSum(int n){
					if( n == 1)
						return 1;
					return n + getSum(n-1);
				}
				
			}
		```
- - - 

###  递归求阶乘
* A: 递归求和计算
	* a: 题目分析
		* 5!=5*4*3*2*1
		*   =5*4!
		* 4!=4*3!
		* 3!=3*2!
		* 2!=2*1!
		* 1!=1
		* n!=n*(n-1)!
		* 递归出口：n*getJieCheng(n-1):  getJieCheng(1) return 1;

	* b: 案例代码
        ```java
			/*
			 *  方法的递归调用
			 *    方法自己调用自己
			 *  适合于,方法中运算的主体不变,但是运行的时候,参与运行的方法参数会变化
			 *  注意:
			 *     递归一定要有出口, 必须可以让程序停下
			 *     递归次数不能过多
			 *     构造方法,禁止递归
			 */
			public class DiGuiDemo {
				public static void main(String[] args) {					
					System.out.println(getJieCheng(5));
					
				}
								
				/* 
				 *  计算阶乘 5!
				 *   5*4*3*2*1
				 */
				public static int getJieCheng(int n){
					if ( n == 1)
						return 1;
					return n * getJieCheng(n-1);
				}								
			}
        ```
- - - 

###  递归计算斐波那契数列
* A: 递归计算斐波那契数列
	* a：题目分析
		* 1 1 2 3 5 8 13 21
		* 从第三项开始，后面的每一项都等于前面两项的和，第一项和第二项的值为1，作为程序的出口
	* b: 案例代码
        ```java
			/*
			 *  方法的递归调用
			 *    方法自己调用自己
			 *  适合于,方法中运算的主体不变,但是运行的时候,参与运行的方法参数会变化
			 *  注意:
			 *     递归一定要有出口, 必须可以让程序停下
			 *     递归次数不能过多
			 *     构造方法,禁止递归
			 */
			public class DiGuiDemo {
				public static void main(String[] args) {					
					System.out.println(getFBNQ(12));
				}
				/*
				 *  方法递归,计算斐波那契数列
				 *  
				 */
				public static int getFBNQ(int month){
					if( month == 1)
						return 1;
					if( month == 2)
						return 1;
					return getFBNQ(month-1)+getFBNQ(month-2);
				}
			}
        ```
- - - 

###  遍历目录下的所有java文件
* A: 遍历目录下的所有java文件
	* a: 案例代码
        ```java
			public class MyJavaFilter implements FileFilter {
				public boolean accept(File pathname) {
					//判断获取的是目录,直接返回true
					if(pathname.isDirectory())
						return true;
					return pathname.getName().toLowerCase().endsWith(".java");
				}

			}
			/*
			 *  遍历目录,获取目录下的所有.java文件
			 *  遍历多级目录,方法递归实现
			 *  遍历的过程中,使用过滤器
			 */
			public class FileDemo1 {
				public static void main(String[] args) {
					getAllJava(new File("c:\\demo"));
			//		new File("c:\\demo").delete();
				}
				/*
				 * 定义方法,实现遍历指定目录
				 * 获取目录中所有的.java文件
				 */
				public static void getAllJava(File dir){
					//调用File对象方法listFiles()获取,加入过滤器
					File[] fileArr = dir.listFiles(new MyJavaFilter());
					for(File f : fileArr){
						//对f路径,判断是不是文件夹
						if(f.isDirectory()){
							//递归进入文件夹遍历
							getAllJava(f);
						}else{
							System.out.println(f);
						}
					}
				}
			}
		```	
- - - 

## 字节流
- - - 

###  输入和输出
* A:输入和输出
	* a: 参照物
		* 到底是输入还是输出，都是以Java程序为参照
	* b: Output
		* 把内存中的数据存储到持久化设备上这个动作称为输出（写）Output操作
		* 程序到文件称为输出
	* c: Input
		* 把持久设备上的数据读取到内存中的这个动作称为输入（读）Input操作
		* 文件到程序称为输入
	* d: IO操作
		* 把上面的这种输入和输出动作称为IO操作
- - - 

###  字节输出流OutputStream
* A: 字节输出流OutputStream
	* a.概念
		* IO流用来处理设备之间的数据传输
		* Java对数据的操作是通过流的方式
		* Java用于操作流的类都在IO包中
		* 流按流向分为两种：输入流，输出流。
		* 流按操作类型分为两种：
			* 字节流 : 字节流可以操作任何数据,因为在计算机中任何数据都是以字节的形式存储的
			* 字符流 : 字符流只能操作纯字符数据，比较方便。
	* b.IO流常用父类
		* 字节流的抽象父类：
			* InputStream 
			* OutputStream
		* 字符流的抽象父类：
			* Reader 
			* Writer		
	* c.IO程序书写
		* 使用前，导入IO包中的类
		* 使用时，进行IO异常处理
		* 使用后，释放资源
	* d: 方法介绍
		*  void close(): 关闭此输出流并释放与此流有关的所有系统资源。
		*  void write(byte[] b)： 将 b.length 个字节从指定的 byte 数组写入此输出流
		*  void write(byte[] b, int off, int len) ：将指定 byte 数组中从偏移量 off 开始的 len 个字节写入此输出流。
		* abstract  void write(int b) ： 将指定的字节写入此输出流。
- - - 				
			
###  字节输出流FileOutputStream写字节
* A: 字节输出流FileOutputStream写字节
	* a: FileOutputStream
		* 写入数据文件,学习父类方法,使用子类对象
	* b: FileOutputStream构造方法
		* 作用：绑定输出的输出目的
		* FileOutputStream(File file) 
			* 创建一个向指定 File 对象表示的文件中写入数据的文件输出流。
		* FileOutputStream(File file, boolean append) 
			* 创建一个向指定 File 对象表示的文件中写入数据的文件输出流，以追加的方式写入。
		* FileOutputStream(String name) 
			* 创建一个向具有指定名称的文件中写入数据的输出文件流。
		* FileOutputStream(String name, boolean append) 
			* 创建一个向具有指定 name 的文件中写入数据的输出文件流，以追加的方式写入。
	* c: 流对象使用步骤
		*  1. 创建流子类的对象,绑定数据目的
		*  2. 调用流对象的方法write写
		*  3. close释放资源
	* d: 注意事项
		* 流对象的构造方法,可以创建文件,如果文件存在,直接覆盖
			
	* e: 案例代码
        ```java
			/*
			 *   FileOutputStream
			 *   写入数据文件,学习父类方法,使用子类对象
			 *   
			 *   子类中的构造方法: 作用:绑定输出的输出目的
			 *     参数:
			 *       File    封装文件
			 *       String  字符串的文件名
			 *   
			 *   流对象使用步骤
			 *     1. 创建流子类的对象,绑定数据目的
			 *     2. 调用流对象的方法write写
			 *     3. close释放资源
			 *     
			 *    流对象的构造方法,可以创建文件,如果文件存在,直接覆盖
			 */
			public class FileOutputStreamDemo {
				public static void main(String[] args)throws IOException {
					FileOutputStream fos = new FileOutputStream("c:\\a.txt");
					//流对象的方法write写数据
					//写1个字节
					fos.write(97);
					//关闭资源
					fos.close();
					
				}
			}
        ```
- - - 	

###  字节输出流FileOutputStream写字节数组
* A: 字节输出流FileOutputStream写字节数组
	* a: 方法介绍
		*  void write(byte[] b)： 将 b.length 个字节从指定的 byte 数组写入此输出流
		*  void write(byte[] b, int off, int len) ：将指定 byte 数组中从偏移量 off 开始的 len 个字节写入此输出流。
	* b: 案例代码
        ```java
			/*
			 *   FileOutputStream
			 *   写入数据文件,学习父类方法,使用子类对象
			 *   
			 *   子类中的构造方法: 作用:绑定输出的输出目的
			 *     参数:
			 *       File    封装文件
			 *       String  字符串的文件名
			 *   
			 *   流对象使用步骤
			 *     1. 创建流子类的对象,绑定数据目的
			 *     2. 调用流对象的方法write写
			 *     3. close释放资源
			 *     
			 *    流对象的构造方法,可以创建文件,如果文件存在,直接覆盖
			 */
			public class FileOutputStreamDemo {
				public static void main(String[] args)throws IOException {
					FileOutputStream fos = new FileOutputStream("c:\\a.txt");
					//流对象的方法write写数据
					//写字节数组
					byte[] bytes = {65,66,67,68};
					fos.write(bytes);
					
					//写字节数组的一部分,开始索引,写几个
					fos.write(bytes, 1, 2);
					
					//写入字节数组的简便方式
					//写字符串
					fos.write("hello".getBytes());

					//关闭资源
					fos.close();
					
				}
			}
        ```
- - - 

###  文件的续写和换行符号
* A: 文件的续写和换行符号
	* a: 文件的续写
		*  FileOutputStream构造方法, 的第二个参数中,加入true
	* b: 换行符号
		* 在文件中,写入换行,符号换行  \r\n
		* \r\n 可以写在上一行的末尾, 也可以写在下一行的开头
	* c: 案例代码
        ```java
				/*
				 *  FileOutputStream 文件的续写和换行问题
				 *  续写: FileOutputStream构造方法, 的第二个参数中,加入true
				 *  在文件中,写入换行,符号换行  \r\n
				 *  \r\n 可以写在上一行的末尾, 也可以写在下一行的开头
				 */
				public class FileOutputStreamDemo1 {
					public static void main(String[] args)throws IOException {
						File file = new File("c:\\b.txt");
						FileOutputStream fos = new FileOutputStream(file,true);
						fos.write("hello\r\n".getBytes());
						fos.write("world".getBytes());
						fos.close();
					}
				}
        ```
- - - 
			
###  IO中的异常处理
* A: IO中的异常处理
	* a:IO流的异常处理
		* try catch finally
						
	* b: 细节
		* 1. 保证流对象变量,作用域足够
		* 2. catch里面,怎么处理异常
			* 输出异常的信息,目的看到哪里出现了问题
			* 停下程序,从新尝试
		* 3. 如果流对象建立失败了,需要关闭资源吗
			* new 对象的时候,失败了,没有占用系统资源
			* 释放资源的时候,对流对象判断null
			* 变量不是null,对象建立成功,需要关闭资源
		
	* c: 案例代码
        ```java
    		public class FileOutputStreamDemo3 {
				public static void main(String[] args) {
					//try 外面声明变量,try 里面建立对象
					FileOutputStream fos = null;
					try{
						fos = new FileOutputStream("s:\\a.txt");
						fos.write(100);
					}catch(IOException ex){
						System.out.println(ex);
						throw new RuntimeException("文件写入失败,重试");
					}finally{
						try{
							if(fos!=null)
							  fos.close();
						}catch(IOException ex){
							throw new RuntimeException("关闭资源失败");
						}
					}
				}
			}
        ```
- - - 
			
###  字节输入流InputStream
* A: 字节输入流InputStream
	* a: 方法介绍
		* abstract  int read() ：
			* 从输入流中读取数据的下一个字节。
		* int read(byte[] b)  
			* 从输入流中读取一定数量的字节，并将其存储在缓冲区数组 b 中。
		* int read(byte[] b, int off, int len) 
			* 将输入流中最多 len 个数据字节读入 byte 数组。
		* void close() 
			* 关闭此输入流并释放与该流关联的所有系统资源。
				
				
	* b: 案例代码
		```java
        	/*
			 *   字节输入流
			 *     java.io.InputStream 所有字节输入流的超类
			 *   作用: 读取任意文件,每次只读取1个字节
			 *   读取的方法  read
			 *     int  read() 读取1个字节
			 *     int  read(byte[] b) 读取一定量的字节,存储到数组中
			 */
			public class InputStreamDemo {

			}
        ```
- - - 

###  字节输入流FileInputStream读取字节
* A: 字节输入流FileInputStream读取字节
	* a: 方法介绍
		* abstract  int read() ：
			* 从输入流中读取数据的下一个字节，返回-1表示文件结束
		* int read(byte[] b)  
			* 从输入流中读取一定数量的字节，并将其存储在缓冲区数组 b 中。
			* 读入缓冲区的字节总数，如果因为已经到达文件末尾而没有更多的数据，则返回 -1。
		* int read(byte[] b, int off, int len) 
			* 将输入流中最多 len 个数据字节读入 byte 数组。
		* void close() 
			* 关闭此输入流并释放与该流关联的所有系统资源。
	* b: 案例代码
		```java
        	/*
			 *  FileInputStream读取文件
			 *  
			 *  构造方法: 为这个流对象绑定数据源
			 *  
			 *    参数: 
			 *      File 类型对象
			 *      String 对象
			 *   输入流读取文件的步骤
			 *     1. 创建字节输入流的子类对象
			 *     2. 调用读取方法read读取
			 *     3. 关闭资源
			 *     
			 *     read()方法,
			 *       read()执行一次,就会自动读取下一个字节
			 *       返回值,返回的是读取到的字节, 读取到结尾返回-1
			 */
			public class FileInputStreamDemo {
				public static void main(String[] args) throws IOException{
					FileInputStream fis = new FileInputStream("c:\\a.txt");
					//读取一个字节,调用方法read 返回int
					//使用循环方式,读取文件,  循环结束的条件  read()方法返回-1
					int len = 0;//接受read方法的返回值
				
					while( (len = fis.read()) != -1){
						System.out.print((char)len);
					}
					//关闭资源
					fis.close();
				}
			}

			/*
			 * int i = fis.read();
					System.out.println(i);
					
					i = fis.read();
					System.out.println(i);
					
					i = fis.read();
					System.out.println(i);
					
					i = fis.read();
					System.out.println(i);
			 */
        ```
- - - 

###  字节输入流FileInputStream读取字节数组
* A: 字节输入流FileInputStream读取字节数组
	* a: 方法介绍
		* int read(byte[] b)  
			* 从输入流中读取一定数量的字节，并将其存储在缓冲区数组 b 中。
			* 读入缓冲区的字节总数，如果因为已经到达文件末尾而没有更多的数据，则返回 -1。
		* int read(byte[] b, int off, int len) 
			* 将输入流中最多 len 个数据字节读入 byte 数组。
	* b: 案例代码
        ```java
    		/*
			 *  FileInputStream读取文件
			 *   读取方法  int read(byte[] b) 读取字节数组
			 *   数组作用: 缓冲的作用, 提高效率
			 *   read返回的int,表示什么含义 读取到多少个有效的字节数
			 */
			public class FileInputStreamDemo1 {
				public static void main(String[] args) throws IOException {
					FileInputStream fis = new FileInputStream("c:\\a.txt");
					// 创建字节数组
					byte[] b = new byte[2];

					int len = fis.read(b);
					System.out.println(new String(b));// ab
					System.out.println(len);// 2

					len = fis.read(b);
					System.out.println(new String(b));// cd
					System.out.println(len);// 2

					len = fis.read(b);
					System.out.println(new String(b));// ed
					System.out.println(len);// 1

					len = fis.read(b);
					System.out.println(new String(b));// ed
					System.out.println(len);// -1

					fis.close();
				}
			}
		```
- - - 

###  字节输入流FileInputStream读取字节数组的实现原理		
* A：字节输入流FileInputStream读取字节数组的实现原理
	* a: 原理
		* 参见day23_source文件夹中的"读取数组的原理.jpg"
		
					
	* b: 案例代码
		```java
			public class FileInputStreamDemo1 {
				public static void main(String[] args) throws IOException {
					FileInputStream fis = new FileInputStream("c:\\a.txt");
					//创建字节数组
					byte[] b = new byte[1024];
					
					int len = 0 ;
					while( (len = fis.read(b)) !=-1){
						System.out.print(new String(b,0,len));
					}
					fis.close();
				}
			}
        ```
- - - 

###  文件复制原理
* A: 文件复制原理
	* a: 见day23_source/文件复制原理.jpg
- - - 

###  字节流复制文件读取单个字节
* A: 字节流复制文件读取单个字节
	* a: 案例代码
        ```java
			/*
			 *  将数据源 c:\\a.txt
			 *  复制到 d:\\a.txt  数据目的
			 *  字节输入流,绑定数据源
			 *  字节输出流,绑定数据目的
			 *  
			 *  输入,读取1个字节
			 *  输出,写1个字节
			 */
			public class Copy {
				public static void main(String[] args) {
					//定义两个流的对象变量
					FileInputStream fis = null;
					FileOutputStream fos = null;
					try{
						//建立两个流的对象,绑定数据源和数据目的
						fis = new FileInputStream("c:\\t.zip");
						fos = new FileOutputStream("d:\\t.zip");
						//字节输入流,读取1个字节,输出流写1个字节
						int len = 0 ;
						while((len = fis.read())!=-1){
							fos.write(len);
						}
					}catch(IOException ex){
						System.out.println(ex);
						throw new RuntimeException("文件复制失败");
					}finally{
						try{
							if(fos!=null)
								fos.close();
						}catch(IOException ex){
							throw new RuntimeException("释放资源失败");
						}finally{
							try{
								if(fis!=null)
									fis.close();
							}catch(IOException ex){
								throw new RuntimeException("释放资源失败");
							}
						}
					}
				}
			}
        ```
- - - 

###  字节流复制文件读取字节数组
* A: 字节流复制文件读取字节数组
	* a: 案例代码
        ```java
			/*
			 *  字节流复制文件
			 *   采用数组缓冲提高效率
			 *   字节数组
			 *   FileInputStream 读取字节数组
			 *   FileOutputStream 写字节数组
			 */
			public class Copy_1 {
				public static void main(String[] args) {
					long s = System.currentTimeMillis();
					FileInputStream fis = null;
					FileOutputStream fos = null;
					try{
						fis = new FileInputStream("c:\\t.zip");
						fos = new FileOutputStream("d:\\t.zip");
						//定义字节数组,缓冲
						byte[] bytes = new byte[1024*10];
						//读取数组,写入数组
						int len = 0 ; 
						while((len = fis.read(bytes))!=-1){
							fos.write(bytes, 0, len);
						}
					}catch(IOException ex){
						System.out.println(ex);
						throw new RuntimeException("文件复制失败");
					}finally{
						try{
							if(fos!=null)
								fos.close();
						}catch(IOException ex){
							throw new RuntimeException("释放资源失败");
						}finally{
							try{
								if(fis!=null)
									fis.close();
							}catch(IOException ex){
								throw new RuntimeException("释放资源失败");
							}
						}
					}
					long e = System.currentTimeMillis();
					System.out.println(e-s);
				}
			}
		```
- - - 

###  编码表
* A: 编码表
	* a: 定义：
		* 生活中字符和计算机二进制的对应关系表,就是编码表
	* b: 分类

    		* 1、ascii： 一个字节中的7位就可以表示。对应的字节都是正数。0-xxxxxxx
			* 2、iso-8859-1:拉丁码表 latin，用了一个字节用的8位。1-xxxxxxx  负数。
			* 3、GB2312:简体中文码表。包含6000-7000中文和符号。用两个字节表示。两个字节第一个字节是负数,第二个字节可能是正数
				* GBK:目前最常用的中文码表，2万的中文和符号。用两个字节表示，其中的一部分文字，第一个字节开头是1，第二字节开头是0
				* GB18030：最新的中文码表，目前还没有正式使用。
			* 4、unicode：国际标准码表:无论是什么文字，都用两个字节存储。
				* Java中的char类型用的就是这个码表。char c = 'a';占两个字节。
				* Java中的字符串是按照系统默认码表来解析的。简体中文版 字符串默认的码表是GBK。
			* 5、UTF-8:基于unicode，一个字节就可以存储数据，不要用两个字节存储，而且这个码表更加的标准化，在每一个字节头加入了编码信息(后期到api中查找)。
			* 6、能识别中文的码表：GBK、UTF-8；正因为识别中文码表不唯一，涉及到了编码解码问题。
				* 对于我们开发而言；常见的编码 GBK  UTF-8  ISO-8859-1
				* 文字--->(数字) ：编码。 “abc”.getBytes()  byte[]
				* (数字)--->文字  : 解码。 byte[] b={97,98,99}  new String(b) 
- - - 

## 字符流
- - - 

###  字符输出流写文本FileWriter类
* A: 字符输出流写文本FileWriter类
	* a: 方法介绍
		*  void write(int c)
			*  写入单个字符
		* void write(String str)  
			* 写入字符串
		* void write(String str, int off, int len) 
			* 写入字符串的某一部分
		* void write(char[] cbuf)  
			* 写入字符数组
		* abstract  void write(char[] cbuf, int off, int len)  
			*  写入字符数组的某一部分
	* b: 案例代码
		```java
        	/*
			 *   字符输出流
			 *     java.io.Writer 所有字符输出流的超类
			 *   写文件,写文本文件
			 *   
			 *   写的方法 write
			 *     write(int c) 写1个字符
			 *     write(char[] c)写字符数组
			 *     write(char[] c,int,int)字符数组一部分,开始索引,写几个
			 *     write(String s) 写入字符串
			 *     
			 *   Writer类的子类对象 FileWriter
			 *   
			 *   构造方法:  写入的数据目的
			 *     File 类型对象
			 *     String 文件名
			 *     
			 *   字符输出流写数据的时候,必须要运行一个功能,刷新功能
			 *   flush()
			 */
			public class WriterDemo {
				public static void main(String[] args) throws IOException{
					FileWriter fw = new FileWriter("c:\\1.txt");
					
					//写1个字符
					fw.write(100);
					fw.flush();
					
					//写1个字符数组
					char[] c = {'a','b','c','d','e'};
					fw.write(c);
					fw.flush();
					
					//写字符数组一部分
					fw.write(c, 2, 2);
					fw.flush();
					
					//写如字符串
					fw.write("hello");
					fw.flush();
					
					fw.close();
				}
			}
        ```
- - - 
		
###  字符输入流读取文本FileReader类
* A: 字符输入流读取文本FileReader类
	* a: 方法介绍
		*  int read() 
			* 读取单个字符
		* int read(char[] cbuf) 
			* 将字符读入数组
		* abstract  int read(char[] cbuf, int off, int len)  
			* 将字符读入数组的某一部分。
	* b: 案例代码
        ```java
        	/*
			 *  字符输入流读取文本文件,所有字符输入流的超类
			 *    java.io.Reader
			 *  专门读取文本文件
			 *  
			 *  读取的方法 : read()
			 *   int read() 读取1个字符
			 *   int read(char[] c) 读取字符数组
			 *   
			 *   Reader类是抽象类,找到子类对象 FileReader
			 *   
			 *   构造方法: 绑定数据源
			 *     参数:
			 *        File  类型对象
			 *        String文件名
			 */
			public class ReaderDemo {
				public static void main(String[] args) throws IOException{
					FileReader fr = new FileReader("c:\\1.txt");
					/*int len = 0 ;
					while((len = fr.read())!=-1){
						System.out.print((char)len);
					}*/
					char[] ch = new char[1024];
					int len = 0 ;
					while((len = fr.read(ch))!=-1){
						System.out.print(new String(ch,0,len));
					}
					
					fr.close();
				}
			}
        ```
- - - 

###  flush方法和close方法区别
* A: flush方法和close方法区别
	* a: flush()方法
		* 用来刷新缓冲区的,刷新后可以再次写出,只有字符流才需要刷新
	* b: close()方法
		* 用来关闭流释放资源的的,如果是带缓冲区的流对象的close()方法,不但会关闭流,还会再关闭流之前刷新缓冲区,关闭后不能再写出 
- - - 
			
###  字符流复制文本文件
* A: 字符流复制文本文件
	* a: 案例代码
        ```java
			/*
			 *  字符流复制文本文件,必须文本文件
			 *  字符流查询本机默认的编码表,简体中文GBK
			 *  FileReader读取数据源
			 *  FileWriter写入到数据目的
			 */
			public class Copy_2 {
				public static void main(String[] args) {
					FileReader fr = null;
					FileWriter fw = null;
					try{
						fr = new FileReader("c:\\1.txt");
						fw = new FileWriter("d:\\1.txt");
						char[] cbuf = new char[1024];
						int len = 0 ;
						while(( len = fr.read(cbuf))!=-1){
							fw.write(cbuf, 0, len);
							fw.flush();
						}
						
					}catch(IOException ex){
						System.out.println(ex);
						throw new RuntimeException("复制失败");
					}finally{
						try{
							if(fw!=null)
								fw.close();
						}catch(IOException ex){
							throw new RuntimeException("释放资源失败");
						}finally{
							try{
								if(fr!=null)
									fr.close();
							}catch(IOException ex){
								throw new RuntimeException("释放资源失败");
							}
						}
					}
				}
			}
        ```
- - - 

##  转换流
- - - 

###  转换流概述
* A: 转换流概述
	* a: 转换流概述
		* OutputStreamWriter 是字符流通向字节流的桥梁：可使用指定的字符编码表，将要写入流中的字符编码成字节
		* 将字符串按照指定的编码表转成字节，在使用字节流将这些字节写出去
- - - 		
			
### OutputStreamWriter写文本文件
* A: OutputStreamWriter写文本文件
	* a: OutputStreamWriter
		* java.io.OutputStreamWriter 继承Writer类
		* 就是一个字符输出流，写文本文件
		* write()字符，字符数组，字符串    
		* 字符通向字节的桥梁，将字符流转字节流
		* OutputStreamWriter 使用方式
			* 构造方法：
				* OutputStreamWriter(OuputStream out)接收所有的字节输出流
				* 字节输出流：  FileOutputStream       
				* OutputStreamWriter(OutputStream out, String charsetName)
				* String charsetName 传递编码表名字 GBK  UTF-8 
		* OutputStreamWriter 有个子类，  FileWriter
	* b: 案例代码
        ```java
				public class OutputStreamWriterDemo {
					public static void main(String[] args)throws IOException {
				//		writeGBK();
						writeUTF();
					}
					/*
					 * 转换流对象OutputStreamWriter写文本
					 * 采用UTF-8编码表写入
					 */
					public static void writeUTF()throws IOException{
						//创建字节输出流，绑定文件
						FileOutputStream fos = new FileOutputStream("c:\\utf.txt");
						//创建转换流对象，构造方法保证字节输出流，并指定编码表是UTF-8
						OutputStreamWriter osw = new OutputStreamWriter(fos,"UTF-8");
						osw.write("你好");
						osw.close();
					}
					
					/*
					 * 转换流对象 OutputStreamWriter写文本
					 * 文本采用GBK的形式写入
					 */
					public static void writeGBK()throws IOException{
						//创建字节输出流，绑定数据文件
						FileOutputStream fos = new FileOutputStream("c:\\gbk.txt");
						//创建转换流对象，构造方法，绑定字节输出流，使用GBK编码表
						OutputStreamWriter osw = new OutputStreamWriter(fos);
						//转换流写数据
						osw.write("你好");
						
						osw.close();
					}
				}
        ```
- - - 

###  转换流_字节转字符流过程
* A: 转换流_字节转字符流过程
	* a: InputStreamReader			
		* java.io.InputStreamReader 继承 Reader
		* 字符输入流，读取文本文件
		* 字节流向字符的敲了，将字节流转字符流
		* 读取的方法:
			* read() 读取1个字符，读取字符数组
		* 技巧
			* OuputStreamWriter写了文件
			* InputStreamReader读取文件
		* OutputStreamWriter(OutputStream out)所有字节输出流
		* InputStreamReader(InputStream in) 接收所有的字节输入流
		* 可以传递的字节输入流： FileInputStream
		* InputStreamReader(InputStream in,String charsetName) 传递编码表的名字
- - - 

###  InputSteamReader读取文本文件
* A: InputSteamReader读取文本文件
	* a: 案例代码
        ```java
			public class InputStreamReaderDemo {
				public static void main(String[] args) throws IOException {
			//		readGBK();
					readUTF();
				}
				/*
				 *  转换流,InputSteamReader读取文本
				 *  采用UTF-8编码表,读取文件utf
				 */
				public static void readUTF()throws IOException{
					//创建自己输入流,传递文本文件
					FileInputStream fis = new FileInputStream("c:\\utf.txt");
					//创建转换流对象,构造方法中,包装字节输入流,同时写编码表名
					InputStreamReader isr = new InputStreamReader(fis,"UTF-8");
					char[] ch = new char[1024];
					int len = isr.read(ch);
					System.out.println(new String(ch,0,len));
					isr.close();
				}
				/*
				 *  转换流,InputSteamReader读取文本
				 *  采用系统默认编码表,读取GBK文件
				 */
				public static void readGBK()throws IOException{
					//创建自己输入流,传递文本文件
					FileInputStream fis = new FileInputStream("c:\\gbk.txt");
					//创建转换流对象,构造方法,包装字节输入流
					InputStreamReader isr = new InputStreamReader(fis);
					char[] ch = new char[1024];
					int len = isr.read(ch);
					System.out.println(new String(ch,0,len));
					
					isr.close();
				}
			}
        ```
- - - 
			
###  转换流子类父类的区别
* A: 转换流子类父类的区别
	* a: 继承关系

		    OutputStreamWriter:
		    	|--FileWriter:
		    InputStreamReader:
		    	|--FileReader;
	* b: 区别
		* OutputStreamWriter和InputStreamReader是字符和字节的桥梁：也可以称之为字符转换流。字符转换流原理：字节流+编码表。
		* FileWriter和FileReader：作为子类，仅作为操作字符文件的便捷类存在。
			当操作的字符文件，使用的是默认编码表时可以不用父类，而直接用子类就完成操作了，简化了代码。
		* 以下三句话功能相同
			* InputStreamReader isr = new InputStreamReader(new FileInputStream("a.txt"));//默认字符集。
			* InputStreamReader isr = new InputStreamReader(new FileInputStream("a.txt"),"GBK");//指定GBK字符集。
			* FileReader fr = new FileReader("a.txt");
- - - 

##  缓冲流
- - - 

###  缓冲流概述
* A: 缓冲流概述
	* a: 概述
		* 可提高IO流的读写速度
		* 分为字节缓冲流与字符缓冲流 
- - - 				
						
###  字节输出流缓冲流BufferedOutputStream
* A: 字节输出流缓冲流BufferedOutputStream
	* a: BufferedOutputStream
		* 字节输出流的缓冲流
		* java.io.BufferedOuputStream 作用: 提高原有输出流的写入效率
		* BufferedOuputStream 继承 OutputStream
		* 方法,写入 write 字节,字节数组			 
		* 构造方法:
			* BufferedOuputStream(OuputStream out)
			* 可以传递任意的字节输出流, 传递的是哪个字节流,就对哪个字节流提高效率  
 
	* b: 案例代码
        ```java
			public class BufferedOutputStreamDemo {
				public static void main(String[] args)throws IOException {
					//创建字节输出流,绑定文件
					//FileOutputStream fos = new FileOutputStream("c:\\buffer.txt");
					//创建字节输出流缓冲流的对象,构造方法中,传递字节输出流
					BufferedOutputStream bos = new
							BufferedOutputStream(new FileOutputStream("c:\\buffer.txt"));
					
					bos.write(55);
					
					byte[] bytes = "HelloWorld".getBytes();
					
					bos.write(bytes);
					
					bos.write(bytes, 3, 2);
					
					bos.close();
				}
			}
        ````
- - - 

###  字节输入流缓冲流BufferedInputStream
* A: 字节输入流缓冲流BufferedInputStream
	* a: BufferedInputStream
		* 字节输入流的缓冲流
		* 继承InputStream,标准的字节输入流
		* 读取方法  read() 单个字节,字节数组			  
		* 构造方法:
			* BufferedInputStream(InputStream in)
			* 可以传递任意的字节输入流,传递是谁,就提高谁的效率
			* 可以传递的字节输入流 FileInputStream
	* b: 案例代码
		```java
        	public class BufferedInputStreamDemo {
				public static void main(String[] args) throws IOException{
					//创建字节输入流的缓冲流对象,构造方法中包装字节输入流,包装文件
					BufferedInputStream bis = new 
							BufferedInputStream(new FileInputStream("c:\\buffer.txt"));
					byte[] bytes = new byte[10];
					int len = 0 ;
					while((len = bis.read(bytes))!=-1){
						System.out.print(new String(bytes,0,len));
					}
					bis.close();
				}
			}
        ```
- - - 
		
###  四种文件复制方式的效率比较		
* A：四种文件复制方式的效率比较
	* a: 四中复制方式
		* 字节流读写单个字节                    125250 毫秒
		* 字节流读写字节数组                    193    毫秒  OK
		* 字节流缓冲区流读写单个字节    		1210   毫秒
		* 字节流缓冲区流读写字节数组            73     毫秒  OK		
					
	* b: 案例代码
		```java
			public class Copy {
				public static void main(String[] args)throws IOException {
					long s = System.currentTimeMillis();
					copy_4(new File("c:\\q.exe"), new File("d:\\q.exe"));
					long e = System.currentTimeMillis();
					System.out.println(e-s);
				}
				/*
				 * 方法,实现文件复制
				 *  4. 字节流缓冲区流读写字节数组
				 */
				public static void copy_4(File src,File desc)throws IOException{
					BufferedInputStream bis = new BufferedInputStream(new FileInputStream(src));
					BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(desc));
					int len = 0 ;
					byte[] bytes = new byte[1024];
					while((len = bis.read(bytes))!=-1){
						bos.write(bytes,0,len);
					}
					bos.close();
					bis.close();
				}
				/*
				 * 方法,实现文件复制
				 *  3. 字节流缓冲区流读写单个字节
				 */
				public static void copy_3(File src,File desc)throws IOException{
					BufferedInputStream bis = new BufferedInputStream(new FileInputStream(src));
					BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(desc));
					int len = 0 ;
					while((len = bis.read())!=-1){
						bos.write(len);
					}
					bos.close();
					bis.close();
				}
				
				/*
				 * 方法,实现文件复制
				 *  2. 字节流读写字节数组
				 */
				public static void copy_2(File src,File desc)throws IOException{
					FileInputStream fis = new FileInputStream(src);
					FileOutputStream fos = new FileOutputStream(desc);
					int len = 0 ;
					byte[] bytes = new byte[1024];
					while((len = fis.read(bytes))!=-1){
						fos.write(bytes,0,len);
					}
					fos.close();
					fis.close();
				}
				
				/*
				 * 方法,实现文件复制
				 *  1. 字节流读写单个字节
				 */
				public static void copy_1(File src,File desc)throws IOException{
					FileInputStream fis = new FileInputStream(src);
					FileOutputStream fos = new FileOutputStream(desc);
					int len = 0 ;
					while((len = fis.read())!=-1){
						fos.write(len);
					}
					fos.close();
					fis.close();
				}
			}
        ```
- - - 

###  字符输出流缓冲流BufferedWriter
* A: 字符输出流缓冲流BufferedWriter
	* a: BufferedWriter
		* 字符输出流缓冲区流
		* java.io.BufferedWriter 继承 Writer
		* 写入方法 write () 单个字符,字符数组,字符串
	    * 构造方法:
	    	* BufferedWriter(Writer w)传递任意字符输出流
	    	* 传递谁,就高效谁
	    	* 能传递的字符输出流 FileWriter, OutputStreamWriter
	* b: 案例代码
		```java
        	public class BufferedWrierDemo {
				public static void main(String[] args) throws IOException{
					//创建字符输出流,封装文件
					FileWriter fw = new FileWriter("c:\\buffer.txt");
					BufferedWriter bfw = new BufferedWriter(fw);
					
					bfw.write(100);
					bfw.flush();
					bfw.write("你好".toCharArray());
					bfw.flush();
					
					
					bfw.write("你好");
					
					bfw.flush();
					
					
					bfw.write("我好好");
					
					bfw.flush();

					bfw.write("大家都好");
					bfw.flush();
					
					bfw.close();
					
				}
			}
        ```
- - - 

###  字符输出流缓冲流BufferedWriter特有方法newLine
* A: 字符输出流缓冲流BufferedWriter特有方法newLine
	* a: 方法介绍
		* void  newLine() 写换行
				
		* newLine()文本中换行, \r\n也是文本换行
		* 方法具有平台无关性
		* Windows  \r\n
		* Linux    \n
				 
		* newLine()运行结果,和操作系统是相互关系
		* JVM: 安装的是Windows版本,newLine()写的就是\r\n
		* 安装的是Linux版本,newLine()写的就是\n
        ```
			/*
			 *  将数据源 c:\\a.txt
			 *  复制到 d:\\a.txt  数据目的
			 *  字节输入流,绑定数据源
			 *  字节输出流,绑定数据目的
			 *  
			 *  输入,读取1个字节
			 *  输出,写1个字节
			 */
        ```  
   
	* b: 案例代码
        ```java    
			public class BufferedWrierDemo {
				public static void main(String[] args) throws IOException{
					//创建字符输出流,封装文件
					FileWriter fw = new FileWriter("c:\\buffer.txt");
					BufferedWriter bfw = new BufferedWriter(fw);
					
					bfw.write(100);
					bfw.flush();
					bfw.write("你好".toCharArray());
					bfw.flush();
					
					bfw.write("你好");
					bfw.newLine();
					bfw.flush();
					
					
					bfw.write("我好好");
					bfw.newLine();
					bfw.flush();

					bfw.write("大家都好");
					bfw.flush();
					
					bfw.close();
					
				}
			}
        ```
- - - 

###  字符输入流缓冲流BufferedReader
* A: 字符输入流缓冲流BufferedReader
	* a: 概述
		* 从字符输入流中读取文本，缓冲各个字符，从而实现字符、数组和行的高效读取
		* public String readLine() 读取一个文本行，包含该行内容的字符串，不包含任何行终止符，如果已到达流末尾，则返回 null
- - - 

###  字符输入流缓冲流BufferedReader读取文本行
* A: 字符输入流缓冲流BufferedReader读取文本行
	* a: BufferedReader
		* 字符输入流缓冲流
		* java.io.BufferedReader 继承 Reader
		* 读取功能 read() 单个字符,字符数组
		* 构造方法:
			* BufferedReader(Reader r)
			* 可以任意的字符输入流
			   FileReader  InputStreamReader       
		* BufferedReader自己的功能
			* String readLine() 读取文本行 \r\n   
				* 方法读取到流末尾,返回null
	* b: 小特点
		 * 获取内容的方法一般都有返回值
		 * int 没有返回的都是负数
		 * 引用类型 找不到返回null
		 * boolean 找不到返回false
			
	* c: 案例代码
        ```java
			public class BufferedReaderDemo {
				public static void main(String[] args) throws IOException {
					int lineNumber = 0;
					//创建字符输入流缓冲流对象,构造方法传递字符输入流,包装数据源文件
					BufferedReader bfr = new BufferedReader(new FileReader("c:\\a.txt"));
					//调用缓冲流的方法 readLine()读取文本行
					//循环读取文本行, 结束条件 readLine()返回null
					String line = null;
					while((line = bfr.readLine())!=null){
						lineNumber++;
						System.out.println(lineNumber+"  "+line);
					}
					bfr.close();
				}
			}

			/*
			 * String line = bfr.readLine();
					System.out.println(line);
					
					line = bfr.readLine();
					System.out.println(line);
					
					line = bfr.readLine();
					System.out.println(line);
					
					line = bfr.readLine();
					System.out.println(line);
					
					line = bfr.readLine();
					System.out.println(line);
			 */
        ```
- - - 

###  字符流缓冲区流复制文本文件
* A: 字符流缓冲区流复制文本文件
	* a: 案例代码
        ```java
			/*
			 *  使用缓冲区流对象,复制文本文件
			 *  数据源  BufferedReader+FileReader 读取
			 *  数据目的 BufferedWriter+FileWriter 写入
			 *  读取文本行, 读一行,写一行,写换行
			 */
			public class Copy_1 {
				public static void main(String[] args) throws IOException{
					BufferedReader bfr = new BufferedReader(new FileReader("c:\\w.log"));	
					BufferedWriter bfw = new BufferedWriter(new FileWriter("d:\\w.log"));
					//读取文本行, 读一行,写一行,写换行
					String line = null;
					while((line = bfr.readLine())!=null){
						bfw.write(line);
						bfw.newLine();
						bfw.flush();
					}
					bfw.close();
					bfr.close();
				}
			}
        ```
- - - 
			
###  IO流对象的操作规律
* A: IO流对象的操作规律
	* a: 明确一：要操作的数据是数据源还是数据目的。
		* 源：InputStream    Reader
		* 目的：OutputStream Writer
		* 先根据需求明确要读，还是要写。

	* b: 明确二：要操作的数据是字节还是文本呢？
		* 源：
			* 字节：InputStream
			* 文本：Reader
		* 目的：
			* 字节：OutputStream
			* 文本：Writer
	* c: 明确三：明确数据所在的具体设备。
		* 源设备：
			* 硬盘：文件  File开头。
			* 内存：数组，字符串。
			* 键盘：System.in;
			* 网络：Socket
		* 目的设备：
			* 硬盘：文件  File开头。
			* 内存：数组，字符串。
			* 屏幕：System.out
			* 网络：Socket
			* 完全可以明确具体要使用哪个流对象。
	* d: 明确四：是否需要额外功能呢？
		* 额外功能：
			* 转换吗？转换流。InputStreamReader OutputStreamWriter
			* 高效吗？缓冲区对象。BufferedXXX
			* 已经明确到了具体的体系上。
- - - 

##  Properties集合
- - - 

###  Properties集合的特点
* A: Properties集合的特点
	* a: Properties类介绍
		* Properties 类表示了一个持久的属性集。Properties 可保存在流中或从流中加载。属性列表中每个键及其对应值都是一个字符串
	* b: 特点
		* Hashtable的子类，map集合中的方法都可以用。
		* 该集合没有泛型。键值都是字符串。
		* 它是一个可以持久化的属性集。键值可以存储到集合中，也可以存储到持久化的设备(硬盘、U盘、光盘)上。键值的来源也可以是持久化的设备。
		* 有和流技术相结合的方法。
	* c: 方法介绍
		* load(InputStream inputStream)  把指定流所对应的文件中的数据，读取出来，保存到Propertie集合中
		* load(Reader reader) 按简单的面向行的格式从输入字符流中读取属性列表（键和元素对）
		* store(OutputStream outputStream,String commonts) 把集合中的数据，保存到指定的流所对应的文件中，参数commonts代表对描述信息
		* stroe(Writer writer,String comments) 以适合使用 load(Reader) 方法的格式，将此 Properties 表中的属性列表（键和元素对）写入输出字符
- - - 
	
###  Properties集合存储键值对
* A: Properties集合存储键值对		
	* a: 方法介绍
		*  集合对象Properties类,继承Hashtable,实现Map接口
		*  可以和IO对象结合使用,实现数据的持久存储
		* 使用Properties集合,存储键值对
		* setProperty等同与Map接口中的put
		* setProperty(String key, String value)
		* 通过键获取值, getProperty(String key)
	* b: 案例代码
        ```java
			public class PropertiesDemo {
				public static void main(String[] args)throws IOException {
					function_2();
				}
				/*
				 * 使用Properties集合,存储键值对
				 * setProperty等同与Map接口中的put
				 * setProperty(String key, String value)
				 * 通过键获取值, getProperty(String key)
				 */
				public static void function(){
					Properties pro = new Properties();
					pro.setProperty("a", "1");
					pro.setProperty("b", "2");
					pro.setProperty("c", "3");
					System.out.println(pro);
					
					String value = pro.getProperty("c");
					System.out.println(value);
					
					//方法stringPropertyNames,将集合中的键存储到Set集合,类似于Map接口的方法keySet
					Set<String> set = pro.stringPropertyNames();
					for(String key : set){
						System.out.println(key+"..."+pro.getProperty(key));
					}
				}
			}
        ```
- - - 			

###  Properties集合的方法load
* A: Properties集合的方法load
	* a: 方法介绍
		* Properties集合特有方法 load
		* load(InputStream in)
		* load(Reader r)
		* 传递任意的字节或者字符输入流
		* 流对象读取文件中的键值对,保存到集合
			
	* b: 案例代码		
        ```java
				public class PropertiesDemo {
					public static void main(String[] args)throws IOException {
						function_1();
					}									
					/*
					 * Properties集合特有方法 load
					 * load(InputStream in)
					 * load(Reader r)
					 * 传递任意的字节或者字符输入流
					 * 流对象读取文件中的键值对,保存到集合
					 */
					public static void function_1()throws IOException{
						Properties pro = new Properties();
						FileReader fr = new FileReader("c:\\pro.properties");
						//调用集合的方法load,传递字符输入流
						pro.load(fr);
						fr.close();
						System.out.println(pro);
					}					
				}
        ```
- - - 

###  Properties集合的方法store
* A: Properties集合的方法store
	* a: 方法介绍			
		* Properties集合的特有方法store
		* store(OutputStream out)
		* store(Writer w)
		* 接收所有的字节或者字符的输出流,将集合中的键值对,写回文件中保存
	* b: 案例代码
        ```java
			public class PropertiesDemo {
				public static void main(String[] args)throws IOException {
					function_2();
				}
				/*
				 * Properties集合的特有方法store
				 * store(OutputStream out)
				 * store(Writer w)
				 * 接收所有的字节或者字符的输出流,将集合中的键值对,写回文件中保存
				 */
				public static void function_2()throws IOException{
					Properties pro = new Properties();
					pro.setProperty("name", "zhangsan");
					pro.setProperty("age", "31");
					pro.setProperty("email", "123456789@163.com");
					FileWriter fw = new FileWriter("c:\\pro.properties");
					//键值对,存回文件,使用集合的方法store传递字符输出流
					pro.store(fw, "");
					fw.close();
				}				
			}
        ```
- - - 

##  序列化流与反序列化流
- - - 

###  对象的序列化与反序列化
* A: 对象的序列化与反序列化
	* a: 基本概念
		* 对象的序列化
			* 对象中的数据，以流的形式，写入到文件中保存过程称为写出对象，对象的序列化
			* ObjectOutputStream将对象写道文件中，实现序列化
		* 对象的反序列化
			* 在文件中，以流的形式，将对象读出来，读取对象，对象的反序列化
			* ObjectInputStream 将文件对象读取出来
- - - 

###  ObjectOutputStream流写对象
* A: ObjectOutputStream流写对象
	* a: 简单介绍
		 *  IO流对象,实现对象Person序列化,和反序列化
		 *  ObjectOutputStream 写对象,实现序列化
		 *  ObjectInputStream 读取对象,实现反序列化

	* b: 案例代码
        ```java
    		public class Person implements Serializable{
				public String name;
				public int age;
				public Person(String name, int age) {
					super();
					this.name = name;
					this.age = age;
				}
				public Person(){}
				
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
				@Override
				public String toString() {
					return "Person [name=" + name + ", age=" + age + "]";
				}				
			}
			
			public class ObjectStreamDemo {
				public static void main(String[] args)throws IOException, ClassNotFoundException {
			//		writeObject();
					readObject();
				}
				/*
				 * ObjectOutputStream
				 * 构造方法: ObjectOutputStream(OutputSteam out)
				 * 传递任意的字节输出流
				 * void writeObject(Object obj)写出对象的方法
				 */
				public static void writeObject() throws IOException{
					//创建字节输出流,封装文件
					FileOutputStream fos = new FileOutputStream("c:\\person.txt");
					//创建写出对象的序列化流的对象,构造方法传递字节输出流
					ObjectOutputStream oos = new ObjectOutputStream(fos);
					Person p = new Person("lisi",25);
					//调用序列化流的方法writeObject,写出对象
					oos.writeObject(p);
					oos.close();
				}
			}
		```
- - - 

###  ObjectInputStream流读取对象
* A: ObjectInputStream流读取对象
	* a: 简单介绍
		* ObjectInputStream
		* 构造方法:ObjectInputStream(InputStream in)
		* 传递任意的字节输入流,输入流封装文件,必须是序列化的文件
		* Object readObject()  读取对象
	* b: 案例代码
		```java
        	/*
			 *  IO流对象,实现对象Person序列化,和反序列化
			 *  ObjectOutputStream 写对象,实现序列化
			 *  ObjectInputStream 读取对象,实现反序列化
			 */
			public class ObjectStreamDemo {
				public static void main(String[] args)throws IOException, ClassNotFoundException {
					readObject();
				}
				/*
				 * ObjectInputStream
				 * 构造方法:ObjectInputStream(InputStream in)
				 * 传递任意的字节输入流,输入流封装文件,必须是序列化的文件
				 * Object readObject()  读取对象
				 */
				public static void readObject() throws IOException, ClassNotFoundException{
					FileInputStream fis = new FileInputStream("c:\\person.txt");
					//创建反序列化流,构造方法中,传递字节输入流
					ObjectInputStream ois = new ObjectInputStream(fis);
					//调用反序列化流的方法 readObject()读取对象
					Object obj =ois.readObject();
					System.out.println(obj);
					ois.close();
				}				
			}
		```
- - - 

###  静态不能序列化
* A: 静态不能序列化
	* a: 原因
		* 序列化是把对象数据进行持久化存储
		* 静态的东西不属于对象，而属于类
- - - 

###  transient关键字
* A: transient关键字
	* a: 作用
		* 被transient修饰的属性不会被序列化
		* transient关键字只能修饰成员变量
- - - 			
		
###  Serializable接口的含义
* A：Serializable接口的含义
	* a: 作用
		* 给需要序列化的类上加标记。该标记中没有任何抽象方法
		* 只有实现了 Serializable接口的类的对象才能被序列化
- - - 

###  序列化中的序列号冲突问题
* A: 序列化中的序列号冲突问题
	* a: 问题产生原因
		* 当一个类实现Serializable接口后，创建对象并将对象写入文件，之后更改了源代码(比如：将成员变量的修饰符有private改成public)，
			再次从文件中读取对象时会报异常
		* 见day25_source文件夹下的"序列号的冲突.JPG"文件
- - - 

###  序列化中自定义的序列号
* A: 序列化中自定义的序列号
	* a: 定义方式
		* private static final long serialVersionUID = 1478652478456L;
			* 这样每次编译类时生成的serialVersionUID值都是固定的 	
		
	* b: 案例代码
		```java
        	public class Person implements Serializable{
				public String name;
				public /*transient阻止成员变量序列化*/ int age;
				//类,自定义了序列号,编译器不会计算序列号
				private static final long serialVersionUID = 1478652478456L;

				public Person(String name, int age) {
					super();
					this.name = name;
					this.age = age;
				}
				public Person(){}
				
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
				@Override
				public String toString() {
					return "Person [name=" + name + ", age=" + age + "]";
				}				
			}
        ```
- - - 

##  打印流
- - - 

###  打印流和特性
* A: 打印流和特性
	* a: 概述
		* 打印流添加输出数据的功能，使它们能够方便地打印各种数据值表示形式.
		* 打印流根据流的分类：
			* 字节打印流	PrintStream
			* 字符打印流	PrintWriter
		* 方法：
			* void print(String str): 输出任意类型的数据，
			* void println(String str): 输出任意类型的数据，自动写入换行操作
	* b: 特点			
		* 此流不负责数据源,只负责数据目的
		* 为其他输出流,添加功能
		* 永远不会抛出IOException，但是可能抛出别的异常  
		* 两个打印流的方法,完全一致
		* 构造方法,就是打印流的输出目的端
		* PrintStream构造方法
			* 接收File类型,接收字符串文件名,接收字节输出流OutputStream
		* PrintWriter构造方法
			* 接收File类型,接收字符串文件名,接收字节输出流OutputStream, 接收字符输出流Writer
- - - 
    
###  打印流输出目的是File对象
* A: 打印流输出目的是File对象
	* a: 案例代码
        ```java
    		public class PrintWriterDemo {
				public static void main(String[] args) throws  IOException {
					function_3();

				}
				
				/*
				 * 打印流,向File对象的数据目的写入数据
				 * 方法print println  原样输出
				 * write方法走码表
				 */
				public static void function() throws FileNotFoundException{
					File file = new File("c:\\1.txt");
					PrintWriter pw = new PrintWriter(file);
					pw.println(true);
					pw.write(100);
					pw.close();
				}
			}
		```
- - - 

###  输出语句是char数组
* A: 输出语句是char数组
	* a: 案例代码
        ```java
    		public class Demo {
				public static void main(String[] args) {
					int[] arr = {1};
					System.out.println(arr);
					
					char[] ch = {'a','b'};
					System.out.println(ch);
					
					byte[] b = {};
					System.out.println(b);
				}
			}
        ```    
	* b: 结果分析
		* println数组，只有打印字符数组时只有容，其余均打印数组的地址
			* 因为api中定义了打印字符数组的方法，其底层是在遍历数组中的元素
			* 而其他打印数组的方法，都是将数组对象编程Object，其底层再将对象编程String，调用了String s = String.valueOf(x);方法
- - - 

###  打印流输出目的是String和流对象
* A: 打印流输出目的是String和流对象
	* a: 案例代码
        ```java
    		public class PrintWriterDemo {
				public static void main(String[] args) throws  IOException {
					function_2();

				}
					
				/*
				 * 打印流,输出目的,是流对象
				 * 可以是字节输出流,可以是字符的输出流
				 * OutputStream  Writer
				 */
				public static void function_2() throws IOException{
				//	FileOutputStream fos = new FileOutputStream("c:\\3.txt");
					FileWriter fw = new FileWriter("c:\\4.txt");
					PrintWriter pw = new PrintWriter(fw);
					pw.println("打印流");
					pw.close();
				}
				/*
				 * 打印流,输出目的,String文件名
				 */
				public static void function_1() throws FileNotFoundException{
					PrintWriter pw = new PrintWriter("c:\\2.txt");
					pw.println(3.5);
					pw.close();
				}	
				
			}
		```
- - - 

###  打印流开启自动刷新
* A: 打印流开启自动刷新
	* 案例代码
        ```java
        	public class PrintWriterDemo {
				public static void main(String[] args) throws  IOException {
					function_3();

				}
				/* 
				 * 打印流,可以开启自动刷新功能
				 * 满足2个条件:
				 *   1. 输出的数据目的必须是流对象
				 *       OutputStream  Writer
				 *   2. 必须调用println,printf,format三个方法中的一个,启用自动刷新
				 */
				public static void function_3()throws  IOException{
					//File f = new File("XXX.txt");
					FileOutputStream fos = new FileOutputStream("c:\\5.txt");
					PrintWriter pw = new PrintWriter(fos,true);
					pw.println("i");
					pw.println("love");
					pw.println("java");
					pw.close();
				}
			}
		```
- - - 

###  打印流复制文本文件
* A: 打印流复制文本文件
	* a: 案例代码
		```java
        	/*
			 * 打印流实现文本复制
			 *   读取数据源  BufferedReader+File 读取文本行
			 *   写入数据目的 PrintWriter+println 自动刷新
			 */
			public class PrintWriterDemo1 {
				public static void main(String[] args) throws IOException{
					BufferedReader bfr = new BufferedReader(new FileReader("c:\\a.txt"));
					PrintWriter pw = new PrintWriter(new FileWriter("d:\\a.txt"),true);
					String line = null;
					while((line = bfr.readLine())!=null){
						pw.println(line);
					}
					pw.close();
					bfr.close();
				}
			}
        ```
- - - 

##  commons-IO
- - - 

###  commons-io工具类介绍
* A: commons-io工具类介绍
	* a: 工具类介绍
		* 解压缩commons-io-2.4.zip文件
		* commons-io-2.4.jar需要导入到项目中的jar包，里面存放的是class文件
		* commons-io-2.4-sources.jar工具类中原代码
		* docs是帮助文档
- - - 

###  使用工具类commons_io
* A: 使用工具类commons_io
	* a: 导入jar包
		* 加入classpath的第三方jar包内的class文件才能在项目中使用
		* 创建lib文件夹
		* 将commons-io.jar拷贝到lib文件夹
		* 右键点击commons-io.jar，Build Path→Add to Build Path
	* b: 学会如何看源代码
- - - 

###  IO工具类FilenameUtils
* A: IO工具类FilenameUtils
	* a: 方法介绍
		* getExtension(String path)：获取文件的扩展名；
		* getName()：获取文件名；
		* isExtension(String fileName,String ext)：判断fileName是否是ext后缀名；
	* b: 案例代码
        ```java
			public class Commons_IODemo {
				public static void main(String[] args) {
					function_2();
				}
				/*
				 * FilenameUtils类的方法
				 * static boolean isExtension(String filename,String extension)
				 * 判断文件名的后缀是不是extension
				 */
				public static void function_2(){
					boolean b = FilenameUtils.isExtension("Demo.java", "java");
					System.out.println(b);
				}
				
				/*
				 * FilenameUtils类的方法
				 * static String getName(String filename)
				 * 获取文件名
				 */
				public static void function_1(){
					String name = FilenameUtils.getName("c:\\windows\\");
					System.out.println(name);
				}
				
				/*
				 * FilenameUtils类的方法
				 * static String getExtension(String filename)
				 * 获取文件名的扩展名
				 */
				 public static void function(){
					 String name = FilenameUtils.getExtension("c:\\windows");
					 System.out.println(name);
				 }
			}
        ```
- - - 

###  IO工具类FileUtils
* A: IO工具类FileUtils
	* a: 方法介绍
		* readFileToString(File file)：读取文件内容，并返回一个String；
		* writeStringToFile(File file，String content)：将内容content写入到file中；
		* copyDirectoryToDirectory(File srcDir,File destDir);文件夹复制
		* copyFile(File srcFile,File destFile);文件复制
			
	* b: 案例代码
        ```java
        	public class Commons_IODemo1 {
				public static void main(String[] args)throws IOException {
					function_3();
				}
				/*
				 * FileUtils工具类方法
				 * static void copyDirectoryToDirectory(File src,File desc)
				 * 复制文件夹
				 */
				public static void function_3() throws IOException{
					FileUtils.copyDirectoryToDirectory(new File("d:\\demo"), new File("c:\\"));
				}
				
				/*
				 * FileUtils工具类的方法
				 * static void copyFile(File src,File desc)
				 * 复制文件
				 */
				public static void function_2() throws IOException{
					FileUtils.copyFile(new File("c:\\k.jpg"),new File("d:\\k.jpg"));
				}
				
				/*
				 * FileUtils工具类的方法
				 * static void writeStringToFile(File src,String date)
				 * 将字符串直接写到文件中
				 */
				public static void function_1() throws IOException{
					FileUtils.writeStringToFile(new File("c:\\b.txt"),"我爱Java编程");
				}
				
				/*
				 * FileUtils工具类的方法
				 * static String readFileToString(File src)读取文本,返回字符串
				 */
				 public static void function() throws IOException{
					 String s = FileUtils.readFileToString(new File("c:\\a.txt"));
					 System.out.println(s);
				 }
			}
