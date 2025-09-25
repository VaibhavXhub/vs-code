#include <stdio.h>
int a,b;
int main()
{
    printf("ENter two numbers:");
    scanf("%d%d",&a,&b);
    if(a>b)
    printf("%d is lagest",a);
    else if(b>a)
    printf("%d is lagest",b);
    else
    printf ("both are equal");
    return 0;
}