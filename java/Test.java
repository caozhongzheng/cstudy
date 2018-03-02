class A{
    public void func(){

    }
}
class B extends A{

}
public class Test {

    public static void main(String[] args) {
        A a = new A();
        System.out.println(a.getClass()+" "+A.class);
//输出的结果为：class A class A

/*区别： 
两者最直接的区别就是，getClass（）是一个类的实例所具备的方法，而class（）方法是一个类的方法。 
另外getClass（）是在运行时才确定的，而class（）方法是在编译时就确定了。
*/
	B b = new B();
        A ab = new B();
        System.out.println(b.getClass()+" "+B.class);
        System.out.println(ab.getClass());
        ab = a;
        System.out.println(ab.getClass());
/*结果： 
class A class A 
class B class B 
class B 
class A

从最后的结果为class B来看，当出现继承和多态时，getclass和class方法的确实有所不同，因为是在运行时确定的，所以结果是ab在运行到这一时刻是所属的类型。
*/
    }

}

